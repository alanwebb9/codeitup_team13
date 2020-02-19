from flask import Flask
import load_data
from Passenger import Passenger
app = Flask(__name__)

allStops = ()
availableStops = ()
unavailableStops = ()

@app.route('/')
def startGame():
    return 'game started'

@app.route('/hi')
def endGame():
    return 'game ended'

def generatePassengers():
    return 0

@app.route('/readCSV')
def readCSV():
    x, y = load_data.showData()
    return x + ' _ ' + y 

# this return some kind of
def generateStops():
    lati = 0 #TODO load from a random available stop
    longi = 0
    #TODO remove from available stops add to unavailable stops
    return (lati, longi) # because long is a keyword don't get mad at me
