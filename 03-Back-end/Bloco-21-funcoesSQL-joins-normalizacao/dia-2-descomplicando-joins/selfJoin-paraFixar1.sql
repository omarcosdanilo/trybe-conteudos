select * from employees;
select
	concat(e.first_name, ' ', e.last_name) as `Colaborador`,
    concat(m.first_name, ' ', m.last_name) as `Gerente`
from employees as e
INNER JOIN employees as m
on e.MANAGER_ID = m.EMPLOYEE_ID
and e.DEPARTMENT_ID <> m.DEPARTMENT_ID;
    