CREATE DATABASE "fila_hospital"

CREATE TABLE "clientes" (
  id SERIAL PRIMARY KEY,
  name varchar(255) not NULL,
  cpf varchar(255) not null,
  telefone varchar(100) default NULL
);

CREATE TABLE "ficha" (
  id SERIAL PRIMARY KEY,
  id_usuario INTEGER REFERENCES clientes(id),
  sala varchar(10) NOT NULL,
  exame TEXT NOT NULL,
  andamento TEXT DEFAULT 'fila'
);

INSERT INTO clientes (id,name,cpf,telefone)
VALUES
  (1,'Cole Franklin','274.985.259','(73) 1962-3523'),
  (2,'Martha Burt','253.469.262','(63) 5662-7771'),
  (3,'Phillip Gay','665.622.655','(82) 8456-1153'),
  (4,'Mohammad Pickett','973.956.296','(54) 3666-9988'),
  (5,'Vladimir Griffith','164.857.163','(49) 1457-8234'),
  (6,'Robin Livingston','359.844.878','(73) 7327-5629'),
  (7,'Adrienne Gill','584.526.827','(54) 4884-3552'),
  (8,'Kyle Phillips','966.331.648','(55) 4665-8656'),
  (9,'Willa Byers','747.631.852','(33) 7823-4924'),
  (10,'Ramona Bullock','182.592.988','(34) 8327-4555');
INSERT INTO clientes (id,name,cpf,telefone)
VALUES
  (11,'Bernard Everett','257.476.487','(29) 3817-8365'),
  (12,'Sacha Gonzalez','472.639.151','(86) 3137-1666'),
  (13,'Beatrice Abbott','342.242.166','(53) 8476-2662'),
  (14,'Alana Holden','425.737.545','(85) 2843-9285'),
  (15,'Maggy Frank','358.769.959','(88) 3484-5814'),
  (16,'Demetrius Richardson','384.366.324','(52) 9673-4123'),
  (17,'Griffin Garrison','978.353.726','(55) 2829-1458'),
  (18,'Mercedes Reynolds','384.725.625','(73) 1258-3743'),
  (19,'Elaine Ellis','838.535.352','(52) 2786-3716'),
  (20,'Dominic Logan','992.285.283','(12) 7344-6891');
INSERT INTO clientes (id,name,cpf,telefone)
VALUES
  (21,'Kyla Chan','348.466.361','(56) 1686-5585'),
  (22,'Graham Burgess','237.533.822','(26) 1336-4145'),
  (23,'Clinton Pearson','673.768.415','(65) 9825-5447'),
  (24,'Aretha Beach','942.959.833','(83) 4668-9621'),
  (25,'Zenaida Chavez','565.462.834','(83) 7889-8774'),
  (26,'Maris Macias','973.184.778','(72) 3677-8675'),
  (27,'Darryl Hogan','417.457.539','(29) 7591-1562'),
  (28,'Alice Foster','328.387.564','(23) 5774-4686'),
  (29,'Fuller Gamble','127.946.871','(83) 4279-4837'),
  (30,'Rina Pollard','878.615.888','(63) 3185-7765');
INSERT INTO clientes (id,name,cpf,telefone)
VALUES
  (31,'Brendan Potts','846.268.583','(95) 2628-5255'),
  (32,'Kyra Branch','239.454.361','(74) 9469-3622'),
  (33,'Xenos Bowman','866.873.222','(37) 1739-6984'),
  (34,'Berk Winters','296.157.567','(52) 6263-3983'),
  (35,'Malik Nash','489.167.973','(29) 3782-8267'),
  (36,'Marah Reese','375.615.856','(32) 2782-3974'),
  (37,'Hope Roach','336.457.338','(16) 7338-3566'),
  (38,'Merrill Simon','947.656.789','(44) 8441-4337'),
  (39,'Orli Best','826.483.457','(56) 6433-3128'),
  (40,'Stuart Kim','542.443.646','(24) 5321-7627');
INSERT INTO clientes (id,name,cpf,telefone)
VALUES
  (41,'Adam Welch','738.356.893','(55) 8278-7975'),
  (42,'Noelle Gibbs','444.748.783','(87) 2293-2423'),
  (43,'Allegra Ellison','355.332.867','(25) 7567-5839'),
  (44,'Doris Thomas','343.265.799','(45) 3155-8316'),
  (45,'Vivien Leach','238.123.637','(55) 2451-7686'),
  (46,'Basia Howell','926.834.468','(37) 6478-8286'),
  (47,'Hoyt Barnes','727.568.543','(57) 1825-7452'),
  (48,'Mikayla Dunlap','435.574.716','(18) 3834-9137'),
  (49,'Dylan Patrick','897.822.555','(53) 6327-7836'),
  (50,'Garrett Phelps','339.229.285','(28) 4438-3922');
