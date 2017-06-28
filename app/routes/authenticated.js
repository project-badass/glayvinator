import Ember from 'ember';

export default Ember.Route.extend({
  afterModel() {
    // this disables the requirement for auth
    // if (!this.get('session.isAuthenticated')) {
    //   this.transitionTo('onboarding');
    // }
  }
});
