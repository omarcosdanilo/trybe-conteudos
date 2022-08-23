USE albuns;

CREATE TABLE artista (
	artist_id int primary key AUTO_INCREMENT,
    nome VARCHAR(50)
) ENGINE=InnoDB;

CREATE TABLE estilomusical (
	estilo_id int primary key AUTO_INCREMENT,
    nome VARCHAR(50) not null
) ENGINE=InnoDB;

CREATE TABLE album (
	album_id int primary key AUTO_INCREMENT,
    artist_id int not null,
    titulo varchar(100) not null,
    preco decimal(5,2) not null,
    estilo_id int not null ,
    FOREIGN KEY (artist_id) REFERENCES artista(artist_id),
    FOREIGN KEY (estilo_id) REFERENCES estilomusical(estilo_id)
) ENGINE=InnoDB;