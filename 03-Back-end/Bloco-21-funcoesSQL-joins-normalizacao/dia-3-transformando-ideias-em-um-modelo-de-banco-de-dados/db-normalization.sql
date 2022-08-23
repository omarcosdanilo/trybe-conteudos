CREATE SCHEMA IF NOT EXISTS normalization;

USE normalization;

CREATE TABLE funcionario (
	funcionario_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    sobrenome VARCHAR(100) NOT NULL,
    email VARCHAR(50) NOT NULL,
    telefone VARCHAR(50) NOT NULL,
    data_cadastro DATETIME
);

CREATE TABLE setor (
	setor_id int AUTO_INCREMENT PRIMARY KEY,
    setor VARCHAR(100) NOT NULL
);

CREATE TABLE funcionario_setor (
	funcionario_id INT NOT NULL,
    setor_id INT NOT NULL,
    FOREIGN KEY (funcionario_id) references funcionario(funcionario_id),
    FOREIGN KEY (setor_id) references setor(setor_id)
);
