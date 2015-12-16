import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return ['PC Repair', 'Network Disgnostics', 'Home Audio Installation'];
  }
});
