require 'rails_helper'

RSpec.describe Api::V1::PeopleController, type: :controller do
  describe "GET people" do
    it "returns a 200" do 
      get :index
      expect(response).to have_http_status(:ok)
    end
  end
end
