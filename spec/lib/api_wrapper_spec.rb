require 'rails_helper'

RSpec.describe ApiWrapper do 
  it 'returns a 200'do
    expect(ApiWrapper.get("/people", {}).class).to eq(String)
  end
end
