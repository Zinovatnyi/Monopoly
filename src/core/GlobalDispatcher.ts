export class GlobalDispatcher {

  private static _listeners:IListener[] = [];
  
  static addEventListener(event:string, callback:Function) {
    this._listeners.push({'event':event, 'callback':callback});
  }

  static removeEventListener(event:string, callback:Function) {

    for (let i = 0; i < this._listeners.length; i++) {
        let listener:IListener = this._listeners[i];
        if(listener.event === event && listener.callback === callback) {
            this._listeners.splice(i, 1)
        }
    }

    // for (let listenerIndex in this._listeners) {
    //     let listener:IListener = this._listeners[listenerIndex];
    //     if(listener.event === event && listener.callback === callback) {
    //         this._listeners.splice(listenerIndex, 1)
    //     }
    // }

  }

  static dispatch(event:string, obj?: any) {
      for (let i = 0; i < this._listeners.length; i++) {
          let listener:IListener = this._listeners[i];
          if(listener.event === event)  {
              listener.callback(obj);
          }
      }
  }

  static dispose() {
    this._listeners.length = 0;    
  }
}

interface IListener {
  event:string;
  callback:Function;
}