import Model from 'ember-pouch/model';
import DS from 'ember-data';

const {
  attr,
  hasMany,
  belongsTo
} = DS;

export default Model.extend({
  title: DS.attr('string'),
  when: DS.attr('string'),
  text: DS.attr('string'),
  rev: DS.attr('string')
});