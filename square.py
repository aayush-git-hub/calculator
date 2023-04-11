from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/square', methods=['POST'])
def square():
    data = request.get_json()
    number = data['number']
    square = number ** 2
    result = {'result': square}
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug = True,host = '0.0.0.0')
