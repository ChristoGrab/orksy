from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User, Store

def no_owner(form, field):

  owner_id = field.data
  owner = User.query.get(owner_id)
  if not owner:
    raise ValidationError("The provided owner_id does not exist")

def store_exists(form, field):

  name = field.data
  name_exists = Store.query.filter(Store.name == name)
  if name_exists:
    raise ValidationError("Yer too late, that name's bin taken already")


class StoreForm(FlaskForm):
  name = StringField(validators=[DataRequired("Ye've gotta give yer store a name")])
  description = TextAreaField(validators=[DataRequired("Let da boyz know wut yer store's all about, would ya?")])
  owner_id = IntegerField(validators=[DataRequired(), no_owner])
  banner_image = StringField()
