import {EventEmitter} from "event";

const CHANGE_EVENT = "change";

class CourseStore extends EventEmitter {
    //This will allow React components to subscribe to our store so they're notified when changes occur.
    addChangeListener(callback) {
        this.on(CHANGE_EVENT);
    }

    //Allow React components to unsubscribe from the store
    removeChnageListener(callback) {
        this.removeChnageListener(CHANGE_EVENT, callback);
    }

    //This call emit function provided by EventEmitter
    emitChange() {
        this.emit("change");
    }
}

const store = new CourseStore();

export default store;