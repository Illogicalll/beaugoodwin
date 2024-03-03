export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "beaugoodwin/_app",
	assets: new Set([".nojekyll","CNAME","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.OkFuHYym.js","app":"_app/immutable/entry/app.Ch-Fcwo2.js","imports":["_app/immutable/entry/start.OkFuHYym.js","_app/immutable/chunks/entry.BQ-9AulN.js","_app/immutable/chunks/scheduler.FeCpPJ5G.js","_app/immutable/chunks/index.D79HzZe5.js","_app/immutable/entry/app.Ch-Fcwo2.js","_app/immutable/chunks/scheduler.FeCpPJ5G.js","_app/immutable/chunks/index.CzPceFrv.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
