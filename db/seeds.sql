USE employees_db;

INSERT INTO department (name)
VALUES ("Sales"),
       ("Engineer"),
       ("Finance"),
       ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1),
       ("Salesperson", 80000, 1),
       ("Lead Engineer", 150000, 2),
       ("Software Engineer", 120000, 2),
       ("Accountant", 120000, 3),
       ("Lawyer", 190000, 4),
       ("Legal Team Lead", 250000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Rebecca", "Chambers", 1, NULL),
       ("Brad", "Vickers", 2, 1),
       ("William", "Birkin", 3, NULL),
       ("Albert", "Wesker", 4, 3),
       ("Jill", "Valentine", 5, NULL),
       ("Barry", "Burton", 6, NULL),
       ("Chris", "Redfield", 7, 6);
