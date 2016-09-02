class Restaurant < ActiveRecord::Base
  validates :name, :description, :location, :hours, :rating, :price_range, :phone_number, presence: true

end
