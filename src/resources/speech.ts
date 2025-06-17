// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Speech extends APIResource {
  /**
   * Synthesize
   */
  synthesize(params: SpeechSynthesizeParams, options?: RequestOptions): APIPromise<Response> {
    const { stream, ...body } = params;
    return this._client.post('/v1/speech', {
      query: { stream },
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'audio/wav' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export type Language = 'yo' | 'en' | 'ha' | 'ig' | 'am';

export interface SpeechSynthesizeParams {
  /**
   * Body param:
   */
  language: Language;

  /**
   * Body param:
   */
  text: string;

  /**
   * Body param:
   */
  voice:
    | 'sade'
    | 'segun'
    | 'femi'
    | 'funmi'
    | 'amina'
    | 'aliyu'
    | 'hasan'
    | 'zainab'
    | 'ngozi'
    | 'amara'
    | 'ebuka'
    | 'obinna'
    | 'lucy'
    | 'lina'
    | 'john'
    | 'jude'
    | 'henry'
    | 'kani'
    | 'hana'
    | 'selam'
    | 'tena'
    | 'tesfaye';

  /**
   * Query param:
   */
  stream?: boolean;
}

export declare namespace Speech {
  export { type Language as Language, type SpeechSynthesizeParams as SpeechSynthesizeParams };
}
