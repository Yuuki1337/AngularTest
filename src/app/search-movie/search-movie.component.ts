import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormArray } from '@angular/forms'
import { FormBuilder,FormsModule} from '@angular/forms'
import { Validator } from '@angular/forms'
import { isRequiredValidator, rangeDateValidator } from './Validators'
@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {
  
  dateMin = 1900
  descList = ["Courte","Complète"]
  typeList = ["Série", "Films", "Episodes"]
  minDate = new Date(1900)
  maxDate = new Date()
  submitted = false
  

  filmListe = this.fb.group({
    title : this.fb.group({
      identifiant: ['', Validators.required],
      titre: ['',Validators.required],
    },
    {
      validators : isRequiredValidator('identifiant', 'titre')
    }),
    type : [this.typeList[0]],

    releaseDate: ['', [Validators.required, rangeDateValidator(this.minDate,this.maxDate)]],

    fiche: [''],
 
    
  })



  constructor(private fb : FormBuilder) { 


  }

  // addBoxes() {
  //   // create FormGroup with two FormControl
  //   const typeForm = this.fb.group({
  //     série: [''],
  //     film: [''],
  //     épisode:['']
  //   });
  //   // parse abstract control to FormArray
  //   const type = this.filmListe.get('type') as FormArray;
  //   // add new FormGroup to control 'payments'
  //   type.push(typeForm);
  //   console.log(type)

  // }


get identifiant() {
  return this.filmListe.get('identifiant');
}

get titre() {

  return this.filmListe.get('titre')
}

initFiche() {
  // Update FormGroup
  this.filmListe.patchValue({
    fiche: "Courte"
  })
}

onSubmit() {
  this.submitted = true
  console.log(this.filmListe.value as JSON)
}

  ngOnInit() {

  
    this.initFiche()

    this.filmListe.valueChanges
      // listen to value change
      .subscribe(value => {
        console.log('filmListe value changes : ', value);
});


  }

}
