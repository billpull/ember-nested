import Ember from 'ember';
import CategoryProxy from './category-proxy';

export default Ember.ObjectProxy.extend({
	isSaving: false,

	categories: Ember.computed.map("content.categories", (category) => {
		return CategoryProxy.create({
			content: category
		});
	}),

	topLevelCategories: Ember.computed.map("categories", (categoryProxy) => {
		if (!Ember.isNone(categoryProxy.get('parentItem'))) {
			return categoryProxy;
		}
	})
})