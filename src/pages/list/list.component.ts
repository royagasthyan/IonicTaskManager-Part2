import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { AddPage } from '../add/add.component';
import { CommonService } from '../service/common.service'
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-list',
  templateUrl: 'list.component.html'
})
export class ListPage {

	public tasks = [];
	public pendingTasks = []
	public doneTasks = []
  constructor(public modalCtrl: ModalController, public commonService:CommonService) {
  	 
  	 this.commonService.task_subject.subscribe(response => {
			this.pendingTasks = this.commonService.tasks.filter(item => {
				return item.IsDone == false
			});
			this.doneTasks = this.commonService.tasks.filter(item => {
				return item.IsDone == true
			});
		})
  }

  presentAddModal() {
   let addModal = this.modalCtrl.create(AddPage);
   addModal.present();
 }

 checkPendingItem(id){
  	
  	this.pendingTasks.map((task) => {
      if(task.Id == id){
        if(task.IsDone){
          task.IsDone = false;
        } 
        else{
          task.IsDone = true;
        }
      }
    })


   this.updateTask()
  	
  }

  checkDoneItem(id){
  	
  	this.doneTasks.map((task) => {
      if(task.Id == id){
        if(task.IsDone){
          task.IsDone = false;
        } 
        else{
          task.IsDone = true;
        }
      }
    })


   this.updateTask()
  	
  }

  updateTask(){
  	this.pendingTasks = this.commonService.tasks.filter(item => {
				return item.IsDone == false
			});
			this.doneTasks = this.commonService.tasks.filter(item => {
				return item.IsDone == true
			});
  }

}
