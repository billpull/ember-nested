import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),

  category: DS.belongsTo('category'),
  categories: DS.hasMany('category', {inverse: 'parentItem'})
});
