from Passenger import Passenger

class Stop:

    maxPass = 5 #default maximum passenger
    currentPass = ()

    def __init__(self, maxPass):
        self.maxPass = maxPass

    def removePass(self, passenger:Passenger):
        self.currentPass.remove(passenger) # Bug? Does python find the correct passenger here?

    def addPass(self, passenger:Passenger):
        self.currentPass.add(passenger)

    