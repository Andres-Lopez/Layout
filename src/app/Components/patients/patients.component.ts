import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { PatientService } from 'src/app/Services/Patient.service';
import { Patient } from 'src/app/Services/Patient.service';
import { faPrint, faCalendarAlt,faTimes  } from '@fortawesome/free-solid-svg-icons';

import {NgbModal, ModalDismissReasons,NgbModalRef} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PatientsComponent implements OnInit {
  @ViewChild("Validate") modalValidate:NgbModalRef;

  closeResult = '';


  patients: Patient[];
  allMode: string;
  checkBoxesMode: string;

  icoPrint=faPrint;
  icoCalendar= faCalendarAlt;
  icoTimes = faTimes;

  constructor(private service:PatientService,private modalService: NgbModal) {
    this.patients = this.service.getCustomers();
    this.allMode = 'allPages';
    this.checkBoxesMode = 'onClick'
  }


  getPatientByFilter(Name){
    this.patients = this.service.getCustomersByName(Name.value);
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', windowClass: 'custom-modal'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
  }

}
