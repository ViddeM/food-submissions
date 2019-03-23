from uuid import UUID

from flask import jsonify
from pony.orm import Database, Required, PrimaryKey, Set, db_session
import config

db = Database()


class Submission(db.Entity):
    id = PrimaryKey(UUID, auto=True)
    nick = Required(str)
    foodPrefs = Set('FoodPref')


class FoodPref(db.Entity):
    submission = Required('Submission')
    preference = Required(str)
    PrimaryKey(submission, preference)


db.bind(
    provider='postgres',
    user=config.POSTGRES_USER,
    password=config.POSTGRES_PASSWORD,
    host=config.POSTGRES_HOST,
    port=config.POSTGRES_PORT,
    database=config.POSTGRES_DB
)

db.generate_mapping(create_tables=True)


@db_session
def submission_to_json(submission):
    dat_array = [food_pref_to_json(s) for s in FoodPref.select(lambda pref: pref.submission == submission)]

    return {
        'id': str(submission.id),
        'nick': submission.nick,
        'prefs': str(dat_array)
    }


def food_pref_to_json(pref):
    print(pref.preference)
    return pref.preference