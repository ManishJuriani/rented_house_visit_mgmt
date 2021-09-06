
-- adding data to owners table
INSERT INTO owners(name,email,phone) 
VALUES ('Michelle Gonzalvo','mgonzalvo0@ucoz.com','573-586-1117'),
('Ira Shotbolt','ishotbolt1@hud.gov','512-305-2108'),
('Carlie Caffery','ccaffery2@vk.com','388-428-4690'),
('Helaine Sandford','hsandford3@google.co.uk','383-379-3005');

-- adding data to realtors table
INSERT INTO realtors(name,email,phone)
VALUES ('Louisa Sharp','lsharp0@spotify.com','506-713-3229'),
('Ervin Gayter','egayter1@engadget.com','268-262-6532');

-- adding data to houses table
INSERT INTO houses(title,description,address,owner_id)
VALUES ('Jeanine Forsyth','Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.','3715 Westridge Circle',1),
('Fae Divine','Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.','37 Dwight Alley',2),
('Brandy Thirwell','Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.','16 Shoshone Lane',3),
('Shelli Brogini','Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.','344 Hermina Alley',4),
('Daron Stelle','In congue. Etiam justo. Etiam pretium iaculis justo.','8154 Bashford Hill',4),
('Stephanie Elderidge','Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.','20 Nelson Crossing',1),
('Joya McIlmorow','Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.','51 New Castle Crossing',1),
('Brooke Dyson','Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.','726 Bluestem Point',2),
('Morgen Watmough','Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.','95 Kings Avenue',4),
('Miner Cohrs','Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.','224 Derek Hill',3);

-- adding data to house_visit_availabilities table
INSERT INTO house_visit_availabilities(property_id,start_time,duration,day_of_week,status,realtor_id)
VALUES (5,'11:00',45,0,'AVAILABLE',null),
(8,'14:00',60,1,'AVAILABLE',null),
(7,'14:00',45,2,'AVAILABLE',null),
(9,'16:00',60,3,'AVAILABLE',null),
(4,'14:00',45,4,'AVAILABLE',null),
(5,'12:00',60,5,'AVAILABLE',null),
(3,'12:00',45,6,'AVAILABLE',null),
(2,'18:00',60,0,'AVAILABLE',null),
(1,'14:00',45,1,'AVAILABLE',null),
(1,'16:00',60,2,'AVAILABLE',null),
(10,'15:00',45,3,'AVAILABLE',null),
(4,'20:00',60,4,'AVAILABLE',null),
(2,'17:00',45,5,'AVAILABLE',null),
(9,'12:00',60,6,'AVAILABLE',null),
(10,'19:00',45,0,'AVAILABLE',null),
(6,'20:00',60,1,'AVAILABLE',null),
(10,'20:00',45,2,'AVAILABLE',null),
(2,'20:00',60,3,'AVAILABLE',null),
(5,'20:00',45,4,'AVAILABLE',null),
(7,'15:00',60,5,'AVAILABLE',null),
(5,'11:00',45,6,'AVAILABLE',null),
(10,'15:00',60,0,'AVAILABLE',null),
(6,'15:00',45,1,'AVAILABLE',null),
(3,'16:00',60,2,'AVAILABLE',null),
(2,'20:00',45,3,'AVAILABLE',null),
(9,'11:00',60,4,'AVAILABLE',null),
(4,'11:00',45,5,'AVAILABLE',null),
(3,'15:00',60,6,'AVAILABLE',null),
(1,'10:00',45,0,'AVAILABLE',null),
(1,'12:00',60,1,'AVAILABLE',null),
(1,'19:00',45,2,'AVAILABLE',null),
(2,'13:00',60,3,'AVAILABLE',null),
(3,'10:00',45,4,'AVAILABLE',null),
(8,'18:00',60,5,'AVAILABLE',null),
(4,'12:00',45,6,'AVAILABLE',null),
(4,'20:00',60,0,'AVAILABLE',null),
(8,'13:00',45,1,'AVAILABLE',null),
(6,'11:00',60,2,'AVAILABLE',null),
(10,'20:00',45,3,'AVAILABLE',null),
(1,'12:00',60,4,'AVAILABLE',null);
