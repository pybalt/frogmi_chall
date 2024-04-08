# app/models/earthquake.rb

class Earthquake < ApplicationRecord
  has_many :comments
end
