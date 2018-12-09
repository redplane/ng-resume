import {IScope} from "angular";

export interface IMessageBusService {

    //#region Methods

    /*
    * Add message channel.
    * */
    addMessageChannel<T>(channelName: string, eventName: string): IScope;

    /*
    * Hook message event.
    * */
    hookMessageChannel<T>(channelName: string, eventName: string): IScope;

    // Publish message to event stream.
    addMessage<T>(channelName: string, eventName: string, data?: T): void;

    //#endregion

}
