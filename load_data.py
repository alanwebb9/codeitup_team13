import pandas as pd

def showData():
    df = pd.read_csv('data/stops.txt')
    row = df.sample(n=1)
    print(row)
    coords = row.stop_lat
    print(coords)

showData()