import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Note } from '../dataModel/note';

@Injectable({
  providedIn: 'root'
})
export class GlovarService {
  private detailNote:Note

  private isiData : Observable<Note[]>
  private isiDataColl : AngularFirestoreCollection<Note>

  constructor(
    public afs: AngularFirestore
  ) { 
    this.isiDataColl = afs.collection('dataCoba')
    this.isiData = this.isiDataColl.valueChanges()
  }

  addNote(_newNote: Note){
    var idMax = 0
    this.isiData.forEach(_listNotes =>{
      _listNotes.forEach(_note => {
        if (idMax < _note._id){
          idMax = _note._id
        }
      })
    })
    idMax++
    
    alert(idMax+1)

    _newNote._id = idMax

    this.updateNote(_newNote)
  }

  deleteNote(_newNote: Note) {
    this.isiDataColl.doc(_newNote._id.toString()).delete()
  }

  updateNote(_newNote: Note) {
    this.isiDataColl.doc(_newNote._id.toString()).set({
      judul: _newNote.judul,
      isiNote: _newNote.isiNote,
      gambar: _newNote.gambar,
      tanggal: _newNote.tanggal,
      nilaiNotes: _newNote.nilaiNotes,
      _id: _newNote._id
    })
  }

  getNote(){
    return this.isiData
  }


  //detail note
  setDetailNote(_note: Note){
    this.detailNote = _note
  }

  getDetailNote(){
    return this.detailNote
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
