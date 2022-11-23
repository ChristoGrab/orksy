from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Store

class StoreForm(FlaskForm):
  name = StringField(validators=[DataRequired("Ye've gotta give yer store a name")])
  description = TextAreaField(validators=[DataRequired("Let da boyz know wut yer store's all about, would ya?")])
  banner_image = StringField()
