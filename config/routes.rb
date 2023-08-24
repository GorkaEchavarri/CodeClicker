Rails.application.routes.draw do
  root to: 'pages#home'
  devise_for :users, controllers: { registrations: 'registrations' }

  get 'landing_page', to: 'landing#sign_in'

end
