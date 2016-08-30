class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, :email, :age, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true}

  has_many: reviews

  attr_reader: password

  after_initialize: ensure_session_token

  def self.generate_session_token
    SecureRandom::urlsafe_base64(32)
  end

  def reset_session_token
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil unless @user && @user.is_password?(password)
    user
  end

private
  def ensure_session_token
    @session_token ||= User.generate_session_token
  end
end