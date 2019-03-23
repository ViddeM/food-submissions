from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from pony.orm import db_session, commit, ObjectNotFound

from db import Submission, submission_to_json, FoodPref

from flask_cors import CORS

app = Flask(__name__)
api = Api(app)

cors = CORS(app, resource={r"/*": {"origins":"*"}})


@db_session
def add_new_submission(nick, prefs_arr):
    new_sub = Submission(nick=nick)
    for pref in prefs_arr:
        FoodPref(submission=new_sub, preference=pref)

    return new_sub


class SubmissionsListResource(Resource):
    @db_session
    def get(self):
        for s in Submission.select(lambda t : True):
            print(submission_to_json(s))
        return jsonify([submission_to_json(s) for s in Submission.select(lambda t : True)])

    @db_session
    def post(self):
        return submission_to_json(add_new_submission(request.json["nick"], request.json["prefs"]))


class SubmissionsResource(Resource):
    @db_session
    def get(self, id):
        return submission_to_json(Submission[id])

    @db_session
    def delete(self, id):
        Submission[id].delete()

    @db_session
    def put(self, id):
        try:
            submission = Submission[id]
            submission.nick = request.json["nick"]
        except:
            add_new_submission(request.json[""])

api.add_resource(SubmissionsResource, '/list/<string:id>')
api.add_resource(SubmissionsListResource, '/list')


if __name__ == '__main__':
    app.run(host='0.0.0.0')