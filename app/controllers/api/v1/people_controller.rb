module Api
  module V1
    class PeopleController < ApplicationController
     skip_before_action :verify_authenticity_token

      def index
        render json: ApiWrapper.get('/people', {})
      end
      def frequencies
        return render json: { "error": true, "message": "Emails not found" } if params[:_json].nil?
        return render json: ApiWrapper.email_frequency(params[:_json])
      end
    end
  end
end
