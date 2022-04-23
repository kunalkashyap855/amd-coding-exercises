SELECT name, brand, MAX(price) AS price, (
  SELECT 1 + count(*)
  FROM product_price product_price2
  WHERE product_price2.price > product_price.price AND product_price2.brand = product_price.brand
) AS Rank
FROM product_price
WHERE price NOT IN (SELECT MAX(price) FROM product_price WHERE brand = "AMD") 
	AND price NOT IN (SELECT MAX(price) FROM product_price WHERE brand = "ACME")
GROUP BY brand;