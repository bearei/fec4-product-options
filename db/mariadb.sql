USE product_options;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS variants;

CREATE TABLE products (itemId INT AUTO_INCREMENT, brand VARCHAR(30), title VARCHAR(20), averageRating DECIMAL, reviewCount INT, freeShipping VARCHAR(30), shippingRestriction VARCHAR(30), PRIMARY KEY (itemId));
CREATE TABLE variants (variant_Id INT AUTO_INCREMENT, itemId INT, price VARCHAR(30), color VARCHAR(30), size VARCHAR(30), PRIMARY KEY(variant_Id));


LOAD DATA LOCAL INFILE 'seeds/productData/productData1.csv'
INTO TABLE products
FIELDS TERMINATED BY ','
IGNORE 1 LINES;

LOAD DATA LOCAL INFILE 'seeds/productData/productData2.csv'
INTO TABLE products
FIELDS TERMINATED BY ','
IGNORE 1 LINES;

LOAD DATA LOCAL INFILE 'seeds/variantData/variantData1.csv'
INTO TABLE variants
FIELDS TERMINATED BY ','
IGNORE 1 LINES;

LOAD DATA LOCAL INFILE 'seeds/variantData/variantData2.csv'
INTO TABLE variants
FIELDS TERMINATED BY ','
IGNORE 1 LINES;

LOAD DATA LOCAL INFILE 'seeds/variantData/variantData3.csv'
INTO TABLE variants
FIELDS TERMINATED BY ','
IGNORE 1 LINES;

LOAD DATA LOCAL INFILE 'seeds/variantData/variantData4.csv'
INTO TABLE variants
FIELDS TERMINATED BY ','
IGNORE 1 LINES;

LOAD DATA LOCAL INFILE 'seeds/variantData/variantData5.csv'
INTO TABLE variants
FIELDS TERMINATED BY ','
IGNORE 1 LINES;
