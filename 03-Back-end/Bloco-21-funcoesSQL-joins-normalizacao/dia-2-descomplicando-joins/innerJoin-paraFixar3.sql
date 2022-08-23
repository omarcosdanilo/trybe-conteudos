select * from customer;

#Exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora.
#Essas informações podem ser encontradas nas tabelas customer e address.

select C.customer_id, C.first_name, C.email, C.address_id, A.address
from customer as C
INNER JOIN address as A
ON C.address_id = A.address_id
order by first_name desc
limit 100;