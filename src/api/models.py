from flask_sqlalchemy import SQLAlchemy

from enum import Enum, unique
from sqlalchemy.types import ( Enum as OrmEnum
)

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Specialist(db.Model):
    specialist_id = db.Column(db.Integer, primary_key=True)
    comuna_id = db.Column(db.Integer, db.ForeignKey('comuna.comuna_id'))
    specialist_name = db.Column(db.String(120), unique=False)
    specialist_lastname = db.Column(db.String(120),unique=False)
    "specialist_field = db.Column(db.String(120), unique=False)"
    "specialist_field = Column(OrmEnum(SpecialistField), nullable=True)"
    cost = db.Column(db.Integer, unique=False)
    address = db.Column(db.String(120), unique=False)
    descrpition = db.Column(db.String(250), unique=False)
    comuna = db.relationship('Comuna')

    def serialize(self):
        return  {
            "specialist_id": self.specialist_id,
            "comuna_id": self.comuna_id,
            "specialist_name": self.specialist_name,
            "specialist_lastname": self.specialist_lastname,
            "specialist_field": self.special_field,
            "cost": self.cost,
            "address": self.address,
            "description": self.descrpition
        }

class Region(db.Model):
    region_id = db.Column(db.Integer, primary_key=True)
    region_name = db.Column(db.String(50), unique=False)

    def serialize(self):
        return  {
            "region_id": self.region_id,
            "region_name": self.region_name
         }

class Comuna(db.Model):
    comuna_id = db.Column(db.Integer, primary_key=True)
    region_id = db.Column(db.Integer, db.ForeignKey('region.region_id'))
    comuna_name = db.Column(db.String(50), unique=False)
    region = db.relationship('Region')

    def serialize(self):
        return  {
            "comuna_id": self.comuna_id,
            "region_id": self.region_id,
            "comuna_name": self.comuna_name
         }

class Client(db.Model):
    client_id = db.Column(db.Integer, primary_key=True)
    client_mail = db.Column(db.String(120), unique=True)
    client_name = db.Column(db.String(120), unique=False)
    client_lastname = db.Column(db.String(120),unique=False)
    client_phone = db.Column(db.Integer, unique=False)
    client_rut = db.Column(db.Integer, unique=True)


    def serialize(self):
        return  {
            "client_id": self.client_id,
            "client_mail": self.client_mail,
            "client_name": self.client_name,
            "client_lastname": self.client_lastname,
            "client_phone": self.client_phone,
            "client_rut:": self.client_rut
        }

class Schedule(db.Model):
    schedule_id = db.Column(db.Integer, primary_key=True)
    specialist_id = db.Column(db.Integer, db.ForeignKey('specialist.specialist_id'))
    time_start = db.Column(db.Integer, unique=False)
    time_end = db.Column(db.Integer,unique=False)
    day = db.Column(db.String(20), unique=True)
    specialist = db.relationship('Specialist')

    def serialize(self):
        return  {
            "schedule_id": self.schedule_id,
            "specialist_id": self.specialist_id,
            "time_start": self.time_start,
            "time_end": self.time_end,
            "day:": self.day
        }
    
class Reservation(db.Model):
    reservation_id = db.Column(db.Integer, primary_key=True)
    specialist_id = db.Column(db.Integer, db.ForeignKey('specialist.specialist_id'))
    client_mail = db.Column(db.String, db.ForeignKey('client.client_mail'))
    schedule_id = db.Column(db.Integer, db.ForeignKey('schedule.schedule_id'))
    reservation_type = db.Column(db.Integer,unique=False)
    reservation_comment = db.Column(db.String(200), unique=False)
    specialist = db.relationship('Specialist')
    client = db.relationship('Client')
    schedule = db.relationship('Schedule')

    def serialize(self):
        return  {
            "reservation_id": self.reservation_id,
            "specialist_id": self.specialist_id,
            "client_mail": self.client_mail,
            "schedule_id": self.schedule_id,
            "reservation_type": self.reservation_type,
            "reservation_comment:": self.reservation_comment
        }
"""
@unique
class SpecialistField(str, Enum):
    veterinario: str = 'Veterinario'
    dentista: str = 'Dentista'
    kinesiologo: str = 'Kinesiologo'
    psicologo: str = 'Psicologo'
    psiquiatra: str = 'Psiquiatra'
    nutricionista: str = 'Nutricionista'
"""