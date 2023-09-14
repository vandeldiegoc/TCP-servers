interface Equipo {
  equipo: string;
  estado: string;
}
interface DB {
  [key: string]: Equipo;
}

export interface ForManagementData {
  validateState(data: string): void;
}
class ManagementData {
  db: DB = {};

  validateState(data: string) {
    if (data === "show") {
      const response = this.db;
      return response;
    }
    const code = `<[${data.toLocaleUpperCase()}]>`.trim();
    console.log("code 1 ", code);
    const regex: RegExp = /^<\[([A-F0-9]+[01D])\]>$/;
    const IsValid = regex.test(code);
    console.log(IsValid);
    const state = code.charAt(code.length - 3);
    const device = data.slice(0, -1);
    if (IsValid && (state === "1" || state === "0")) {
      const state_device = state == "1" ? "conectado" : "desconectado";
      const response = this.save(device, state_device);
      return response;
    }
    if (IsValid && state === "D") {
      const response = this.delete(device);
      return response;
    }
  }

  protected save(equipo: string, estado: string) {
    this.db[equipo] = { equipo, estado };
    console.log("equipment registration updated");
    return this.db[equipo];
  }

  protected delete(device: string) {
    if (this.db.hasOwnProperty(device)) {
      delete this.db[device];
      console.log(`el equipo ${device} fue eliminado con exito`);
      return {status: "delete"}
    } else console.log(`el equipo ${device} fue eliminado con exito`);
  }
}

export default ManagementData;
