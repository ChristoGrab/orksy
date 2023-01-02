from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Dis email already belongs to an Orksy user, dimwit')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Dat uzername is already claimed')
        
def is_email(form, field):
    email = field.data
    if "@" not in email:
        raise ValidationError("Oi, dat's not a valid email address")

def username_length(form, field):
    username = field.data
    if len(username) > 40:
        raise ValidationError("No self-respectin' Ork picks a name dat long...")

class SignUpForm(FlaskForm):
    username = StringField(
        'username', validators=[DataRequired("Yer gotta provide an Orksy username"), username_exists, username_length])
    email = StringField('email', validators=[DataRequired("Yer gotta provide an email, ya hear?"), user_exists, is_email])
    password = StringField('password', validators=[DataRequired("Yer gotta make a super secret password")])
