from app.models import db, Review, environment, SCHEMA

def seed_reviews():
  meg_1 = Review(
    rating=4,
    review="Dis armour is 'ard, just as advertized.",
    product_id=1,
    reviewer_id=1
  )
  meg_2 = Review(
    rating=4,
    review="I like ta use dis armor ta smash my puny enemiez ta bitz!",
    product_id=1,
    reviewer_id=2
  )
  meg_3 = Review(
    rating=1,
    review="Dis armour wuz terrible, I tested it wiv a rokkit launcha and da whole fing wuz 'sploded instantly. Not worf da teef.",
    product_id=1,
    reviewer_id=3
  )
  rev_2 = Review(
    rating=3,
    review="It was ok",
    product_id=2,
    reviewer_id=2
  )
  rev_3 = Review(
    rating=4,
    review="Liked it",
    product_id=3,
    reviewer_id=3
  )
  rev_4 = Review(
    rating=5,
    review="Loved it",
    product_id=4,
    reviewer_id=1
  )
  rev_5 = Review(
    rating=2,
    review="Disliked it",
    product_id=5,
    reviewer_id=2
  )
  rev_7 = Review(
    rating=5,
    review="Loved it",
    product_id=2,
    reviewer_id=1
  )
  rev_8 = Review(
    rating=4,
    review="Liked it",
    product_id=3,
    reviewer_id=4
  )
  rev_9 = Review(
    rating=4,
    review="Liked it",
    product_id=4,
    reviewer_id=5
  )
  rev_10 = Review(
    rating=3,
    review="Mediocre",
    product_id=5,
    reviewer_id=6
  )
  rev_11 = Review(
    rating=2,
    review="Disliked it",
    product_id=1,
    reviewer_id=7
  )
  rev_12 = Review(
    rating=2,
    review="Disliked it",
    product_id=6,
    reviewer_id=8
  )
  rev_13 = Review(
    rating=5,
    review="Dis produkt was da very finest of da bunch",
    product_id=7,
    reviewer_id=10
  )
  rev_14 = Review(
    rating=4,
    review="Orkeosaurus is very cute",
    product_id=8,
    reviewer_id=9
  )
  rev_15 = Review(
    rating=2,
    review="It didn't even take off before exploding",
    product_id=9,
    reviewer_id=5
  )

  db.session.add(meg_1)
  db.session.add(meg_2)
  db.session.add(meg_3)
  db.session.add(rev_2)
  db.session.add(rev_3)
  db.session.add(rev_4)
  db.session.add(rev_5)
  db.session.add(rev_7)
  db.session.add(rev_8)
  db.session.add(rev_9)
  db.session.add(rev_10)
  db.session.add(rev_11)
  db.session.add(rev_12)
  db.session.add(rev_13)
  db.session.add(rev_14)
  db.session.add(rev_15)
  db.session.commit()
  
def undo_reviews():
  if environment == "production":
    db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
  else:
    db.session.execute("DELETE FROM reviews")
        
  db.session.commit()
