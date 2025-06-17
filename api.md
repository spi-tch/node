# Speech

Types:

- <code><a href="./src/resources/speech.ts">SpeechTranscribeResponse</a></code>

Methods:

- <code title="post /v1/speech">client.speech.<a href="./src/resources/speech.ts">generate</a>({ ...params }) -> Response</code>
- <code title="post /v1/transcriptions">client.speech.<a href="./src/resources/speech.ts">transcribe</a>({ ...params }) -> SpeechTranscribeResponse</code>

# Text

Types:

- <code><a href="./src/resources/text.ts">TextToneMarkResponse</a></code>
- <code><a href="./src/resources/text.ts">TextTranslateResponse</a></code>

Methods:

- <code title="post /v1/diacritics">client.text.<a href="./src/resources/text.ts">toneMark</a>({ ...params }) -> TextToneMarkResponse</code>
- <code title="post /v1/translate">client.text.<a href="./src/resources/text.ts">translate</a>({ ...params }) -> TextTranslateResponse</code>
