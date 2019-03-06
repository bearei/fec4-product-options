USE product_options;
DROP TABLE IF EXISTS products;


CREATE TABLE products (itemId INT AUTO_INCREMENT, brand VARCHAR(30), title VARCHAR(20), averageRating DECIMAL, reviewCount INT, freeShipping VARCHAR(30), shippingRestriction VARCHAR(30), PRIMARY KEY (itemId));

LOAD DATA LOCAL INFILE 'seeds/productData/productData1.csv'
INTO TABLE products
FIELDS TERMINATED BY ','
IGNORE 1 LINES;

LOAD DATA LOCAL INFILE 'seeds/productData/productData2.csv'
INTO TABLE products
FIELDS TERMINATED BY ','
IGNORE 1 LINES;
