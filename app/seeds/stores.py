from app.models import db, Store, environment, SCHEMA

# Adds a demo user, you can add other users here if you want
def seed_stores():
  snagrod = Store(
    name="Snagrod'z Sweet & Sour Squigz",
    description="Oi, you lot. We've got da best tasting squiz in da 'ole sector. Fresh as a newly-flailed humie. No refundz.",
    owner_id=6
  )
  mekkz = Store(
    name="Da Iron Mekkworkz",
    description="If yer lookin to git in a good roight tumble wif som puny humies, da best way ter get to 'em is wiv our shiny, fast mekkz.  Guaranteed ta take ya straight into the thikk of it, but not back out.",
    owner_id=7
  )
  gork = Store(
    name="Gork's Dakka Dealers",
    description="Sometimes yer just lookin to git in a good old scruff, up close an' personal.  For the rest of the time, Gork's Dakka Dealers 'as you covered.  Only the finest boomsticks, burnas and big shootas for the lads.  Slugz sold separately.",
    owner_id=2
  )

  db.session.add(snagrod)
  db.session.add(mekkz)
  db.session.add(gork)
  db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_stores():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.stores RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM stores")
        
    db.session.commit()
