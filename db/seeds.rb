# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
user_1 = User.create(username: "jay", password: "password", email: "email", age: 23, photo: "http://res.cloudinary.com/cloudlicious/image/upload/v1473204255/IMG_1384_szmbnp.jpg")
restaurant_1 = Restaurant.create(name: "Thai Time",
                                 description: "Delicious and authentic Thai cuisine in the Inner Richmond",
                                 location: "315 8th Ave, San Francisco, CA 94118",
                                 hours: "Mon	Closed
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
                                 photos: "http://res.cloudinary.com/cloudlicious/image/upload/v1473097746/thai_time_front.jpg")

restaurant_2 = Restaurant.create(name: "Anchor Oyster Bar",
                                description: "We are a small locally owned seafood restaurant and fish market in the Castro. Owned and operated by the same owner since 1977, San Francisco's one-and-only Anchor Oyster Bar has been serving fresh sustainably caught fish, shellfish, crab, and delicious simply prepared seafood dishes for over 30 years.

Anchor serves the Bay Area's favorite clam chowder (San Francisco Chronicle) and the best oysters on the West coast (Coastal Living Magazine). Check us out on the third season of Check Please Bay Area!",
                                location: "579 Castro St San Francisco, CA 94114",
                                hours: "Mon	Closed
                                        Tue	11:30 am - 10:00 pm
                                        Wed	11:30 am - 10:00 pm
                                        Thu	11:30 am - 10:00 pm
                                        Fri	11:30 am - 10:00 pm
                                        Sat	11:30 am - 10:00 pm
                                        Sun	11:30 am - 10:00 pm",
                                rating: 5,
                                price_range: "$$$",
                                phone_number: "(415) 431-3990",
                                neighborhood: 'Castro',
                                photos: "http://res.cloudinary.com/cloudlicious/image/upload/v1473097693/anchor_oyster_bar_front.jpg")

restaurant_3 = Restaurant.create(name: "Boudin Bakery & Cafe",
                                 description: "Headquartered in San Francisco, Boudin Bakery is world-famous for The Original San Francisco Sourdough™, which is baked with the same Mother Dough, or sourdough starter, used since 1849. Born in the Gold Rush, Boudin is the oldest continuously operating business in San Francisco. Because each loaf is made from a portion of the original sourdough starter, Boudin Sourdough is one of a kind. With its delicious tangy flavor, golden crunchy crust, and soft chewy center - along with its famous aroma - it has been described as 'a sensory experience in a simple loaf of bread.'' Boudin at the Wharf, located in the heart of San Francisco's renowned waterfront, is Boudin's flagship facility and home to Bistro Boudin, Boudin Museum & Bakery Tour, a demonstration bakery, Bakers Hall Marketplace and a Boudin Café. Boudin bread can be purchased at the Wharf and all Boudin restaurants located throughout California. Boudin also offers catering and operates a gift catalog business, which can be found online.",
                                 location: "Pier 39 Ste 5-Q San Francisco, CA 94133",
                                 hours: "Mon	Closed
                                         Tue	11:30 am - 10:00 pm
                                         Wed	11:30 am - 10:00 pm
                                         Thu	11:30 am - 10:00 pm
                                         Fri	11:30 am - 10:00 pm
                                         Sat	11:30 am - 10:00 pm
                                         Sun	11:30 am - 10:00 pm",
                                 rating: 3.5,
                                 price_range: "$",
                                 phone_number: "(415) 421-0185",
                                 neighborhood: "Fisherman's Wharf",
                                 photos: "http://res.cloudinary.com/cloudlicious/image/upload/v1473097739/boudin_front.jpg")
