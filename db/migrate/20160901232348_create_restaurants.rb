class CreateRestaurants < ActiveRecord::Migration
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.string :location, null: false
      t.string :hours, null: false
      t.integer :rating, null: false
      t.integer :price_range, null: false
      t.string :phone_number, null: false
      t.string :_parking
      t.string :_attire
      t.string :_ambience
      t.string :_noise_level
      t.boolean :_delivery
      t.boolean :_take_out
      t.boolean :_accepts_credit_card
      t.boolean :_accepts_apple_pay
      t.boolean :_bike_parking
      t.boolean :_wheelchair_accessible
      t.boolean :_alcohol
      t.boolean :_outdoor_seating
      t.boolean :_has_tv
      t.boolean :_waiter_service
      t.boolean :caters

      t.timestamps null: false
    end
    add_index :restaurants, [:name, :phone_number], unique: true
  end
end
