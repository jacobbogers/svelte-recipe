

import Arrow from '../Arrow.svelte';

// cannot be imported from Arrow.svelte, because of bug in 
const ARROW_STATE = {
    NONE: 1,
    SHOW: 2,
    DOWN: 4
};


Arrow;
ARROW_STATE;

describe('Arrow.svelte', () => {
    ///
    it.todo('do something');
});
