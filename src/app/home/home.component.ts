import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  
  constructor(private scully: ScullyRoutesService) {}

  ngOnInit() {
    // debug current pages
    this.scully.available$.subscribe(routes => console.log(routes));
  }

  $blogPosts = this.scully.available$.pipe(
    map((routes: ScullyRoute[]) =>  
      routes.filter(
        (route: ScullyRoute) =>
        route.route.startsWith('/blog/') && route.sourceFile?.endsWith('.md')
      )
    ),
    map((blogs) => blogs.sort((a, b) => (a.date < b.date ? 1 : -1)))
  );

}
