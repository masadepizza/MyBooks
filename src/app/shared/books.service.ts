import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})

export class BooksService {
private books: Book[] = [];

  constructor() 
  {this.books.push(
    new Book(7409, 0, "La casa de los espíritus", "Realismo mágico", "Isabel Allende", "12", "../../../assets/img/casaespiritus.jpg"),
    new Book(43, 306, "Al Faro", "Novela", "Virginia Woolf", "14", "../../../assets/img/alfaro.jpeg"),
    new Book(3945, 64, "Balada de pájaros cantores y serpientes", "Ficción", "Suzanne Collins", "19", "../../../assets/img/baladapajaros.jpg"),
    new Book(9, 32, "The Bluest Eye", "Bildungsroman", "Toni Morrison", "14", "../../../assets/img/thebluesteye.jpg")
  )}; //añadimos aqui el array de libros para que aparezca en la pagina books. //se guarda en el servicio y dsps se le llama en books

  //metodos publicos del servicio
  getAll(): Book[]{
    return this.books
  }
  //para que salgan books de array //lo llamamos en books.ts xra q salga el array

  getOne(id_book: number): Book{
    return this.books.find(book => book.id_book == id_book)
  }
  //para buscar un book x idbook //lo llamamos en books para buscador x idbook

  add(book: Book): void{
    this.books.push(book);
  }
  //para añadir 1 libro //lo llamamos en books.ts para añadir libro al array

  edit(book: Book): boolean{
    let index = this.books.findIndex(libro => libro.id_book == book.id_book);
    if(index != -1){
      this.books[index] = book;
      return true;
    }else{
      return false;
    }
  }
  //para editar libro //lo llamamos en updatebook para editar libro

  delete(id_book: number): boolean{
    let index = this.books.findIndex(book => book.id_book == id_book);
    if(index != -1){
      this.books.splice(index, 1);
      return true
    }else{
      return false;
    }
  }
  //para eliminar libro //llamamos en books para eliminar libro
}
