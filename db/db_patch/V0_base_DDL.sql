CREATE TABLE owners (
	id SERIAL NOT NULL,
	name TEXT NOT NULL,
	email varchar(256) NOT NULL,
	phone varchar(256) NOT NULL,
	CONSTRAINT owners_pk PRIMARY KEY (id)
);

CREATE TABLE realtors (
	id SERIAL NOT NULL,
	name TEXT NOT NULL,
	email varchar(256) NOT NULL,
	phone varchar(256) NOT NULL,
	CONSTRAINT realtors_pk PRIMARY KEY (id)
);

CREATE TABLE houses (
	id SERIAL NOT NULL,
	title TEXT NOT NULL,
	description TEXT NULL,
	address TEXT NOT NULL,
	owner_id INT NOT NULL,
	CONSTRAINT houses_pk PRIMARY KEY (id)
);

CREATE TABLE house_visit_availabilities (
	id SERIAL NOT NULL,
	property_id INT NOT NULL,
	start_time varchar(15) NOT NULL,
	duration INT NOT NULL,
	day_of_week INT NOT NULL,
	status TEXT NOT NULL,
	realtor_id INTEGER NULL,
	CONSTRAINT chk_day_of_week CHECK (day_of_week IN (0,1,2,3,4,5,6)),
	CONSTRAINT chk_status CHECK (status IN ('AVAILABLE','UNAVAILABLE')),
	CONSTRAINT house_visit_availabilities_pk PRIMARY KEY (id)
);

-----------------
-- CONSTRAINTS --
-----------------

-- foreign keys
ALTER TABLE houses ADD CONSTRAINT houses_owners
    FOREIGN KEY (owner_id)
    REFERENCES owners (id)   
;

ALTER TABLE house_visit_availabilities ADD CONSTRAINT house_visit_availabilities_realtors
    FOREIGN KEY (realtor_id)
    REFERENCES realtors (id)   
;

ALTER TABLE house_visit_availabilities ADD CONSTRAINT house_visit_availabilities_houses
    FOREIGN KEY (property_id)
    REFERENCES houses (id)   
;
