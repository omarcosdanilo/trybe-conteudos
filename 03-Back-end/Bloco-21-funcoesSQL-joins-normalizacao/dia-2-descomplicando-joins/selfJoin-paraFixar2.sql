select EMPLOYEE_ID, FIRST_NAME, LAST_NAME, MANAGER_ID from employees;
select
    concat(m.first_name, ' ', m.last_name) as `Gerente`,
    count(*)
from employees as e
INNER JOIN employees as m
on e.MANAGER_ID = m.EMPLOYEE_ID
GROUP BY m.EMPLOYEE_ID;
    