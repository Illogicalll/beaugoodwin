

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CL4gUpLO.js","_app/immutable/chunks/scheduler.FeCpPJ5G.js","_app/immutable/chunks/index.CzPceFrv.js","_app/immutable/chunks/index.D79HzZe5.js"];
export const stylesheets = ["_app/immutable/assets/2.b1PWsape.css"];
export const fonts = [];
