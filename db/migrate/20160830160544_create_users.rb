class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :email, null: false
      t.integer :age, null: false
      t.string :gender
      t.string :location

      t.timestamps null: false
    end

    add_index :users, [:username, :email], unique: true
  end
end
