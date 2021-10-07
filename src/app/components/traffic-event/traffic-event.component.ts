import { Component, Input, OnInit } from '@angular/core';
import { TrafficEvent } from 'src/app/models/traffic-event';

@Component({
  selector: 'app-traffic-event',
  templateUrl: './traffic-event.component.html',
  styleUrls: ['./traffic-event.component.css']
})
export class TrafficEventComponent implements OnInit {

  @Input() item: TrafficEvent;

  constructor() { }

  ngOnInit() {
  }

  plainDescription() {
    var html = this.item.descripcion;
    var div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText
  }
}
