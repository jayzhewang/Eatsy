<h1>Schema</h1>
<h2>----------------------------users----------------------------</h2>
<p>has_many :reviews</p>
| column names    | data type  | details                   |
| ----------------|:----------:|--------------------------:|
| id              | integer    | not null, primary key     |
| username        | string     | not null, indexed, unique |
| password_digest | string     | not null                  |
| email           | string     | not null, indexed, unique |  
| age             | integer    | not null                  |
| gender          | string     |                           |
| location        | string     |                           |  
| picture         | varbinary  |                           |
<h2>-------------------------restaurants-------------------------</h2>
<p>has_many :reviews</p>
| column names    | data type  | details                   |
| ----------------|:----------:|--------------------------:|
| id              | integer    | not null, primary key     |
| name            | string     | not null, indexed         |
| location        | string     | not null, indexed, unique |  
| picture         | varbinary  | not null                  |
| rating          | float      | not null                  |
| hour            | string     | not null                  |
<h2>---------------------------reviews---------------------------</h2>
<p>belongs_to :user, belongs_to :restaurant, has_many :tags</p>
| column names    | data type  | details                   |
| ----------------|:----------:|--------------------------:|
| id              | integer    | not null, primary key     |
| userId          | integer    | not null, indexed         |
| restaurantId    | integer    | not null, indexed         |
| body            | text       | not null                  |  
<h2>----------------------------Tags-----------------------------</h2>
<p>belongs_to :review</p>
| column names    | data type  | details                   |
| ----------------|:----------:|--------------------------:|
| id              | integer    | not null, primary key     |
| userId          | integer    | not null, indexed         |
| restaurantId    | integer    | not null, indexed         |
| body            | text       | not null                  |  
