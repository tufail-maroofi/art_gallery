import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExhibitionHeaderComponent } from "./exhibition-header/exhibition-header.component";
import { UpcomingExhibitionComponent } from "./upcoming-exhibition/upcoming-exhibition.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ExhibitionHeaderComponent, ExhibitionHeaderComponent, UpcomingExhibitionComponent]
})
export class AppComponent {
  title = 'Art-Gallery';
}
