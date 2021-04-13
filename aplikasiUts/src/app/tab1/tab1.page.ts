import { Component } from '@angular/core';
import { GlovarService } from '../service/glovar.service';
import { Router } from '@angular/router';
import { Note } from '../dataModel/note';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  listNote

  constructor(
    public globvar:GlovarService,
    private router: Router) {
    this.listNote = globvar.getNote()
  }

  openDetail(_note: Note) {
    // alert(_note)
    this.globvar.setDetailNote(_note)
    this.router.navigate(['/detail'])
  }
}
