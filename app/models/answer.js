import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  author: DS.attr(),
  vote: DS.attr(),
  question: DS.belongsTo('question', { async: true })
});
