from app.models import db, Review, environment, SCHEMA

def seed_reviews():
  meganob_1 = Review(
    rating=4,
    review="Dis armour is 'ard, just as advertized.",
    product_id=1,
    reviewer_id=1
  )
  meganob_2 = Review(
    rating=4,
    review="I like ta use dis armor ta smash my puny enemiez ta bitz!",
    product_id=1,
    reviewer_id=2
  )
  meganob_3 = Review(
    rating=1,
    review="Dis armour wuz terrible, I tested it wiv a rokkit launcha and da whole fing wuz 'sploded instantly. Not worf da teef.",
    product_id=1,
    reviewer_id=3
  )
  garg_1 = Review(
    rating=3,
    review="Overall I 'ad a mixed time wiv diz produkt. Da gargant is indeed an impressive beast by nature. 'owever, I tried fighting a humie titan wiv it, and suffice to say, da rezults were not convincing.",
    product_id=2,
    reviewer_id=2
  )
  wagon_1 = Review(
    rating=4,
    review="Riding around in my battlewagon, I kin feel da breeze caressing my soft Orkish skin as I trample dozens of innocent 'umies at a time. It's a lovely experienz.",
    product_id=4,
    reviewer_id=3
  )
  squiggoth_1 = Review(
    rating=5,
    review="If ya didn't already love squigs, da squiggoth is sure ta tickle yer fancy.  It can smash, it can roar, and best of all, it comes wiv a big old blasta ta melt even da toufest of foes.",
    product_id=5,
    reviewer_id=1
  )
  red_squig_1 = Review(
    rating=2,
    review="I wuz under the impression dis squig would come wiv some sort of special abilities, but it's just a regualar old squig.",
    product_id=8,
    reviewer_id=2
  )
  garg_2 = Review(
    rating=5,
    review="It's da biggest and baddest mek in town. As advertised, der is nuffin ya can't krush wiv a good old gargant under yer control. Would blast my enemies again.",
    product_id=2,
    reviewer_id=1
  )
  wagon_2 = Review(
    rating=4,
    review="Da battlewagon is a great kombination of firepower and speed. Everything an ork could possibly 'ope for in a ve'icle.",
    product_id=4,
    reviewer_id=4
  )
  squiggoth_2 = Review(
    rating=4,
    review="Almost perfekt.  Da squiggoth is a fine weapon of war, wiv colossal power. Sometimes it makes awkward gurgling noises, but not a major problem.",
    product_id=5,
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
    product_id=14,
    reviewer_id=9
  )
  rev_15 = Review(
    rating=2,
    review="It didn't even take off before exploding",
    product_id=9,
    reviewer_id=5
  )

  db.session.add(meganob_1)
  db.session.add(meganob_2)
  db.session.add(meganob_3)
  db.session.add(wagon_1)
  db.session.add(garg_1)
  db.session.add(squiggoth_1)
  db.session.add(red_squig_1)
  db.session.add(garg_2)
  db.session.add(wagon_2)
  db.session.add(squiggoth_2)
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
