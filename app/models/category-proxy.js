import Ember from 'ember';
import ItemProxy from './item-proxy';

export default Ember.ObjectProxy.extend({
	items: Ember.computed.map("content.items", (item) => {
		return ItemProxy.create({
			content: item
		});
	})
});