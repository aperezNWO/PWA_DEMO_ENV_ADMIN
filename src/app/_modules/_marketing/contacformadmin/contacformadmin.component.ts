import { Component, OnInit, Injectable } from "@angular/core";
import { ENV_LIST_CONTACTFORM_ADMIN    } from "../../../_models/common/common";
import { AuthService                   } from "../../../_services/_config/auth.service";
import { BaseService                   } from "../../../_services/_config/base.service";
import { ConfigService                 } from "../../../_services/_config/config.service";
import { BaseComponent                 } from "../../../_components/basecomponent";

//
@Component({
  selector: 'app-contacform-admin',
  templateUrl: './contacformadmin.component.html',
  styleUrl: './contacformadmin.component.css'
})
  //
export class ContacFormAdminComponent  extends BaseComponent implements OnInit  {
  //////////////////////////////////////////////////////////
  recognition         : any;
  isListening         : boolean   = false;
  transcript          : string    = '';
  error               : string    = '';
  ListeningButtonIconOn : string  = './assets/images/mic_on.gif';
  ListeningButtonIconOff: string  = './assets/images/mic_off.gif';
  SpeakerIcon           : string  = './assets/images/speaker_on.gif';
  clearFormIcon         : string  = './assets/images/clearForm.gif';;
  //
  constructor(public _service: BaseService,
    public _authService: AuthService,
    public _configService: ConfigService
  ) {
    //
    super(_service, _authService, _configService, ENV_LIST_CONTACTFORM_ADMIN);
  }
  ngOnInit(): void {
    //this.InitializeSpeechRecognition();
  }
   //////////////////////////////////////////////////////////
  
   InitializeSpeechRecognition():void {
    // Initialize the SpeechRecognition object
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.lang = 'es-CO'; // Set language
      this.recognition.interimResults = false; // Only final results
      this.recognition.maxAlternatives = 1;

      // Event handlers
      this.recognition.onresult = (event: any) => {
        //
        this.transcript = event.results[0][0].transcript;
        console.log('Transcript:', this.transcript);
      };

      this.recognition.onerror = (event: any) => {
        this.error = event.error;
        this.isListening = false;
        console.error('Error:', this.error);
      };

      this.recognition.onend = () => {
        //
        console.log('Recognition ended.');
      };
    } else {
      alert('Speech Recognition API is not supported in your browser.');
    }
  }
  //
  startListening() {
    //
    if (this.recognition) {
      console.log('listening started');
      this.isListening = true;
      this.recognition.start();
    }
  }

  stopListening() {
    if (this.recognition) {
      console.log('listening ended');
      //
      this.isListening = false;
      this.recognition.stop()
    }
  }

  speakText() {
    if (this.transcript) {
      //
      const utterance = new SpeechSynthesisUtterance(this.transcript);
      utterance.lang = 'es-CO';
      window.speechSynthesis.speak(utterance);
      //
      this._service.searchTerm = this.transcript;
      //
    } else {
      alert('No text to speak!');
    }
  }

  clearText()
  {
      this._service.searchTerm = "";
  }
}
