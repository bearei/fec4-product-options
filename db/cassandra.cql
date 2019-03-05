DROP KEYSPACE IF EXISTS product_options;

CREATE KEYSPACE IF NOT EXISTS product_options
   WITH REPLICATION = { 
      'class' : 'SimpleStrategy', 'replication_factor' : 1 };

use product_options;

CREATE TABLE products (
   itemId INT, 
   brand VARCHAR, 
   title VARCHAR, 
   averageRating DECIMAL, 
   reviewCount INT, 
   freeShipping VARCHAR, 
   shippingRestriction VARCHAR,
   PRIMARY KEY ( itemId )
);

CREATE TABLE variants (
   variant_id INT PRIMARY KEY, 
   itemId INT, 
   price VARCHAR, 
   color VARCHAR, 
   size VARCHAR
);

COPY product_options.products (itemId, brand, title, averageRating, reviewCount, freeShipping, shippingRestriction) FROM './seeds/productData/productData1.csv/' WITH HEADER = TRUE ;
COPY product_options.products (itemId, brand, title, averageRating, reviewCount, freeShipping, shippingRestriction) FROM './seeds/productData/productData2.csv/' WITH HEADER = TRUE ;

COPY product_options.variants (variant_id, itemId, price, color, size) FROM './seeds/variantData/variantData1.csv/' WITH HEADER = TRUE ;
COPY product_options.variants (variant_id, itemId, price, color, size) FROM './seeds/variantData/variantData2.csv/' WITH HEADER = TRUE ;
COPY product_options.variants (variant_id, itemId, price, color, size) FROM './seeds/variantData/variantData3.csv/' WITH HEADER = TRUE ;
COPY product_options.variants (variant_id, itemId, price, color, size) FROM './seeds/variantData/variantData4.csv/' WITH HEADER = TRUE ;
COPY product_options.variants (variant_id, itemId, price, color, size) FROM './seeds/variantData/variantData5.csv/' WITH HEADER = TRUE ;
