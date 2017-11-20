import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { CommonService } from '../service/common.service'

@Component({
  selector: 'page-add',
  templateUrl: 'add.component.html'
})
export class AddPage {


  public tasks: any = [];
  public item:String;

  constructor(public viewCtrl: ViewController, private commonService: CommonService) {

  }

  dismiss(){
  	this.viewCtrl.dismiss();
  }

  add(){
  	this.commonService.addTask(this.item);
  	this.dismiss();
  }

  

}
