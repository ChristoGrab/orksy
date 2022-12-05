from app.models import db, Review, environment, SCHEMA

def seed_reviews():
  rev_1 = Review(
    rating=4,
    review="Liked it",
    product_id=1,
    reviewer_id=1
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
  rev_6 = Review(
    rating=1,
    review="Hated it",
    product_id=1,
    reviewer_id=3
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

  db.session.add(rev_1)
  db.session.add(rev_2)
  db.session.add(rev_3)
  db.session.add(rev_4)
  db.session.add(rev_5)
  db.session.add(rev_6)
  db.session.add(rev_7)
  db.session.add(rev_8)
  db.session.add(rev_9)
  db.session.add(rev_10)
  db.session.add(rev_11)
  db.session.add(rev_12)
  db.session.commit()
  
def undo_reviews():
  if environment == "production":
    db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
  else:
    db.session.execute("DELETE FROM reviews")
        
  db.session.commit()
