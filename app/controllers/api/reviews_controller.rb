class Api::ReviewsController < ApplicationController
  def create
    debugger
    @review = Review.new(review_params)
    if @review.save
      render :show
    else
      render(
        json: ["Incomplete/Incorret Format"],
        status: 401
      )
    end
  end

private
  def review_params
    params.require(:review).permit(:user_id, :restaurant_id, :body, :rating)
  end
end
