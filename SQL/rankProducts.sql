SELECT *, (
  SELECT 1 + count(*)
  FROM product_price product_price2
  WHERE product_price2.price > product_price.price AND product_price2.brand = product_price.brand
) AS Rank
FROM product_price;