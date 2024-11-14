// always be the first line to configure the .env
require("dotenv").config();
import express from "express";
import cors from "cors";
import {userAuthRouter} from "./router/userAuthentication";
import {connectDb}  from "./db-connection";
import { errorMiddleware } from "./middlewares/errorMiddleware";
import { leadsRouter } from "./router/leads";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const port = process.env.PORT;


app.get("/", (req: express.Request, res: express.Response) => 
  {
      try 
      {
          res.status(200).send("Server is up and running!");
      } 
      catch (e) 
      {
          console.log("getting error: ", e);
      }
});

app.use('/api',userAuthRouter);
app.use('/api',leadsRouter);

app.use(errorMiddleware);


connectDb().then(()=>{
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });  
})
