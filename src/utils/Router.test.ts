import { expect } from 'chai';
import sinon from 'sinon';
import Router from './Router.ts';
import Block from './Block';

describe('Router', () => {
	global.window.history.back = () => {
		if (typeof window.onpopstate === 'function') {
			window.onpopstate({ currentTarget: window } as unknown as PopStateEvent);
		}
	};
	global.window.history.forward = () => {
		if (typeof window.onpopstate === 'function') {
			window.onpopstate({ currentTarget: window } as unknown as PopStateEvent);
		}
	};

	beforeEach(() => {
		Router.reset();
	});

	const getContentFake = sinon.fake.returns(document.createElement('div'));

	const BlockMock = class {
		getContent = getContentFake;
	} as unknown as Block;

	it('use() should return Router instance', () => {
		const result = Router.use('/', (BlockMock as any));

		expect(result).to.eq(Router);
	});

	describe('.back()', () => {
		it('should render a page on history back action', () => {
			Router
				.use('/', (BlockMock as any))
				.start();

			Router.back();

			expect(getContentFake.callCount).to.eq(1);
		});
	});

	it('should render a page on start', () => {
		Router
			.use('/', (BlockMock as any))
			.start();

		expect(getContentFake.callCount).to.eq(1);
	});
});
