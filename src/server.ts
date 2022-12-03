import  express, { Request, Response } from "express"; 
import path from "path";
import mustache from 'mustache-express';
import dotenv from "dotenv";
import mainRoutes from "./routes/index";
import { mongoConnect } from "./database/mongo";
dotenv.config();
const server = express();
mongoConnect();
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());
server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));
server.use(mainRoutes);
server.use((req: Request, res: Response) => {
  res.status(404).send('page not found');
})
server.listen(process.env.PORT);


