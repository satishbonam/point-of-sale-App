from flask import Blueprint
from flask import request
import csv
import json

employee = Blueprint("employee",__name__)

@employee.route("/")
def home():
    return "employee"