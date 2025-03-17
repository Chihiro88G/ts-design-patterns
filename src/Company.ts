import { faker } from "@faker-js/faker";

export class Company {
  companyName: string;
  catchPhase: string;
  location: {
    lat: number;
    lng: number;
  }
  color: string = 'blue';

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
  };

  markerContent(): string {
    return `Company Name: ${this.companyName}`;
  }
}