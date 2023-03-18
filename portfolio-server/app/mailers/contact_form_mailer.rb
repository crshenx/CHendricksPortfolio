class ContactFormMailer < ApplicationMailer
  default from: 'crshenx@gmail.com'
  def contact_email
    @payload = params[:payload]
    mail(to: 'crshenx@gmail.com', subject: 'New message from your portfolio')
  end
end
