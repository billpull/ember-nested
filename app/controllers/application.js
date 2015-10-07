import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		displayParent: function () {
			var parent = this.get("model.parent");
			this.get('target').send("displayParent", parent);
		},

		displayItem: function (item) {
			var parent = this.get('model.parent');

			item.set('isSelected', true);
			this.get('target').send('displayItem', parent, item);
		},

		unNest: function (item) {
			if (!Ember.isNone(item.get('category.parentItem.content'))) {
				return this.send("displayItem", item.get('category.parentItem'));
			}
			return this.send("displayParent");
		},

		toggleItem: function (category, item) {
			var isSelected = item.get('isSelected');

			if (category.get('isMandatory') && !isSelected) {
				category.get('items').forEach((item) => {
					item.set('isSelected', false);
				});
			}

			if (item.get('hasSubCategories') && !isSelected) {
				this.send('displayItem', item);
			} else {
				item.set('isSelected', !isSelected);
			}
		}
	}
});
