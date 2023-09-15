import socket

class TCPAdapter:
    def __init__(self, host, port):
        self.host = host
        self.port = port
        self.client_socket = None
        

    def connect(self):
        try:
            self.client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            self.client_socket.connect((self.host, 3000))
            print(f"Conexión establecida con {self.host}:{self.port}")
        except Exception as e:
            print(f"Error al conectar: {str(e)}")

    def send_and_receive(self, data):
        try:
            if self.client_socket:
                self.client_socket.send(data.encode())
                response = self.client_socket.recv(1024).decode()
                print(response)
                return response
            else:
                return "No se pudo enviar el mensaje. La conexión no está establecida."
        except Exception as e:
            return str(e)


        

    def close(self):
        if self.client_socket:
            self.client_socket.close()
            print("Conexión cerrada.")