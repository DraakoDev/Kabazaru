CREATE TABLE Concesionario (
    nif varchar(20) PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    telefono VARCHAR(20) NOT NULL
);

CREATE TABLE ServicioOficial (
    nif varchar(20) PRIMARY KEY,
    consesionario_nif varchar(20) NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    FOREIGN KEY (consesionario_nif) REFERENCES Concesionario(nif)
);

CREATE TABLE Marca (
    nombre VARCHAR(255) PRIMARY KEY
);

CREATE TABLE MarcaConcesionario (
    marca_nombre VARCHAR(255) NOT NULL,
    concesionario_nif VARCHAR(20) NOT NULL,
    PRIMARY KEY (marca_nombre, concesionario_nif),
    FOREIGN KEY (marca_nombre) REFERENCES Marca(Nombre),
    FOREIGN KEY (concesionario_nif) REFERENCES Concesionario(nif)
);

CREATE TABLE Modelo (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre_marca VARCHAR(255) NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    ficha_tecnica_id INT NOT NULL,
    FOREIGN KEY (nombre_marca) REFERENCES Marca(nombre)
);

CREATE TABLE FichaTecnica (
    id_modelo INT PRIMARY KEY,
    cilindraje varchar(20) NOT NULL,
    potencia varchar(20) NOT NULL,
    torque varchar(20) NOT NULL,
    motor varchar(255) NOT NULL,
    combustible varchar(255) NOT NULL,
    carroceria varchar(255) NOT NULL,
    color varchar(255) NOT NULL,
    FOREIGN KEY (id_modelo) REFERENCES Modelo(id)
);

CREATE TABLE Accesorio (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
);

CREATE TABLE Equipamiento (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_modelo INT NOT NULL,
    accsorio_id INT NOT NULL,
    es_extra BOOLEAN NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (id_modelo) REFERENCES Modelo(id),
    FOREIGN KEY (accsorio_id) REFERENCES Accesorio(id)
);