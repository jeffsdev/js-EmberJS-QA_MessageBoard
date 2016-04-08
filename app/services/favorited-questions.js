import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  addToFaves(item) {
    this.get('items').pushObject(item);
  }
});
