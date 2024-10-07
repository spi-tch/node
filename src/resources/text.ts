// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as TextAPI from './text';

export class Text extends APIResource {
  /**
   * Tone Mark
   */
  toneMark(body: TextToneMarkParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/v1/diacritics', { body, ...options });
  }
}

export type TextToneMarkResponse = unknown;

export interface TextToneMarkParams {
  language: 'yo' | 'en' | 'ha' | 'ig';

  text: string;
}

export namespace Text {
  export import TextToneMarkResponse = TextAPI.TextToneMarkResponse;
  export import TextToneMarkParams = TextAPI.TextToneMarkParams;
}
