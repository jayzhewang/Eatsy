class Api::UsersController < ApplicationController
  def new
    @user = @user.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user
    else
      render json: @user.errors.full_messages, status 422
    end
  end

private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
