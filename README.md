<!-- FrontEnd  -->


<!-- Backend -->
as for frontend the technology been used are 
-> mysql 
-> mysql workbench
-> mysql shell

as you have to create db
name : bloombackets

add .env folder in backend 
DB_HOST=localhost
DB_USER=root
DB_PASSWORD= DB_PASSWORD
DB_NAME=bloombackets
PORT=3000


when you start project you have to create table in mysql workbench after create database named 

Database
--> bloombackets

Tables 
-> user
-> product
-> cart
-> order

CREATE TABLE User (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Product (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Cart (
    cart_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES User(user_id),
    FOREIGN KEY (product_id) REFERENCES Product(product_id)
);


--> so As then import my database


and run project 
--> npm run dev  // live server 
or
--> npm start


Features integrated
-> signup 
-> login 
-> add to cart
-> remove from cart
-> session store in cookies