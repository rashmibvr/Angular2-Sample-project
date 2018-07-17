import { Component } from "@angular/core";
import { CourseService } from "./course.service";
@Component({
    selector : "courses",
    template : ` 
    <ul>
    <li *ngFor= "let course of courses">
    {{course}} 
    </li>
    </ul>
    <button class = "btn btn-primary" [class.active]="isActive">click</button><br/>
    <img [src]="imgUrl"/> 
    <!--property binding -->
   `
})
export class CourseComponent {
    isActive=true;
    imgUrl = "https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg";
    courses;
    constructor(service:CourseService)
    {
        this.courses = service.getCourses();
    }
}
