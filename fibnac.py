from flask import Flask, request, jsonify

app = Flask(__name__)

def fibonacci(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)

@app.route('/fibonacci', methods=['POST'])
def get_fibonacci():
    data = request.get_json()
    n = int(data['n'])
    fib = fibonacci(n)
    return jsonify({'n': n, 'fibonacci': fib})

if __name__ == '__main__':
    app.run(debug = True,host = '0.0.0.0')
