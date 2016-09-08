# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
user_guest = User.create(username: "Guest", password: "guest_password", email: "eatsy@eatsy-guest.com", age: 100, location: "San Francisco", photo: "http://res.cloudinary.com/cloudlicious/image/upload/c_crop,h_250,q_100,r_0,w_250,x_0,y_0/v1473287740/BATMAN_FB_PROFILE_iceocc.jpg")
user_1 = User.create(username: "Jay Wang", password: "jaypassword", email: "jaywang@gmail.com", age: 23, location: "San Francisco", photo: "http://res.cloudinary.com/cloudlicious/image/upload/v1473204255/IMG_1384_szmbnp.jpg")
user_1 = User.create(username: "Mr. Kitty", password: "kittypassword", email: "mr.kitty@gmail.com", age: 6, location: "Los Angeles", photo: "http://res.cloudinary.com/cloudlicious/image/upload/v1473204261/IMG_0841_gnuu25.jpg")

restaurant_1 = Restaurant.create(name: "Thai Time",
                                 description: "Delicious and authentic Thai cuisine in the Inner Richmond",
                                 location: "315 8th Ave, San Francisco, CA 94118",
                                 hours: "Mon	11:30 am - 10:00 pm
                                         Tue	11:30 am - 10:00 pm
                                         Wed	11:30 am - 10:00 pm
                                         Thu	11:30 am - 10:00 pm
                                         Fri	11:30 am - 10:00 pm
                                         Sat	11:30 am - 10:00 pm
                                         Sun	11:30 am - 10:00 pm",
                                 rating: 4,
                                 price_range: "$",
                                 phone_number: "(415) 831-3663",
                                 neighborhood: "Inner Richmond",
                                 photos: "http://res.cloudinary.com/cloudlicious/image/upload/v1473097746/thai_time_front.jpg",
                                 _parking: "Street",
                                 _attire: "Casual",
                                 _ambience: "Casual",
                                 _noise_level: "Average",
                                 _delivery: true,
                                 _take_out: true,
                                 _accepts_credit_card: true,
                                 _accepts_apple_pay: false,
                                 _bike_parking: true,
                                 _wheelchair_accessible: true,
                                 _alcohol: true,
                                 _outdoor_seating: false,
                                 _has_tv: false,
                                 _waiter_service: true,
                                 caters: false
                                 )

restaurant_2 = Restaurant.create(name: "Anchor Oyster Bar",
                                description: "We are a small locally owned seafood restaurant and fish market in the Castro. Owned and operated by the same owner since 1977, San Francisco's one-and-only Anchor Oyster Bar has been serving fresh sustainably caught fish, shellfish, crab, and delicious simply prepared seafood dishes for over 30 years.

Anchor serves the Bay Area's favorite clam chowder (San Francisco Chronicle) and the best oysters on the West coast (Coastal Living Magazine). Check us out on the third season of Check Please Bay Area!",
                                location: "579 Castro St San Francisco, CA 94114",
                                hours: "Mon	11:30 am - 10:00 pm
                                        Tue	11:30 am - 10:00 pm
                                        Wed	11:30 am - 10:00 pm
                                        Thu	11:30 am - 10:00 pm
                                        Fri	11:30 am - 10:00 pm
                                        Sat	11:30 am - 10:00 pm
                                        Sun	4:00 am - 9:00 pm",
                                rating: 4.5,
                                price_range: "$$$",
                                phone_number: "(415) 431-3990",
                                neighborhood: 'Castro',
                                photos: "http://res.cloudinary.com/cloudlicious/image/upload/v1473097693/anchor_oyster_bar_front.jpg",
                                _parking: "Street",
                                _attire: "Casual",
                                _ambience: "Casual",
                                _noise_level: "Average",
                                _delivery: true,
                                _take_out: true,
                                _accepts_credit_card: true,
                                _accepts_apple_pay: false,
                                _bike_parking: true,
                                _wheelchair_accessible: true,
                                _alcohol: true,
                                _outdoor_seating: false,
                                _has_tv: false,
                                _waiter_service: true,
                                caters: false
                                )

