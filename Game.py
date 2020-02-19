from flask import Flask
import pandas as pd
from Passenger import Passenger
app = Flask(__name__)

availableStops = pd.DataFrame()
usedStops = pd.DataFrame()

@app.route('/')
def startGame():
    readCSV()
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
