

CREATE TABLE usuarios (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE peliculas (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT,
    imagen VARCHAR(500),
    anio INT,
    genero VARCHAR(100),
    estrellas DECIMAL(2,1),
    CHECK (estrellas >= 0 AND estrellas <= 5),
    id_externo VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE favoritos (
    usuario_id INT UNSIGNED NOT NULL,
    pelicula_id INT UNSIGNED NOT NULL,
    PRIMARY KEY (usuario_id, pelicula_id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (pelicula_id) REFERENCES peliculas(id) ON DELETE CASCADE
);