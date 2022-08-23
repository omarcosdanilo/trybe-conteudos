select * from customer;

select c.first_name, count(a.address)
from customer as c
INNER join address as a
on c.address_id = a.address_id
where c.active = 1
GROUP BY c.customer_id
order by c.first_name desc;
