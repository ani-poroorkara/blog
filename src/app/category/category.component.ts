import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(private scully: ScullyRoutesService) { }

  ngOnInit(): void {
    console.log("category")
    this.scully.available$.subscribe(routes => console.log(routes));
  }

  scullyPosts$ = this.scully.available$.pipe(
    map((routeList: ScullyRoute[]) => routeList.filter((route: ScullyRoute) => {
      if (!route.category) {
        return false;
      } else {
        return(route.category.includes("life"));
      };
    })),
    map((blogs) => blogs.sort((a, b) => (a.date < b.date ? 1 : -1)))
);

}
