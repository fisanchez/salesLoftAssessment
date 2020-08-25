module Api
  module V1
    class PeopleController < ApplicationController
      def index
        render json: ApiWrapper.get('/people', {})
      end
    end
  end
end
