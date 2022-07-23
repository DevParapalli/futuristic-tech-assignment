import {writable} from 'svelte/store';

export const stores = {
    currency: writable('USD')
}