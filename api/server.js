const server = express();
const carRouter = require("../router/carsRouter");
const helmet = require("helmet");

server.use(helmet());

server.use(express.json())
server.use(logger);

server.use("/api/cars", carRouter );


server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});


function logger(req, res, next) {
console.log(req.method);
 console.log(req.url);
console.log(Date.now());
next();
}



module.exports = server;
