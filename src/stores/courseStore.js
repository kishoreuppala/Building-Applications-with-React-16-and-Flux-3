import {EventEmitter} from "event";
//Dispatcher registration is typically defined below the store,since its not part of the store's public API.
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _courses = [];

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

    getCourses() {
        return _courses;
    }

    getCourseBySlug() {
        return _courses.find(course => course.slug === slug);
    }
    //Flux stores a bit like a table in a relational database.Like a table, they hold data.
    //These functions are a bit like a view/stored procedures. They return a specified subset of data.
}

const store = new CourseStore();

Dispatcher.register(action => {
    switch(action.actionType) {
        case actionTypes.CREATE_COURSE
            _courses.push(action.course);
            //Anytime store changes, we need to call emitChange.
            store.emitChange();
            break;
        default:
            //do nothing...
            //Every store's dispatcher receives every action, so if the store isn't interested in that action, there's nothing to do.
    }
})

export default store;