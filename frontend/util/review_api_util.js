export const createReview = (review, success) => {
  $.ajax({
    method: 'POST',
    url: `api/reviews`,
    data: {review},
    success
  });
};
