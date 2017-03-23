import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),

  actions: {
    submit() {
      let { email, password } = this.getProperties('email', 'password');

      this.get('session').authenticate('authenticator:cognito', email, password).catch(reason => {
        alert('error logging in, see console');
        console.log(reason);
      });
    },

    logout() {
      this.get('session').invalidate();
    },
  }

});

