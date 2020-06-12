from flask import Blueprint
from flask import request
import csv
import json

admin = Blueprint("admin",__name__)

@admin.route("/")
def home():
    return "admin"