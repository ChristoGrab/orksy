from flask_wtf import FlaskForm
from wtforms import StringField, FloatField, TextAreaField
from wtforms.validators import DataRequired
from app.models import Product

class ProductForm(FlaskForm):
  name = StringField(validators=[DataRequired("Ye've gotta give yer product a name")])
  description = TextAreaField(validators=[DataRequired("Da boyz won't know wut dis is if ya don't give a derscripshun ya nob")])
  price = FloatField(validators=[DataRequired("'ow many teef are ya gonna sell dis gizmo for?")])
  