export class Note {
    judul:string
    isiNote: string
    tanggal: string
    nilaiNotes: string
    gambar: string

    constructor(_judul, _isiNote, _tanggal, _nilaiNotes, _gambar){
        this.judul=_judul
        this.isiNote = _isiNote
        this.tanggal = _tanggal
        this.nilaiNotes = _nilaiNotes
        this.gambar = _gambar
    }

}
