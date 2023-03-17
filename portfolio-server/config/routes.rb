Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  post '/contact_form/submit', to: 'contact_form#submit'
  # POST "contact_form/submit"
  # Defines the root path route ("/")
  # root "articles#index"
end
