from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError("Yer email ain't in our recordz")


def password_matches(form, field):
    # Checking if password matches
    password = field.data
    email = form.data['email']
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError("No such user in Orksy")
    if not user.check_password(password):
        raise ValidationError('Yer kredentials were wrong. Are you a humie spy?')


class LoginForm(FlaskForm):
    email = StringField('email', validators=[DataRequired("Yer email is required"), user_exists])
    password = StringField('password', validators=[
                           DataRequired("Yer password is required"), password_matches])
