import Ember from 'ember';

export default Ember.Component.extend({
  favoritedQuestions: Ember.inject.service(),
  actions: {
    addToFaves(item) {
      this.get('favoritedQuestions').add(item);
    }
  }
});
