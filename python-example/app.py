from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return {'message': 'Welcome!'}

@app.route('/demo/data')
def demo_data():
    team_members =  [
        {
            'name': 'unknown',
            'role': 'developer',
            'prefered_language': 'python'
        },
         {
            'name': 'dude',
            'role': 'developer',
            'prefered_language': 'Java'
        }
    ]

    return team_members
