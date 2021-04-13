import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from '../dataModel/note';
import { GlovarService } from '../service/glovar.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  detailNote : Note
  constructor(
    public globvar:GlovarService,
    private router: Router
  ) {
    this.detailNote = globvar.getDetailNote()
  }

  update(){
    this.globvar.updateNote(this.detailNote)
    this.router.navigate(['..'])
  }


  delete(){
    this.globvar.deleteNote(this.detailNote)
    this.router.navigate(['..'])
  }

}
