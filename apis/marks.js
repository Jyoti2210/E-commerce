module.exports = function handler(req,res)
{
	console.log(req.params);
	res.sendJson(200,[{01:48},{02:69}]);
}
