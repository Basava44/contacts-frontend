import { Component } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  load = true;
  constructor(private loader: LoaderService) {
    this.loader.loaderState.subscribe((res) => {
      this.load = res.show;
    });
  }
}
