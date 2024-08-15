import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-movei-list',
  templateUrl: './movei-list.component.html',
  styleUrl: './movei-list.component.scss'
})
export class MoveiListComponent implements OnInit  {


  constructor(private movieData:DataService){}

  movies: any[] = [];
  searchText:string = "";
  page = 1;
  itemsPerPage = 10;

  ngOnInit(): void {
    this.Movies();
  }

  Movies(){
    this.movieData.getTopMovies().subscribe(
      (result:any) => {
        this.movies = result['results'];
      },
      (error) => {
        console.error('Error fetching movies', error);
      }
    );
  }


}
