import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit {

  public character$!: Observable<any>;

  constructor(private route: ActivatedRoute) { 
    this.character$ = route.data.pipe(
      tap(console.log)
    );
  }

  ngOnInit(): void {
  }

}
