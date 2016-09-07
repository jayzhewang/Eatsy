export const ReviewConstants = {
  CREATE_REVIEW: 'CREATE_REVIEW',
  RECEIVE_REVIEW: 'RECEIVE_REVIEW'
};

export const createReview = review => ({
  type: ReviewConstants.CREATE_REVIEW,
  review
});

export const receiveReview = (data) => ({
  type: ReviewConstants.RECEIVE_REVIEW,
  data
});
