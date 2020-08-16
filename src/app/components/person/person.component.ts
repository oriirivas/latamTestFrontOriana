import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/components/person/person-model';
import { BirthdayServiceService } from '../../services/birthday-service.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  public person: Person = new Person();
  public title = 'Información sobre tu cumpleaños';
  constructor(private birsthdayService: BirthdayServiceService) { }

  ngOnInit(): void {
  }
  /**
   * Set person's names
   * guarda el nombre de la persona
   * @param value  person name
   */
  setName(value: string) {
    this.person.name = value;
  }
  /**
   * Set person's birthday date.
   * Guarda la fecha de nacimiento de la persona.
   * @param value person birthday date
   */
  public setBirthdayDate(value: Date) {
    this.person.birthdayDate = value.toString();
  }
  /**
   * Use birsthdayService to get age, how many
   * days until his birthday, first name and last name,
   * and if today is his birthay get a random poem
   * Usa el servicio birsthdayService para trae la edad,
   * el primer nombre, primer apellido y cuanto falta
   * para su cumpleaños, si es su cumpleaños tambien
   * trae un poema aleatorio.
   */
  public getBirthday() {
    this.birsthdayService.getBirthDay(this.person)
    .subscribe((response: Person) => {
      this.person = response;
      // tslint:disable-next-line: no-unused-expression
      this.person.poems ? this.title = 'Feliz cumpleaños' : '';
    });
  }
  /**
   * Delete form information.
   * Borra la informacion del formulario.
   */
  public clean() {
    this.person = new Person();
  }

}
