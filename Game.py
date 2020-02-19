from flask import Flask
import pandas as pd
from typing import List, Tuple
from Passenger import Passenger
from Stop import Stop
from Bus import Bus
app = Flask(__name__)

availableStops = pd.DataFrame()
usedStops = pd.DataFrame()
routes = Tuple[List[Stop],List[Bus]] #((stop1, stop2, stop3), bus1, bus2)
@app.route('/')
def startGame():
    loadCSV()
    return 'game started'

@app.route('/hi')
def endGame():
    return 'game ended'

def generatePassengers():
    return 0

@app.route('/loadCSV')
def loadCSV():
    availableStops = pd.read_csv('data/stops.txt')

# this return some kind of
def generateStops():
    _stop = availableStops.sample(n=1)
    usedStops.append(_stop)
    availableStops.drop(_stop.index)
    lati = str(row.stop_lat.values[0])
    longi = str(row.stop_lon.values[0])
    return (lati, longi) # because long is a keyword don't get mad at me
