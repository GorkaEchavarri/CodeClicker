Rails.application.routes.draw do
  devise_scope :user do
    authenticated :user do
      root 'pages#home', as: :authenticated_root
    end

    unauthenticated do
      root 'devise/sessions#new', as: :unauthenticated_root
    end
  end

  # root to: 'pages#home'
  devise_for :users, controllers: { registrations: 'registrations' }

  # get 'landing_page', to: 'landing#sign_in'

end
