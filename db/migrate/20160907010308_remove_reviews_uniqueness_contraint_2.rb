class RemoveReviewsUniquenessContraint2 < ActiveRecord::Migration
  def change
    add_index :reviews, [:user_id, :restaurant_id]
  end
end
