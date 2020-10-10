import { Component, OnInit } from '@angular/core';
import { LessonsService } from './../shared/servies/lessons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 title="Angular 9 Fundamentals Workshop"
 currentLesson = null;
 courseLessons = null;

  constructor(private lessonsService:LessonsService) { }

  ngOnInit(): void {
  this.courseLessons =  this.lessonsService.all();
 
  }

  selectLesson(lesson){
    console.log(lesson);
    this.currentLesson = lesson;
  }

}
