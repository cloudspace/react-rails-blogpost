class Post < ActiveRecord::Base
  class << self
    def topic_stats
      stats = blank_stats
      Post.all.each do |post|
        stats[post.topic.to_sym] += 1
      end
      stats
    end

    private

    def blank_stats
      {
        ruby: 0,
        go: 0,
        javascript: 0,
        android: 0,
        ios: 0
      }
    end
  end
end
