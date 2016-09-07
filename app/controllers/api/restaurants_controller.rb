class Api::RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.all
    render :index
  end

  def create
  end

  def update
  end

  def show
    @restaurant = Restaurant.find(params[:id])

    @reviews = []
    Review.all.each do |review|
      @reviews << review if params[:id] == review.restaurant_id
    end

    @users = []
    @reviews.each do |review|
      @users << User.find_by_user_id(review.user_id)
    end
    
    render :show
  end

  def destroy
  end

private
  def restaurant_params
    params.require(:restaurant).permit(:name, :description, :location, :hours, :rating, :price_range, :phone_number, :filter, :photos)
  end
end