INSERT INTO clientes (id,name,cpf,telefone)
VALUES
  (51,'Quyn Mccullough','724.772.192','(48) 4581-6553'),
  (52,'Montana David','814.425.392','(55) 5836-9643'),
  (53,'Uriel Love','242.648.463','(55) 5783-3347'),
  (54,'Bo Richmond','825.625.717','(27) 2565-2554'),
  (55,'Mia Noble','232.473.154','(33) 2287-8546'),
  (56,'Cole Coleman','723.835.723','(38) 4195-8456'),
  (57,'Jared Schneider','266.912.133','(64) 6524-4851'),
  (58,'Maile England','222.877.352','(15) 3636-3763'),
  (59,'Demetria Andrews','336.167.743','(22) 1423-5666'),
  (60,'Rina Pacheco','341.716.366','(67) 2562-3746');
INSERT INTO clientes (id,name,cpf,telefone)
VALUES
  (61,'Vernon Nunez','249.156.236','(67) 8245-7723'),
  (62,'Dolan Decker','776.581.449','(64) 2255-5743'),
  (63,'Lana Estrada','621.376.565','(86) 5871-3137'),
  (64,'Ishmael Ballard','687.321.689','(93) 6293-2815'),
  (65,'Benjamin Mccall','468.843.995','(87) 7456-8343'),
  (66,'Clio Rodgers','284.795.144','(34) 5696-4365'),
  (67,'Octavius Faulkner','514.871.855','(64) 8491-5154'),
  (68,'Declan Shelton','637.673.844','(76) 5347-4815'),
  (69,'May Holloway','334.453.658','(96) 4883-5274'),
  (70,'Keefe French','342.888.647','(86) 6216-4367');
INSERT INTO clientes (id,name,cpf,telefone)
VALUES
  (71,'Cara Randolph','254.887.752','(25) 8565-6223'),
  (72,'Gloria Carver','742.616.266','(56) 4859-4876'),
  (73,'Mara Sanford','193.442.318','(57) 5568-7493'),
  (74,'Bethany Miller','335.554.568','(63) 6642-9829'),
  (75,'Jelani Anthony','968.985.616','(64) 3889-3895'),
  (76,'Gloria Watts','626.436.245','(73) 2747-3722'),
  (77,'Marshall Morris','728.986.656','(87) 7889-6538'),
  (78,'Alana Mcclain','353.462.841','(88) 5672-3943'),
  (79,'Daphne Cohen','257.487.245','(41) 7451-3839'),
  (80,'Sacha Rasmussen','624.721.872','(54) 5741-2899');
INSERT INTO clientes (id,name,cpf,telefone)
VALUES
  (81,'Helen Thornton','518.374.493','(73) 4444-6925'),
  (82,'Cody Conway','227.986.655','(54) 7359-7343'),
  (83,'Allen Blackburn','272.619.232','(33) 8839-3223'),
  (84,'Brady England','769.876.443','(96) 2472-4848'),
  (85,'Judith Boyd','349.783.378','(63) 8744-2451'),
  (86,'Aidan Estrada','834.966.394','(74) 5633-6251'),
  (87,'Bell Shelton','617.685.729','(48) 7444-8484'),
  (88,'Dexter York','492.875.355','(77) 5545-9395'),
  (89,'Eaton Daugherty','468.618.558','(57) 2649-3838'),
  (90,'Amal Ortega','232.365.916','(46) 5783-7138');
INSERT INTO clientes (id,name,cpf,telefone)
VALUES
  (91,'Ima Stanley','117.378.795','(88) 6698-3353'),
  (92,'Murphy Ratliff','612.973.673','(19) 3875-8485'),
  (93,'Kyra Wise','737.358.843','(59) 7588-2475'),
  (94,'Chester Goodman','198.224.586','(27) 5557-4662'),
  (95,'Alvin Padilla','223.151.455','(48) 7315-6967'),
  (96,'Philip Velasquez','257.597.989','(41) 3655-3829'),
  (97,'Phillip Jacobson','789.676.275','(28) 4587-4232'),
  (98,'Tatum Tucker','552.427.546','(88) 7485-5816'),
  (99,'Gretchen Jackson','688.134.472','(68) 4416-6244'),
  (100,'Dean Rasmussen','957.449.837','(98) 4552-7982');
