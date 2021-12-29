import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { StudentObj } from './Interface/student-obj';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  studentList: StudentObj[] | any;
  studentObj: StudentObj;
  sub = new Subject();
 
  


  constructor() {
    this.studentObj = new StudentObj();
    this.studentList = [];
    this.RetriveAllStudentFromStorage()
  }

 
  RetriveAllStudentFromStorage() {
    const records = localStorage.getItem('studentList');
    return new Observable((observer) => {
      if (records !== null) {
        this.studentList = JSON.parse(records)
        observer.next(this.studentList);
      } else {
        observer.error("Data not Found");
      }
    })
  }

  getNewStudentId() {
    const oldRecord = localStorage.getItem('studentList');
    if (oldRecord !== null) {
      const studentList = JSON.parse(oldRecord);
      return studentList.length + 1;
    } else {
      return 1;
    }
  }

  PostStudentToLocalStorage(studentObj: any) {
    console.log(studentObj);
    const oldRecord = localStorage.getItem('studentList');
    if (oldRecord !== null) {
      const studentList = JSON.parse(oldRecord);
      console.log(studentObj);
      studentList.push(studentObj);
      //used subject
      
      this.sub.next(localStorage.setItem('studentList', JSON.stringify(studentList)));

      alert("New Student is Added");
    } else {
      const studentArray = [];
      studentArray.push(this.studentObj);
      localStorage.setItem('studentList', JSON.stringify(studentArray));

    }

  }

  deleteStudent(id: number) {
    return new Promise((resolve, reject) => {
      const oldRecord = localStorage.getItem('studentList');
      if (oldRecord !== null) {
        const studentList = JSON.parse(oldRecord);
        studentList.splice(studentList.findIndex((a: any) => a.studentRollNo == id), 1)
        localStorage.setItem('studentList', JSON.stringify(studentList));
        resolve(id);
        const records = localStorage.getItem('studentList');
        if (records !== null) {
          this.studentList = JSON.parse(records);
          reject(id)
        }

      }

    }

    )

  }

}
