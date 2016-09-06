class AddRestaurantNeighborhoodColumn < ActiveRecord::Migration
  def change
    add_column :restaurants, :neighborhood, :string
  end
end
