"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""

from flask import Flask, request, jsonify, url_for, send_from_directory, render_template
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models import db, User, Specialist, Region, Comuna, Client, Schedule, Reservation
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands
from logging import exception
from werkzeug.security import generate_password_hash, check_password_hash
from flask_sqlalchemy import SQLAlchemy
import os




ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

# database configuration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type = True)
db.init_app(app)

# Allow CORS requests to this API
CORS(app)

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)



# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints

@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0 # avoid cache memory
    return response
@app.route("/")
def index():
    return render_template("signup.js")

@app.route("/search")
def search():
    nickname = request.args.get("nickname")

    user = Users.query.filter_by(username=nickname).first()

    if user:
        return user.username

    return "The user doesn't exist."

@app.route("/signup", methods=["GET", "POST"])
def signup():
    if request.method == "POST":
        data = request.get_json()
        mail = data.mail
        password = data.password
        new_user = User(mail=mail, password=password)
        db.session.add(User)
        db.session.commit()

        return "You've registered successfully."

    return jsonify({"message": "kim funciona"})

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        user = Users.query.filter_by(username=request.form["username"]).first()

        if user and check_password_hash(user.password, request.form["password"]):
            return "You are logged in"
        return "Your credentials are invalid, check and try again."

    return jsonify({"message" : "kim funciona 2 veces"})


@app.route('/specialist', methods = ['GET'])
def getSpecialists():
    all_specialists = Specialist.query.all()
    specialist_array = list(map(lambda x:x.serialize(), all_specialists))
    return jsonify({"Specialists": specialist_array})

@app.route('/specialist/<int:specialist_id>', methods=['GET'])
def getSpecialistID(people_id):
    one_specialist = People.query.get(people_id)
    if one_specialist:
        return jsonify({"specialist id": one_specialist.serialize()})
    else:
        return "Este especialista no existe, intenta nuevamente con otro"


@app.route('/addspecialist', methods=['POST'])
def addSpecialist():
    try:
        #comuna_id = request.form["comuna_id"]  // #query.filter para traer nombre_comuna
        specialist_mail = request.form["specialist_mail"] #nombre del elemento en front
        specialist_name = request.form.get("specialist_name") #toma valor y si no existe lo deja como nulo
        specialist_lastname = request.form["specialist_lastname"]
        specialist_field =  request.form["specialist_field"]
        cost = request.form["cost"]
        address = request.form["address"]
        description = request.form["description"]

        specialist = Specialist(specialist_mail, specialist_name, specialist_lastname, specialist_field, int(cost), address, description)
        db.session.add(specialist)
        db.session.commit()

        return jsonify(specialist.serialize()), 200

    except Exception:
        exception("\n[SERVER]: Error in route /addspecialist. Log: \n")
        return jsonify({"msg": "Algo ha salido mal"}), 500


@app.route("/api/searchspecialist", methods=["POST"])
def searchSpecialistForm():
    try:
        specialist_name = request.form["specialist_name"] #agregar .form comuna y region

        specialist = Specialist.query.filter(Specialist.name.like(f"%{nameStreamer}%")).all()
        if not specialist:
            return jsonify({"msg": "Este especialista no existe"}), 200
        else:
            return jsonify(specialist.serialize()), 200

    except Exception:
        exception("[SERVER]: Error in route /searchspecialist ->")
        return jsonify({"msg": "Ha ocurrido un error"}), 500

# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
