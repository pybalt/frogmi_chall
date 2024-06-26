class CreateEarthquakes < ActiveRecord::Migration[7.1]
  def change
    create_table :earthquakes do |t|
      t.string :external_id, null: false
      t.decimal :mag
      t.string :place, null: false
      t.integer :time, limit: 8
      t.string :url, null: false
      t.boolean :tsunami
      t.string :magType, null: false
      t.string :title, null: false
      t.decimal :longitude, null: false
      t.decimal :latitude, null: false

      t.timestamps
    end
  end
end
