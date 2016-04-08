import Ember from 'ember';

export function questionUnanswered(params/*, hash*/) {
  var question = params[0];
  var answerAmount = question.get('answers').get('length');

  if (answerAmount > 0) {
    return Ember.String.htmlSafe('<span>' + answerAmount + '</span>');
  } else  {
    return Ember.String.htmlSafe('<span>UNANSWERED</span>');
  }
}

export default Ember.Helper.helper(questionUnanswered);
