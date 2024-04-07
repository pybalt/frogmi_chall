# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_04_07_040330) do
  create_table "earthquakes", id: :string, force: :cascade do |t|
    t.decimal "mag"
    t.string "place", null: false
    t.integer "time", limit: 8
    t.string "url", null: false
    t.boolean "tsunami"
    t.string "magType", null: false
    t.string "title", null: false
    t.decimal "longitude", null: false
    t.decimal "latitude", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
