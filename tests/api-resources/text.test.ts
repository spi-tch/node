// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Spitch from 'spitch';
import { Response } from 'node-fetch';

const client = new Spitch({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource text', () => {
  test('toneMark: only required params', async () => {
    const responsePromise = client.text.toneMark({ language: 'yo', text: 'text' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('toneMark: required and optional params', async () => {
    const response = await client.text.toneMark({ language: 'yo', text: 'text' });
  });

  test('translate: only required params', async () => {
    const responsePromise = client.text.translate({ source: 'yo', target: 'yo', text: 'text' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('translate: required and optional params', async () => {
    const response = await client.text.translate({ source: 'yo', target: 'yo', text: 'text' });
  });
});
