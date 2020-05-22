from flask import Flask, render_template,request,jsonify,session
import os
import requests

app = Flask(__name__)
app.secret_key = "abc"  



@app.route('/', methods = ['GET', 'POST'])
def login():
	x="Aadit Kachalia"
	session['name']=x
	return "Page 1"
@app.route('/signup', methods = ['GET', 'POST'])
def signup():
	x=session.get('name')
	print("The session is ",x)
	return "Page 2"
if __name__ == '__main__':
    app.run(debug=True)