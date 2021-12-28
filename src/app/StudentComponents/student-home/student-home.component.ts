import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentObj } from 'src/app/Interface/student-obj';
import { StudentServiceService } from 'src/app/student-service.service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {

  studentList: StudentObj[] | any;
  studentObj: StudentObj;
  SelectedIDs: any[] = [];
  lg: number = 0 ;

  constructor(private route: Router,private commSer: StudentServiceService) {
    this.studentObj = new StudentObj();
    this.studentList = [];
  }

  ngOnInit(): void {
    this.getAllDetails()
    this.lg =localStorage.length;
  }

  //to get all the details from local storage
  getAllDetails() {

     this.commSer.RetriveAllStudentFromStorage().subscribe(result => {
      this.studentList = result     
      console.log(result);
    })
    
  }

 
  
  //to get id 
  getNewStudentId() {
    const oldRecord = localStorage.getItem('studentList');
    if (oldRecord !== null) {
      const studentList = JSON.parse(oldRecord);
      return studentList.length + 1;
    } else {
      return 1;
    }
  }

  //is used to save the student
  saveStudet(studentObj: any) {
    this.commSer.PostStudentToLocalStorage(this.studentObj);
    this.closePopup() 
    this.getAllDetails();
    console.log(this.studentObj);
  }

  //delete one student
  Delete(id: any) {
      this.commSer.deleteStudent(id).then(result => {
      alert("This Id : " +result+ " is deleted");
      this.getAllDetails();
    })
    
  }

  //to get all selected id's in array
  selectID(id: any, event: any) {
    this.SelectedIDs.push(id);
    console.log(this.SelectedIDs);
  }


  i: number = 0;
  //to delete all selected id's
  deletAll() {
    let myId = this.SelectedIDs;
    const oldRecord = localStorage.getItem('studentList');

    if (oldRecord !== null) {
      const studentList = JSON.parse(oldRecord);
      for (let i = 0; i < myId.length; i++) {
        studentList.splice(studentList.findIndex((a: any) => a.studentRollNo == myId), 1)
        localStorage.setItem('studentList', JSON.stringify(studentList));
      }
      this.getAllDetails();
      this.route.navigateByUrl('/home');

    }

  }

  //is used to show & close modal popup 
  displayStyle = "none";
  displayStyle1 = "none";
  openPopup() {

    this.displayStyle = "block";
  }
 
  closePopup() {
    this.displayStyle = "none";
  }

  openPopup1() {
    this.displayStyle1 = "block";
  }
  
  closePopup1() {
    this.displayStyle1 = "none";
  }

  //clear all field's
  clearStudet(){
    this.studentObj.name = " " ;
    this.studentObj.grade = undefined;
    this.studentObj.division = " ";
    this.studentObj.dateofBirth = " ";
    this.studentObj.gender = " ";
    
  }

  getToclosePopup(){
  
   this.closePopup1();
   this.getAllDetails();
   }
   
    
   myEdit(studentRollNo: number){
      
   }
}
