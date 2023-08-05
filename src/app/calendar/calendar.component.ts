import { Component ,ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';



@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent {
  @ViewChild('fullcalendar') fullcalendar!: FullCalendarComponent;


}
