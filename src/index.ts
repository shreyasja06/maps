/// <reference types="@types/google.maps" />
import { User } from "./User";
import { Company } from "./Companay";
import { CustomMap } from "./GoogleMap";

// console.log(user);
const listOfClients = Array<User>();

for (let index = 0; index < 10; index++) {
  const user = new User();
  listOfClients.push(user);
}
const company = new Company();
company.client = listOfClients;
// console.log(company);
const customMap = new CustomMap('map');
customMap.addMarker(company);
listOfClients.forEach(user => {
  customMap.addMarker(user);
});
