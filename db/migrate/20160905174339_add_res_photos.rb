class AddResPhotos < ActiveRecord::Migration
  def change
    add_column :restaurants, :photos, :string
  end
end
