import Ember from 'ember';
import ParentProxy from '../models/parent-proxy';

export default Ember.Route.extend({
	_renderCustomize: function (template, parent, item) {
		this.render();

		var model = {
			parent: parent,
			item: item
		};

		this.render(`${template}`, {
			outlet: 'customize',
			into: 'application',
			model: model
		});
	},

	renderTemplate: function() {
        this.render();

        this.render('parentCustomize', {
            outlet: 'customize',
            into: 'application'
        });
    },

	model: function () {
		return Ember.RSVP.hash({
			parent: this.store.findRecord('parent', 1).then((parent) => {
				return ParentProxy.create({
					content: parent
				});
			}),
			item: null
		})
	},

	actions: {
		displayParent: function (parent) {
			this._renderCustomize('parentCustomize', parent, null);
		},

		displayItem: function (parent, item) {
			this._renderCustomize('itemDetail', parent, item);
		}
	}
});
