Rails.application.routes.draw do
  namespace :api do
    resources :users, only: [:new, :create], defaults: { format: :json }
  end

  root 'static_pages#root'
end
