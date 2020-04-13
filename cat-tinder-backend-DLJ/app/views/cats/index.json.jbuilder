json.array! @cats do |cat|
  json.id cat.id
  json.name cat.name
  json.age cat.age
  json.enjoys cat.enjoys
  json.avatar_url polymorphic_url(cat.avatar) if cat.avatar.attached?
end
