export interface HttpResponse {
  status: number;
  body: unknown;
}

export type HttpAdapter<T> = (t: T) => Promise<HttpResponse>;
