from flask import Flask, request, jsonify
from model import train_model
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
model = train_model()

@app.route('/predict', methods=['GET'])
def predict():
    date = request.args.get('date')  # Expected format: YYYY-MM-DD
    try:
        future = pd.DataFrame({'ds': [date]})
        forecast = model.predict(future)
        price = forecast['yhat'].values[0]
        return jsonify({"date": date, "predicted_price": round(price, 2)})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)
