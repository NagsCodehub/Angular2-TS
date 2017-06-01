import { Component, OnInit } from '@angular/core';
import { dataService } from './../../Services/data.service';

@Component({
    moduleId: module.id,
    selector:'user',
    templateUrl:'./user.component.html',
    styleUrls:['./user.component.css'],
    providers:[dataService]
})

export class UserComponent implements OnInit{
    name:string;
    email:string;
    address:address;
    hobbies:string[];
    showHobbies:boolean;
    posts:Post[];
    errorMsg:string;


    constructor(private dataService: dataService){
        this.name='Nag kar';
        this.email='nag.kar@gmail.com',
        this.address={
            street: '12 Maint St',
            city: 'Atlanta',
            state: 'MA'
        },
        this.hobbies=['Gardening','Fitness','Tennis'];
        this.showHobbies=false;
       
    }
    ngOnInit()
    {
       this.dataService.getPosts().subscribe(posts=> this.posts = posts,
                                             postsError =>this.errorMsg = postsError)
    }

    toggleHobbies(){
       
       if (this.showHobbies==true)
       {
         this.showHobbies=false;
       }else
       {
          this.showHobbies=true;
       }
    }

   deleteHobby(index)
   {
       this.hobbies.splice(index,1);
   }
    addHobby(hobby)
    {
        console.log(hobby);
        this.hobbies.push(hobby)
    }
}

interface address{
    street:string,
    city:string;
    state:string;
}

interface Post{
    id: number;
    title: string;
    body: string;     
}