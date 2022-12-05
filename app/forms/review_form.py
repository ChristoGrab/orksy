from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField

class ReviewForm(FlaskForm):
  rating = IntegerField(validators=[DataRequired("Not much of a review wivout a rating, is it nob?")])
  review = StringField(validators=[DataRequired("Ya gotta leave some feedback so da boyz know what to get mad at yer about")])
  product_id = StringField()
  reviewer_id = StringField()
