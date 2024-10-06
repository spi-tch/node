#!/usr/bin/env -S yarn tsn

import Spitch from 'spitch';

const client = new Spitch();

async function main() {
  const transcription = await client.transcriptions.create({ language: 'yo' });

  console.log(transcription);
}

main();
