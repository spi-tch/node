// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as SpeechAPI from './speech';
import { type Response } from '../_shims/index';

export class Speech extends APIResource {
  /**
   * Synthesize
   */
  generate(params: SpeechGenerateParams, options?: Core.RequestOptions): Core.APIPromise<Response> {
    const { stream, ...body } = params;
    return this._client.post('/v1/speech', { query: { stream }, body, ...options, __binaryResponse: true });
  }

  /**
   * Transcribe
   */
  transcribe(
    body: SpeechTranscribeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpeechTranscribeResponse> {
    return this._client.post('/v1/transcriptions', Core.multipartFormRequestOptions({ body, ...options }));
  }
}

export interface SpeechTranscribeResponse {
  request_id: string;

  segments?: Array<SpeechTranscribeResponse.Segment | null>;

  text?: string | null;
}

export namespace SpeechTranscribeResponse {
  export interface Segment {
    end?: number;

    speaker?: number | null;

    start?: number;

    text?: number;
  }
}

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
    | 'jude';

  /**
   * Query param:
   */
  stream?: boolean;
}

export interface SpeechTranscribeParams {
  language: 'yo' | 'en' | 'ha' | 'ig';

  content?: Core.Uploadable | null;

  multispeaker?: boolean | null;

  timestamp?: boolean | null;

  url?: string | null;
}

export namespace Speech {
  export import SpeechTranscribeResponse = SpeechAPI.SpeechTranscribeResponse;
  export import SpeechGenerateParams = SpeechAPI.SpeechGenerateParams;
  export import SpeechTranscribeParams = SpeechAPI.SpeechTranscribeParams;
}
