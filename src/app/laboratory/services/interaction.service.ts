import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  isLoaded = new Subject<boolean>();

  change_language_english = new Subject<boolean>();

  change_language_french = new Subject<boolean>();

  change_language_spanish = new Subject<boolean>();

  open_development = new Subject<boolean>();

  open_datas = new Subject<boolean>();

  open_threed = new Subject<boolean>();

  open_arvr = new Subject<boolean>();

  open_socialNetworks = new Subject<boolean>();

  open_photography = new Subject<boolean>();

  open_movies = new Subject<boolean>();

  open_contactMe = new Subject<boolean>();

  switch_cameraAnaglyph = new Subject<boolean>();
}
