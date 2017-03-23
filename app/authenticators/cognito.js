import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

const Promise = Ember.RSVP.Promise;
export default Base.extend({
  restore(data) {
    console.log('restore session');
    return Promise.resolve({token: 'jamie'});
  },

  authenticate(username, password) {
    console.log('authenticate');
    return Promise.resolve({token: 'jamie'});
  },

  invalidate(data) {
    console.log('invalidate');
    return Promise.resolve();
  }
});