import {Component, OnInit} from "@angular/core";
import {
  ActionSheetController, Loading,
  LoadingController,
  NavParams,
  Platform,
  ToastController,
  ViewController,
} from "ionic-angular";
import {Visit} from "../../../models/Visit";
import {Camera} from '@ionic-native/camera';
import {ScheduleService} from "../schedule.service";

@Component({
  templateUrl: 'photo-modal.view.html',
  selector: 'page-photo-modal'
})
export class PhotoModal {

  uploadDisabled = true;
  visit: Visit;
  placeholder: string = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgICAgHCAoQBwcIDg0IBwcHDRAICQcNFREiFhURFhMYKCggGBolHRMTITEhJSsrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAAAQIEBQMH/8QALxABAAIBAQQJBQACAwAAAAAAAAERAgMUUmGRBBMhMTIzQXGBElGxwfAi0UKCof/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD9KopqigSimqKBmimqWgYopuigYopuigYopuigYopuigYopuigYopuigYopuigYopuigYopukoGaKaooGKKaooGKVqgGqWlpaBmlpaWgZopqigZopqigZopqloGKKbooGKKbooGKKbooGKKbooGKKbpKBmimqKBmimqKBmkpukoGaSm6SgZoaoBqlpaWgZpaWloGaKaKBmimqKBKKWigSilooEopaKBKKWigSilooEopaKBmimqKBmimqAZpKbpKBmkpukBmhqgGqKWlBKKVQShQEopQEopQEopQEopQEopQEopQEopQEopQEKUBmimkBmimkoGaGkBpRQRRQQUBHPPSJiZj6Y7Ox0uDLxT7z+QfXaZ3YXaZ3YfTZ9PjzNm0+PMHz2md2DaZ3YfTZtPjzNm0+PMHz2md2DaZ3YfTZtPjzNm0+PMHz2md2DaZ3YfTZtPjzNm0+PMHz2md2DaZ3YfTZtPjzNm0+PMHz2md2DaZ3YfTZtPjzNn0+PMHzjpE34YdDh7sq+01/67wQUBEaQERpAQUBQUAUAAAefl4595/L0Xn5eOfefyDt1pmMM5jsmI7JcfW6m9Ls1/Lz9nADfW6m9J1upvTzTSwnUyjHujvmftDux08MYqI+Z7ZkHF1upvSdbqb0urV0Mc4mo+nL0mOy3EDfW6m9J1upvSwA31upvSdbqb0sAN9bqb0uvQmZwxme2Z75n3cLu6P5eH96g4p8fz+3oPPnx/P7eiCAAgoCIqSCCgCwAKAAoAPPy8c+8/l6Dz8vHPvP5B26/l5+zgd+v5efs4Affocx9cx6zHY63mxMxMTHZMdsS6selRX+WPb98fUHQ87UmJzymO6ZmY5vtq9JnKPpxj6Ynvme+XwAB0dEwv6sp7Y8P+wc41qYfRlOP27uMMgO7o/l4f3q4Xd0fy8P71Bxz4/n9vQefPj+f29ABFAQAEFQEBQBFBQAURQHn5eOfefy9B5+Xjn3n8g7dfy8/ZwO/X8vP2cAAAAN4aWeXdj2feeyAYd+hj9OnjHr3y+OHRe6c5/64ukHw6XheMZ+uPZPs5Ho54/VjOP3innd3Z6+oDu6P5eH96uF3dH8vD+9Qcc+P5/b0Hnz4/n9vQAJEAAkBABFQAhUUFEAUAFefl4595/Lvefl4595/IO7X8vP2cDu1/Lz9nDU/YBrDCc5+mPmfSDDTyyn6Yj5nuh26eEYRUfM+sgmnpYYRFRc70976IAogCuLpOP06k/bL/KHYxq6cakV3THhn7A4Xd0fy8P71cWWGWMzEx2w7dDy8P71BxT4/n9vRedPj+f29EEAABAElUAEUEVlQVWVBRAGnn5eKfefy7nLloZzMz2dszPeDo67T3jrtPec+z6nDmbPqcOYOjrtPeOu096HPs+pw5mz6nDmDo67T3oOu096HPs+pw5mz6nDmDo67T3oOu096HPs+pw5mz6nDmDo67T3oOu096HPs+pw5mz6nDmDo67T3jrtPec+z6nDmbPqcOYPn/wAvn9vQccaGdx3c3WAIAqCAqCAogCKyA0rNlg0IWCiFg0M2A0MgNDIDQyA0MgNDICiWWCiWAqJZYKiAKM2AlrbFrYNWrNlg1ZbNlg1ZaWWC2ts2WDQzZYNDNlg0M2WDQzZYNWlpZYLZaWWC2WzZYNJaWWC2lpZYKM2Alls2WDdlsWtg1ZbNlg3ZbFlg3ZbFlg3ZbFlg3ZbFlg3ZbFlg3ZbFlg3ZbFlg3ZbFlg1ZbNlg1ZbNlgtls2WC2M2Aza2xa2DVls2WDdlsWWDdls2WDVls2WDVls2WDVls2WDVls2WDVls2WDVls2WDVls2WDVlsWWDdpbNlg1aWlpYNWM2AgAKAAACgAAAAAAAAAAAAAAAgAAAJIAIAD/2Q==';

