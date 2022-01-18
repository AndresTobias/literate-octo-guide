import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import {Task} from 'src/app/Task'
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks:Task[]=[];
  constructor(
    private TaskService:TaskService
  ) { }
   
  ngOnInit(): void {
    this.TaskService.getTasks().subscribe((task)=>(this.tasks=task));
  }
  deleteTask(task:Task){
    console.log("deleteTask");
    this.TaskService.deleteTask(task)
    .subscribe(()=>(this.tasks=this.tasks.filter(t => t.id !==task.id)))
  }
  toggleReminder(task:Task){
    task.reminder= !task.reminder;
    this.TaskService.updateTaskReminder(task).subscribe();
  }
}
