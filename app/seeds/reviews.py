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
  squiggoth_3 = Review(
    rating=3,
    review="Mediocre. My squiggoth managed to run about 300 yardz before gettin' it's head 'sploded by an Eldar mage git.  Now I'm in teef debt wiv nothin' ta show for it.",
    product_id=5,
    reviewer_id=6
  )
  mega_armor_1 = Review(
    rating=2,
    review="Meganobz should be da 'ardest of da bunch, but a humie Terminator wiped out a whole squad of 'em right in front of my eyez.",
    product_id=26,
    reviewer_id=7
  )
  basha_kroozer_1 = Review(
    rating=2,
    review="Disliked it. Shoulda bought a hamma stompa instead.",
    product_id=6,
    reviewer_id=8
  )
  rokkit_1 = Review(
    rating=5,
    review="Dis produkt was da very finest of da bunch. It 'splodes stuff left and right at will, it does.",
    product_id=7,
    reviewer_id=10
  )
  saurus_1 = Review(
    rating=4,
    review="Orkeosaurus is very cute. I like to play wiv his widdle teef, yes I do, yes I do.",
    product_id=14,
    reviewer_id=9
  )
  fighta_1 = Review(
    rating=2,
    review="It didn't even take off before exploding. Wanted to at least get in the air first...",
    product_id=15,
    reviewer_id=5
  )
  chain_choppa_1 = Review(
    rating=5,
    review="It's an 'ard axe wiv some 'ard teef. What more could an Ork possibly want in life?",
    product_id=23,
    reviewer_id=10
  )
  deff_dread_1 = Review(
    rating=4,
    review="Highly recommend, even more fun to pilot than a killa kan. And I love piloting killa kans.",
    product_id=24,
    reviewer_id=9
  )
  big_shoota_1 = Review(
    rating=3,
    review="Lots of firepower, which is good, but it kept jammin' on me, which is not good.",
    product_id=21,
    reviewer_id=8
  )
  mork_gaze_1 = Review(
    rating=5,
    review="All hail da mighty gaze of da mighty mork, who is definitely more mighty than Gork.  Or was it da other way around?",
    product_id=25,
    reviewer_id=10
  )
  chain_toof_1 = Review(
    rating=1,
    review="I'm not even sure why dis is listed 'ere?  It's just a toof dat costs more teef to buy.",
    product_id=16,
    reviewer_id=7
  )
  dakkajet_1 = Review(
    rating=4,
    review="Dakkajet's 'ave a lot of firepower, and dis model doesn't disappoint.  I was able ta shoot down multiple 'umie battlecraft at a time in dis.  Good times all around.",
    product_id=18,
    reviewer_id=9
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
  db.session.add(squiggoth_3)
  db.session.add(mega_armor_1)
  db.session.add(basha_kroozer_1)
  db.session.add(rokkit_1)
  db.session.add(saurus_1)
  db.session.add(fighta_1)
  db.session.add(chain_choppa_1)
  db.session.add(deff_dread_1)
  db.session.add(big_shoota_1)
  db.session.add(mork_gaze_1)
  db.session.add(chain_toof_1)
  db.session.add(dakkajet_1)
  db.session.commit()

def undo_reviews():
  if environment == "production":
    db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
  else:
    db.session.execute("DELETE FROM reviews")
        
  db.session.commit()
