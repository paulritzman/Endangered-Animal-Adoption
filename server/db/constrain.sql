ALTER TABLE pet_groups ADD FOREIGN KEY (pet_type_id) REFERENCES pet_types(id);
ALTER TABLE pet_groups ADD FOREIGN KEY (continent_id) REFERENCES continents(id);
ALTER TABLE pet_surrender_applications ADD FOREIGN KEY (pet_type_id) REFERENCES pet_types(id);
ALTER TABLE adoptable_pets ADD FOREIGN KEY (pet_type_id) REFERENCES pet_types(id);
ALTER TABLE adoption_applications ADD FOREIGN KEY (pet_id) REFERENCES adoptable_pets(id);