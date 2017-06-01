import { Component } from '@angular/core';


@Component({
selector:'load-image',
templateUrl:'./image.component.html',
styleUrls:['./image.component.css']
})

export class ImageComponent
{
  // public title ='Random Im age Generator';
   public imagelink='http://lorempixel.com/400/200';
   public applyblue=true;
}