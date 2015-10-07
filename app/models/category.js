import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  isMandatory: DS.attr('boolean'),

  items: DS.hasMany('item', {async: true}),
  parentItem: DS.belongsTo('item', {inverse: 'categories', async: true}),
  parent: DS.belongsTo('category', {async: true})
});
