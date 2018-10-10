import { Component, OnInit } from '@angular/core';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { saveAs } from 'file-saver';
import { ExampleService } from '../example/example.service';

const URL = 'http://localhost:3000/api/upload';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})

export class UploadComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({ url: URL });
  protected readonly validExtension: string = ".csv";

  public attachmentList: any = [];
  public isNotValid: boolean;

  constructor(private _fileService: ExampleService) { }

  ngOnInit() {
    this.isNotValid = false;
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      this.attachmentList.push(JSON.parse(response));
      console.log('ImageUpload:uploaded:', item, status, response);
    }
  }


  //Validation only for one file
  public validateFile() {
    let fileTxt = this.uploader.queue[0]._file.name as string;
    let ext = fileTxt.substring(fileTxt.lastIndexOf(".")) as string;
    if (ext == this.validExtension) {
      this.uploader.uploadAll();
    } else {
      this.isNotValid = true;
      console.error("Extensão do arquivo não é compativel!");
    }
  }

  //Thats was made thinking about future...it does not work!!
  public downloadFile(index) {
    var filename = this.attachmentList[index].uploadname;

    this._fileService.downloadFile(filename)
      .subscribe(
        data => saveAs(data, filename),
        error => console.error(error)
      );
  }

}

