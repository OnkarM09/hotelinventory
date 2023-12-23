import { Injectable } from '@angular/core';
import { RoomList } from './rooms/room';
import { HttpClient, HttpClientModule, HttpHeaders, HttpRequest } from '@angular/common/http';
import { share, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {

  constructor(private http: HttpClient) { }

  // roomList : RoomList[] = [
  //   {
  //     roomType : 'Deluxe',
  //     amenities : 'All',
  //     price : "100000",
  //     roomNumber : 1024,
  //     checkinTime: new Date(),
  //     checkoutTime: new Date()

  //   },
  //   {
  //     roomType : 'Standard',
  //     amenities : 'Some',
  //     price : "60000",
  //     roomNumber : 1000,
  //     checkinTime: new Date(),
  //     checkoutTime: new Date()

  //   }
  // ]

  getRooms(){
    // const httpHeader = new HttpHeaders({'token': 'Infinity 2022'});
    return this.http.get<RoomList[]>("/api/rooms",{
      // headers: httpHeader
    });
  }

  getCart(){
    return this.http.get("https://dummyjson.com/carts");
  }

  addRoom(room : RoomList){
    return this.http.post<RoomList[]>('api/rooms', room);
  }
  editRoom(room : RoomList){
    return this.http.put<RoomList[]>(`api/rooms/${room.roomNumber}`, room);
  }

  deleteRoom(id: string){
    return this.http.delete<RoomList[]>('api/rooms/${id}');
  }

  getPictures(){
    const photos = new HttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/photos',
      {
        reportProgres: true
      }
    );
    return this.http.request(photos);
  }

  getRooms$ = this.http.get<RoomList[]>('api/rooms').pipe(
    shareReplay(1)
  )


}
