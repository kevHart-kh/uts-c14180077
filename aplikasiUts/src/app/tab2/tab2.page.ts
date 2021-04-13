import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from '../dataModel/note';
import { GlovarService } from '../service/glovar.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  judul:string
  isi:string
  tanggal:Date

  constructor(
    public globvar:GlovarService,
    private router: Router
  ) {}

  save(){
    var note = new Note(this.judul, this.isi, this.tanggal.toString() , "", "", 0)
    this.globvar.addNote(note)
    this.router.navigate(['/tabs/tab1'])
  }
}
