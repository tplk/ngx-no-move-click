import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-click-notifier',
  templateUrl: './click-notifier.component.html',
  styleUrls: ['./click-notifier.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClickNotifierComponent {
  @Input() text: string;
  clickCount = 0;

  increment() {
    this.clickCount++;
  }
}
