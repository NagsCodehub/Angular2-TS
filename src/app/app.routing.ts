import {ModuleWithProviders,NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {UserComponent} from './components/UserDetail/user.component';
import {AboutComponent} from './components/About/about.component';
import {ImageComponent} from './components/Images/image.component';
import {AppComponent} from './components/Dashboard/app.component';

const appRoutes:Routes=[
    {
        path:'',
        component:ImageComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'image',
        component:ImageComponent
    },
    {
        path:'user',
        component:UserComponent
    }
];

@NgModule({
    imports :[
        RouterModule.forRoot(appRoutes)
    ],
    exports :[
       RouterModule
    ]
})

export class AppRoutingModule{}

export const routingComponents=[AppComponent,AboutComponent,ImageComponent,UserComponent]
   
//export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);