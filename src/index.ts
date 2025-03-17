/// <reference types="@types/google.maps" />

import { Company } from './Company';
import { User } from './User';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

// User implements Mappable (optional but to make sure TS and developers understand User is considered mappable)
customMap.addMarker(user);
// Company doesn't implement Mappable but satifies the interface. so no err here
customMap.addMarker(company);
