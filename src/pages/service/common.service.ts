import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Task } from '../model/task.model'

@Injectable()
export class CommonService {
	public tasks:any;

	public task_subject = new Subject<String>()

	constructor(){
		this.tasks = []
	}

	addTask(item){
		this.tasks.push(new Task((new Date()).getTime(),item,false));
		this.task_subject.next();
	}
}