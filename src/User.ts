import faker from 'faker';
import { Mappable } from './GoogleMap';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    long: number;
  }
  color: string = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      long: parseFloat(faker.address.longitude())
    }
  }
  markerContent(): string {
    return `<div><h3>UserName :${this.name}</h3></div>`
  }
}