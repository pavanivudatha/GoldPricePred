import requests
import pandas as pd
from datetime import datetime, timedelta

API_KEY = "goldapi-1mc08osmb3z0doh-io"
headers = {"x-access-token": API_KEY}
base_url = "https://www.goldapi.io/api/XAU/USD/"

start_date = datetime(2024, 1, 1)
end_date = datetime(2024, 12, 31)
# Initialize an empty list to store the data

data = []

print("Fetching data from GoldAPI...")
while start_date <= end_date:
    date_str = start_date.strftime('%Y-%m-%d')
    url = f"{base_url}{date_str}"
    try:
        res = requests.get(url, headers=headers)
        if res.status_code == 200:
            json_data = res.json()
            data.append({"Date": date_str, "Price": json_data["price"]})
    except Exception as e:
        print(f"Error fetching {date_str}: {e}")
    start_date += timedelta(days=1)

# Save to CSV
df = pd.DataFrame(data)
df.to_csv('../data/gold_data.csv', index=False)
print("Saved to gold_data.csv")
