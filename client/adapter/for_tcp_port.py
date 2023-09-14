from  typing import Protocol, Dict

class ForTCPAdapter(Protocol):
    def send_and_receive(self, input: str) -> str:
        raise NotImplementedError()

    def show(self, input: str) -> Dict:
        raise NotImplementedError()