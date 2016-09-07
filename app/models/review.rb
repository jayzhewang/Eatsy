class Review < ActiveRecord::Base
  validates :user_id, :restaurant_id, :body, :rating, presence: true

  belongs_to :retaurant,
    class_name: :Restaurant,
    primary_key: :id,
    foreign_key: :restaurant_id

  belongs_to :user,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id
end
