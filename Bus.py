from Passenger import Passenger
from Stop import Stop

class Bus:

    passengers:Passenger = list()

    def _init_(self, passengers:Passenger):
        self.passengers = passengers

    def addPass(self, passenger:Passenger):
        passenger.append(passenger)

    def removePass(self, passenger:Passenger):
        passenger.remove(passenger)

