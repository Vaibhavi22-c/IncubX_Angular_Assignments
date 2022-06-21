import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  dob: any;
  age : any;

  rightcontent={
    username:'',
    firstname:'',
    lastname:'',
    email:''
  }
  CalculateAge(){
    if(this.age){
      const convertAge = new Date(this.age);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);      
    }
  }

  save()
  {
    console.log(this.rightcontent);
  }
}
