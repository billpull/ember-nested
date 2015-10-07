import Ember from 'ember';
import CategoryProxy from './category-proxy';

export default Ember.ObjectProxy.extend({
	isSelected: false,

	categories: Ember.computed.map("content.categories", (category) => {
		return CategoryProxy.create({
			content: category
		});
	}),

	hasSubCategories: Ember.computed.notEmpty("content.categories"),

	_deSelect: function (categories) {
		categories.forEach((category) => {
			var items = category.get('items');

			items.forEach((item) => {
				item.set('isSelected', false);

				if (item.get('hasSubCategories')) {
					this._deSelect(item.get('categories'));
				}
			});
		});
	},

	deSelectSubItems: function () {
		if (!this.get('isSelected')) {
			this._deSelect(this.get('categories'));
		}
	}.observes("isSelected")
});