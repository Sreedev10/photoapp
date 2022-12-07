
import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-viewallphoto',
  templateUrl: './viewallphoto.component.html',
  styleUrls: ['./viewallphoto.component.css']
})
export class ViewallphotoComponent implements OnInit {

  constructor(private pro:PhotoService) { this.dataFromPro()}

dataFromPro=()=>{
  this.pro.fetchphoto().subscribe(
    (response)=>{
      this.photo=response
    }
  )
}

  photo:any=[
   
  ]
  ngOnInit(): void {
  }

}

