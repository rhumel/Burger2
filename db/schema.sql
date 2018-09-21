Create DATABASE burgers_db;

use  burgers_db;

CREATE TABLE burgers
(
    id int not null auto_increment,
    burger_name VARCHAR(30) not null,
    devoured boolean DEFAULT false,
    PRIMARY KEY(id)
);
