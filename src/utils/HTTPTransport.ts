/* eslint-disable */
enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

type Options = {
  method: METHODS;
  data?: any;
  timeout?: number;
  headers?: Record<string, string>
}

type HTTPMethod = (url: string, options?: Options) => Promise<unknown>

function queryStringify(data: object) {
  if (!data) return '';

  const result = [];
  // eslint-disable-next-line guard-for-in,no-restricted-syntax
  for (const key in data) {
    result.push(`${key}=${data[key as keyof object]}`);
  }
  return `?${result.join('&')}`;
}

export class HTTPTransport {
  get: HTTPMethod = (url, options) => this.request(url, { ...options, method: METHODS.GET, data: queryStringify(options?.data) })
    .catch((err) => console.log(err));

  post: HTTPMethod = (url, options) => this.request(url, { ...options, method: METHODS.POST }).catch((err) => console.log(err));

  put: HTTPMethod = (url, options) => this.request(url, { ...options, method: METHODS.PUT }).catch((err) => console.log(err));

  delete: HTTPMethod = (url, options) => this.request(url, { ...options, method: METHODS.DELETE }).catch((err) => console.log(err));

  request = (url:string, options:Options) => {
    const { method, data, headers } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      if (method === METHODS.GET) {
        xhr.open(method, url + data);
      } else {
        xhr.open(method, url);
      }

      for (const headerName in headers) {
        xhr.setRequestHeader(headerName, headers[headerName]);
      }

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || method === METHODS.DELETE || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}
