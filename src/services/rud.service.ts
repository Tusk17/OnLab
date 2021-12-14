import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import Servicio from '../models/servicio-m.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export default class RudService {
  a:string ='';
  private clientesDB: AngularFireList<Servicio>;
  constructor(private db: AngularFireDatabase) { 
    this.clientesDB = this.db.list('/citas', (ref) =>
      ref.orderByChild('email').equalTo(this.a)
    );
  }
  getJugadores(): Observable<Servicio[]> {
    //? this.jugadoresDB ya tiene la base de datos.
    //? snapshotChanges obtiene la informacion en este momento.
    //? Obtiene los datos junto con la Key
    //? Con Pipe permite hacer modificaciones
    //? Con Map haremos un cambio, que por cada uno de los jugadores retornaremos la informacion,
    //? y se Agregue una Key.
    //? El formato de key siempre es $key.
    //? Payload es por donde esta viajando la data.
    return this.clientesDB.snapshotChanges().pipe(
      //?A veces hay que importar map manualmente de rsjs/operators
      map((changes) => {
        return changes.map((c) => ({
          $key: c.payload.key,
          ...c.payload.val(),
        }));
      })
    );
  }
}
