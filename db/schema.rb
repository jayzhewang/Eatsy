# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160901232348) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "restaurants", force: :cascade do |t|
    t.string   "name",                   null: false
    t.text     "description",            null: false
    t.string   "location",               null: false
    t.string   "hours",                  null: false
    t.integer  "rating",                 null: false
    t.integer  "price_range",            null: false
    t.string   "phone_number",           null: false
    t.string   "_parking"
    t.string   "_attire"
    t.string   "_ambience"
    t.string   "_noise_level"
    t.boolean  "_delivery"
    t.boolean  "_take_out"
    t.boolean  "_accepts_credit_card"
    t.boolean  "_accepts_apple_pay"
    t.boolean  "_bike_parking"
    t.boolean  "_wheelchair_accessible"
    t.boolean  "_alcohol"
    t.boolean  "_outdoor_seating"
    t.boolean  "_has_tv"
    t.boolean  "_waiter_service"
    t.boolean  "caters"
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  add_index "restaurants", ["name", "phone_number"], name: "index_restaurants_on_name_and_phone_number", unique: true, using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "email",           null: false
    t.integer  "age",             null: false
    t.string   "gender"
    t.string   "location"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "session_token"
  end

  add_index "users", ["username", "email"], name: "index_users_on_username_and_email", unique: true, using: :btree

end
