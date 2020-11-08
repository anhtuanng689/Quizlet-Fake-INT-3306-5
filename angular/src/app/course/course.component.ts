import { Component, OnInit } from '@angular/core';
import { ListService, PagedResultDto } from '@abp/ng.core';
import { CourseService, CourseDto } from '@proxy/courses';
import { query } from '@angular/animations';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  providers: [ListService],

})
export class CourseComponent implements OnInit {
  text: '';
  isSearch: boolean;
  course = { items: [], totalCount: 0 } as PagedResultDto<CourseDto>;
  constructor(public readonly list: ListService, private Service: CourseService) {
  }

  ngOnInit(): void {
    this.isSearch = false;
  // const StreamCreator = (query) => this.Service.getListssssByInputAndText(query, this.text);
  // this.list.hookToQuery(StreamCreator).subscribe((response) => {
  //   this.course = response;
  //   console.log(this.course);
  // });
  }
  search(text: string){
    const StreamCreator = (query) => this.Service.getListssssByInputAndText(query, text);
    this.list.hookToQuery(StreamCreator).subscribe((response) => {
      this.course = response;
    });
    this.isSearch = true;
  }
}
