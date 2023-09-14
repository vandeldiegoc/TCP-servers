from service.send_tcp import SendTCP

class CMDAdapter:
    service:SendTCP
    def __init__(self, service:SendTCP):
        self.service:SendTCP = service

    def execute(self):
        while True:
            device_code_decimal = input("Ingrese el código del equipo en decimal: ")
            if device_code_decimal == "show":
                self.service.show_data(device_code_decimal)
                continue
            device_state = input("¿El equipo está conectado? (1 para conectado, 0 para desconectado, D para eliminar): ")

            # Validar la entrada y convertir el código a hexadecimal si es necesario
            try:
                code = int(device_code_decimal)

                self.service.validate_state(code, device_state)
            except ValueError:
                print("Entrada no válida. Intente nuevamente.")
                continue
