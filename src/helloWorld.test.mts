import assert from 'node:assert';
import { describe, it } from 'node:test';
import { helloWorld } from './index.ts';

describe('helloWorld', () => {
  it('provides a valid example', async () => {
    //#region example
    const result = helloWorld();
    assert(result === 'Hello World');
    //#endregion example
  });
});
