from flask import Flask
import load_data
from Passenger import Passenger
app = Flask(__name__)

allStops = ()
availableStops = ()
unavailableStops = ()

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
