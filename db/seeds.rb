puts "Creating test users"
user1 = User.create!(email: "Test1@test.com", password: "123123", username: "TestUser1")
user1.save!

user2 = User.create!(email: "Test2@test.com", password: "123123", username: "TestUser2")
user2.save!

puts "Test users created"
