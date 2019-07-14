import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './counter.html';

Template.counter.onCreated(function counterOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.counter.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.counter.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
