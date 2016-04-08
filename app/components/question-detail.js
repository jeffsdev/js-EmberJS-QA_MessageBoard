import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service(),
  actions: {
    addToFaves(item) {
      this.get('favoriteQuestions').add(item);
    }
  }
});
