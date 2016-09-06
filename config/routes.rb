Rails.application.routes.draw do
  namespace :api do
    resources :users, only: [:new, :create], defaults: { format: :json }
    resources :restaurants, only: [:index, :show]
    resource :session, only: [:create, :destroy]
  end

  root 'static_pages#root'
end
