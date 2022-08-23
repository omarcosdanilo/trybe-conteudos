select * from customer;

SELECT c.first_name, c.email, c.address_id, a.address, a.district
from customer as c
INNER join address as a
on c.address_id = a.address_id
where a.district = 'California'
and c.first_name like '%rene%';