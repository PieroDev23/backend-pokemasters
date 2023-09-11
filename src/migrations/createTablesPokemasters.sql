CREATE TABLE Users (
    user_id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    first_name varchar(255),
    last_name varchar(255),
    username varchar(255),
    nickname varchar(255),
    password varchar(255),
    profile_img varchar(255),
    email varchar(255) UNIQUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE teams (
    team_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    team_name VARCHAR(255),
    user_id INT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE team_members (
    member_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    pkmn_id INT,
    team_id INT,
    slot_number INT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (pkmn_id) REFERENCES pokemons(pkmn_id),
    FOREIGN KEY (team_id) REFERENCES teams(team_id)
);

CREATE TABLE regions(
    region_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(255),
    entries INT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE pokemons(
    pkmn_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(255),
    data JSON,
    region_id INT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (region_id) REFERENCES regions(region_id)
);