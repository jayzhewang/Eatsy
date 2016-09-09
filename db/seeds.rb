# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create(username: "Jay W", password: "jaypassword", email: "jaywang@gmail.com", age: 23, location: "San Francisco, CA", photo: "http://res.cloudinary.com/cloudlicious/image/upload/v1473204255/IMG_1384_szmbnp.jpg")
User.create(username: "Kitty", password: "kittypassword", email: "mr.kitty@gmail.com", age: 6, location: "Los Angeles, CA", photo: "http://res.cloudinary.com/cloudlicious/image/upload/v1473204261/IMG_0841_gnuu25.jpg")
User.create(username: "Mary M", password: "marypassword", email: "marym@gmail.com", age: 24, location: "Anaheim, CA", photo: "http://res.cloudinary.com/cloudlicious/image/upload/v1473410931/o_n2la82.jpg")
User.create(username: "Olivia", password: "oliviapassword", email: "olivia47@gmail.com", age: 26, location: "Davis, CA", photo: "http://res.cloudinary.com/cloudlicious/image/upload/v1473411174/o_1_ispt0w.jpg")
User.create(username: "Ruben A", password: "rubenpassword", email: "rubensabel@gmail.com", age: 30, location: "Sacramento, CA", photo: "http://res.cloudinary.com/cloudlicious/image/upload/v1473411270/o_2_myzrym.jpg")
User.create(username: "Tracy B", password: "tracypassword", email: "tracybrunson@gmail.com", age: 35, location: "Roseville, CA", photo: "http://res.cloudinary.com/cloudlicious/image/upload/v1473425413/o_41_kminpa.jpg")
User.create(username: "James T", password: "jamespassword", email: "jamestaylor@gmail.com", age: 37, location: "Stockton, CA", photo: "http://res.cloudinary.com/cloudlicious/image/upload/v1473425412/o_40_s7gu5m.jpg")
User.create(username: "Angela D", password: "angelapassword", email: "angelababy@gmail.com", age: 28, location: "Bakersfield, CA", photo: "http://res.cloudinary.com/cloudlicious/image/upload/v1473411608/o_5_mwr7no.jpg")
User.create(username: "Sherry S", password: "sherrypassword", email: "sherrys12@gmail.com", age: 26, location: "Pasadena, CA", photo: "http://res.cloudinary.com/cloudlicious/image/upload/v1473412308/o_7_zyssqh.jpg")
User.create(username: "Kim E", password: "kimpassword", email: "kim.fabulous@gmail.com", age: 28, location: "Oakland, CA", photo: "http://res.cloudinary.com/cloudlicious/image/upload/v1473412505/o_8_p9eor6.jpg")
User.create(username: "Guest", password: "guest_password", email: "eatsy@eatsy-guest.com", age: 100, location: "San Francisco, CA", photo: "http://res.cloudinary.com/cloudlicious/image/upload/c_crop,h_250,q_100,r_0,w_250,x_0,y_0/v1473287740/BATMAN_FB_PROFILE_iceocc.jpg")


