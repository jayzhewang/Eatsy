class RemoveReviewsUniquenessContraint1 < ActiveRecord::Migration
  def change
    remove_index :reviews, [:user_id, :restaurant_id]
  end
end
