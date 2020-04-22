import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Patient {
  ID: number;
  Nombre: string;
  Direccion: string;
  Ciudad: string;
  Estado: string;
  Postal: number;
  Telefono: string;
  Fax: string;
}

export class PatientService {

  patients: Patient[] = [{
      "ID": 1,
      "Nombre": "Lucio Martin",
      "Direccion": "702 SW 8th Street",
      "Ciudad": "Bentonville",
      "Estado": "Arkansas",
      "Postal": 72716,
      "Telefono": "(800) 555-2797",
      "Fax": "(800) 555-2171"
  }, {
      "ID": 2,
      "Nombre": "Pedro Maria del Rio",
      "Direccion": "2455 Paces Ferry Road NW",
      "Ciudad": "Atlanta",
      "Estado": "Georgia",
      "Postal": 30339,
      "Telefono": "(800) 595-3232",
      "Fax": "(800) 595-3231"
  }, {
      "ID": 3,
      "Nombre": "Perez Rodrigo",
      "Direccion": "1000 Nicllet Mall",
      "Ciudad": "Minneapolis",
      "Estado": "Minnesota",
      "Postal": 55403,
      "Telefono": "(612) 304-6073",
      "Fax": "(612) 304-6074"
  }, {
      "ID": 4,
      "Nombre": "Felix Pazos",
      "Direccion": "999 Lake Drive",
      "Ciudad": "Issaquah",
      "Estado": "Washington",
      "Postal": 98027,
      "Telefono": "(800) 955-2292",
      "Fax": "(800) 955-2293"
  }, {
      "ID": 5,
      "Nombre": "Octavio dos Santos",
      "Direccion": "3333 Beverly Rd",
      "Ciudad": "Hoffman EEstados",
      "Estado": "Illinois",
      "Postal": 60179,
      "Telefono": "(847) 286-2500",
      "Fax": "(847) 286-2501"
  }, {
      "ID": 6,
      "Nombre": "Hipolito Quintana",
      "Direccion": "200 Wilmot Rd",
      "Ciudad": "Deerfield",
      "Estado": "Illinois",
      "Postal": 60015,
      "Telefono": "(847) 940-2500",
      "Fax": "(847) 940-2501"
  }, {
      "ID": 7,
      "Nombre": "Valentin Carpio",
      "Direccion": "400 Commerce S",
      "Ciudad": "Fort Worth",
      "Estado": "Texas",
      "Postal": 76102,
      "Telefono": "(817) 820-0741",
      "Fax": "(817) 820-0742"
  }, {
      "ID": 8,
      "Nombre": "Javier Arellano",
      "Direccion": "2200 Kensington Court",
      "Ciudad": "Oak Brook",
      "Estado": "Illinois",
      "Postal": 60523,
      "Telefono": "(800) 955-2929",
      "Fax": "(800) 955-9392"
  }, {
      "ID": 9,
      "Nombre": "Carmelo Corral",
      "Direccion": "7601 Penn Avenue South",
      "Ciudad": "Richfield",
      "Estado": "Minnesota",
      "Postal": 55423,
      "Telefono": "(612) 291-1000",
      "Fax": "(612) 291-2001"
  }, {
      "ID": 10,
      "Nombre": "Maximino Aragon",
      "Direccion": "263 Shuman Blvd",
      "Ciudad": "Naperville",
      "Estado": "Illinois",
      "Postal": 60563,
      "Telefono": "(630) 438-7800",
      "Fax": "(630) 438-7801"
  }, {
      "ID": 11,
      "Nombre": "Adria Rosado",
      "Direccion": "1201 Elm Street",
      "Ciudad": "Dallas",
      "Estado": "Texas",
      "Postal": 75270,
      "Telefono": "(214) 854-3000",
      "Fax": "(214) 854-3001"
  }, {
      "ID": 12,
      "Nombre": "Nabil Manrique",
      "Direccion": "1000 Lowes Blvd",
      "Ciudad": "Mooresville",
      "Estado": "North Carolina",
      "Postal": 28117,
      "Telefono": "(800) 445-6937",
      "Fax": "(800) 445-6938"
  }];

  constructor() { }

  getCustomers() {
    return this.patients;
  }

  getCustomersByName(Name){
    let patientFilter = [];
    for(let i = 0; i < this.patients.length; i++){
      let element = this.patients[i];
      if(element.Nombre.includes(Name)){
        patientFilter.push(element);
      }
    }
    return patientFilter;
  }



}
