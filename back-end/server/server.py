from flask_cors import CORS
from flask import Flask
from flask import request
from blueprint_admin import admin
from blueprint_employee import employee
from blueprint_vendor import vendor
from flask_mysqldb import MySQL



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

@app.route('/')
def login():
    cur = mysql.connection.cursor()
    cur.execute('''SELECT * FROM auth;''')
    result = cur.fetchall()
    data = []
    for row in result:
        data.append(row)
    return {'data':data}

