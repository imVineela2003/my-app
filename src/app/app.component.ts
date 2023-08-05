import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  calendarOptions: CalendarOptions = {};
  body: string = '';
  eventsArr: any[] = [
    { title: 'event 1', date: '2023-08-01', id: 'd' },
    { title: 'event 2', date: '2023-08-02', id: 'i' },
  ];
  modal: any = {};
  ngOnInit() {
    this.modal = new bootstrap.Modal('#eventmodal');
    this.calendarOptions = {
      plugins: [dayGridPlugin, interactionPlugin],
      initialView: 'dayGridMonth',
      dateClick: this.handleDateClick.bind(this), // MUST ensure `this` context is maintained
      events: this.eventsArr,
    };
  }
  handleDateClick(arg: { dateStr: string }) {
    // alert('date click! ' + arg.dateStr)
    this.body = "No events Present at the given date. Please create"
    this.eventsArr.forEach(event => {
      if (event.date  == arg.dateStr){
        this.body = event.title
      }
    })
    this.modal.show();
  }
}
