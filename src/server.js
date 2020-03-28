import dotenv from "dotenv";
import app from "./app";
import socketIO from "socket.io";

dotenv.config();

const {
  env: { PORT }
} = process;

const handleListening = () =>
  console.log(`Server on : http://localhost:${PORT}`);

const server = app.listen(PORT, handleListening);
const io = socketIO(server);