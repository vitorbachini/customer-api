import { app } from "./app";

const PORT = 3000;

const start = () => {app.listen(PORT, ()=>{
    console.log(`Server listening on port: ${PORT}`);
});}

start();