DROP KEYSPACE [IF EXISTS] product_options;

CREATE  KEYSPACE [IF NOT EXISTS] product_options
   WITH REPLICATION = { 
      'class' : 'SimpleStrategy', 'replication_factor' : 1 };

use product_options;

CREATE TABLE [IF NOT EXISTS] products (itemId INT PRIMARY KEY, brand VARCHAR, title VARCHAR, averageRating INT, reviewCount INT, freeShipping VARCHAR, shippingRestriction VARCHAR);
CREATE TABLE [IF NOT EXISTS] variants (variant_id INT PRIMARY KEY, itemId INT, price VARCHAR, color VARCHAR, size VARCHAR);

