// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as SpeechAPI from './speech';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Translate extends APIResource {
  /**
   * Translate
   */
  create(body: TranslateCreateParams, options?: RequestOptions): APIPromise<TranslateCreateResponse> {
    return this._client.post('/v1/translate', { body, ...options });
  }
}

export interface TranslateCreateResponse {
  request_id: string;

  text?: string;
}

export interface TranslateCreateParams {
  source: SpeechAPI.Language;

  target: SpeechAPI.Language;

  text: string;
}

export declare namespace Translate {
  export {
    type TranslateCreateResponse as TranslateCreateResponse,
    type TranslateCreateParams as TranslateCreateParams,
  };
}
