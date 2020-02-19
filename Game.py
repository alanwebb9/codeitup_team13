from flask import Flask
from Passenger import Passenger
app = Flask(__name__)

@app.route('/')
def startGame():
    return 'game started'

@app.route('/hi')
def endGame():
    return 'game ended'

def generatePassengers():
    return 0

p = Passenger()