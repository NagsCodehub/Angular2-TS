import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/observable/throw';

@Injectable()

export class dataService{
    constructor(private http: Http){
        console.log("Service Initialized");
    }

    getPosts(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
        .map((res :Response)=>res.json())
        .catch(this._errorHandler);
    }
    _errorHandler(error:Response)
    {
     return Observable.throw(error||"Server Error");
    }
}