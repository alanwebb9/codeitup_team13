from Passenger import Passenger

class Stop:

    maxPass = 5 #default maximum passenger
    currentPass = list()
    routes = list(list())
    adjacent = list()

    def __init__(self, maxPass, lati, longi):
        self.maxPass = maxPass
        self.adjacent = list()
        self.lati = lati
        self.longi = longi

    def tempAddAdj(self, stop):
        self.adjacent.append(stop)

    def removePass(self, passenger:Passenger):
        self.currentPass.remove(passenger) # Bug? Does python find the correct passenger here?

    def addPass(self, passenger:Passenger):
        self.currentPass.append(passenger)

    def addToRoute(self, stop):
        # add to adjacent
        pass

    