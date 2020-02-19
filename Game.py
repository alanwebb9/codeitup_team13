from flask import Flask
from typing import List, Tuple
from Passenger import Passenger
from Stop import Stop
from Bus import Bus
app = Flask(__name__)

allStops = ()
availableStops = ()
unavailableStops = ()
routes = Tuple[List[Stop],List[Bus]] #((stop1, stop2, stop3), bus1, bus2)
@app.route('/')
def startGame():
    readCSV()
    return 'game started'

@app.route('/hi')
def endGame():
    return 'game ended'

def generatePassengers():
    return 0

@app.route('/readCSV')
def readCSV():
    name, x, y = load_data.showData()
    return name + ': ' + x + ' , ' + y 
    #TODO Populate allStops

# this return some kind of
def generateStops():
    #TODO grab random stop from all stops, add to available stops
    lati = 0
    longi = 0
    #TODO remove from available stops add to unavailable stops
    return (lati, longi) # because long is a keyword don't get mad at me
