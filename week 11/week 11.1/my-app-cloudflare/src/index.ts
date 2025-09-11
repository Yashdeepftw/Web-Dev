

export interface Env {

}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		console.log(request.body);
		console.log(request.headers);
		console.log(request.method);

		if (request.method === "GET") {
			return Response.json({
				msg: 'you send a get request'
			});
		} else {
			return Response.json({
				msg: 'you did not send a get request'
			});
		}
	},
};