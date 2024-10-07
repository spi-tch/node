// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as SpeechAPI from './speech';

export class Speech extends APIResource {
  /**
   * Synthesize
   */
  generate(params: SpeechGenerateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    const { stream, ...body } = params;
    return this._client.post('/v1/speech', { query: { stream }, body, ...options });
  }

  /**
   * Transcribe
   */
  transcibe(body: SpeechTranscibeParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/v1/transcriptions', Core.multipartFormRequestOptions({ body, ...options }));
  }
}

export type SpeechGenerateResponse = unknown;

export type SpeechTranscibeResponse = unknown;

export interface SpeechGenerateParams {
  /**
   * Body param:
   */
  language: 'yo' | 'en' | 'ha' | 'ig';

  /**
   * Body param:
   */
  text: string;

  /**
   * Query param:
   */
  stream?: boolean;

  /**
   * Body param:
   */
  voice?: 'sade' | 'segun' | 'femi' | 'funmi';
}

export interface SpeechTranscibeParams {
  language: 'yo' | 'en' | 'ha' | 'ig';

  content?: Core.Uploadable | null;

  url?: string | null;
}

export namespace Speech {
  export import SpeechGenerateResponse = SpeechAPI.SpeechGenerateResponse;
  export import SpeechTranscibeResponse = SpeechAPI.SpeechTranscibeResponse;
  export import SpeechGenerateParams = SpeechAPI.SpeechGenerateParams;
  export import SpeechTranscibeParams = SpeechAPI.SpeechTranscibeParams;
}
