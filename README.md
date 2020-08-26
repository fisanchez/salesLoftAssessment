# README

## Running application
1. `cp .env.sample .env`
2. populate .env file 
3. `bundle install`
4. `yarn install`
5. `rails s -p 3000`

## Pages

There are three main pages 

1. `/` 
  Endpoint calls internal rails application on /api/v1/people to fetch a list of SalesLoft people. I'm only returning 25 at a time for now. Pagination would be required for any more. 
2. `/frequencies`
  Uses the first 25 emails from salesloft people api and shows the frequency that each character is shown.
3. `/duplicates`
  Page is currently just a placeholder. What is expected in this page is to write an endpoint determining the probability of two emails being duplicates. This is going to use an algorithm similar to Levenshtein Distance.


## TODO

1. Write .github/workflow for CI/CD 
2. Change react to use context to render the page instead of using separate pages.
3. Create more use cases, currently only accounted for happy paths.
4. Deploy! Probably using Heroku.
5. Brainstorm on what's a possible efficient solution to check for email duplicates without having to iterator through every email against each other.
6. Change to use foreman instead of default `rails server` to start.
* ...
