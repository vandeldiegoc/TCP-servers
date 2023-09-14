import { Socket } from "net";
import { ForManagementData } from "./ManagementData.port";
import ManagementData from "../services/managementData";

class TCPAdapter {
  managementData: ForManagementData;
  constructor(private readonly client: Socket) {
    this.handleConnection();
    this.handleData();
    this.handleEnd();
    this.handleError();
    this.managementData = new ManagementData();
  }

  private handleConnection() {
    console.log(
      `Cliente conectado desde ${this.client.remoteAddress}:${this.client.remotePort}`
    );
  }

  private async handleData() {
    this.client.on("data", (buff) => {
      console.log(buff);
      try {
        const data: string = buff.toString();
        if (data.trim() === "show"){
        let object_response =this.managementData.validateState(data);
        this.respondToClient(object_response);
        return
        }
        const object_response = this.managementData.validateState(
        data.substring(2)
        );
        this.respondToClient(object_response);
      } catch (error) {
        throw new Error("hubo un error de implementacion");
      }
    });
  }

  private handleEnd() {
    this.client.on("end", () => {
      console.log(
        `Cliente desconectado desde ${this.client.remoteAddress}:${this.client.remotePort}`
      );
    });
  }

  private handleError() {
    this.client.on("error", (err) => {
      console.error(`Error en la conexión con el cliente: ${err}`);
    });
  }
  private async respondToClient(message: Promise<string>) {
    console.log("dsadadas", await message);
    try {
      const response = JSON.stringify(await message);
      console.log(response);
      this.client.write(response);
    } catch (error) {
      console.error(`Error al enviar respuesta al cliente: ${error}`);
    }
  }
}

export default TCPAdapter;
