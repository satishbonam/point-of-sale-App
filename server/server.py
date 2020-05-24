from flask import Flask
from flask import request
from flask_cors import CORS
import csv
import json
import time

app = Flask(__name__)
CORS(app)

@app.route("/home", methods=['GET'])
def home():
    with open("stocks.csv", "r") as file_hand:
        stock_data = csv.DictReader(file_hand)
        
        return json.dumps(list(stock_data))

@app.route("/", methods=['GET'])
def test():
    tim=time.clock()
    return json.dumps(tim)

@app.route("/generatebill", methods=['POST'])
def generatebill():
    bill_items = request.json['billItems']
    return json.dumps(bill_items)