import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {

  artista:any={};
  topTracks:any[]=[]
  loadingArtist:boolean;

  constructor(private router:ActivatedRoute,
              private sportify:SpotifyService) { 

                this.loadingArtist=true;
                this.router.params.subscribe(params=>{
                  this.getArtista(params['id']);
                  this.getTopTracks(params['id']);
                });
              }



              getArtista(id:string){
                this.loadingArtist=true;
                this.sportify.getArtista(id).subscribe(artista=>{
                  this.artista=artista;
                  this.loadingArtist=false;
                })

              }
              getTopTracks(id:string){
                this.sportify.getTopTracks(id)
                .subscribe(topTracks=>{
                  console.log(topTracks);
                  this.topTracks=topTracks;
                });

              }



}
