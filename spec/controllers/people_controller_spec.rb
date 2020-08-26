require 'rails_helper'

RSpec.describe PeopleController, type: :controller do
  describe "GET people view" do
    it "returns a 200" do 
      get :index
      expect(response).to have_http_status(:ok)
    end
  end
end
