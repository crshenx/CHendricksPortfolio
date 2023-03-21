class ContactFormController < ApplicationController
    before_action :allow_cross_origin_requests

      def submit
        ContactFormMailer.with(payload: payload).contact_email.deliver_now
        render json: { message: "Email sent successfully." }, status: :ok
      rescue => e
        render json: { message: "Email failed to send. #{e.message}" }, status: :internal_server_error
      end
      

      private

      def payload
        {
          name: params[:name],
          email: params[:email],
          subject: params[:subject],
          message: params[:message]
        }
      end

      def allow_cross_origin_requests
        headers['Access-Control-Allow-Methods'] = 'POST'
        headers['Access-Control-Allow-Headers'] = 'Content-Type'
      end
end
