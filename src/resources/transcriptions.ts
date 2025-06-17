// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as SpeechAPI from './speech';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';

export class Transcriptions extends APIResource {
  /**
   * Transcribe
   */
  create(body: TranscriptionCreateParams, options?: RequestOptions): APIPromise<TranscriptionCreateResponse> {
    return this._client.post(
      '/v1/transcriptions',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export interface TranscriptionCreateResponse {
  request_id: string;

  segments?: Array<TranscriptionCreateResponse.Segment | null>;

  text?: string | null;
}

export namespace TranscriptionCreateResponse {
  export interface Segment {
    end?: number;

    speaker?: number | null;

    start?: number;

    text?: number;
  }
}

export interface TranscriptionCreateParams {
  language: SpeechAPI.Language;

  content?: Uploadable | null;

  multispeaker?: boolean | null;

  timestamp?: boolean | null;

  url?: string | null;
}

export declare namespace Transcriptions {
  export {
    type TranscriptionCreateResponse as TranscriptionCreateResponse,
    type TranscriptionCreateParams as TranscriptionCreateParams,
  };
}
