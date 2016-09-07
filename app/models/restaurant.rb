# require 'geocoder'

class Restaurant < ActiveRecord::Base
  # include geocoder
  #
  validates :name, :description, :location, :hours, :rating, :price_range, :phone_number, presence: true

  has_many :reviews,
    class_name: :Review,
    primary_key: :id,
    foreign_key: :restaurant_id

  has_many :users,
    through: :reviews,
    source: :user

  # def get_lng_lat
  #   Geocoder.coordinates(self.location)
  # end
end
