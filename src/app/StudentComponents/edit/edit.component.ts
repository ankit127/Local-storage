import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentObj } from 'src/app/Interface/student-obj';
import { StudentServiceService } from 'src/app/student-service.service';
import { StudentHomeComponent } from '../student-home/student-home.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  studentObj: StudentObj;
  studentList: StudentObj[];

  constructor(private route: ActivatedRoute, private router: Router,
    private commser: StudentServiceService,
    private studHome: StudentHomeComponent) {
    this.studentObj = new StudentObj();
    this.studentList = [];
   
     this.route.params.subscribe((res) => {
      this.studentObj.studentRollNo = res['id']
    })
   
  }

  ngOnInit(): void {
   /* this.commser.sendIdForEdit().subscribe((result: any) => { this.studentObj.studentRollNo = result}) */ 
    const oldRecord = localStorage.getItem('studentList');
    const latestId = this.getNewStudentId();
    if (oldRecord !== null) {
      const studentList = JSON.parse(oldRecord);
      const currentStudent = studentList.find(
        (m: any) => m.studentRollNo == this.studentObj.studentRollNo)
      if (currentStudent !== undefined) {
        this.studentObj.name = currentStudent.name;
        this.studentObj.grade = currentStudent.grade;
        this.studentObj.division = currentStudent.division;
        this.studentObj.dateofBirth = currentStudent.dateofBirth;
        this.studentObj.gender = currentStudent.gender
      }
    }
  
  }


  updateStudent() {
    const oldRecord = localStorage.getItem('studentList');
    if (oldRecord !== null) {
      const studentList = JSON.parse(oldRecord);
      studentList.splice(studentList.findIndex((a: any) => a.studentRollNo == this.studentObj.studentRollNo), 1)
      studentList.push(this.studentObj);
      localStorage.setItem('studentList', JSON.stringify(studentList));
      alert('Student is Updated !!');
      this.studHome.getToclosePopup();
    }
   
  }

  getNewStudentId() {
    const oldRecord = localStorage.getItem('studentList');
    if (oldRecord !== null) {
      const studentList = JSON.parse(oldRecord);
      return studentList.length + 1;
      console.log(studentList.length + 1);
    } else {
      return 1;
    }
  }
   /*
   update(){
     this.commser.sendIdForEdit().subscribe((res: any) => {
       this.studentObj.studentRollNo = res;
       console.log("Get Id in edit Component")
       this.updateStudent();
     })
     /*
     myEdit(this.studentObj.studentRollNo).subscribe((res: any) => {
      this.studentObj.studentRollNo = res['id'];
      this.updateStudent();
     })
     
   }
   */
   
}




