import { forwardRef, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, Component } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'my-datepicker',
  template: `<input #input type="text">`
})
export class DatePickerComponent implements AfterViewInit {
  @ViewChild('input') input: ElementRef;

  ngAfterViewInit() {
    jQuery(this.input.nativeElement).datepicker();
  }
}