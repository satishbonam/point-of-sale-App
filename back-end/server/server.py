from flask_cors import CORS
from flask import Flask
from flask import request
from blueprint_admin import admin
from blueprint_employee import employee
from blueprint_vendor import vendor
from flask_mysqldb import MySQL
import jwt
import json
import time



app = Flask(__name__)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'satish'
app.config['MYSQL_DB'] = 'pos_app'
mysql = MySQL(app)
CORS(app)




app.register_blueprint(admin, url_prefix="/admin")
app.register_blueprint(employee,url_prefix="/employee") 
app.register_blueprint(vendor,url_prefix="/vendor") 

@app.route('/',methods=['POST'])
def login():
    email = request.json["email"]
    password=request.json["password"]
    role=request.json["role"]
    
    cur = mysql.connection.cursor()
    cur.execute('''SELECT * FROM auth WHERE email="%s" AND password="%s" AND role="%s";'''%(email,password,role))
    result = cur.fetchall()
    data = []
    for row in result:
        data.append(row)

    if data:
        payload = {'username': email, 'message': 'logged_in','expires':time.time()+(60*60*1000)}
        key = 'secret'

        encode_jwt = jwt.encode(payload, key)

        return {'auth_token': encode_jwt.decode(), 'message': 'logged_in'}
    else:
        return {'message': 'username or password incorrect'}

@app.route('/checklogin',methods=['POST'])
def check_login():
    token = request.json["auth_token"]
    decode_jwt = jwt.decode(token,"secret")
  
    if decode_jwt.get('expires')>=time.time():
        return json.dumps({'auth_token': "valid"})
    else:
        return json.dumps({'auth_token': "invalid"})

