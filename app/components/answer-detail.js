import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['vote:desc'],
  sortedAnswers: Ember.computed.sort('model.answers', 'sortBy'),

  actions: {
    saveAnswer(params) {
      this.sendAction('saveAnswer', params);
    },
    upvote(answer) {
      this.sendAction('upvote', answer);
    },
    downvote(answer) {
      this.sendAction('downvote', answer);
    }
  }
});
