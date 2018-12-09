import {IMessageBusService} from '../interfaces/services/message-bus-service.interface';
import {IRootScopeService, IScope} from "angular";

export class MessageBusService implements IMessageBusService {

    //#region Properties

    // Map of channels & event emitter.
    private _mChannel: Map<string, Map<string, IScope>>;

    //#endregion

    //#region Constructor

    /*
    * Initialize service with injectors.
    * */
    public constructor(public $rootScope: IRootScopeService) {
        this._mChannel = new Map<string, Map<string, IScope>>();
    }

    //#endregion

    //#region Methods

    /*
    * Add message channel event emitter.
    * */
    public addMessageChannel<T>(channelName: string, eventName: string): IScope {

        // Find channel mapping.
        let mChannel = this._mChannel;

        // Channel is not available.
        let mEventMessageEmitter: Map<string, IScope>;

        if (mChannel.has(channelName))
            mEventMessageEmitter = mChannel.get(channelName);
        else {
            mEventMessageEmitter = new Map<string, IScope>();
            this._mChannel.set(channelName, mEventMessageEmitter);
        }

        if (mEventMessageEmitter.has(eventName))
            return mEventMessageEmitter.get(eventName);

        let emitter = this.$rootScope.$new(true);
        mEventMessageEmitter.set(eventName, emitter);
        return emitter;
    }

    /*
    * Hook message event.
    * */
    public hookMessageChannel<T>(channelName: string, eventName: string): IScope {

        let mChannel = this._mChannel;

        if (mChannel == null || !mChannel.has(channelName))
            mChannel.set(channelName, null);

        let mEventMessageEmitter = mChannel.get(channelName);
        if (mEventMessageEmitter == null) {
            mEventMessageEmitter = new Map<string, IScope>();
            mChannel.set(channelName, mEventMessageEmitter);
        }

        let emitter = mEventMessageEmitter.get(eventName);
        if (emitter == null){
            emitter = this.$rootScope.$new(true);
            mEventMessageEmitter.set(eventName, emitter);
        }

        return emitter;
    }

    /*
    * Publish message to event stream.
    * */
    public addMessage<T>(channelName: string, eventName: string, data: T): void {

        // Find the existing channel.
        let mChannel = this._mChannel;
        if (!mChannel)
            return;
        let mEventMessageEmitter = mChannel.get(channelName);
        let emitter: IScope;

        if (!mEventMessageEmitter) {
            emitter = this.$rootScope.$new(true);
            mEventMessageEmitter = new Map<string, IScope>();
            mEventMessageEmitter.set(eventName, emitter);
        } else {
            emitter = mEventMessageEmitter.get(eventName);
        }

        emitter.$broadcast(eventName, data);
    }


    //#endregion

}
