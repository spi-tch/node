// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as SpeechAPI from './speech';
import { type Response } from '../_shims/index';

export class Speech extends APIResource {
  /**
   * Synthesize
   */
  generate(body: SpeechGenerateParams, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.post('/v1/speech', { body, ...options, __binaryResponse: true });
  }

  /**
   * Transcribe
   */
  transcibe(body: SpeechTranscibeParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/v1/transcriptions', Core.multipartFormRequestOptions({ body, ...options }));
  }
}

export type SpeechTranscibeResponse = unknown;

export interface SpeechGenerateParams {
  language: 'yo' | 'en' | 'ha' | 'ig';

  text: string;

  voice?: 'sade' | 'segun' | 'femi' | 'funmi';
}

export interface SpeechTranscibeParams {
  language: 'yo' | 'en' | 'ha' | 'ig';

  content?: Core.Uploadable | null;

  url?: string | null;
}

export namespace Speech {
  export import SpeechTranscibeResponse = SpeechAPI.SpeechTranscibeResponse;
  export import SpeechGenerateParams = SpeechAPI.SpeechGenerateParams;
  export import SpeechTranscibeParams = SpeechAPI.SpeechTranscibeParams;
}
