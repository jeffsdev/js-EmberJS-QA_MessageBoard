import Ember from 'ember';

export default Ember.Component.extend({
  isDetailsShowing: false,

  actions: {
    detailsShow: function() {
      this.set('isDetailsShowing', true);
    },
    detailsHide: function() {
      this.set('isDetailsShowing', false);
    }
  }
});
