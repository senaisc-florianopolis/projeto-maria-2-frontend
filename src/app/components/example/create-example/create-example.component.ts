import { ExampleService } from '../example.service';
import { Component, OnInit } from '@angular/core';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import {saveAs} from 'file-saver';

const URL = 'http://localhost:3000/api/upload';

@Component({
  selector: 'app-create-example',
  templateUrl: './create-example.component.html',
  styleUrls: ['./create-example.component.css']
})
export class CreateExampleComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'file' });
  public validExtension: string = ".csv";

  public attachmentList: any = [];


  constructor(private _fileService: ExampleService) { }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      this.attachmentList.push(JSON.parse(response));
    }
  }

  //Validation only for one file
  //TODO 
  public validateFile() {
    let fileTxt = this.uploader.queue[0]._file.name as string;
    let ext = fileTxt.substring(fileTxt.lastIndexOf(".")) as string;
    if (ext == this.validExtension) {
      this.uploader.uploadAll();
    } else {
      console.error("Extensão do arquivo não é compativel!");
    }
    console.log(this.attachmentList)
    //para testes
    this.uploader.uploadAll();
  }

  public downloadFile(index){
    var filename = this.attachmentList[index].uploadname;

    this._fileService.downloadFile(filename)
    .subscribe(
        data => saveAs (data, filename),
        error => console.error(error)
    );
  }

}

