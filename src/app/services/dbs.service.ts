import { inject, Injectable } from '@angular/core';
import { collectionData, docData, Firestore, doc, query, setDoc, where } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';
import { Mascota } from '../class/mascota';
import { collection, deleteDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { Usuario } from '../class/usuario';

@Injectable({
  providedIn: 'root'
})
export class DBSService {
  private firestore: Firestore = inject(Firestore); 

  constructor() { }

  getCollectionChanges<tipo>(path:string){
    const refColeccion = collection(this.firestore, path);
    return collectionData(refColeccion) as Observable<tipo[]>;
  }

  getDocChanges<tipo>(enlace:string){
    const docR = doc(this.firestore, enlace)
    return docData(docR) as Observable<tipo[]>;
  }

  crearDoc(data:any, enlace:string){
    const docR = doc(this.firestore, enlace);
    return setDoc(docR, data);
  }

  crearDocID(data:any, enlace:string, idDoc:string){
    const docR = doc(this.firestore, `${enlace}/${idDoc}`);
    return setDoc(docR, data);
  }

  async updateDocID(data:any, enlace:string, idDoc:string){

  }

  crearIdDoc(){
    return uuidv4()
  }

  getMascotasByUserId(userId: string): Observable<any[]> {
    const refColeccion = collection(this.firestore, 'Mascotas');
    const q = query(refColeccion, where('userId', '==', userId));
    return collectionData(q) as Observable<any[]>;
  }

  getMascota(id: string): Observable<Mascota> {
    const refColeccion = collection(this.firestore, 'Mascotas');
    const q = query(refColeccion, where('id', '==', id));
    return collectionData(q, { idField: 'id' }).pipe(
      map(mascotas => mascotas[0]) 
    ) as Observable<Mascota>;
  }

  getUser(id: string): Observable<any[]> {
    const refColeccion = collection(this.firestore, 'Usuarios');
    const q = query(refColeccion, where('id', '==', id));
    return collectionData(q) as Observable<any[]>;
  }

  deleteDocumentID(enlace: string, idDoc: string) {
    const document = doc(this.firestore, `${enlace}/${idDoc}`);
    return deleteDoc(document);
  }


}
