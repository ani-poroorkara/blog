import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable, map, tap } from 'rxjs';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  constructor(private scully: ScullyRoutesService) {}

  ngOnInit(): void {
    console.log('category');
    this.scully.available$.subscribe((routes) => console.log(routes));
  }

  links$ = this.scully.available$.pipe(
    map((routes: ScullyRoute[]) =>  
      routes.filter(
        (route: ScullyRoute) =>
        route.route.startsWith('/blog/') && route.sourceFile?.endsWith('.md')
      )
    ),
    map((blogs) => blogs.sort((a, b) => (a.date < b.date ? 1 : -1)))
  );
}
