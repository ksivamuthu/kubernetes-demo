From flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world:
    return 'I\'m python service'

if __name == '__main__':
    app.run(debug=True, host='0.0.0.0', port=3001)