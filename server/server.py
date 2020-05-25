from flask import Flask
from flask import request
from flask_cors import CORS
import csv
import json
import datetime



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
    amount = request.json['amount']
    billNumber = request.json['billNumber']
    x = str(datetime.datetime.now())
    date = x.split(' ')[0]
    time=x.split(' ')[1]

    with open("stocks.csv", "r") as file_hand:
        stock_data = csv.DictReader(file_hand)
        test = []
        order=[]
        for stock in list(stock_data):
            for row in bill_items:
                if row['item'] == stock['item']:
                    stock['stocks'] = int(row['stocks']) - int(row['quantity'])
            if int(stock['stocks']) <= 10:
                order.append(stock)
            else:
                test.append(stock)
    headers=test[0].keys()
    with open('stocks.csv', 'w') as file_hand1:
        writer = csv.DictWriter(file_hand1, fieldnames=headers)
        writer.writeheader()
        writer.writerows(test)

    with open('orders.csv', 'a') as file_hand2:
        writer = csv.DictWriter(file_hand2, fieldnames=headers)
        writer.writerows(order)

    bill_data = [{"bill_no":billNumber, "date":date, "time":time, "amount":amount}]
    headers1 = bill_data[0].keys()
    with open('bills.csv', 'a') as file_hand3:
        writer = csv.DictWriter(file_hand3, fieldnames=headers1)
        writer.writerows(bill_data)

    

    return json.dumps({"message":"successfull"})

@app.route("/order", methods=['GET'])
def order():
    with open("orders.csv", "r") as file_hand:
        order_data = csv.DictReader(file_hand)
        
        return json.dumps(list(order_data))

@app.route("/bills", methods=['GET'])
def bills():
    x = str(datetime.datetime.now())
    date = x.split(' ')[0]
    with open("bills.csv", "r") as file_hand:
        bill_data = csv.DictReader(file_hand)
        amount = []
        time = []
        for row in list(bill_data):
            if row['date'] == date:
                amount.append(int(row['amount']))
                temp = row['time'].split(".")
                time.append(temp[0])

        
        return json.dumps({"x":list(amount),"y":list(time)})   