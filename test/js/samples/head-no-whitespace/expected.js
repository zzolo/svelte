/* generated by Svelte vX.Y.Z */
import { appendNode, assign, createElement, detachNode, init, noop, proto } from "svelte/shared.js";

function create_main_fragment(component, state) {
	var meta, meta_1;

	return {
		c: function create() {
			meta = createElement("meta");
			meta_1 = createElement("meta");
			this.h();
		},

		h: function hydrate() {
			meta.name = "twitter:creator";
			meta.content = "@sveltejs";
			meta_1.name = "twitter:title";
			meta_1.content = "Svelte";
		},

		m: function mount(target, anchor) {
			appendNode(meta, document.head);
			appendNode(meta_1, document.head);
		},

		p: noop,

		u: function unmount() {
			detachNode(meta);
			detachNode(meta_1);
		},

		d: noop
	};
}

function SvelteComponent(options) {
	init(this, options);
	this._state = assign({}, options.data);

	this._fragment = create_main_fragment(this, this._state);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);
	}
}

assign(SvelteComponent.prototype, proto);
export default SvelteComponent;