// always be the first line to configure the .env
require("dotenv").config();
import express from "express";
import cors from "cors";
import {userAuthRouter} from "./router/userAuthentication";
import {connectDb}  from "./db-connection";

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


connectDb().then(()=>{
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });  
})
