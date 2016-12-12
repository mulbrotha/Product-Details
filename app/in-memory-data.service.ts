import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{

  createDb(){
    let products = [
      { id: 101, name: 'Cisco Router' },
      { id: 102, name: 'MicroSoft Server' },
      { id: 103, name: 'Apple Server' },
      { id: 104, name: 'IBM Server' },
      { id: 105, name: 'Yahoo Server' },
      { id: 106, name: 'Google Server' }
    ];
    return {products};
  }
}
