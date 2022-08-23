select * from actor;
#Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou, usando as tabelas actor e film_actor.

select a.actor_id, a.first_name, f.film_id
from actor as a
INNER JOIN film_actor as f
ON a.actor_id = f.actor_id;