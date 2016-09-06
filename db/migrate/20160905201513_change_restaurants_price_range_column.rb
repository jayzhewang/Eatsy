class ChangeRestaurantsPriceRangeColumn < ActiveRecord::Migration
  def change
    change_column :restaurants, :price_range, :string
  end
end
