import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer(params) {
      this.sendAction('saveAnswer', params);
    },
    upvote(answer) {
      this.sendAction('upvote', answer);
    }
  }
});
