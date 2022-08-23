select * from actor;

select 
	a.actor_id,
    a.first_name,
    fa.film_id,
    f.title
from actor as a
inner join film_actor as fa
inner JOIN film as f
on a.actor_id = fa.actor_id
and fa.film_id = f.film_id;