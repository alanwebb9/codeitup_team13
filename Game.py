from flask import Flask
from Passenger import Passenger
app = Flask(__name__)

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

def readCSV():
    #TODO: populate available stops
    pass

# this return some kind of
def generateStops():
    lati = 0 #TODO load from CSV
    longi = 0
    #TODO remove from available stops add to unavailable stops
    return (lati, longi) # because long is a keyword don't get mad at me
