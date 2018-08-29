import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

interface MousePosition {
  x: number;
  y: number;
}

@Directive({selector: '[noMoveClick]'})
export class NoMoveClickDirective {
  /**
   * Distance in pixels how far can mouse cursor be moved.
   */
  @Input() moveThreshold = 10;

  @Output() public noMoveClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  /**
   * Distance in pixels mouse was moved while pressed.
   */
  @Output() public mouseMovedDistance: EventEmitter<number> = new EventEmitter<number>();

  private isMouseDown = false;
  private previousMousePosition: MousePosition;

  @HostListener('mousedown', ['$event'])
  public onMouseDown(event: MouseEvent): void {
    this.previousMousePosition = this.getMousePosition(event);
    this.isMouseDown = true;
  }

  @HostListener('click', ['$event'])
  public onClick(event: MouseEvent): void {
    if (this.isMouseDown === false) {
      return;
    }

    this.isMouseDown = false;
    if (this.shouldEmitEvent(this.getMousePosition(event))) {
      this.noMoveClick.next(event);
    }
  }

  private getMousePosition(event: MouseEvent): MousePosition {
    return {x: event.clientX, y: event.clientY};
  }

  private shouldEmitEvent(mousePosition: MousePosition): boolean {
    const mousePositionDiff: MousePosition = this.calcMousePositionDiff(this.previousMousePosition, mousePosition);
    const distance = this.calcHypotenuse(mousePositionDiff.x, mousePositionDiff.y);
    this.mouseMovedDistance.next(distance);

    // emit event regardless of position if moveThreshold is invalid
    if (typeof this.moveThreshold !== 'number') {
      return true;
    }

    return distance <= this.moveThreshold;
  }

  private calcMousePositionDiff(previous: MousePosition, current: MousePosition): MousePosition {
    return {
      x: this.calcValueDiff(previous.x, current.x),
      y: this.calcValueDiff(previous.y, current.y),
    };
  }

  private calcValueDiff(previous: number, current: number): number {
    return Math.abs(current - previous);
  }

  private calcHypotenuse(x: number, y: number): number {
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  }
}