restaurant_3 = Restaurant.create(name: "Boudin Bakery & Cafe",
                                 description: "Headquartered in San Francisco, Boudin Bakery is world-famous for The Original San Francisco Sourdough™, which is baked with the same Mother Dough, or sourdough starter, used since 1849. Born in the Gold Rush, Boudin is the oldest continuously operating business in San Francisco. Because each loaf is made from a portion of the original sourdough starter, Boudin Sourdough is one of a kind. With its delicious tangy flavor, golden crunchy crust, and soft chewy center - along with its famous aroma - it has been described as 'a sensory experience in a simple loaf of bread.'' Boudin at the Wharf, located in the heart of San Francisco's renowned waterfront, is Boudin's flagship facility and home to Bistro Boudin, Boudin Museum & Bakery Tour, a demonstration bakery, Bakers Hall Marketplace and a Boudin Café. Boudin bread can be purchased at the Wharf and all Boudin restaurants located throughout California. Boudin also offers catering and operates a gift catalog business, which can be found online.",
                                 location: "619 Market Street San Francisco, CA 94105",
                                 hours: "Mon	7:30 am - 6:30 pm
                                         Tue	7:30 am - 6:30 pm
                                         Wed	7:30 am - 6:30 pm
                                         Thu	7:30 am - 6:30 pm
                                         Fri	7:30 am - 6:30 pm
                                         Sat	Closed
                                         Sun	Closed",
                                 rating: 4.5,
                                 price_range: "$",
                                 phone_number: "(415) 281-8200",
                                 neighborhood: "Financial District, SoMa",
                                 photos: "http://res.cloudinary.com/cloudlicious/image/upload/v1473097739/boudin_front.jpg",
                                 _parking: "Street",
                                 _attire: "Casual",
                                 _ambience: "Casual",
                                 _noise_level: "Average",
                                 _delivery: true,
                                 _take_out: true,
                                 _accepts_credit_card: true,
                                 _accepts_apple_pay: false,
                                 _bike_parking: true,
                                 _wheelchair_accessible: true,
                                 _alcohol: true,
                                 _outdoor_seating: false,
                                 _has_tv: false,
                                 _waiter_service: true,
                                 caters: false
                                 )

review_1 = Review.create(user_id: 2, restaurant_id: 1, rating: 4, body: "We stumbled in here because the place across the street had a wait and we were that hungry. Looks like nothing special from the outside. The waitress that seated us did not raise our expectations as she was not very friendly initially... 5 stars for the food. Quality Ingredients at a steal! Yum red curry and spot on with the Pad Thai. I'll be back again for sure!")
review_1 = Review.create(user_id: 2, restaurant_id: 2, rating: 4, body: "Came back a few times after my review (okay two but that's a few). Each of those times I've decided to go with the cioppino. It's so good. I mean I'm definitely a seafood loving person and with a great garlicky tomato base and the dish brimming with seafood. It's awesome! Get there early to get a spot. Or if yourself it's definitely a lot easier to get a seat. Pro tip: definitely check out a small cioppino if you're here. It's a big fish and definitely enough to share!")
review_1 = Review.create(user_id: 3, restaurant_id: 2, rating: 5, body: "Great place amazing food! When we arrived there the place was packed! We were waiting for about 20min outside, then we ordered clam chowder and one of their specials ! Was delicious! Fresh and rich in flavor! The waitress was super nice and sweet! Not that cheap but can afford once in a while! Def recommend and will come back!!!")
review_1 = Review.create(user_id: 3, restaurant_id: 3, rating: 4, body: "I really like this location as you can order your food, take your order # upstairs and they bring you your food in a nice bright area with a big window overlooking Market Street - very nice ambiance!  I had the lemony couscous salad with chicken added as recommended by my friend, and it was so good and healthy in such a nice, casual, pleasant place.  I will be back, oh, I will be back!  Thank you!")
