require "twitter"
require "sinatra"
require "sinatra/cross_origin"
require "dotenv"
Dotenv.load

configure do
  enable :cross_origin
end

set :allow_methods, [:get, :post, :options]

client = Twitter::REST::Client.new do |config|
  config.consumer_key    = ENV["TWITTER_CONSUMER_KEY"]
  config.consumer_secret = ENV["TWITTER_CONSUMER_SECRET"]
  config.access_token        = ENV["TWITTER_ACCESS_TOKEN"]
  config.access_token_secret = ENV["TWITTER_ACCESS_TOKEN_SECRET"]
end

get "/search/:term" do |term|
  content_type :json
  client.user_search(term).take(5).collect do |user|
    {
      imageUrl: user.profile_image_url.gsub('_normal', ''),
      name: user.name,
      description: user.description,
      location: user.location
    }
  end.to_json
end

options "*" do
  response.headers["Access-Control-Allow-Headers"] = request.env["HTTP_ACCESS_CONTROL_REQUEST_HEADERS"]
  status 200
  body ''
end
