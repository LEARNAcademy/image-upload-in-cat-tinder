class Cat < ApplicationRecord
    validates :name, :age, presence: true
    validates :name, length: {minimum: 2, maximum: 10 }
    validates :enjoys, length: { minimum: 10 }
    validates :age, format: { with: /\A\d+\z/, message: "Please Enter a Number" }

    has_one_attached :avatar
end
