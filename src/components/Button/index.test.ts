import { expect } from 'chai';

import { Button } from './index.ts';

describe('Button', () => {
	it('element should return button', () => {
		const button = new Button({});
		const { element } = button;

		expect(element).to.be.instanceof(window.HTMLButtonElement);
	});

	it('element should contain event', () => {
		const button = new Button({
			events: {
				click: () => console.log('click'),
			},
		});
		const { element } = button;

		expect(element).to.have.property('click');
	});
});
