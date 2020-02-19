from Passenger import Passenger
from Stop import Stop
import time

class Bus:

    passengers:Passenger = list()
    currentStop:Stop

    def _init_(self, passengers:Passenger, stop:Stop):
        self.passengers = passengers
        self.currentStop = stop

    def addPass(self, passenger:Passenger):
        passenger.append(passenger)

    def removePass(self, passenger:Passenger):
        passenger.remove(passenger)

    def move(self, toStop:Stop, TTT): #TTT= Time to travel
        time.sleep(TTT)
        self.currentStop = toStop

