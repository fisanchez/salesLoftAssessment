class ApiWrapper
  @base_url = ENV['BASE_API_URL']
  @frequency_count = {}

  # Wrapper for submitting get requests
  # 
  # @param endpoint String - expecting leading slash /
  # @return Object - the returned query
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

  # Will return the number of every unique character in all the given emails
  # This is assuming characters are case-insensitive
  # 
  # @param emails [String] - Expecting an array of strings
  # @return Hash - Key value pairs of character and total count of all emails
  def self.email_frequency(emails)
    raise StandardError.new "Expecting array, array not found" if emails.class != Array
    characters = ('A'..'Z').to_a + ('0'..'9').to_a + ['_','.']
    characters.each { |char| @frequency_count[char] = 0 }

    # Remove the @email.com, we'll only focus on the email name
    striped_emails = emails.map { |email| email.upcase.split(/@/).first }
    
    striped_emails.each do |email| 
      email.chars.each do |char|
        @frequency_count[char] += 1
      end
    end
    @frequency_count
  end

  # Will accept and compare the edit distance of the two
  # Edit distance is how many steps it will take to transform the first email to another
  # If it's over a certain threshhold - return as a possible duplicate
  # TODO: Think of a way to efficiently do this for the front end - checking every email seems expencive.
  # \ even with pagination
  def self.duplicate_probabiliy; end
end
