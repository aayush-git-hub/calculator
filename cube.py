from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/cube', methods=['POST'])
def cube():
    data = request.get_json()
    number = data['number']
    result = number ** 3
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug = True,host = '0.0.0.0')
