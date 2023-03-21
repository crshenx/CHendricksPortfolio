FROM ruby:2.7.6

# throw errors if Gemfile has been modified since Gemfile.lock
RUN apt-get update -qq
RUN apt-get install vim
# RUN bundle config --global frozen 1

WORKDIR /usr/src/app
# RUN gem install 
COPY Gemfile  .
# COPY Gemfile.lock .
RUN bundle install

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
COPY . .

ENTRYPOINT ["entrypoint.sh"]
CMD ["rails", "s", "-b", "0.0.0.0"]