  loading: Loading;

  constructor(private navParams: NavParams,
              private view: ViewController,
              private camera: Camera,
              public actionSheetCtrl: ActionSheetController,
              public toastCtrl: ToastController,
              public platform: Platform,
              public loadingCtrl: LoadingController,
              public scheduleService: ScheduleService) {

  }

  ionViewDidEnter() {
    this.visit = this.navParams.get('visit');
    this.downloadPhotos(this.visit);
  }

  public downloadPhotos(visit: Visit) {
    let loading = this.loadingCtrl.create({content: 'Downloading images...'});
    loading.present();
    this.uploadDisabled = true;
    this.scheduleService.getVisitWithPhotos(visit)
      .subscribe(visit => {
        this.visit.photo1 = visit.photo1;
        this.visit.photo2 = visit.photo2;
        this.visit.photo3 = visit.photo3;
        this.visit.photo4 = visit.photo4;
        this.visit.photo5 = visit.photo5;
        this.visit.photo6 = visit.photo6;



        loading.dismiss();
      }, err => {
        loading.dismiss();
        this.presentToast('Could not download photos');
      });
  }

  public presentActionSheet(slot) {

    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY, slot);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA, slot);
          }
        },
        {
          text: 'Clear Photo',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA, slot, true);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  public takePicture(sourceType, slot, clear?) {
    if(clear) {
      switch (slot) {
        case 1: {
          this.visit.photo1 = null;
          break;
        }
        case 2: {
          this.visit.photo2 = null;
          break;
        }
        case 3: {
          this.visit.photo3 = null;
          break;
        }
        case 4: {
          this.visit.photo4 = null;
          break;
        }
        case 5: {
          this.visit.photo5 = null;
          break;
        }
        case 6: {
          this.visit.photo6 = null;
          break;
        }
        default: {
          this.visit.photo1 = null;
          break;
        }
      }
      this.uploadImages();
    } else {
      // Create options for the Camera Dialog
      var options = {
        quality: 25,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        targetWidth: 600,
        targetHeight: 600,
        sourceType: sourceType,
        correctOrientation: true,
        saveToPhotoAlbum: false
      };

      // Get the data of an image
      this.camera.getPicture(options).then((imageData) => {
        const image = 'data:image/jpeg;base64,' + imageData;

        switch(slot) {
          case 1: {
            this.visit.photo1 = image;
            break;
          }
          case 2: {
            this.visit.photo2 = image;
            break;
          }
          case 3: {
            this.visit.photo3 = image;
            break;
          }
          case 4: {
            this.visit.photo4 = image;
            break;
          }
          case 5: {
            this.visit.photo5 = image;
            break;
          }
          case 6: {
            this.visit.photo6 = image;
            break;
          }
          default: {
            this.visit.photo1 = image;
            break;
          }
        }
        this.uploadDisabled = false;
      }, (err) => {
        this.presentToast('Error while selecting image.');
      });
    }


  }

  public dismiss() {
    this.view.dismiss();
  }

  public uploadImages() {
    let loading = this.loadingCtrl.create({content: 'Uploading images...'});
    this.uploadDisabled = true;
    loading.present();
    this.scheduleService.editVisit(this.visit)
      .subscribe(visit => {
        loading.dismiss();
        this.presentToast('Upload successful');
      }, err => {
        loading.dismiss();
        this.presentToast('Could not upload files');
    })
  }

  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

}
