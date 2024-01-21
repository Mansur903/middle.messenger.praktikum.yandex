import { expect } from 'chai';
import sinon from 'sinon';

import { Link } from './index.ts';
import Router from '../../utils/Router.ts';

describe('Link', () => {
	it('element should return anchor-element', () => {
		const link = new Link('a', { to: '/' });
		const { element } = link;
		console.log(element);
		expect(element).to.be.instanceof(window.HTMLAnchorElement);
	});

	it('should go to passed route on click', () => {
		const link = new Link('a', { to: '/' });
		const spy = sinon.spy(Router, 'go');
		const element = link.element as HTMLSpanElement;

		element.click();

		expect(spy.calledOnce).to.eq(true);
	});
});
