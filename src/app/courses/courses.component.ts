import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  selectedCourse = null;

  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'Javascript the really really hard parts',
      description: 'Worship will sentance',
      percentComplete: 50,
      favorite: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.resetselectedCourse();
  }

  resetselectedCourse(){
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false
    };
    this.selectedCourse = emptyCourse;
  }

  selectCourse(course){
    console.log(course);
    this.selectedCourse = course;
  }

  deleteCourse(courseId){
    console.log(courseId);
  }

  cancel(){
    this.resetselectedCourse();
  }

  saveCourse(){
    console.log('saved Course data!')
  }

}
