-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

--Database is called group-shopping-list

CREATE TABLE list (
	id SERIAL PRIMARY KEY,
	item varchar(80),
	quantity numeric not null,
	unit varchar(20),
    bought boolean DEFAULT false
);

INSERT INTO "list" 
	("item", "quantity", "unit") 
VALUES 
	('Apple', '35', 'lbs'), ('Bananas', '.5', 'bunch')
	;