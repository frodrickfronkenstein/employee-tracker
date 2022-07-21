INSERT INTO departments (name)
VALUES
    ('Management'),
    ('Customer Service'),
    ('Sales'),
    ('Warehouse');

INSERT INTO roles (title, salary, departments_id)
VALUES
    ('Manager', "120000", 1),
    ('Supervisor', "100000", 1),
    ('Receptionist', "35000", 2),
    ('Complaints Clerk', "40000", 2),
    ('Salesperson', "50000", 3),
    ('Warehouse Worker', "35000", 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('William', 'Smith', 1, NULL),
    ('Paul', 'Smith', 2, 1),
    ('Kat', 'Fielding', 3, 1),
    ('Krystina', 'Fielding', 4, 1),
    ('John', 'Zupan', 5, 1),
    ('Mike', 'Smith', 6, 2);