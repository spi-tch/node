// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as TextAPI from './text';

export class Text extends APIResource {
  /**
   * Tone Mark
   */
  toneMark(body: TextToneMarkParams, options?: Core.RequestOptions): Core.APIPromise<TextToneMarkResponse> {
    return this._client.post('/v1/diacritics', { body, ...options });
  }

  /**
   * Translate
   */
  translate(
    body: TextTranslateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TextTranslateResponse> {
    return this._client.post('/v1/translate', { body, ...options });
  }
}

export interface TextToneMarkResponse {
  request_id: string;

  text?: string;
}

export interface TextTranslateResponse {
  request_id: string;

  text?: string;
}

export interface TextToneMarkParams {
  language: 'yo' | 'en' | 'ha' | 'ig';

  text: string;
}

export interface TextTranslateParams {
  source: 'yo' | 'en' | 'ha' | 'ig';

  target: 'yo' | 'en' | 'ha' | 'ig';

  text: string;
}

export namespace Text {
  export import TextToneMarkResponse = TextAPI.TextToneMarkResponse;
  export import TextTranslateResponse = TextAPI.TextTranslateResponse;
  export import TextToneMarkParams = TextAPI.TextToneMarkParams;
  export import TextTranslateParams = TextAPI.TextTranslateParams;
}
