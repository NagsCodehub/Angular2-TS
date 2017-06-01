import { Component,OnInit } from  '@angular/core';
import { dataService } from './../../Services/data.service';

@Component({
    selector:'about',
    templateUrl:'./about.component.html',
    providers:[dataService]
})
export class AboutComponent implements OnInit
{
    posts:Post[];
    errorMsg:string;
    constructor(private _dataService :dataService)
    {}

 ngOnInit()
    {
       this._dataService.getPosts().subscribe(posts=> this.posts = posts,
                                             postsError =>this.errorMsg = postsError)
    }
}

interface Post{
    id: number;
    title: string;
    body: string;     
}