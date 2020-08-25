class ApiWrapper
  @base_url = ENV['BASE_API_URL']

  # Wrapper for submitting get requests
  # 
  # @param endpoint [String] expecting leading slash /
  # @return [Object] the returned query
  def self.get(endpoint, queryOptions)
    raise StandardError.new "endpoints require leading slash (/)" if endpoint[0] != '/'
    uri = URI.parse(@base_url + endpoint)
    http = Net::HTTP.new(uri.host, uri.port)
    request = Net::HTTP::Get.new(uri.request_uri)
    request['Authorization'] = "Bearer #{ENV['SALESLOFT_APPLICATION_SECRET']}"
    request['content-type'] = 'application/json'
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE
    
    response = http.request(request)
    response.body

  end
end
