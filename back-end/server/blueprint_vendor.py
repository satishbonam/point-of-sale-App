from flask import Blueprint
from flask import request
import csv
import json

vendor = Blueprint("vendor",__name__)

@vendor.route("/")
def home():
    return "vendor"