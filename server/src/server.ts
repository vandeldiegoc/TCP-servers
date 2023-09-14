import  {createServer}  from "net"
import environment  from "./config"
import TCPAdapter from "./adapter/tcp.Adapter"


const PORT: number = environment.PORT

const server = createServer((cliente) => {
    const tcpAdapter = new TCPAdapter(cliente);
  });




server.listen(PORT, () => {
  console.log(`Servidor TCP escuchando en el puerto ${PORT}`);
});