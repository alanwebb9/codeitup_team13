from flask import Flask
import pandas as pd
from typing import List, Tuple
from Passenger import Passenger
from Stop import Stop
from Bus import Bus
app = Flask(__name__)

availableStops = pd.DataFrame()
usedStops = pd.DataFrame()
<<<<<<< HEAD
routes = Tuple[List[Stop],List[Bus]] #((stop1, stop2, stop3), bus1, bus2)

=======
routes = Tuple[List[Stop], List[Bus]]  # ((stop1, stop2, stop3), bus1, bus2)
>>>>>>> dd1b3695a12b14f76111f6c353ee39a0a8196148
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
    global availableStops
    availableStops = pd.read_csv('data/stops.txt')

# this return some kind of


def generateStops():
    global availableStops
    global usedStops

    _stop = availableStops.sample(n=1)
<<<<<<< HEAD
    usedStops = usedStops.append(_stop)
    availableStops = availableStops.drop(_stop.index)
    
    lati = str(_stop.stop_lat.values[0])
    longi = str(_stop.stop_lon.values[0])
    return (lati, longi) # because long is a keyword don't get mad at me
=======
    usedStops.append(_stop)
    availableStops.drop(_stop.index)
    lati = str(row.stop_lat.values[0])
    longi = str(row.stop_lon.values[0])
    return (lati, longi)  # because long is a keyword don't get mad at me
>>>>>>> dd1b3695a12b14f76111f6c353ee39a0a8196148
