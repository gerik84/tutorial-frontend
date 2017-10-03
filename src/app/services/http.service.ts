import {Injectable} from '@angular/core';
import {Http, ConnectionBackend, Request, RequestOptions, RequestOptionsArgs, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';

import {Config} from '../config';
import {PreloaderService} from "./preloader.service";

@Injectable()
export class HttpService extends Http {

  protected headers = new Headers({
    'Content-Type': 'application/json',
    'X-BLOG-APP-KEY': '139e747a-5a75-4d3f-a55c-9b9678f11290'
  });

  constructor(backend: ConnectionBackend,
              defaultOptions: RequestOptions,
              protected preloaderService: PreloaderService) {
    super(backend, defaultOptions);
  }

  /**
   * Performs any type of http request.
   * @param url
   * @param options
   * @returns {Observable<Response>}
   */
  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return super.request(url, options);
  }

  /**
   * Performs a request with `get` http method.
   * @param url
   * @param options
   * @param preloaderType
   * @returns {Observable<>}
   */
  get(url: string, options?: RequestOptionsArgs, preloaderType?: string): Observable<any> {
    this.requestInterceptor(preloaderType);
    let fullUrl = this.getFullUrl(url);

    options = new RequestOptions({headers: this.headers});

    return super.get(fullUrl, options)
      .catch(this.onCatch)
      .do((res: Response) => {
        this.onSubscribeSuccess(res);
      }, (error: any) => {
        this.onSubscribeError(error);
      })
      .finally(() => {
        this.onFinally(preloaderType);
      });
  }

  /**
   * Performs a request with `post` http method.
   * @param url
   * @param body
   * @param options
   * @returns {Observable<>}
   */
  post(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
    this.requestInterceptor();
    options = new RequestOptions({headers: this.headers});

    let fullUrl = this.getFullUrl(url);
    console.error(fullUrl);
    console.error(body);
    console.error(options);

    return super.post(fullUrl, body, options)
      .map(resp => {
        console.log('resp');
        console.log(resp);
        this.onSubscribeSuccess(resp);
        this.onFinally();
        return resp.json();
      })
      .catch(this.handleError);

    // return super.post(fullUrl, body, this.requestOptions(options))
    //   .toPromise()
    //   .then(resp => {
    //     console.log(resp);
    //     this.onSubscribeSuccess(resp);
    //     this.onFinally();
    //   })
    //   .catch( error => this.handleError(error));
  }

  protected handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


  /**
   * Performs a request with `put` http method.
   * @param url
   * @param body
   * @param options
   * @returns {Observable<>}
   */
  put(url: string, body: string, options?: RequestOptionsArgs): Observable<any> {
    this.requestInterceptor();

    return super.put(this.getFullUrl(url), body, this.requestOptions(options))
      .catch(this.onCatch)
      .do((res: Response) => {
        this.onSubscribeSuccess(res);
      }, (error: any) => {
        this.onSubscribeError(error);
      })
      .finally(() => {
        this.onFinally();
      });
  }

  /**
   * Performs a request with `delete` http method.
   * @param url
   * @param options
   * @returns {Observable<>}
   */
  delete(url: string, options?: RequestOptionsArgs): Observable<any> {
    this.requestInterceptor();

    return super.delete(this.getFullUrl(url), options)
      .catch(this.onCatch)
      .do((res: Response) => {
        this.onSubscribeSuccess(res);
      }, (error: Error) => {
        this.onSubscribeError(error);
      })
      .finally(() => {
        this.onFinally();
      });
  }

  //

  /**
   * Build full URL for request.
   * @param str
   * @returns {string}
   */
  private getFullUrl(str): string {
    return Config.api + str;
  }

  /**
   * Request options.
   * @param options
   * @returns {RequestOptionsArgs}
   */
  private requestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
    if (options == null) {
      options = new RequestOptions();
    }

    if (options.headers == null) {
      options.headers = new Headers();
    }

    return options;
  }

  /**
   * Request interceptor.
   */
  private requestInterceptor(preloaderType = 'full'): void {
    this.preloaderService.showPreloader(preloaderType);
  }

  /**
   * Response interceptor.
   */
  private responseInterceptor(preloaderType = 'full'): void {
    this.preloaderService.hidePreloader(preloaderType);
  }

  /**
   * Error handler.
   * @param error
   * @param caught
   * @returns {ErrorObservable}
   */
  private onCatch(error: any): Observable<any> {
    console.log('onCatch');
    return Observable.throw(error);
  }

  /**
   * onSubscribeSuccess
   * @param res
   */
  private onSubscribeSuccess(res: Response): void {
  }

  /**
   * onSubscribeError
   * @param error
   */
  private onSubscribeError(error: any): void {
  }

  /**
   * onFinally
   */
  private onFinally(preloaderType = 'full'): void {
    console.log('onFinally');
    this.responseInterceptor(preloaderType);
  }
}
