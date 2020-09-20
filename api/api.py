###Created by Dattran
from flask import Flask, jsonify, request

app = Flask(__name__)
@app.route('/api',methods = ['GET','POST'])

def api():
   if request.method == 'GET':
       return {

       'textTrain':'0'
   }
   elif request.method == 'POST' :
        posted_data = request.get_json()
        data = posted_data['textTrain']
        return jsonify(str("Successfully data is  " + str(data)))

