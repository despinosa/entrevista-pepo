-- Product = [sku, name, price, cat_id]
-- Category = [id, name]

select p.name from product as p join category as c on c.id = p.cat_id where c.name = "mi categoria"

update product as p set p.price = 0.0 where p.name = "holi"


insert into product as p (sku, price, name, cat_id) values (123, 900, "iphone", select id from category where name = "electronica");

delete from category where id = 10
