CREATE TABLE Empresa (
    Nit VARCHAR(20) PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Direccion VARCHAR(200) NOT NULL,
    Telefono VARCHAR(20) NOT NULL
    Correo VARCHAR(100) NOT NULL
);

CREATE TABLE RegistroEmpresa (
    Nit VARCHAR(20) NOT NULL PRIMARY KEY,
    FechaRegistro DATE NOT NULL,
    TipoEmpresa VARCHAR(50) NOT NULL,
    FOREIGN KEY (Nit) REFERENCES Empresa(Nit)
);

CREATE TABLE Concesionario (
    Nit VARCHAR(20) NOT NULL PRIMARY KEY,
    FOREIGN KEY (Nit) REFERENCES RegistroEmpresa(Nit)
);

CREATE TABLE ServicioOficial (
    Nit VARCHAR(20) NOT NULL PRIMARY KEY,
    ConcesionarioNit VARCHAR(20) NOT NULL,
    FOREIGN KEY (Nit) REFERENCES RegistroEmpresa(Nit)
    FOREIGN KEY (ConcesionarioNit) REFERENCES Concesionario(Nit)
)

CREATE TABLE Persona (
    Cedula VARCHAR(20) PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Apellido VARCHAR(100) NOT NULL,
    Direccion VARCHAR(200) NOT NULL,
    Telefono VARCHAR(20) NOT NULL,
    Correo VARCHAR(100) NOT NULL
);

CREATE TABLE Vendedor (
    Cedula VARCHAR(20) NOT NULL PRIMARY KEY,
    RegistroEmpresaNit VARCHAR(20) NOT NULL,
    FOREIGN KEY (Cedula) REFERENCES Persona(Cedula),
    FOREIGN KEY (RegistroEmpresaNit) REFERENCES RegistroEmpresa(Nit)
);

CREATE TABLE Usuario (
    Cedula VARCHAR(20) NOT NULL PRIMARY KEY,
    NombreUsuario VARCHAR(50) NOT NULL,
    Contrasena VARCHAR(100) NOT NULL,
    Tipo VARCHAR(20) NOT NULL,
    FOREIGN KEY (Cedula) REFERENCES Persona(Cedula),
);

CREATE TABLE Marca (
    Nombre VARCHAR(50) PRIMARY KEY
);

CREATE TABLE Modelo (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    MarcaNombre VARCHAR(50) NOT NULL,
    Nombre VARCHAR(50) NOT NULL,
    Precio DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (MarcaNombre) REFERENCES Marca(Nombre)
);

CREATE TABLE Automovil (
    NumeroBastidor VARCHAR(20) PRIMARY KEY,
    ModeloId INT NOT NULL,
    Estado VARCHAR(20) NOT NULL,
    RegistroEmpresaNit VARCHAR(20) NOT NULL,
    FOREIGN KEY (ModeloId) REFERENCES Modelo (Id),
    FOREIGN KEY (RegistroEmpresaNit) REFERENCES RegistroEmpresa(Nit)
);

CREATE TABLE Color (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(50) NOT NULL
);

CREATE TABLE FichaTecnica (
    ModeloId INT NOT NULL PRIMARY KEY,
    Cilindraje DECIMAL(10, 2) NOT NULL,
    Potencia DECIMAL(10, 2) NOT NULL,
    Torque DECIMAL(10, 2) NOT NULL,
    Motor VARCHAR(50) NOT NULL,
    Combustible VARCHAR(50) NOT NULL,
    Carroceria VARCHAR(50) NOT NULL,
    Color INT NOT NULL,
    FOREIGN KEY (ModeloId) REFERENCES Modelo(Id)
    FOREIGN KEY (Color) REFERENCES Color(Id);
);

CREATE TABLE Accesorio (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(50) NOT NULL,
);

CREATE TABLE Equipamiento (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    ModeloId INT NOT NULL,
    AccesorioId INT NOT NULL,
    EsExtra BOOLEAN NOT NULL,
    Precio DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (ModeloId) REFERENCES Modelo(Id),
    FOREIGN KEY (AccesorioId) REFERENCES Accesorio(Id)
);

CREATE TABLE Venta (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    NumeroBastidor VARCHAR(20) NOT NULL UNIQUE,
    CedulaVendedor VARCHAR(20) NOT NULL,
    FechaEntrega DATE NOT NULL,
    FechaVenta DATE NOT NULL,
    MatriculaAsignada VARCHAR(20) NOT NULL,
    EsEncargo BOOLEAN NOT NULL,
    MetodoPago VARCHAR(50) NOT NULL,
    PrecioVenta DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (NumeroBastidor) REFERENCES Automovil(NumeroBastidor),
    FOREIGN KEY (CedulaVendedor) REFERENCES Vendedor(Cedula),
);

CREATE TABLE ExtraVenta (
    VentaId INT NOT NULL, 
    EquipamientoId INT NOT NULL,
    Precio DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY (VentaId, EquipamientoId),
    FOREIGN KEY (VentaId) REFERENCES Venta(Id),
    FOREIGN KEY (EquipamientoId) REFERENCES Equipamiento(Id)
);

CREATE TABLE Descuento (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(50) NOT NULL,
    Porcentaje DECIMAL(5, 2) NOT NULL, 
    Descripcion VARCHAR(200) NOT NULL
);

CREATE TABLE DescuentoAplicado (
    AutomovilId VARCHAR(20) NOT NULL,
    DescuentoId INT NOT NULL,
    PRIMARY KEY (AutomovilId, DescuentoId),
    FOREIGN KEY (AutomovilId) REFERENCES Automovil(NumeroBastidor),
    FOREIGN KEY (DescuentoId) REFERENCES Descuento(Id)
);
