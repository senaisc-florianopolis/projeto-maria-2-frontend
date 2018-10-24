import { Component, OnInit, Input} from '@angular/core';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { saveAs } from 'file-saver';
import { ExampleService } from '../example/example.service';
import { environment } from '../../../environments/environment'

const URL = 'http://localhost:3000/api/insert/produto';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})

export class UploadComponent implements OnInit {
  public uploader: FileUploader;
  protected readonly validExtension: string = ".csv";
  @Input('operation') operation: string;
  public attachmentList: any = [];
  public isNotValid: boolean;
  public myFile;
  public response;
  
  
  constructor(private _fileService: ExampleService) { 
  }

  ngOnInit() {
    this.isNotValid = false;
	this.uploader = new FileUploader({ url: environment.url +"api/insert/" + this.operation}) 
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      this.attachmentList.push(JSON.parse(response));
    }
	
  }


  //Validation only for one file
  public validateFile(name) {
    let fileTxt = name;
    let ext = fileTxt.substring(fileTxt.lastIndexOf(".")) as string;
    if (ext == this.validExtension) {
//
	  this.isNotValid = false;
	  console.error("Válido");
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
  
  public getFileName(){
	if(this.uploader.queue.length > 1 ){
		this.uploader.queue[0].remove()
	}
	const name = this.uploader.queue[0].file.name;
	this.myFile = name;
	this.validateFile(name);
  }
  
  public sendFile(){
	this.response = this.uploader.uploadAll();
	console.log(this.response)
	console.log(this.uploader)
  }
}

