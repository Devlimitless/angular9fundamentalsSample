import { Component, OnInit } from '@angular/core';
import { CoursesService } from './../shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  selectedCourse = null;

  courses = null;

  

  constructor(private coursesService:CoursesService) { }

  ngOnInit(): void {
    this.resetselectedCourse();
     this.loadCourses();
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
    this.coursesService.delete(courseId).subscribe(result => this.refreshCourses());
    //console.log(courseId);
  }

  cancel(){
    this.resetselectedCourse();
  }


  loadCourses(){
    this.coursesService.all()
    .subscribe(courses => this.courses = courses);
  }

  refreshCourses(){
    this.resetselectedCourse();
    this.loadCourses();
  }

  saveCourse(course){
    if(course.id)
    {
      this.coursesService.update(course).subscribe(result => this.refreshCourses());
    }
    else{
      this.coursesService.create(course).subscribe(result => this.refreshCourses());
    }
    //console.log('saved Course data!')
  }

}
