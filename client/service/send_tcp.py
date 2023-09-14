from typing import Protocol, Dict
from adapter.for_tcp_port import ForTCPAdapter

    

class SendTCP:
    tcp: ForTCPAdapter
    def __init__(self, tcp_adapter: ForTCPAdapter):
        self.tcp = tcp_adapter
    
    def validate_state(self, code, state) -> str:
        
        try:
            code_hex = ""
            if code == "Show":
                dabase_obj = self.tcp.send_and_receive(code)
                print("objetos en la base de datos " + dabase_obj)
            code_hex = hex(code)
            code_to_hex = str(code_hex + state)
            if state not in ('0', '1', 'D'):
                raise ValueError()
            data =self.tcp.send_and_receive(code_to_hex)
            return(data)

        except ValueError:
            print("Entrada no válida. Intente nuevamente.")
            

    def show_data(self, input):
        print("database ", input)
        database_obj = self.tcp.send_and_receive(input)



