// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Errors from './error';
import * as Uploads from './uploads';
import { type Agent } from './_shims/index';
import * as Core from './core';
import * as API from './resources/index';

export interface ClientOptions {
  /**
   * The client ID used for OAuth2 authentication
   */
  clientId?: string | undefined;

  /**
   * The client secret used for OAuth2 authentication
   */
  clientSecret?: string | undefined;

  /**
   * The token URL for the OAuth2 authentication
   */
  tokenURL?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['SPITCH_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Spitch API.
 */
export class Spitch extends Core.APIClient {
  clientId: string;
  clientSecret: string;
  tokenURL: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Spitch API.
   *
   * @param {string | undefined} [opts.clientId=process.env['OAUTH2_CLIENT_ID'] ?? undefined]
   * @param {string | undefined} [opts.clientSecret=process.env['OAUTH2_CLIENT_SECRET'] ?? undefined]
   * @param {string | undefined} [opts.tokenURL=process.env['OAUTH2_TOKEN_URL'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['SPITCH_BASE_URL'] ?? https://api.spi-tch.com] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('SPITCH_BASE_URL'),
    clientId = Core.readEnv('OAUTH2_CLIENT_ID'),
    clientSecret = Core.readEnv('OAUTH2_CLIENT_SECRET'),
    tokenURL = Core.readEnv('OAUTH2_TOKEN_URL'),
    ...opts
  }: ClientOptions = {}) {
    if (clientId === undefined) {
      throw new Errors.SpitchError(
        "The OAUTH2_CLIENT_ID environment variable is missing or empty; either provide it, or instantiate the Spitch client with an clientId option, like new Spitch({ clientId: 'My Client ID' }).",
      );
    }
    if (clientSecret === undefined) {
      throw new Errors.SpitchError(
        "The OAUTH2_CLIENT_SECRET environment variable is missing or empty; either provide it, or instantiate the Spitch client with an clientSecret option, like new Spitch({ clientSecret: 'My Client Secret' }).",
      );
    }
    if (tokenURL === undefined) {
      throw new Errors.SpitchError(
        "The OAUTH2_TOKEN_URL environment variable is missing or empty; either provide it, or instantiate the Spitch client with an tokenURL option, like new Spitch({ tokenURL: 'My Token URL' }).",
      );
    }

    const options: ClientOptions = {
      clientId,
      clientSecret,
      tokenURL,
      ...opts,
      baseURL: baseURL || `https://api.spi-tch.com`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.tokenURL = tokenURL;
  }

  transcriptions: API.Transcriptions = new API.Transcriptions(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  static Spitch = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static SpitchError = Errors.SpitchError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

export const {
  SpitchError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace Spitch {
  export import RequestOptions = Core.RequestOptions;

  export import Transcriptions = API.Transcriptions;
  export import TranscriptionCreateResponse = API.TranscriptionCreateResponse;
  export import TranscriptionCreateParams = API.TranscriptionCreateParams;
}

export default Spitch;
