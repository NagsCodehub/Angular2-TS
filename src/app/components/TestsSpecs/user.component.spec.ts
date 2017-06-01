import { UserComponent } from './../UserDetail/user.component';
import {dataService} from './../../Services/data.service';
import {TestBed ,inject } from '@angular/core/testing';

describe('dataService Tests',()=>{

    beforeEach(()=>{
        TestBed.configureTestingModule({providers :[dataService]})
    });
    it('should return data from jsonplaceholder site', inject([dataService],(dataService)=>{
        expect(dataService).toBeDefined();   
    }));
});