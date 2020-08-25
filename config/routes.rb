Rails.application.routes.draw do
  root to: 'people#index'
  namespace :api do 
    namespace :v1 do
      get '/people', to: 'people#index'
    end
  end
end
