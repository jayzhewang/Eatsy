{
  currentUser: {
    id: 1,
    username: "Jay"
    reviews: {
      {
        id: 1,
        userId: 1,
        rating: 4,
        restaurant: "Branda's",
        body: 'Fantastic Brunch Spot',
        tags: ['Cool', 'Useful']
      }
    }
    friends: {
      {
        id: 2,
        username: "Sam",
        reviews: {}
      }
    }
  },

  forms: {
    signUp: {errors: ["Passwords can't be less than 8 characters."]},
    logIn: {errors: ['Your username or password did not match.']},
    createReview: {errors: ["You must rate at least one star!"]}
  },

  restaurants: {
    {
      id: 1,
      name: "Brenda's",
      hours: ["10-2", "5-9"],
      days: ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      location: [37.783050, -122.418919],
      rating: 4,
      reviews: {
        {
          id: 1,
          userId: 1,
          rating: 4,
          restaurant: "Branda's",
          body: 'Fantastic Brunch Spot',
          tags: ['Cool', 'Useful']
        }
      }
    }
  }
}
