from decouple import config
from adapter.cmd_adpter import CMDAdapter
from adapter.tcp_adpter import TCPAdapter
from service.send_tcp import SendTCP

def main():
    print(int(config("PORT_CLIENT")))
    print(config("SERVER_HOST"))
    TCP = TCPAdapter(config("SERVER_HOST"), int(config("PORT_CLIENT")))
    TCP.connect()

    service = SendTCP(TCP)

    cmd = CMDAdapter(service)
    cmd.execute()


    

if __name__ == '__main__':
    main()
