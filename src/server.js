import dotenv from "dotenv";
import app from "./app";
import socketIO from "socket.io";
import socketController from "./socketController";

dotenv.config();

const {
  env: { PORT },
} = process;

const handleListening = () =>
  console.log(`Server on : http://localhost:${PORT}`);

const server = app.listen(PORT, handleListening);
const io = socketIO.listen(server);

io.on("connection", (socket) => socketController(socket, io));
