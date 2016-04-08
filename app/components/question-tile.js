import Ember from 'ember';

export default Ember.Component.extend({
  isDetailsShowing: false,

  actions: {
    detailsShow: function() {
      this.set('isDetailsShowing', true);
    },
    detailsHide: function() {
      this.set('isDetailsShowing', false);
    },
    // answersTotal: Ember.computed('question.answers', function() {
    //   var answers: this.get('questions').answers;
    //   var numberAnswers = answers.length;
    //   return numberAnswers;
    // })
  }
});
