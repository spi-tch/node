// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { SpitchSDK } from '../client';

export abstract class APIResource {
  protected _client: SpitchSDK;

  constructor(client: SpitchSDK) {
    this._client = client;
  }
}
