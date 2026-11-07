import * as other from './other.js';
export const value = 'value';
export let reassigned = 'initial';
reassigned = 'reassigned';
export class Foo {}
assert.deepStrictEqual({ ...other }, { Foo, f: other.f, reassigned: 'reassigned', value: 'value' });
