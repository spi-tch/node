// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SpitchSDK from 'spitch-sdk';

const client = new SpitchSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource speech', () => {
  // skipped: tests are disabled for the time being
  test.skip('synthesize: required and optional params', async () => {
    const response = await client.speech.synthesize({
      language: 'yo',
      text: 'text',
      voice: 'sade',
      stream: true,
    });
  });
});
