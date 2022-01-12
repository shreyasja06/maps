import faker from 'faker';
import { Mappable } from './GoogleMap';
import { User } from './User';

export class Company implements Mappable {
  companyname: string;
  catchPhrase: string;
  client: Array<User>;
  location: {
    lat: number;
    long: number;
  }
  color: string = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";
  constructor() {
    this.companyname = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    // this.client.name = faker.name.firstName.toString().concat(' ' + faker.name.lastName.toString());
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      long: parseFloat(faker.address.longitude())
    }
  }
  markerContent(): string {
    return `<div>
    <h3>Company Name :${this.companyname}</h3>
    CatchPhrase :${this.catchPhrase}
    </div>
    `
  }
}
