import { Injectable } from '@angular/core';
import { InfocarService } from './infocar.service';

@Injectable({
  providedIn: 'root'
})
export class AvailableProvincesService {


  constructor(private inforcarService: InfocarService) { }

  ngOnInit() {
  }

}
