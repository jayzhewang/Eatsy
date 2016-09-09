class Api::RestaurantsController < ApplicationController
  def index
    if params[:query]
      @restaurants = Restaurant.where('name ILIKE ?', "%#{params[:query]}%")
    else
      @restaurants = Restaurant.all
    end

    render :index
  end

  def create
  end

  def update
  end

  def show
    @restaurant = Restaurant.find(params[:id])
    render :show
  end

  def destroy
  end

private
  def restaurant_params
    params.require(:restaurant).permit(:name, :description, :location, :hours, :rating, :price_range, :phone_number, :filter, :photos)
  end
end
