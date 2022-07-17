 # for start in terminal mysql -u root -p
## show databases
#### SHOW DATABASES;

## create database
#### create databse name of database;
**Work on a database**

```
USE masai;

```

**Show Tables**

```
SHOW TABLES;

```

**Create Table**

```
CREATE TABLE students (
    name varchar(255),
    email varchar(50),
    batch varchar(20)
);

```

**Table Information**

```
DESCRIBE students;

```

**Delete Table**

```
DROP TABLE students;

```

**Reset Table Data**

```
TRUNCATE TABLE students;

```

**Delete Database**

```
DROP DATABASE masai;

```

**Create Data**

```
INSERT INTO students ( name, email, batch)
VALUES ("Ajay", "ajay@gmail.com", "VIKINGS");

```

**Read Data**

```
SELECT * FROM students;
SELECT name FROM students where name = 'Ajay';

```

**Update Data**

```
UPDATE students SET batch = "Cohort-1";
UPDATE students SET batch = "Cohort-1" where name = 'Ajay';

```

**Delete Data**

```
DELETE FROM students;
DELETE FROM students where name = 'Ajay';

```

**Data Types**

`int` - A standard integer`char` - A fixed-length string`varchar` - A variable-length string`date` - A date value in `YYYY-MM-DD` format`time` - A time value in `hh:mm:ss` format`datetime` - A date and time value in `YYYY-MM-DD hh:mm:ss` format

**TABLE STRUCTURE**

```
+------------+-------------+------+-----+---------+-------+
| Field      | Type        | Null | Key | Default | Extra |
+------------+-------------+------+-----+---------+-------+
| id         | int(11)     | YES  |     | NULL    |       |
| name       | varchar(50) | YES  |     | NULL    |       |
| gender     | varchar(50) | YES  |     | NULL    |       |
| shirt_size | varchar(50) | YES  |     | NULL    |       |
| language   | varchar(50) | YES  |     | NULL    |       |
+------------+-------------+------+-----+---------+-------+

```

**WHERE CLAUSE**

```
/** Get all the users **/
SELECT * FROM user_data;

/** Get all the users where gender is Male **/
SELECT * FROM user_data WHERE gender = "Male";

/** Get all the users where gender is not Male **/
SELECT * FROM user_data WHERE NOT gender = "Male";
SELECT * FROM user_data WHERE gender != "Male";

/** Get all the users where gender is Male and language is Hindi **/
SELECT * FROM user_data WHERE gender = "Male" and language = "Hindi";

/** Get all the users where gender is Male and language is not Hindi **/
SELECT * FROM user_data WHERE gender = "Male" and NOT language = "Hindi";
SELECT * FROM user_data WHERE gender = "Male" and language != "Hindi";

/** Get all the users where shirt size is L or XL **/
SELECT * FROM user_data WHERE shirt_size = "L" or shirt_size = "XL";
SELECT * FROM user_data WHERE shirt_size IN ("L", "XL");

/** Combining multiple conditions **/
SELECT * FROM user_data WHERE (gender = "Male" and shirt_size = 'L') OR (gender = "Female" and shirt_size = 'M');
SELECT * FROM user_data WHERE ((gender = "Male" and shirt_size = 'L') OR (gender = "Female" and shirt_size = 'M')) AND language = "English";
SELECT * FROM user_data WHERE ((gender = "Male" and shirt_size = 'L') OR (gender = "Female" and shirt_size = 'M')) AND language IN ("English", "Hindi");

```

**WHERE OPERATORS**

```
SELECT * FROM students_marks WHERE maths > 50;
SELECT * FROM students_marks WHERE science >= 75;
SELECT * FROM students_marks WHERE english < 40;
SELECT * FROM students_marks WHERE maths <= 50;
/** Both the starting and ending values are included **/
SELECT * FROM students_marks WHERE maths BETWEEN 50 AND 75;

```

**COUNT FUNCTION**

```
SELECT COUNT(id) FROM students_marks WHERE gender = 'Male';
SELECT COUNT(id) FROM students_marks WHERE maths >= 75;

```

**ORDERING RESULTS**

```
SELECT * FROM students_marks WHERE gender = 'Male' ORDER BY maths ASC;
SELECT * FROM students_marks WHERE gender = 'Female' ORDER BY science DESC;
SELECT * FROM students_marks ORDER BY maths ASC, science DESC;

```

**LIMIT & OFFSET**

```
SELECT * FROM students_marks LIMIT 10;
/** The first value is offset (skip) count the second value is limit count **/
SELECT * FROM students_marks LIMIT 20,10;

```

**SUM FUNCTION**

```
SELECT SUM(maths) FROM students_marks WHERE gender = 'Male';
SELECT SUM(maths) FROM students_marks WHERE maths >= 75;

```

**AVG FUNCTION**

```
SELECT AVG(maths) FROM students_marks WHERE gender = 'Male';
SELECT AVG(maths) FROM students_marks WHERE maths >= 75;

```

**LIKE**

`%` and `_`

`%` - Any number or characters

`_` - Single character

```
SELECT * FROM students_marks WHERE name LIKE 'a%';
SELECT * FROM students_marks WHERE name LIKE '%a';
SELECT * FROM students_marks WHERE name LIKE '_a%';
SELECT * FROM students_marks WHERE name LIKE '%a_';
SELECT * FROM students_marks WHERE name LIKE '___a%';

```

**DISTINCT**

```
SELECT DISTINCT company FROM employee_salary;
SELECT DISTINCT company, departmement FROM employee_salary;
SELECT COUNT(DISTINCT company) FROM employee_salary;

```

**SUM & AVG**

```
SELECT AVG(maths) FROM students_marks;
SELECT AVG(maths), AVG(science) FROM students_marks;
SELECT SUM(salary) FROM employee_salary;

```

**OPERATIONS**

`+,-,*,/,%`

```
SELECT (maths+science+english) AS total_marks FROM students_marks;
SELECT (maths+science+english)/3 AS avg_marks FROM students_marks;

```

**Min & Max**

```
SELECT MIN(maths) FROM students_marks;
SELECT MAX(science) FROM students_marks;
SELECT MIN(maths) FROM students_marks WHERE class = "V";
SELECT MAX(science) FROM students_marks WHERE gender = "Female";

```

**Grouping**

COUNT, MAX, MIN, SUM, AVG

```
SELECT COUNT(*) FROM students_marks GROUP BY gender;
SELECT COUNT(*), class, section FROM students_marks GROUP BY class, section;
SELECT AVG(maths), class, section FROM students_marks GROUP BY class, section;

```

**Having**

Filters on aggregation

```
SELECT COUNT(*) as num,gender FROM students_marks GROUP BY gender HAVING num < 400;
SELECT COUNT(*) as num, class, section FROM students_marks GROUP BY class, section HAVING num > 20;
SELECT AVG(maths) as maths_avg, class, section FROM students_marks GROUP BY class, section HAVING maths_avg > 50;

```

**Primary Key & Auto Increment**

**Primary Key** - Unique Identifier

```
CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

```

```
CREATE TABLE countries (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

```

**Foreign Key**

```
CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    country_id int,
    PRIMARY KEY (id),
    FOREIGN KEY (country_id) REFERENCES countries(id)
);

```

### Data Types & Functions

**Numeric**

```
<https://dev.mysql.com/doc/refman/8.0/en/numeric-types.html>
<https://dev.mysql.com/doc/refman/8.0/en/numeric-functions.html>

```

**String**

```
<https://dev.mysql.com/doc/refman/8.0/en/string-types.html>
<https://dev.mysql.com/doc/refman/8.0/en/string-functions.html>

```

**Date & Time**