select * from staff;

select s.first_name, s.last_name, avg(p.amount) as media_de_valor
from staff as s
inner join payment as p
on s.staff_id = p.staff_id
where year(p.payment_date) = 2006
GROUP BY s.staff_id;
