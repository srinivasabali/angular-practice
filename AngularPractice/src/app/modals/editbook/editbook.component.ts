import {Component,Input,OnInit,Output,EventEmitter} from '@angular/core';
import { NgbActiveModal,NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls:['./editbook.component.scss']
})
export class EditComponent implements OnInit {

@Input() bookData:any;
@Input() booktitle:string;
data:any;
bookGroup:FormGroup;
formatvalues:any = [
  {name: 'kindle', abbrev: 'kindle'},
  {name: 'eBook', abbrev: 'eBook'},
  {name: 'MSReader', abbrev: 'MSReader'}
]
genrevalues:any = [
  {name: 'Adventure', abbrev: 'Adventure'},
  {name: 'Fantasy', abbrev: 'Fantasy'},
  {name: 'Drama', abbrev: 'Drama'}
]
val:any;
genreval:any;
@Output() emitEditedBook = new EventEmitter<any>(this.data);

publicationDate:any;
  constructor(public modal:NgbActiveModal) {

  }
ngOnInit(){
  console.log(this.data);
  this.data = this.bookData;

  this.formatvalues.forEach(
    (x,i) => {
      if(this.booktitle == "Add"){
        this.val = null;
      } else {
        if(x.abbrev.toLocaleLowerCase() == this.data.format.toLocaleLowerCase()) {
          this.val = this.formatvalues[i];
        } else{
           return;
        }
      }
    }
  );
  this.genrevalues.forEach(
    (x,i) => {
      if(this.booktitle == "Add"){
        this.genreval = null;
      } else{
        if(x.abbrev.toLocaleLowerCase() == this.data.genre.toLocaleLowerCase()) {
          this.genreval = this.genrevalues[i];
        } else{
           return;
        }
      }
    }
  );
   this.bookGroup = new FormGroup({
     name:new FormControl(this.data.name,Validators.required),
     location:new FormControl(this.data.location,Validators.required),
     email:new FormControl(this.data.email,Validators.required),
     mobile:new FormControl(this.data.mobile,Validators.required),
   });
   console.log(this.bookGroup);
}
fieldValue(fieldname){
  return this.bookGroup.controls[fieldname];
}
saveDetails(){

const str = {
  name: this.fieldValue('name').value,
  location: this.fieldValue('location').value,
  email: this.fieldValue('email').value,
  publisher: this.fieldValue('mobile').value,
 }
 this.modal.close('Close click');
 console.log(str);
 this.emitEditedBook.emit(str);
}

}
