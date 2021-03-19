import { Component, OnInit } from '@angular/core';

import { FormsModule, ReactiveFormsModule, FormControl, FormArray, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  nodes : any[];

  formModel : FormGroup;
  formModelB : FormGroup;

  name = 'Angular 5';

  ngOnInit() {
    this.nodes = [
      { id: 1, name: "Node 1" },
      { id: 2, name: "Node 2" },
      { id: 3, name: "Last node" }
    ]

    this.formModel = new FormGroup( {
      apply_to : new FormControl('')
      }
    );

    this.formModelB = new FormGroup( {
      apply_to : new FormControl('')
      }
    );
  }
}
