import pandas as pd
from prophet import Prophet

def train_model():
    df = pd.read_csv('../data/gold_data.csv')
    df.rename(columns={'Date': 'ds', 'Price': 'y'}, inplace=True)
    model = Prophet()
    model.fit(df)
    return model
