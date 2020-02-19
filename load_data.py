import pandas as pd

def loadAll():
    df = pd.read_csv('data/stops.txt')
    row = df.sample(n=1)
    return str(row.stop_name.values[0]), str(row.stop_lat.values[0]), str(row.stop_lon.values[0])