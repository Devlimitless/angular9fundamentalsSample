import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = "http://localhost:3000/";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
 
    private model = 'courses';

  constructor(private http: HttpClient) { }

  private courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals!!',
      description: 'Learn the fundamentals of Angular 9!!',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'Javascript the really really hard parts!!',
      description: 'Worship will sentance!!',
      percentComplete: 50,
      favorite: true
    }
  ];

  all(){
    //return this.courses;
    return this.http.get(this.getUrl());
  }

  find(courseId){
    return this.http.get(this.getUrlById(courseId));
  }

  create(course){
    return this.http.post(this.getUrl(), course);
    //console.log(course);
  }

  update(course){
    return this.http.put(this.getUrlById(course.id), course);
    //console.log(course);
  }

delete(courseId){
  return this.http.delete(this.getUrlById(courseId));
}

private getUrl(){
  return `${BASE_URL}${this.model}`;
}

private getUrlById(id){
  return `${this.getUrl()}/${id}`;
}

}
