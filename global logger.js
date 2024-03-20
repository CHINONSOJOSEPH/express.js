const logger = function(req, res, next){
    console.log("requestPropertise", {
        url: req.url,
        method: req.method,
        body: req.body,
        querry: req.querry,
        params: req.params,
        time: new Date(),

    })
    next();
};

module.exports = logger;