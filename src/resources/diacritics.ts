// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as SpeechAPI from './speech';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Diacritics extends APIResource {
  /**
   * Tone Mark
   */
  create(body: DiacriticCreateParams, options?: RequestOptions): APIPromise<DiacriticCreateResponse> {
    return this._client.post('/v1/diacritics', { body, ...options });
  }
}

export interface DiacriticCreateResponse {
  request_id: string;

  text?: string;
}

export interface DiacriticCreateParams {
  language: SpeechAPI.Language;

  text: string;
}

export declare namespace Diacritics {
  export {
    type DiacriticCreateResponse as DiacriticCreateResponse,
    type DiacriticCreateParams as DiacriticCreateParams,
  };
}
