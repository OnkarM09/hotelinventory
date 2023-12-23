import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../room';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomListComponent implements OnInit, OnChanges {
  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
  ngOnInit(): void {

  }

  

  @Input() rooms: RoomList[] | null = [];
  @Input() title : string = '';

  @Output() selectedRoom = new EventEmitter<RoomList>();

  sendDataToParent(room: RoomList){
    this.selectedRoom.emit(room);
  }
  
}
