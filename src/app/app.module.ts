import { BrowserModule }       from '@angular/platform-browser';
import { NgModule }     from '@angular/core';
import { AppComponent } from './app.component';
import { DraggableDirective } from './draggable.directive';
import { DropTargetDirective } from './drop-target.directive';
import { DragService } from './drag.service';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, DraggableDirective, DropTargetDirective ],
  providers: [ DragService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}