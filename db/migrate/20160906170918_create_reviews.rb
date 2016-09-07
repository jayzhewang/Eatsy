class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :restaurant_id, null: false
      t.text :body, null: false
      t.integer :rating, null: false
      t.integer :useful
      t.integer :funny
      t.integer :cool

      t.timestamps null: false
    end
    add_index :reviews, [:user_id, :restaurant_id], unique: true
  end
end
