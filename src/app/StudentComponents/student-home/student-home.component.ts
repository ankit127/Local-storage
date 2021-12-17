import { Component, OnInit } from '@angular/core';
import { StudentObj } from 'src/app/Interface/student-obj';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {

  studentList: StudentObj [];
  studentObj: StudentObj;
  SelectedIDs: any []= [];

  constructor() { 
    this.studentObj =  new StudentObj();
    this.studentList = [];
  }

ngOnInit(): void {
  const records = localStorage.getItem('studentList');
  if(records !== null){
    this.studentList = JSON.parse(records);
  }
}
selectID(id:any, event:any){
  this.SelectedIDs.push(id);
  console.log(this.SelectedIDs);
}


deletAll()
{
  let myId = this.SelectedIDs;

  const oldRecord =  localStorage.getItem('studentList');

  if(oldRecord !== null){
   const studentList = JSON.parse(oldRecord);
   studentList.splice(studentList.findIndex((a: any)=> a.studentRollNo == myId),1)
   localStorage.setItem('studentList', JSON.stringify(studentList));
   const records = localStorage.getItem('studentList');
   if(records !== null){
   this.studentList = JSON.parse(records);}
}


  myId.forEach((k: any) => {
     localStorage.removeItem(k)
  });
} 

displayStyle = "none";
displayStyle1 = "none";
  openPopup( ) {
    this.displayStyle = "block";
  }


  closePopup() {
    this.displayStyle = "none";
  }

  openPopup1( ) {
    this.displayStyle1 = "block";
  }
 closePopup1() {
    this.displayStyle1 = "none";
  }

  getNewStudentId(){
    const oldRecord =  localStorage.getItem('studentList');
    if(oldRecord !== null){
      const studentList = JSON.parse(oldRecord);
      return studentList.length + 1;
    } else{
      return 1;
    }
  }

  saveStudet(){
     const latestId = this.getNewStudentId();
     const oldRecord =  localStorage.getItem('studentList');
     this.studentObj.studentRollNo = latestId;
     if(oldRecord !== null){
      const studentList = JSON.parse(oldRecord);
      studentList.push(this.studentObj);
      localStorage.setItem('studentList', JSON.stringify(studentList));
      alert("New Student is added.Please refersh the page !!!");
     }else{
       const studentArray = [];
       studentArray.push(this.studentObj);
       localStorage.setItem('studentList', JSON.stringify(studentArray));

     }

  }

  Delete(id: any){
    const oldRecord =  localStorage.getItem('studentList');
    if(oldRecord !== null){
     const studentList = JSON.parse(oldRecord);
     studentList.splice(studentList.findIndex((a: any)=> a.studentRollNo == id),1)
     localStorage.setItem('studentList', JSON.stringify(studentList));
     alert("This id is deleted :"+id);
     const records = localStorage.getItem('studentList');
     if(records !== null){
     this.studentList = JSON.parse(records);
  }

    }
 }

}
