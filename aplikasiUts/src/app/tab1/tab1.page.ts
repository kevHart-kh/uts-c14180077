import { Component } from '@angular/core';
import { GlovarService } from '../service/glovar.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  listNote

  constructor(public globvar:GlovarService) {
    this.listNote = globvar.getNote()
  }

}
