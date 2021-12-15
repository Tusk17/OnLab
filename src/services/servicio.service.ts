import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import Servicio from '../models/servicio-m.model';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private dbPath = '/citas';
  servicioRef: AngularFireList<Servicio>;
  constructor(private db: AngularFireDatabase) {
    this.servicioRef = db.list(this.dbPath);
    
  }
  getAll(email:string): AngularFireList<Servicio> {
    return this.db.list(this.dbPath, ref => ref.orderByChild('uid').equalTo(email));
  }

  create(servicio: Servicio): any {
    return this.servicioRef.push(servicio);
  }

  update(key: string, value: any): Promise<void> {
    return this.servicioRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.servicioRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.servicioRef.remove();
  }
}
