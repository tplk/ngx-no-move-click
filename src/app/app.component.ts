import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  moveThreshold = 10;
  moveThresholdControl = new FormControl(this.moveThreshold);
  movedDistance: number;

  constructor() {
    this.moveThresholdControl.valueChanges.subscribe(
      (value: string) => {
        const parsedValue = parseInt(value, 10);
        if (isNaN(parsedValue) === false) {
          this.moveThreshold = parsedValue;
        }
      },
    );
  }

  onMouseMoved(distance: number) {
    this.movedDistance = Math.floor(distance);
  }
}
