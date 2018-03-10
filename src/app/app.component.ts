import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styles: [
    `
    .draggable {
      border: 1px solid #ccc;
      margin: 1rem;
      padding: 1rem;
      width: 6rem;
      cursor: move;
    }
    
    .drop-target {
      border: 1px dashed #ebebeb;
      margin: 1rem;
      padding: 1rem;
      width: 6rem;
    }
    `  
  ],
  template: `
    <div>
      <div [myDraggable]="{data: 'Draggable A'}" class="draggable">Draggable A</div>
      <div [myDraggable]="{data: 'Draggable B'}" class="draggable">Draggable B</div>
      <div myDropTarget (myDrop)="onDrop($event)" class="drop-target">Accepts Draggable A or B</div>
      <div [myDropTarget]="{zone:'another'}" class="drop-target">Can't drop here</div>
    </div>
  `,
})
export class AppComponent {
  onDrop(data: any) {
    alert(`dropped: ${data}`);
  }
}
