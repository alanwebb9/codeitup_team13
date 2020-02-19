from flask import Flask
app = Flask(__name__)

@app.route('/')
def startGame():
    return 'game started'

def endGame():
    return 'game ended'