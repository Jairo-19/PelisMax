//Aqui se define las entidades de negocio
//En este es básicamente la clase/interfaz de una película con sus propiedades:

export class Pelicula {
    id: number;
    titulo: string;
    descripcion: string;
    imagen: string;
    duracion: number;
    anio: number;
    estrellas: number;
    id_externo: string;

    constructor(id: number, titulo: string, descripcion: string, imagen: string, duracion: number, anio: number, estrellas: number, id_externo: string) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.duracion = duracion;
        this.anio = anio;
        this.estrellas = estrellas;
        this.id_externo = id_externo;
    }   
}