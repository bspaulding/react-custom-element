/* @flow */

/* global ReactClass */

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

export function registerCustomElement(ComponentClass: ReactClass<any>, tagName: string) {
	var elementPrototype = Object.create(HTMLElement.prototype);
	function renderElement() {
		const props = [].slice.call(this.attributes).reduce((attrs, attr) => {
			attrs[attr.nodeName] = attr.nodeValue;
			return attrs;
		}, {});
		render(<ComponentClass {...props}/>, this);
	};
	elementPrototype.attachedCallback = renderElement;
	elementPrototype.detachedCallback = function() {
		unmountComponentAtNode(this);
	};
	elementPrototype.attributeChangedCallback = renderElement;

	return document.registerElement(tagName || ComponentClass.displayName, {
		prototype: elementPrototype
	});
}

