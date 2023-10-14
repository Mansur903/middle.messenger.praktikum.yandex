enum METHODS {
  GET = 'GET',
  POST =  'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

type Options = {
  method: METHODS;
  data?: any;
  timeout?: number;
  headers?: Record<string, string>
}
function queryStringify(data: object) {
  // Можно делать трансформацию GET-параметров в отдельной функции
  if (!data) return ''

  const result = []
  for (let key in data) {
    result.push(`${key}=${data[key as keyof object]}`)
  }
  return `?${result.join('&')}`
}

class HTTPTransport {
  get = (url:string, options:Options) => {

    return this.request(url, {...options, method: METHODS.GET, data: queryStringify(options.data)}, options.timeout).catch(err => console.log(err))
  };

  post = (url:string, options:Options) => {

    return this.request(url, {...options, method: METHODS.POST}, options.timeout).catch(err => console.log(err))
  };

  put = (url:string, options:Options) => {
    return this.request(url, {...options, method: METHODS.PUT}, options.timeout).catch(err => console.log(err))
  };

  delete = (url:string, options:Options) => {
    return this.request(url, {...options, method: METHODS.DELETE}, options.timeout).catch(err => console.log(err))
  }

  request = (url:string, options:Options, timeout = 5000) => {
    const {method, data, headers} = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      if (method === METHODS.GET) {
        xhr.open(method, url + data);
      } else {
        xhr.open(method, url);
      }

      for (let headerName in headers) {
        xhr.setRequestHeader(headerName, headers[headerName]);
      }

      xhr.onload = function() {
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
