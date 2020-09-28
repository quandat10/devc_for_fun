# Created by Dattran
from flask import Flask, jsonify, request

app = Flask(__name__)


@app.route('/api', methods=[ 'POST'])
def api():
    posted_data = request.get_json()
    data = posted_data['textTrain']
    # textTrain = jsonify(str("Successfully data is " + str(data)))
    return {
        'textTrain':str(data)
    }
