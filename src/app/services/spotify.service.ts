import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 
    console.log('Spotify service listo');
  }

  getQuery( query:string){
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers=new HttpHeaders({
      'Authorization': 'Bearer BQCoSm1ZTwEWgcmIUrzA3ASdmVhw6FWlKSovhm-Y0WvSO1bGI8h6xmiPQ7nFHgspcpdOU8taHpObe8Rk700'
    })
    return this.http.get(url,{headers});
  }

  getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20')
    .pipe( map(data=>{
      return data['albums'].items;
    }));
  }

  getArtista(termino:string){
    
      return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
      .pipe( map(data=>data['artists'].items));


  }
}
