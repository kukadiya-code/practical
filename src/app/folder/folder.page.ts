import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public platformname:any;

  constructor(private activatedRoute: ActivatedRoute,public platform:Platform,public menuCtrl:MenuController) {

    if(this.platform.is('mobile')){
      this.platformname = "M";
    }
    else if(this.platform.is('desktop')){
      this.platformname = "D";
      this.menuCtrl.enable(false);
    }

    console.log('platfomr '+this.platformname);
   }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');

   
  }

}
