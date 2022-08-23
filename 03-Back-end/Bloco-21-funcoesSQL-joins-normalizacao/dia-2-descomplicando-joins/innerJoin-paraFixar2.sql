select * from staff;

Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.

select S.first_name, S.last_name, A.address
from staff as S
INNER JOIN address as A
ON S.address_id = A.address_id;