Restaurant.create(name: "Thai Time",
                  description: "Delicious and authentic Thai cuisine in the Inner Richmond",
                  location: "315 8th Ave, San Francisco, CA 94118",
                  hours: "Mon	11:30 am - 10:00 pm--
                          Tue	11:30 am - 10:00 pm--
                          Wed	11:30 am - 10:00 pm--
                          Thu	11:30 am - 10:00 pm--
                          Fri	11:30 am - 10:00 pm--
                          Sat	11:30 am - 10:00 pm--
                          Sun	11:30 am - 10:00 pm",
                  rating: 4,
                  price_range: "$",
                  phone_number: "(415) 831-3663",
                  neighborhood: "Inner Richmond",
                  photos: "http://res.cloudinary.com/cloudlicious/image/upload/v1473097746/thai_time_front.jpg http://res.cloudinary.com/cloudlicious/image/upload/v1473423233/o_33_frgzpr.jpg http://res.cloudinary.com/cloudlicious/image/upload/v1473423233/o_34_tr9qwu.jpg",
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

Restaurant.create(name: "Anchor Oyster Bar",
                  description: "We are a small locally owned seafood restaurant and fish market in the Castro. Owned and operated by the same owner since 1977, San Francisco's one-and-only Anchor Oyster Bar has been serving fresh sustainably caught fish, shellfish, crab, and delicious simply prepared seafood dishes for over 30 years.

Anchor serves the Bay Area's favorite clam chowder (San Francisco Chronicle) and the best oysters on the West coast (Coastal Living Magazine). Check us out on the third season of Check Please Bay Area!",
                  location: "579 Castro St San Francisco, CA 94114",
                  hours: "Mon	11:30 am - 10:00 pm--
                          Tue	11:30 am - 10:00 pm--
                          Wed	11:30 am - 10:00 pm--
                          Thu	11:30 am - 10:00 pm--
                          Fri	11:30 am - 10:00 pm--
                          Sat	11:30 am - 10:00 pm--
                          Sun	4:00 am - 9:00 pm",
                  rating: 4.5,
                  price_range: "$$$",
                  phone_number: "(415) 431-3990",
                  neighborhood: 'Castro',
                  photos: "http://res.cloudinary.com/cloudlicious/image/upload/v1473097693/anchor_oyster_bar_front.jpg http://res.cloudinary.com/cloudlicious/image/upload/v1473423234/o_35_lwcpaj.jpg http://res.cloudinary.com/cloudlicious/image/upload/v1473423234/o_36_cgabxt.jpg",
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

Restaurant.create(name: "Boudin Bakery & Cafe",
                  description: "Headquartered in San Francisco, Boudin Bakery is world-famous for The Original San Francisco Sourdough™, which is baked with the same Mother Dough, or sourdough starter, used since 1849. Born in the Gold Rush, Boudin is the oldest continuously operating business in San Francisco. Because each loaf is made from a portion of the original sourdough starter, Boudin Sourdough is one of a kind. With its delicious tangy flavor, golden crunchy crust, and soft chewy center - along with its famous aroma - it has been described as 'a sensory experience in a simple loaf of bread.'' Boudin at the Wharf, located in the heart of San Francisco's renowned waterfront, is Boudin's flagship facility and home to Bistro Boudin, Boudin Museum & Bakery Tour, a demonstration bakery, Bakers Hall Marketplace and a Boudin Café. Boudin bread can be purchased at the Wharf and all Boudin restaurants located throughout California. Boudin also offers catering and operates a gift catalog business, which can be found online.",
                  location: "619 Market Street San Francisco, CA 94105",
                  hours: "Mon	7:30 am - 6:30 pm--
                          Tue	7:30 am - 6:30 pm--
                          Wed	7:30 am - 6:30 pm--
                          Thu	7:30 am - 6:30 pm--
                          Fri	7:30 am - 6:30 pm--
                          Sat	Closed--
                          Sun	Closed",
                  rating: 4.5,
                  price_range: "$",
                  phone_number: "(415) 281-8200",
                  neighborhood: "Financial District, SoMa",
                  photos: "http://res.cloudinary.com/cloudlicious/image/upload/v1473097739/boudin_front.jpg http://res.cloudinary.com/cloudlicious/image/upload/v1473423234/o_38_ricknc.jpg http://res.cloudinary.com/cloudlicious/image/upload/v1473423234/o_39_oxz6zc.jpg",
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

Restaurant.create(name: "Formoli's Bistro",
                 description: "Formoli’s Bistro is owned and operated by husband and wife team, Chef Aimal Formoli and Suzanne Ricci. Our food is New American and incorporates European influences, drawing mostly from France, Spain, and Italy. Chef Formoli proudly sources our food from local California farmers and strives to create unique menus that include fresh seasonal ingredients. We pride ourselves on preparing excellent food, as well as delivering great service.",
                 location: "3839 J St Sacramento, CA 95816",
                 hours: "Mon	11:30 am - 2:30 pm--
                              5:00 pm - 9:30 pm--
                         Tue	11:30 am - 2:30 pm--
                              5:00 pm - 9:30 pm--
                         Wed	11:30 am - 2:30 pm--
                              5:00 pm - 9:30 pm--
                         Thu	11:30 am - 2:30 pm--
                              5:00 pm - 9:30 pm--
                         Fri	11:30 am - 2:30 pm--
                              5:00 pm - 9:30 pm--
                         Sat	11:30 am - 2:30 pm--
                              5:00 pm - 9:30 pm--
                         Sun	11:30 am - 2:30 pm--
                              5:00 pm - 9:30 pm--",
                 rating: 4,
                 price_range: "$$",
                 phone_number: "(916) 448-5699",
                 neighborhood: "East Sacramento",
                 photos: "http://res.cloudinary.com/cloudlicious/image/upload/v1473412853/o_9_klyux4.jpg http://res.cloudinary.com/cloudlicious/image/upload/v1473412853/o_10_trdfot.jpg http://res.cloudinary.com/cloudlicious/image/upload/v1473412853/o_11_ymqxc5.jpg",
                 _parking: "Street",
                 _attire: "Casual",
                 _ambience: "Trendy",
                 _noise_level: "Average",
                 _delivery: true,
                 _take_out: true,
                 _accepts_credit_card: true,
                 _accepts_apple_pay: false,
                 _bike_parking: true,
                 _wheelchair_accessible: true,
                 _alcohol: true,
                 _outdoor_seating: true,
                 _has_tv: false,
                 _waiter_service: true,
                 caters: false
                )

Restaurant.create(name: "Sam’s Mediterranean Cuisine",
                  description: "Sam's offers arguably the best falafel in Davis, and really friendly employees. It seems to be an authentic family-owned and -run restaurant. On Mondays, if you order the falafel you get a free soft drink! This is an incredible thing and should not be missed. On the walls inside Sam's is a painting of a Mediterranean countryside. They also serve very good cheeseburgers, hummus, dolma, baklava, and shawarma. They play Arabic music as well, which as we all know is the best music in the entire world.",
                  location: "301 B St Davis, CA 95616",
                  hours: "Mon	11:30 am - 7:30 pm--
                          Tue	11:30 am - 7:30 pm--
                          Wed	11:30 am - 7:30 pm--
                          Thu	11:30 am - 7:30 pm--
                          Fri	11:30 am - 7:30 pm--
                          Sat	12:00 am - 7:30 pm--
                          Sun	Closed",
                  rating: 4.5,
                  price_range: "$",
                  phone_number: "(530) 758-2855",
                  neighborhood: "Near Downtown",
                  photos: "http://res.cloudinary.com/cloudlicious/image/upload/v1473413692/o_12_d6af6z.jpg http://res.cloudinary.com/cloudlicious/image/upload/v1473413694/o_13_x5zr9y.png http://res.cloudinary.com/cloudlicious/image/upload/v1473413692/o_14_ftpcjc.jpg",
                  _parking: "Street",
                  _attire: "Casual",
                  _ambience: "Casual",
                  _noise_level: "Average",
                  _delivery: false,
                  _take_out: true,
                  _accepts_credit_card: true,
                  _accepts_apple_pay: false,
                  _bike_parking: true,
                  _wheelchair_accessible: true,
                  _alcohol: true,
                  _outdoor_seating: false,
                  _has_tv: false,
                  _waiter_service: false,
                  caters: false
                 )

Restaurant.create(name: "Imperial Palace",
                 description: "Classic Chinese dim sum, lunch & dinner menus, plus live entertainment some nights.",
                 location: "619 Market Street San Francisco, CA 94105",
                 hours: "Mon	8:30 am - 10:00 pm--
                         Tue	8:30 am - 10:00 pm--
                         Wed	8:30 am - 10:00 pm--
                         Thu	8:30 am - 10:00 pm--
                         Fri	8:30 am - 10:00 pm--
                         Sat	8:30 am - 10:00 pm--
                         Sun	8:30 am - 10:00 pm",
                 rating: 2,
                 price_range: "$$",
                 phone_number: "(415) 956-9888",
                 neighborhood: "Chinatown",
                 photos: "http://res.cloudinary.com/cloudlicious/image/upload/v1473414605/o_15_xm2azr.jpg http://res.cloudinary.com/cloudlicious/image/upload/v1473414605/o_16_npun59.jpg http://res.cloudinary.com/cloudlicious/image/upload/v1473414605/o_17_jyjx1j.jpg",
                 _parking: "Street",
                 _attire: "Casual",
                 _ambience: "Casual",
                 _noise_level: "Average",
                 _delivery: false,
                 _take_out: true,
                 _accepts_credit_card: true,
                 _accepts_apple_pay: false,
                 _bike_parking: true,
                 _wheelchair_accessible: true,
                 _alcohol: true,
                 _outdoor_seating: false,
                 _has_tv: true,
                 _waiter_service: true,
                 caters: false
                )

Restaurant.create(name: "Burger King",
                  description: "Burger King, often abbreviated as BK, is an American global chain of hamburger fast food restaurants headquartered in unincorporated Miami-Dade County, Florida, United States. The company began in 1953 as Insta-Burger King, a Jacksonville, Florida-based restaurant chain.",
                  location: "4780 Mission St San Francisco, CA 94112",
                  hours: "Mon	6:00 am - 10:00 pm--
                          Tue	6:00 am - 10:00 pm--
                          Wed	6:00 am - 10:00 pm--
                          Thu	6:00 am - 10:00 pm--
                          Fri	6:00 am - 10:00 pm--
                          Sat	6:00 am - 10:00 pm--
                          Sun 7:00 am - 10:00 pm",
                  rating: 1,
                  price_range: "$",
                  phone_number: "(415) 775-4211",
                  neighborhood: "Fillmore, Western Addition",
                  photos: "http://res.cloudinary.com/cloudlicious/image/upload/v1473414954/o_18_ilnxf3.jpg http://res.cloudinary.com/cloudlicious/image/upload/v1473414954/o_19_hqgfbx.jpg http://res.cloudinary.com/cloudlicious/image/upload/v1473414954/o_20_wqjg7u.jpg",
                  _parking: "Street",
                  _attire: "Casual",
                  _ambience: "Casual",
                  _noise_level: "Average",
                  _delivery: false,
                  _take_out: true,
                  _accepts_credit_card: true,
                  _accepts_apple_pay: false,
                  _bike_parking: true,
                  _wheelchair_accessible: false,
                  _alcohol: false,
                  _outdoor_seating: false,
                  _has_tv: false,
                  _waiter_service: false,
                  caters: false
                 )

Restaurant.create(name: "Darbar Restaurant",
                 description: "Specialties: Luncheon Buffet: 10-Courses of Authentic Cuisine Including Appetizers, 3 Meat and 3 Vegetarian Entrees, Fresh Baked Naan, Rice, Salad & Tea. All You Can Eat   $9.99! We offer a wide array of cuisine combining the best of Pakistan and India awaits you! Come discover the wonderful and exotically spiced dishes prepared fresh and cooked to perfection. Our extensive menu of exceptional quality, authentic cuisine at low prices is available for dine in, takeout, catering and free delivery to limited areas.",
                 location: "1412 Polk St San Francisco, CA 94109",
                 hours: "Mon	11:30 am - 3:00 pm--
                              5:00 pm - 10:100 pm--
                         Tue	11:30 am - 3:00 pm--
                              5:00 pm - 10:100 pm--
                         Wed	11:30 am - 3:00 pm--
                              5:00 pm - 10:100 pm--
                         Thu	11:30 am - 3:00 pm--
                              5:00 pm - 10:100 pm--
                         Fri	11:30 am - 3:00 pm--
                              5:00 pm - 10:100 pm--
                         Sat	11:30 am - 3:00 pm--
                              5:00 pm - 10:100 pm--
                         Sun	11:30 am - 3:00 pm--
                              5:00 pm - 10:100 pm",
                 rating: 3,
                 price_range: "$",
                 phone_number: "(415) 359-1236",
                 neighborhood: "Nob Hill",
                 photos: "http://res.cloudinary.com/cloudlicious/image/upload/v1473415418/o_21_njuumu.jpg http://res.cloudinary.com/cloudlicious/image/upload/v1473415417/o_22_sslb4e.jpg http://res.cloudinary.com/cloudlicious/image/upload/v1473415418/o_23_zoz10p.jpg",
                 _parking: "Street",
                 _attire: "Casual",
                 _ambience: "Casual",
                 _noise_level: "Average",
                 _delivery: true,
                 _take_out: true,
                 _accepts_credit_card: true,
                 _accepts_apple_pay: false,
                 _bike_parking: false,
                 _wheelchair_accessible: false,
                 _alcohol: false,
                 _outdoor_seating: true,
                 _has_tv: false,
                 _waiter_service: true,
                 caters: true
                )

Restaurant.create(name: "La Taqueria",
                  description: "This no-frills taqueria serves Mexican eats, including famed traditional-style, rice-free burritos.",
                  location: "2889 Mission St San Francisco, CA 94110",
                  hours: "Mon	11:00 am - 9:00 pm--
                          Tue	11:00 am - 9:00 pm--
                          Wed	11:00 am - 9:00 pm--
                          Thu	11:00 am - 9:00 pm--
                          Fri	11:00 am - 9:00 pm--
                          Sat	11:00 am - 9:00 pm--
                          Sun	11:00 am - 8:00 pm--",
                  rating: 4,
                  price_range: "$",
                  phone_number: "(415) 285-7117",
                  neighborhood: "Mission",
                  photos: "http://res.cloudinary.com/cloudlicious/image/upload/v1473417309/o_27_hyoify.jpg http://res.cloudinary.com/cloudlicious/image/upload/v1473417309/o_29_r3ert1.jpg http://res.cloudinary.com/cloudlicious/image/upload/v1473417309/o_28_tsmz25.jpg",
                  _parking: "Street",
                  _attire: "Casual",
                  _ambience: "Casual",
                  _noise_level: "Average",
                  _delivery: false,
                  _take_out: true,
                  _accepts_credit_card: true,
                  _accepts_apple_pay: false,
                  _bike_parking: true,
                  _wheelchair_accessible: true,
                  _alcohol: true,
                  _outdoor_seating: true,
                  _has_tv: false,
                  _waiter_service: false,
                  caters: false
                 )

Restaurant.create(name: "Omakase",
                 description: "Specialties: Omakase offers three different fixed-price tasting menus that will take you through your senses. The culinary journey you experience will introduce you to the many flavors of Japanese cuisine. Our focus is to show diners a series of dishes that combine creativity and various Japanese cooking techniques. To enhance your experience, we showcase the cuisine with the beauty of Japanese pottery. Premium sakes are individually selected to complement your meal as you enjoy the day's best selected fishes. Our fishes are flown in 3x a week from Tsukiji Fish Market, Tokyo, Japan -- the famed and largest fish market in the world -- to assure freshness and quality.",
                 location: "665 Townsend St San Francisco, CA 94103",
                 hours: "Mon	7:30 am - 6:30 pm--
                         Tue	7:30 am - 6:30 pm--
                         Wed	7:30 am - 6:30 pm--
                         Thu	7:30 am - 6:30 pm--
                         Fri	7:30 am - 6:30 pm--
                         Sat	7:30 am - 6:30 pm--
                         Sun	7:30 am - 6:30 pm",
                 rating: 5,
                 price_range: "$$$$",
                 phone_number: "(415) 865-0633",
                 neighborhood: "SoMa",
                 photos: "http://res.cloudinary.com/cloudlicious/image/upload/v1473417860/o_30_gqgokg.jpg http://res.cloudinary.com/cloudlicious/image/upload/v1473417860/o_31_zkvjiz.jpg http://res.cloudinary.com/cloudlicious/image/upload/v1473417860/o_32_f7vxy1.jpg",
                 _parking: "Street",
                 _attire: "Dressy",
                 _ambience: "Trendy",
                 _noise_level: "Quiet",
                 _delivery: false,
                 _take_out: false,
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

Review.create(user_id: 6, restaurant_id: 1, rating: 4, body: "We stumbled in here because the place across the street had a wait and we were that hungry. Looks like nothing special from the outside. The waitress that seated us did not raise our expectations as she was not very friendly initially... 5 stars for the food. Quality Ingredients at a steal! Yum red curry and spot on with the Pad Thai. I'll be back again for sure!")
Review.create(user_id: 2, restaurant_id: 1, rating: 3, body: "Stopped by for a late lunch a few Saturdays ago with some friends. Like the basic person that I am, I had the Pad Thai and enjoyed it. It was fairly standard and could have used more peanut flavor, but I was hungry and the food came out quickly so no complaints here. Thai Time has a nice hole-in-the-wall feel and the staff is nice.")
Review.create(user_id: 8, restaurant_id: 1, rating: 5, body: "Excellent food and quick service. Went to this restaurant in a hungry early lunch time and doesn't get disappointed.")
Review.create(user_id: 9, restaurant_id: 1, rating: 5, body: "After a long day of moving my daughter into her new apartment, we were anxious to find some food for delivery in a neighborhood where we were unfamiliar with the offerings.  Luckily, Yelp came to the rescue and didn't disappoint!  We ordered Pad Thai noodles, mango sticky rice and a Thai Iced Tea.  Not only did the food show up pretty quickly, but it was still hot and very delicious!  My daughter is a vegetarian and is happy they offer so many veggie choices. She is looking forward to trying more dishes in the months ahead from her new apartment!")
Review.create(user_id: 10, restaurant_id: 1, rating: 1, body: "Disappointed! We yelped and went all the way to this restaurant from Mission Bay. Its an extremely tiny place (not that I care about the size as long as the food is good). We were 4 people along with an infant. When we entered there were only 2 tables available. One with 2 seats and the other with 4. A couple was seated on the bigger table. The gentleman offered to move to the smaller one but neither the lady who was with him nor the hostess showed any interest. The hostess's reaction was more like 'you better leave, you are just blocking the whole space!' Well, maybe I should have made a reservation in advance but overall, will never make the adventure of spending 20 bucks one way on cab and realizing it is a total  waste of time and money.")
Review.create(user_id: 3, restaurant_id: 1, rating: 5, body: "So sad this place is closed today ): I love their Panang curry and their yum moo mang (BBQ pork salad). Delicious!")
Review.create(user_id: 5, restaurant_id: 1, rating: 3, body: "Pretty good curry and pretty good pad se-ew. We came here late one night after a meeting nearby. Super hungry, not much open. This was a nice, hole-in-the-wall place, quiet, with friendly staff. I can see coming back if we were in the area, though probably not the best Thai in the city.")

Review.create(user_id: 1, restaurant_id: 2, rating: 4, body: "Came back a few times after my review (okay two but that's a few). Each of those times I've decided to go with the cioppino. It's so good. I mean I'm definitely a seafood loving person and with a great garlicky tomato base and the dish brimming with seafood. It's awesome! Get there early to get a spot. Or if yourself it's definitely a lot easier to get a seat. Pro tip: definitely check out a small cioppino if you're here. It's a big fish and definitely enough to share!")
Review.create(user_id: 2, restaurant_id: 2, rating: 5, body: "Great place amazing food! When we arrived there the place was packed! We were waiting for about 20min outside, then we ordered clam chowder and one of their specials ! Was delicious! Fresh and rich in flavor! The waitress was super nice and sweet! Not that cheap but can afford once in a while! Def recommend and will come back!!!")
Review.create(user_id: 3, restaurant_id: 2, rating: 5, body: "I am not a big seafood person, but was dragged here to eat. It was great, small place so you will be packed in like sardines, but hey its worth it. I highly recommend the clam chowder and garlic bread, my favorites. Oysters were fresh and fantastic. Make sure you pay attention for your name to be called and have your entire party there when your table is ready. Would go again.")
Review.create(user_id: 4, restaurant_id: 2, rating: 5, body: "Delicious! We had clam chowder in a bowl. Not fish. Very flavorful and yummy. We had half of anchor special mmmmmm~ oysters, clams, and prawns. Finished with mixed seafood deliciousness.. my goodness. It's good with their bread. :)")
Review.create(user_id: 5, restaurant_id: 2, rating: 5, body: "I first tried oysters in Seattle from the Walrus and the Carpenter and have been hesitant to try any others since. Currently living in Utah I don't trust any place to have them fresh enough and during a visit to San Francisco I was hesitant to try the oysters here... But I'm so glad I did. Oysters were amazing as was the clam chowder. I saw a bowl of cioppino being delivered to absorber table and it looked out of this world. It's a small space, not great for large groups, and you may experience a wait... But it's so worth it.")
Review.create(user_id: 6, restaurant_id: 2, rating: 5, body: "A rainy, stormy Saturday night led us here. We signed ourselves in on the whiteboard where you put your name, party size, and arrival time. I like how they ask you for your arrival time so you actually know how long you've been waiting. We were told the wait would possibly be over an hour, but that didn't stop us! I'm always willing to wait for my first time at any restaurant if it's supposed to be really good. There's plenty of shops around the area to explore while waiting for your party to be called so the wait doesn't seem too long!")
Review.create(user_id: 7, restaurant_id: 2, rating: 5, body: "I had been anticipating a meal at Anchor Oyster Bar all weekend in my most recent trip to SF, mostly because I had really wanted some good fresh shellfish in a simple low-key environment. I was afraid that I would hype it up too much in my head, but thankfully, I was not let down at all.")
Review.create(user_id: 8, restaurant_id: 2, rating: 5, body: "Great place amazing food! When we arrived there the place was packed! We were waiting for about 20min outside, then we ordered clam chowder and one of their specials ! Was delicious! Fresh and rich in flavor! ")
Review.create(user_id: 9, restaurant_id: 2, rating: 1, body: "So, coming to this place on and off, like it very much. Had a friend stopping by, i was at the bar, table next to us full, they took a chair from the bar so they can pass by easily. My friend was standing next to me, like more than enough space to go in and out off the kitchen and guess what , they basically kicked him out; 'Oh you can stand here.'")

Review.create(user_id: 5, restaurant_id: 3, rating: 5, body: "I really like this location as you can order your food, take your order # upstairs and they bring you your food in a nice bright area with a big window overlooking Market Street - very nice ambiance!  I had the lemony couscous salad with chicken added as recommended by my friend, and it was so good and healthy in such a nice, casual, pleasant place.  I will be back, oh, I will be back!  Thank you!")
Review.create(user_id: 1, restaurant_id: 3, rating: 4, body: "Although they are famous for their sourdough bread, I did not find it that special. The clam chowder was thick and flavourful. The bread bowl had too much bread and not enough soup. I found myself with a huge chunk of chewy bread after finishing the soup and eating parts of the bread. The tuna sandwich had tomatoes and tuna and it tasted just like any other tuna sandwich.")
Review.create(user_id: 2, restaurant_id: 3, rating: 5, body: "I haven't had the opportunity to try the clam chowder yet.  But, I absolutely love the turkey cranberry.  It's awesome!  When in San Francisco, there's absolutely no need to a visit Panera Bread with this gem.")
Review.create(user_id: 9, restaurant_id: 3, rating: 4, body: "The only thing I dislike about this location is that it can be hard to find seating sometimes during lunch, but that should be expected. The food is always the same, no matter which location you go to, I really like that about Boudins.")
Review.create(user_id: 10, restaurant_id: 3, rating: 3, body: "Why only 3-stars? Service in the morning at this particular location is pretty awful. The restaurant was pretty much empty besides the two staffers behind the counter, and a couple of stragglers ahead and behind me in line. Despite this, it took almost 15 minutes to get the single sandwich. Yes, they have to toast the bread and cheese with bacon. But that shouldn't take a quarter of an hour.")
Review.create(user_id: 8, restaurant_id: 3, rating: 5, body: "I have gone many times and I love their bread, especially the 'stuffing bred' at Thanksgiving time and the clam chowder bread bowel, also some of the salads I have had are wonderful, and last but far from least it is the employees that make any establishment a success and I think the manager Zoila is wonderful and deserving of thanks. Zoila is knowledgeable, helpful, hard working and very deserving of praise. Thank you Zoila")
Review.create(user_id: 6, restaurant_id: 3, rating: 5, body: "Service is super fast. Food is amazing. I can't complain!!! The lines always appear long, but just get in there, order your food, and in no time you'll be munching away on some delicious grub. My 'go to' is the clam chowder in a bread bowl,but it's all good.")
Review.create(user_id: 7, restaurant_id: 3, rating: 3, body: "I love boudins. I grab lunch from there pretty often but on Thursday I was not exactly happy. I ordered a Chicken Cesar Salad. What I got was a bowl full of lettuce and entire slices of chicken breast that were waaay too big to pick up with a fork. I grab lunch at Boudins because it is convenient. It was kind of annoying to pull out the chicken from my salad and have to cut it in myself. Where is the convenience in that. Anyway it is good i like the food but I might not return to this location simply because it defeats the purpose of convenience if I have to cut my own chicken. Next time ill make it at home.")

Review.create(user_id: 9, restaurant_id: 4, rating: 5, body: "The soup and falafel was a perfect combo! A hint of Spice, fresh and light, yet filling. The only thing better than the food was the service. I'll have to come back to try the juicy looking lamb burgers another time!")
Review.create(user_id: 7, restaurant_id: 4, rating: 3, body: "Came out with a friend for dinner to try the whiskey burger. I liked that they were freshly cut. They were served with a housemade ketchup and as much as I appreciate the effort to provide a unique experience it wasn't what I expected. It honestly tasted like pasta sauce. Burger was actually pretty big and couldn't finish it. The atmosphere was very soothing and relaxing unique art, with dim lighting and had an urban touch. I don't feel the burger was all that it was hyped up to be and possibly a little overpriced but it was good. I will say that the bar was beautiful.")
Review.create(user_id: 5, restaurant_id: 4, rating: 5, body: "Family owned hard working people that truly have delivered a gem to east Sacramento. Friendly service and quality food. Whisky burger is a must. Great salads and can't go wrong with really anything here to be honest.")
Review.create(user_id: 4, restaurant_id: 4, rating: 3, body: "Stopped in for dinner the other night before walking the Fabulous 40's Christmas lights displays.  As always, the staff and service were fantastic. My dinner on the other hand was somewhat disappointing.  I ordered Mary's Chicken and my friend ordered the Salmon.  The Chicken breast looked beautiful; the skin had great color, crispness and flavor.  The meat was very moist.  It was served on a bed of slightly undercooked barley, overcooked (burned) carrots, and perfectly cooked fingerling potatoes, of which there were too few on the plate.  The lemongrass broth lacked salt and other seasoning and there was too little of it.    My friend said the salmon was moist and tasted good.  It was served with three batter dipped and fried mushrooms.  The batter was too thick.  The mushrooms would have tasted fresher with a lighter tempura type batter than the heavier flour version used here.")
Review.create(user_id: 2, restaurant_id: 4, rating: 5, body: "A Jem of a restaurant in east Sacramento ! I love the ambience of this casual yet hip and classy little place . They have an excellent menu of delicious foods . I got to try a few different dishes on my visit . The mussels as an appetizer was phenomenal! The osso boco was so flavorful and rich . I couldn't stop eating it . But then I ate the last bite and I had no choice but to stop. The whiskey burger was so a winner , tasted like a well made classic burger ... Just not sure why they named it the whiskey burger .. Nothing all that whiskey about it .. But still so delicious !")
Review.create(user_id: 1, restaurant_id: 4, rating: 5, body: "The BEST burgers I have ever had. Amazing people working here and a very inviting atmosphere. I highly recommend formolis bistro!")
Review.create(user_id: 10, restaurant_id: 4, rating: 2, body: "It was just ok. The salmon was cooked well and fresh. Service was so so, our waitress was busy talking to a couple of her friends, while we waited 10 mins to get our order taken. Nothing special here....")
Review.create(user_id: 6, restaurant_id: 4, rating: 4, body: "My boyfriend and I went here tonight using a Groupon ($29 for $54) and had a great experience. The service was great and the interior was really lovely. The deal gets you two burgers and a bottle of wine. The burger was slightly dry, but I definitely recommend Formoli's!")
Review.create(user_id: 8, restaurant_id: 4, rating: 4, body: "Good location with parking and easy access. Tasty food, but small portions for the price. I had to eat extra btead to satisfy my hunger. Friendly, prompt service. Recommended for a great local evening inside or on the patio.")
Review.create(user_id: 3, restaurant_id: 4, rating: 5, body: "High end, 4-star (if yelp gave a five + the food deserves it) restaurant fare in a cozy neighborhood restaurant.  The chef and owner, Aimal Formoli is a CIA grad and knows what the hell he is doing.  The base ingredients are of the highest quality, hand picked, and  no item I sampled (steak, french fries, pork pasta, bean puree side) stopped short of fantastic!!  I heard (but did not try) from my friend that the Whiskey burger was the best he'd had and he regularly eats at highly rated burger joints in SF.   Staff and the co-owner Suzanne were friendly and attentive to boot.  You may have a bit of a wait for phenomenal food because it is a small establishment, however the beer and wine list is extensive and will keep you entertained until the food arrives.  No hard alcohol yet, I think they may be applying for so stand by on that.")

Review.create(user_id: 6, restaurant_id: 5, rating: 5, body: "I would eat here everyday if I lived in Davis. Some of the best shawarma you can have. You must try if you are in NorCal.")
Review.create(user_id: 5, restaurant_id: 5, rating: 5, body: "This place was recommended by a friend. We ordered the chicken shawarma and beef shawarma, as well as the garlic fries. Service is great, the same as the ambience. Family friendly. The atmosphere is so so nice here! I am a huge fan of Mediterranean food and this place definitely has my loyalty. I'll totally recommend. P.S. CASH ONLY, they do not accept cards.")
Review.create(user_id: 4, restaurant_id: 5, rating: 2, body: "Not sure why this place has so many stars. Our meal was awful. I had the chicken kabob and it was room temp, dry, and tasteless.  My dog ended up eating most of the chicken.  My husband had the lamb kabob and his was at least warm, but it wasn't that good either. We had an order of fries that were really greasy and seemed to have be refried. The good news was we didn't get sick last night. We both thought we would.")
Review.create(user_id: 9, restaurant_id: 5, rating: 5, body: "Shawarma was a nice treat! Cozy atmosphere with fast service and authentic boutique like decor. It was a nice change from processed food to tasting fresh home cooking. Don't miss this place! Try the baklava too.")
Review.create(user_id: 10, restaurant_id: 5, rating: 5, body: "Not a healthy option, but great comfort food. Their meat is amazing and they also have delicious hummus. The service was really fast and the family who owns it was very friendly. You can get a lot for your money's worth.")
Review.create(user_id: 8, restaurant_id: 5, rating: 5, body: "Ong have you ever tasted deliciousness that you makes you feel happier than ever? With Each bite of food your whole body feels like it's in paradise. Well I defiantly recommend their food. Me and my fiancé tried their beef shawarma which was pretty delicious, would definitely go back! Definitely recommend!!")
Review.create(user_id: 2, restaurant_id: 5, rating: 4, body: "It's actually pretty pricey for the portion, but filling. Get the shawarma or chicken/beef over rice. Location is great, just a few steps from the Death Star/Social Sciences building on campus or across the Farmers Market.")
Review.create(user_id: 1, restaurant_id: 5, rating: 4, body: "Why's the service horrible here? Why does the ice machine rumble like a dead gorilla? And why does the girl who take your order, the same one who walks down the block and around the corner to put the order in and the same one who delivers your order and the same one who buses the table? These people no nothing about efficiency. The food is good, it's too bad, their soda machine is from 1981 and tastes flat, their chairs are broken and service is something left to desire. Oh and cash only, nice way to avoid paying actual taxes.")
Review.create(user_id: 7, restaurant_id: 5, rating: 5, body: "Chicken Pita shwarma is really good at  Sam's Mediterranean Cuisine! The price is very affordable and the food is very delicious! I'm glad Davis students have a place like Sam's Cuisine in downtown Davis.")

Review.create(user_id: 4, restaurant_id: 6, rating: 1, body: "Flies all over the place, dirty tables, way undercook chicken served cold, rude service that magnificantly ended this meal by insisting to pay cash (and requiring IDs on top of that). Really bad culinary and human experience.")
Review.create(user_id: 5, restaurant_id: 6, rating: 3, body: "We stopped here after sightseeing and a recommendation from one of the workers in the fortune cookie factory around the corner. Decent dimsum, and service. They ran out of some items but it was because it was late in the day. I would try it again.")
Review.create(user_id: 8, restaurant_id: 6, rating: 1, body: "Absolutely disgusting, over priced, and incredibly rude service. One of the cups had dried food stuck to it. Dim sum off the carts was cold and soggy. The chicken chow mein plate was way too salty and covered in oil. Chicken was a gross off-white color and slimy. Clay pot was basically white rice with the same nasty chicken and expensive ($22). Our party did not eat it as it was inedible. Very inattentive and rude service. Worst part- I went to pay for our table at the register (didn't want to wait to get waitress attention) so we could just leave. I paid with card and marked $0 tip as someone else at my table was going to pay the tip in cash. The manager confronted me and angrily pointed out I didn't tip. When I returned to the table, my friend put down a dollar and the manager dashed over to snatch it while we still there.")
Review.create(user_id: 9, restaurant_id: 6, rating: 2, body: "This use to be 'The Golden Dragon' restaurant - and was 'the place to go' for dim sum in Chinatown.  Then some shootings there years ago, and it's now 'Imperial Palace'.  When I was there it was a zoo of people clamoring around and the flow of food was disorganized.  I'm usually okay with dirty Chinese restaurants... but this one pushes my limits.")
Review.create(user_id: 10, restaurant_id: 6, rating: 4, body: "Delicious choice for lunch! So many places around here but we are glad we chose Imperial Palace. The Lemon Chicken is divine! Breaded lightly with a tangy lemon sauce. Also had the Mongolian beef which was my favorite. Spicy with fresh onions and peppers. We ventured out and tried the salt and pepper prawns which were fried with the head on and they were amazing. Also had combination fried rice and combination chow mien - both which were delightful. I recommend this place for sure. Service was good and people were friendly.")
Review.create(user_id: 3, restaurant_id: 6, rating: 1, body: "Honestly I gave this place a chance because my sis and I were a bit lost in china town and was hungry so we walked into Imperial Palace. Service was good at the beginning but as soon as our drinks and food was serve, that was it they didn't come to ask if we needed more dim sum dishes or tea or water. The next part would be most likely why I will never come back; after asking for the check and leaving cash for the bill, the man waited and I asked him if there was something wrong and he asked 'are you not gonna tip?' And gave me this demanding look. WTF?! I immediately reply, 'leaving a tip is a choice the quest makes, you should never ask because one that was rude and two at this point you don't deserve a tip'. My sis and I left the place right away.")
Review.create(user_id: 2, restaurant_id: 6, rating: 4, body: "As an American Born Half Chinese person who lives in Idaho I come to San Francisco with one thing on my mind. That thing is Dim Sum. So you know that Chinatown is on the list of places to go. I'm not here enough to have a regular place, but we happened in on the Imperial Palace. The flavor were great and the selection was good too. Everything that I wanted in my dim sum experience was there. Even the chicken feet were good! Overall the atmosphere was great but just know it's going to be loud and crazy. If you're and ABC like me you live for that atmosphere. Imperial Palace Dim Sum is great!")
Review.create(user_id: 1, restaurant_id: 6, rating: 2, body: "Terrible. My family a party of 7 came here for lunch the other day. No one explained what the cart system they used was, and I constantly had to flag someone down to order and beg for water refills. Seriously, 2nd time in a week (my first being china delight in Carmel) where I have gone to a Chinese restaurant and got poor service. The mongolian beef was good, as was the bbq pork fried rice and the siu mai, which is why I'm giving the 2nd star.")
Review.create(user_id: 7, restaurant_id: 6, rating: 1, body: "I have never paid over 10 bucks for a fried rice plate and today was that day. I can take eleven but Jesus 15!!! I'm glad I left no tip because their service was horrible too. To check in was slow, to order slow and to get out was worst. I wish I could go back in time to eat somewhere else.")

Review.create(user_id: 5, restaurant_id: 7, rating: 1, body: "Been coming to this location on and off for 22 years. It's a local Burger King. As I sat in the table area waiting for my order I noticed over a dozen flys a few feet away from me . Flys in the table area. Besides this yelp review  I'm going to call and file a complaint . One hundred percent, completely, unacceptable.")
Review.create(user_id: 4, restaurant_id: 7, rating: 1, body: "Horrible service and they're extremely rude.  I would not recommend going here at all.")
Review.create(user_id: 7, restaurant_id: 7, rating: 1, body: "This Burger King is disgusting. Once when I visited with some friends, my friend had to instantly vomit her burger up after leaving, the next time, there was a giant dead moth stuck to the window not 5 inches from my food, and the time after that, my girlfriend said she saw the people touching the chicken nuggets without gloves and even told the cashier about it and the cashier lied right to her face and tried to play it off that they were wearing gloves, now I know why BK always has 1.49 chicken nugget deals, because they suck and are disgusting. Also their fries here are always floppy and undercooked. AND my coworker told me he saw a rat in this same Burger King.")
Review.create(user_id: 6, restaurant_id: 7, rating: 1, body: "This burger King SUCKS it's not like before like 5 something years ago when i used to always come here and eat where the people that worked here at the time were cool. Now it's like Wtf new people and I ordered a original chicken sandwich and it was hard is faxk not fresh I'm thinking it was sitting there all day just warmed it up then gave it to and the lady in front bad costumer service last time I'm coming here!!")
Review.create(user_id: 8, restaurant_id: 7, rating: 1, body: "The woman is in a terrible mood. She barely smiled I don't know what have I done to piss her off but she seems uncomfortable with me and with my friend. Few. Minutes two ladies came and she start smiling.")
Review.create(user_id: 10, restaurant_id: 7, rating: 1, body: "Horrible service. I asked for a cup of water and got it in A SUNDAE CUP. Seriously? The woman who helped my sister and I was in a bad mood and obviously let that be known. She neglected to ask if we wanted any sauce for the onion rings, which MANY of the Burger Kings usually ask out of consideration.")
Review.create(user_id: 2, restaurant_id: 7, rating: 1, body: "A little piece of me dies inside every time I eat here...")
Review.create(user_id: 9, restaurant_id: 7, rating: 1, body: "This is your typical franchise burger joint. I generally eat takeout and don't eat in the actual restaurant. I recently had the plain regular double hamburger. I would say that the meat patty tasted a little dry and had a reheated taste. The bun and condiments inside were okay. Overall their competitors burgers are generally better tasting so I can't give their food high marks.")

Review.create(user_id: 3, restaurant_id: 8, rating: 4, body: "Anyone who knows me in real life knows that I absolutely love Indian food. The aromas of the different dishes, the creaminess of the curry, the fluffy naan--yeah, I am in heaven. I've never been disappointed by Darbar and I've been eating here for years now. The lunch buffet is what I always come for and it has never disappointed me. The buffet includes Indian tea and a variety of desserts, including rice pudding, which is my favorite.  There is always fresh naan, an assortment of the most popular curry dishes, and some tandoori as well for your likings. 2 - 3 empty plates later and a whole lot happier, I leave Darbar looking forward to my next feast here.")
Review.create(user_id: 10, restaurant_id: 8, rating: 3, body: "The serving sizes are big but the food wasn't that good :( very oily and the taste was not great as well ! The Panner  was at its absolute worst")
Review.create(user_id: 5, restaurant_id: 8, rating: 4, body: "I ordered delivery from Darbar and had a really positive experience. The food arrived hot and right on-time. I'm a vegetarian and I got the paneer tikka masala, aloo matar and cheese naan. Overall the food could have been a bit more spicy (so I will definitely request more heat in the future), but it was very tasty. The portions were generous and it was reasonably priced. I will definitely order from them again.")
Review.create(user_id: 8, restaurant_id: 8, rating: 5, body: "Delicious food. Fast delivery. Comfort food for the soul. This was the first time I ordered from here. Will definitely order again.")
Review.create(user_id: 9, restaurant_id: 8, rating: 2, body: "Really great cheese naan. Some of my favorite. The flavor of the food was really good, but there was so much oil sitting on top of all of it that was inedible. It's unfortunate, because I could see this food being amazing.")
Review.create(user_id: 1, restaurant_id: 8, rating: 1, body: "Looking at yelp reviews, we decided to try this out. We went for Saturday lunch. Buffet was 9.99 + tax. There were hardly2-3 items in buffet. It was not worth so we ordered from menu. Kabab was not even up to mark. Other dishes were so-so They even charged for tea. Really? Other that type of restaurants (Shalimar, pakwaan, chutney) offer free tea. Restaurant has no ventilation and no ac. Price wise it is not so cheap. It is affordable but other costlier than other similar restaurants. I will say not worth.")
Review.create(user_id: 3, restaurant_id: 8, rating: 4, body: "This place for the location and price is the best around here. The service is sometimes slow because they're understaffed but the food is always good, chicken boti, basmati rice, and curries are delicious.")
Review.create(user_id: 6, restaurant_id: 8, rating: 5, body: "My husband and I order delivery from this place on an almost no-weekly basis. We LOVE this place. Quite honestly, some of the best Indian food I've ever had. Even as leftovers, it's amazing. Consistently delicious, always on time, reasonably priced. The chicken tikka masala is a MUST!")
Review.create(user_id: 4, restaurant_id: 8, rating: 1, body: "Sucks!!!!!!  Go to Shalimar or Kasa both are across the street!!  They won awards in 2008 and have since not cared!  Food is almost not food!")

Review.create(user_id: 7, restaurant_id: 9, rating: 4, body: "Food here is really good. One of the few places out here that serves good Mexican food. The Cabeza tacos are one of my favorites. The Carne asada quesadilla is also really good. The only reasons I am giving  4 stars instead of 5 is due to the fact that you can almost never get a seat at meal time and they only accept cash.")
Review.create(user_id: 3, restaurant_id: 9, rating: 5, body: "This place has the best tacos hands down. No one can compete with them. Everything here is spectacular. I am a regular here and probably my twentieth time here. Carne Asada tacos are the best. There's a reason why they are expensive because of the QUALITY QUALITY QUALITY. I wanted to try something a bit different today so I got the cabeza and by was it good and gelatinous. Their aguas fresca are A1. Strawberries were super fresh. Horchata is A1. Pineapples are amazing. TIP: If you get a burrito tell them you want it dorado style where they pan fry both sides so it's crispy")
Review.create(user_id: 5, restaurant_id: 9, rating: 5, body: "My favorite taco place in the city!! No rice in the tacos, just meat and beans! Get the super taco w/ all the fixings of guac and sour cream. One taco is expensive, but enough to fill a small girl like me. So sad that the lines are so freaking long these days!!")
Review.create(user_id: 9, restaurant_id: 9, rating: 5, body: "If you're reading this right now, I would strongly urge you to take an uber through the hot mess that is San Francisco and stand in line for a damn BURRITO EL DORADO right now. I stood in line for about 30 minutes on a Sunday afternoon, but it was well worth it since I was in the area for food and hanging out with my friend and I had a red eye to catch. I'm from the East Coast and omg what I would give to have such an amazing burrito again. Now that I say that out loud, I realize my view may be a little skewed since there aren't a whole lot of burritos here and I'm really just deprived. Nevertheless, I got the carnitas burrito el dorado ($8something) with added guac (extra $1.25), the el dorado meaning they grill your burrito which gives it a slightly different dimension. I ate it right away without hesitation 25 feet away from the store an hour after having had breakfast just like Louis CK did in his Bang Bang episode. I'd come back!")
Review.create(user_id: 10, restaurant_id: 9, rating: 4, body: "Hate the lines, love the food. Burritos are usually too much for me to handle (I'm a diehard burrito bowler), but La Taqueria's claim to fame with their carne asada super burrito is well deserved. Inside a 13-inch flour tortilla is jam packed with smoky pieces of carne asada, slow cooked pinto beans, thick pieces of avocado, sour cream, pico, salsa, and cheese. I like that there's no rice, because my stomach real estate is precious. One burrito was just enough to fill me up. It was definitely worth the long line on a Friday night, though I probably will go on a weekday afternoon next time - The grilled El Dorado burritos look phenomenal!")
Review.create(user_id: 2, restaurant_id: 9, rating: 5, body: "Is this the best burrito? Yes. Go here.")
Review.create(user_id: 1, restaurant_id: 9, rating: 5, body: "If you are looking for a fresh, tasty, authentic place to eat tacos or burritos, then this is your place. I highly recommend the super burrito. If you are a meat lover like me get the meat, it's some of the tastiest steak I've ever had, with only the best cuts of meat. I'm sure with the high quality of food anything you order here will be great. I don't recommend going between 12 and 2 during the lunch hour rush, especially if you are hungry because you will definitely be waiting a while. Also, if you have never tried it order the horchata drink, they have some of the best I've had in the states not too sweet but super refreshing.")
Review.create(user_id: 8, restaurant_id: 9, rating: 5, body: "Four years later and La Taqueria is still my favourite burrito place in San Francisco. I always get the carne asada burrito with everything. The chips are fresh and so is the salsa. Love!")
Review.create(user_id: 4, restaurant_id: 9, rating: 3, body: "Solid taqueria.  I ordered a vegetarian burrito, which basically means: rice, beans, cheese, guacamole and salsa. For what it is, it was fine - it's tough to blow someone away with a vegetarian burrito IMO, but it's also easy to screw them up. While La Taqueria did neither for me, it was certainly a solid burrito. I wouldn't go back for the vegetarian burrito, but it seems like a nice little restaurant. Cash only though!")
Review.create(user_id: 6, restaurant_id: 9, rating: 5, body: "You have not had good Mexican food until you have had food from La Taqueria! It's amazing that on Mission, which is lined up with Mexican restaurants, everyone goes to this place cause they know where is best! We went at 3:30 in the afternoon, which is a weird time to eat, but it was packed!! I was amazed at how crowded it was but once I took a bite of my taco I knew why!! Everything about the taco was awesome! From the carnitas to the 'to die for' guacamole on it, it was THE BEST taco I've ever had! If you are ever in the area, take the BART to the Mission Station, walk up Mission and you will not regret it one bit! I honestly dream about this meal!")

Review.create(user_id: 4, restaurant_id: 10, rating: 5, body: "This was a great experience, I would like to thank the restaurant for being a great host. Expecially the host, beautiful, kind, attentive, and very knowledgeable about their establishment. The small dishes and sushi very all delicious. Their reputation is well deserved. The rice tasted great, I believe they use haiga mai. Not really sure but it was great. The fish was well taken care of from beginning to end. You can tell clearly thru the taste and texture. I'm a sushi chef from across the country, lived and worked in japan. I have eaten at multiple michelin sushi restaurants in nyc, japan, and now san francisco. I love sushi I'd recommend this place to anyone. San Francisco has a great thing here. Eating good and healthy is never cheap and with the experience combined it was a wonderful experience, well worth the price.")
Review.create(user_id: 7, restaurant_id: 10, rating: 5, body: "Eating at Omakase reminded me that it's more than just good food that makes a great meal.  A lot of little things came together that evening, starting from a friendly greeting upon arrival.  Once our seats were ready, another warm greeting from the chef followed by an explanation of what we needed to decide on the menu.  In the mean time an appetizer is served along with sake to welcome you.  Service during the meal was perfectly timed, the waitress was knowledgeable about the sake pairing, broke it down so that we could get a sense of what we are drinking and how it pairs with the particular course.  Always warm and friendly, we felt comfortable, even though it's was a new experience.  The other customers around you are just as relaxed, conversation flows, like everyone is at home. This is a special sushi experience, for us reserved for special occasions.  Everything we had was as fresh as you can get from Japan.  Each nigiri sushi made one by one, just before eating, amazing.  It's like being pampered, like at a spa, relaxing and exciting at the same time. A lot of times when going out for sushi, we end up scrutinizing how well the rice is cooked and seasoned, or is the nori (seaweed) fresh or stale.  Is the fish fresh and portioned cut nicely, etc.  Omakase is so far beyond that, it's really down to the details of the food, what flavor profiles the chef prefers and the service.  I'm not an expert at omakase sushi (yet), but I do know we came away all smiles, more than satisfied with the meal, had fun chatting with our neighbors and even took pictures with the chefs....how fun is that to end a meal with such enthusiasm.")
Review.create(user_id: 9, restaurant_id: 10, rating: 5, body: "Not even sure where to begin, but if you want to eat some of the freshest and high quality fish sourced directly from Tsukiji fish market in Japan, then definitely come here. The chefs are super friendly and have a great sense of humor. My sister and I went with the $150 set meal, which was so worth it. We got so much fish & seafood! There was lobster, salmon, yellowtail, grouper, halibut, scallop, shrimp, tuna (different cuts), mackerel, uni and more types of fish I can't remember. Bottom line is you won't be disappointed with the generous amount of seafood they serve. The menu changes weekly based on the best quality fish they can source. Service was incredible and very attentive. I'm not surprised at all that they received a Michelin star so quickly. I selfishly hope that the bookings don't get too crazy as they've gained a lot more popularity since earning the award. :) definitely looking forward to coming back soon!")
Review.create(user_id: 1, restaurant_id: 10, rating: 5, body: "Omakase is worth every bit of hype there is about it. I knew I wanted to take my boyfriend for his birthday, so booked a reservation as soon as I could (3 months out on OpenTable). If you are particular about what time you want to eat, then book early since there are two main sessions for dinner - 6pm and 8pm. You definitely want to budget out time for a 2-2.5 hour amazing dining experience. Ambiance is quiet, traditional Japanese (think Jiro Dreams of Sushi, but not as intense). Lighting is dim and romantic. Not the best for picture taking, but you're also not really supposed to take photos. Just let yourself taste the incredibly fresh fish (the big-eyed snapper was my favorite), uni, and sake. You can add a sake pairing with your selection of one-out-of-two Omakase menus. We went with the Yamato Omakase for $200/person with a bottle of sake to share. Don't let the sticker-shock scare you too much because it is worth every penny with the quality, presentation, and service of the food/drink. I don't normally give out 5-stars, however, Omakase is more than worthy of this rating. I highly recommend Omakase to anyone searching for a new kind of eating experience. But warning, sushi will never be the same afterwards! Happy eating!")
Review.create(user_id: 10, restaurant_id: 10, rating: 5, body: "Favorite sushi restaurant in SF :) $150 for 15 or $200 for 20 courses/pieces. $80 pairing. Small bar, so make early reservations. Dress: smart casual. Tip: tea is free and included ;)")
