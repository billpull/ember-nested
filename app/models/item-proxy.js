import Ember from 'ember';
import CategoryProxy from './category-proxy';

export default Ember.ObjectProxy.extend({
	isSelected: false,

	categories: Ember.computed.map("content.categories", (category) => {
		return CategoryProxy.create({
			content: category
		});
	})
});