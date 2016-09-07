Rails.application.routes.draw do
  namespace :api do
    resources :users, only: [:new, :create], defaults: { format: :json }
    resources :restaurants, only: [:index, :show], defaults: { format: :json }
    resources :reviews, only: [:create, :update], defaults: { format: :json }
    resource :session, only: [:create, :destroy], defaults: { format: :json }
  end

  root 'static_pages#root'
end
