import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Photo } from 'app/models/photo';

@Injectable()
export class FlickrService {
  key = '';
  baseUrl = 'https://api.flickr.com/services/rest/';

  constructor(private http: Http) { };

  getPhotos(user_id: string, page = 1) {
    const method = 'flickr.people.getPhotos';

    const url = `${this.baseUrl}?method=${method}&api_key=${this.key}&user_id=${user_id}&per_page=12&page=${page}&format=json&nojsoncallback=1`;
    return this.http
      .get(url)
      .map(res => res.json())
      .map((val) => {
        if (val.stat === 'ok') {
          return val.photos.photo.map((photo: any) => {
            return new Photo(photo.title, `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`);
          })
        } else {
          return [];
        }
      });
  }

  getSearchResult(query: string) {
    const method = 'flickr.photos.search';

    const url = `${this.baseUrl}?method=${method}&api_key=${this.key}&tags=${query}&per_page=12&format=json&nojsoncallback=1`;
    return this.http
      .get(url)
      .map(res => res.json())
      .map((val) => {
        if (val.stat === 'ok') {
          return val.photos.photo.map((photo: any) => {
            return {
              url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`,
              title: photo.title
            }
          })
        } else {
          return [];
        }
      });
  }
}
