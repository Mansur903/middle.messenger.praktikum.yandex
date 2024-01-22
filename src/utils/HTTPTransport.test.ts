import sinon, { SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic } from 'sinon';
import { expect } from 'chai';
import { HTTPTransport } from './HTTPTransport.ts';

describe('HTTPTransport', () => {
	let xhr: SinonFakeXMLHttpRequestStatic;
	let instance: HTTPTransport;
	let requests: SinonFakeXMLHttpRequest[] = [];

	beforeEach(() => {
		xhr = sinon.useFakeXMLHttpRequest();

		(global as any).XMLHttpRequest = xhr;

		xhr.onCreate = ((request: SinonFakeXMLHttpRequest) => {
			requests.push(request);
		});

		instance = new HTTPTransport('/auth');
	});

	afterEach(() => {
		requests = [];
	});

	it('.get() should send GET request', () => {
		instance.get('/user');

		const [request] = requests;

		expect(request.method).to.eq('Get');
	});

	it('the request is made to the correct address', () => {
		instance.get('/user');

		const [request] = requests;

		expect(request.url).to.eq('https://ya-praktikum.tech/api/v2/auth/user');
	});

	it('.post() should send POST request', () => {
		instance.post('/signin');

		const [request] = requests;

		expect(request.method).to.eq('Post');
	});

	it('the request is made to the correct address', () => {
		instance.post('/signin');

		const [request] = requests;

		expect(request.url).to.eq('https://ya-praktikum.tech/api/v2/auth/signin');
	});
});
