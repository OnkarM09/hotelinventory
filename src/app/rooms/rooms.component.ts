import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnChanges, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './room';
import { HeaderComponent } from '../header/header.component';
import { RoomServiceService } from '../room-service.service';
import { Head, Observable, Subject, catchError, map, of } from 'rxjs';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, AfterViewInit, AfterViewChecked {

  stream = new Observable(observer => {
    observer.next('User1');
    observer.next('User2');
    observer.next('User3');
    observer.complete();
  })

  constructor(private roomService: RoomServiceService) {
    //this.roomlist = this.roomService.getRooms();
    this.roomService.getRooms$.subscribe(rooms => {
      this.roomlist = rooms;
    })
  }

  @ViewChild(HeaderComponent) HeaderComponent!: HeaderComponent;
  @ViewChildren(HeaderComponent) HeaderChildren!: QueryList<HeaderComponent>;

  hotelName: string = 'Ritz carlton!';
  numberOfRooms = 8000;
  showRoom: boolean = false;

  rooms: Room = {
    totalRooms: 23,
    availableRooms: 10,
    bookedRooms: 13
  }
  roomlist: RoomList[] = [];
  ngOnInit(): void {
    this.referenceTitle.nativeElement.innerText = "Some text form native element";
    console.log(this.referenceTitle);
    console.log(this.roomService.getCart());

    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log("complete"),
      error: () => console.log("error")
    })
  }



  toggle() {
    this.showRoom = !this.showRoom;
  }
  roomListTitle = 'Roomlist Title';

  selectedRooom!: RoomList;
  showRoomSelected(room: RoomList) {
    this.selectedRooom = room;
  }
  addRoom() {
    const room: RoomList = {
      roomNumber: "1024",
      roomType: "Ultra Luxury",
      amenities: "All",
      price: 9999,
      photos: "string",
      checkinTime: new Date(),
      checkoutTime: new Date(),
      rating: 10
    }

    this.roomService.addRoom(room).subscribe(data => {
      this.roomlist = data;
    })
  }
  // addRoom(){
  //   const addedRoom : RoomList = {
  //     roomType : 'Normal',
  //     amenities : 'Low',
  //     price : "4000",
  //     roomNumber : 2300,
  //     checkinTime: new Date(),
  //     checkoutTime: new Date()
  //   }
  //   this.roomlist = [...this.roomlist, addedRoom];
  // }

  ngAfterViewInit(): void {
    console.log("view is initialized");
    this.HeaderComponent.headerTitle = 'Parents Title';
  }

  ngAfterViewChecked(): void {
    console.log(this.HeaderChildren)
    this.HeaderChildren.last.headerTitle = "Last title"

  }
  changeHeaderTitle() {
    this.HeaderComponent.headerTitle = 'After clicking chagnged the header title';
    this.referenceTitle.nativeElement.classList.add('big-font');
  }

  @ViewChild('refTitle', { static: true }) referenceTitle!: ElementRef;

  editRoom() {
    const room: RoomList = {
      roomNumber: "1102",
      roomType: "Ultra Luxury",
      amenities: "All",
      price: 9999,
      photos: "string",
      checkinTime: new Date(),
      checkoutTime: new Date(),
      rating: 10
    }

    this.roomService.editRoom(room).subscribe(data => {
      this.roomlist = data
    })
  }
  delteRoom() {
    this.roomService.deleteRoom("1").subscribe(data => {
      this.roomlist = data;
    })
  }

  getPhotos() {
    this.roomService.getPictures().subscribe(event => {
      switch (event.type) {
        case HttpEventType.Sent:
          {
            console.log("Request is send");
            break;
          }
        case HttpEventType.ResponseHeader: {
          console.log("success");
          break;
        }
        case HttpEventType.DownloadProgress: {
          console.log("content is downloaded");
        }
      }
    });
  }

  error$ = new Subject<string>();

  getError$ = this.error$.asObservable();

  stream$ = this.roomService.getRooms$.pipe(
    catchError((err) => {
      this.error$.next(err.message);
      return of([]);
    })
  )

  stream$Length = this.roomService.getRooms$.pipe(
    map(room => room.length)
  )
}
