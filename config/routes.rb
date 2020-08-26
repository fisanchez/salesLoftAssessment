Rails.application.routes.draw do
  root to: 'people#index'
  get '/frequencies', to: 'people#frequencies'
  get '/duplicates', to: 'people#duplicates'
  namespace :api do 
    namespace :v1 do
      get '/people', to: 'people#index'
      post '/frequencies', to: 'people#frequencies'
    end
  end
end
