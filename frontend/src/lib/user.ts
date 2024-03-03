import { writable } from 'svelte/store';
const user = writable<any>(null);
export default user;