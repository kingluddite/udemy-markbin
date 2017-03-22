import { Meteor } from 'meteor/meteor';
import { Bins } from '../imports/collections/bins.js'; // add this line

Meteor.startup(() => {
  Meteor.publish('bins', function() {
    return Bins.find({ ownerId: this.userId });
  });
});
