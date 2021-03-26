DROP TABLE IF EXISTS pet_types, continents, pet_groups, pet_surrender_applications,adoptable_pets, adoption_applications CASCADE;

CREATE TABLE pet_types(
id SERIAL PRIMARY KEY,
type VARCHAR(255) NOT NULL,
description TEXT
);

CREATE TABLE continents(
id SERIAL PRIMARY KEY,
name VARCHAR(255)NOT NULL
);

CREATE TABLE pet_groups(
id SERIAL PRIMARY KEY,
group_title VARCHAR(255),
continent_id INTEGER REFERENCES continents(id),
pet_type_id INTEGER REFERENCES pet_types(id)
);

CREATE TABLE pet_surrender_applications(
id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
phone_number VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
pet_name VARCHAR(255) NOT NULL,
pet_age INTEGER, 
pet_image_url TEXT NOT NULL,
vaccination_status BOOLEAN,
application_status VARCHAR(255) NOT NULL,
pet_type_id INTEGER REFERENCES pet_types(id)
);

CREATE TABLE adoptable_pets(
id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
image_url TEXT NOT NULL,
age INTEGER, 
vaccination_status BOOLEAN,
adoption_story TEXT NOT NULL,
adoption_status VARCHAR(255) NOT NULL,
pet_type_id INTEGER REFERENCES pet_types(id)
);

CREATE TABLE adoption_applications(
id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
phone_number VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
application_status VARCHAR(255) NOT NULL,
home_status VARCHAR(255) NOT NULL,
pet_id INTEGER REFERENCES adoptable_pets(id)
);

ALTER TABLE pet_groups DROP CONSTRAINT pet_groups_pet_type_id_fkey;
ALTER TABLE pet_groups DROP CONSTRAINT pet_groups_continent_id_fkey;
ALTER TABLE pet_surrender_applications DROP CONSTRAINT pet_surrender_applications_pet_type_id_fkey;
ALTER TABLE adoptable_pets DROP CONSTRAINT adoptable_pets_pet_type_id_fkey;
ALTER TABLE adoption_applications DROP CONSTRAINT adoption_applications_pet_id_fkey;
