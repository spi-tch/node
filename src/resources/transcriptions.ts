// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as TranscriptionsAPI from './transcriptions';

export class Transcriptions extends APIResource {
  /**
   * Transcribe
   */
  create(body: TranscriptionCreateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/v1/transcriptions', Core.multipartFormRequestOptions({ body, ...options }));
  }
}

export type TranscriptionCreateResponse = unknown;

export interface TranscriptionCreateParams {
  language: 'yo' | 'en';

  content?: Core.Uploadable;

  url?: string;
}

export namespace Transcriptions {
  export import TranscriptionCreateResponse = TranscriptionsAPI.TranscriptionCreateResponse;
  export import TranscriptionCreateParams = TranscriptionsAPI.TranscriptionCreateParams;
}
