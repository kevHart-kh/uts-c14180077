import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Note } from '../dataModel/note';

@Injectable({
  providedIn: 'root'
})
export class GlovarService {
  private listNote = Array<Note>()

  private isiData : Observable<Note[]>
  private isiDataColl : AngularFirestoreCollection<Note>

  constructor(
    afs: AngularFirestore
  ) { 
    this.isiDataColl = afs.collection('dataCoba')
    this.isiData = this.isiDataColl.valueChanges()
  }

  addNote(_newNote: Note){
    this.isiDataColl.doc(_newNote.judul).set({
      judul:_newNote.judul,
      isiNote: _newNote.isiNote,
      gambar: _newNote.gambar,
      tanggal: _newNote.tanggal,
      nilaiNotes: _newNote.nilaiNotes
    })
  }

  getNote(){
    return this.isiData
  }

}
