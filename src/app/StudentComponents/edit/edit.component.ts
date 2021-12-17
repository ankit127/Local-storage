import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentObj } from 'src/app/Interface/student-obj';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  studentObj: StudentObj;

  constructor(private route: ActivatedRoute) {
    this.studentObj =  new StudentObj();
    this.route.params.subscribe((res) => {
      this.studentObj.studentRollNo = res['id']
    })
   }

  ngOnInit(): void {
    const oldRecord =  localStorage.getItem('studentList');
     if(oldRecord !== null){
        const studentList = JSON.parse(oldRecord);
        const currentStudent = studentList.find(
          (m: any) =>m.studentRollNo == this.studentObj.studentRollNo)
          if(currentStudent !== undefined){
            this.studentObj.name = currentStudent.name;
            this.studentObj.grade = currentStudent.grade;
            this.studentObj.division = currentStudent.division;
            this.studentObj.dateofBirth = currentStudent.dateofBirth;
            this.studentObj.gender = currentStudent.gender
          }
     }
  }
  updateStudent(){
    const oldRecord =  localStorage.getItem('studentList');
     if(oldRecord !== null){
      const studentList = JSON.parse(oldRecord);
      studentList.splice(studentList.findIndex((a: any)=> a.studentRollNo == this.studentObj.studentRollNo),1)
      studentList.push(this.studentObj);
      localStorage.setItem('studentList', JSON.stringify(studentList));
     }
  }

}
