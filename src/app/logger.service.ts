import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

constructor() { }
log(message: any) {
    console.log(message);
    // You can modify this method to log to a file, server, or other external services.
  }

  error(message: any) {
    console.error(message);
    // Similarly, you can modify this method for more advanced error handling.
  }

}