// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Spitch, { toFile } from 'spitch';
import { Response } from 'node-fetch';

const client = new Spitch({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource speech', () => {
  test('generate: required and optional params', async () => {
    const response = await client.speech.generate({
      language: 'yo',
      text: 'text',
      stream: true,
      voice: 'sade',
    });
  });

  test('transcibe: only required params', async () => {
    const responsePromise = client.speech.transcibe({ language: 'yo' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('transcibe: required and optional params', async () => {
    const response = await client.speech.transcibe({
      language: 'yo',
      content: await toFile(Buffer.from('# my file contents'), 'README.md'),
      url: 'url',
    });
  });
});
