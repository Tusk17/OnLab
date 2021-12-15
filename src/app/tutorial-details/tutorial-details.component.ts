import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import Servicio from 'src/models/servicio-m.model';
import  {ServicioService } from 'src/services/servicio.service';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent implements OnInit, OnChanges {

  @Input() tutorial?: Servicio;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentTutorial: Servicio = {
    fecha:'',
    telefono:''
  };
  message = '';

  constructor(private tutorialService: ServicioService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentTutorial = { ...this.tutorial };
  }

  updateTutorial(): void {
    const data = {
      fecha: this.currentTutorial.fecha,
      telefono: this.currentTutorial.telefono
    };

    if (this.currentTutorial.key) {
      this.tutorialService.update(this.currentTutorial.key, data)
        .then(() => this.message = 'Se actualizó la cita correctamente')
        .catch(err => console.log(err));
    }
  }

  deleteTutorial(): void {
    if (this.currentTutorial.key) {
      this.tutorialService.delete(this.currentTutorial.key)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The tutorial was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  }
}
