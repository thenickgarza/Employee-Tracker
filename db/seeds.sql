INSERT INTO department (name)
VALUES
('Logistics'),
('Corporate'),
('Management');

INSERT INTO role (title, salary, department_id)
VALUES
('Driver', 32000, 1),
('Dispatch', 35000, 3),
('Assistant Manager', 37000, 3),
('Manager', 42000, 3),
('Human Resources', 40000, 3),
('Owner', 100000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Bob', 'Jones', 1, NULL),
('Nick', 'Garza', 1, NULL),
('Joey', 'Rodriguez', 2, NULL),
('Antoinette', 'Silva', 4, 23443),
('Aryn', 'Hatfield', 5, NULL),
('John', 'Amazon', 6,  3454);