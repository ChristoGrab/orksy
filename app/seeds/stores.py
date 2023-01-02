from app.models import db, Store, environment, SCHEMA

# Adds a demo user, you can add other users here if you want
def seed_stores():
  snagrod = Store(
    name="Snagrod'z Sweet & Sour Squigz",
    description="Oi, you lot. Whether you're looking for a tasty snack, or a faithful attack squig, we've got da best stock in da 'ole sector. Our squigz come fresh as a newly-flailed humie, wiv as much bark as dey've got bite. No refundz.",
    owner_id=6,
    banner_image="https://orksybucket.s3.us-east-2.amazonaws.com/squig-store.jpg"
  )
  mekkz = Store(
    name="Da Iron Mekworkz",
    description="If yer lookin to git in a good roight tumble wif som puny humies, da best way ter get to 'em is wiv our shiny, fast mekz.  Guaranteed ta take ya straight into the thikk of it, but not back out. Each mek comes personally cobbled togetha by a team of 'ighly trained mekboyz who spend at least 'alf as much time working together as they do bashin' each other's faces in.",
    owner_id=7,
    banner_image="https://orksybucket.s3.us-east-2.amazonaws.com/mek-shop.jpg"
  )
  gork = Store(
    name="Gork's Dakka Dealers",
    description="Sometimes yer just lookin to git in a good old scruff, up close an' personal.  For the rest of the time, Gork's Dakka Dealers 'as you covered.  Only the finest boomsticks, burnas and big shootas for the lads, 'and-crafted by me, Gork.  Slugz sold separately.",
    owner_id=2,
    banner_image="https://orksybucket.s3.us-east-2.amazonaws.com/dakka-store.jpg"
  )
  buzzgob = Store(
    name="Rokkit Retail",
    description="Orks is made for two fingz, and flyin' may not be one of 'em, but it's a one-of-a-kind experienz that'll keep ya coming back for more. Unless yer unlucky and the rokkit blows up in midair. That 'appens sometimez. But da rest of da time you kin enjoy da feelin' of defyin' gravity.",
    owner_id=10,
    banner_image="https://orksybucket.s3.us-east-2.amazonaws.com/flight-store.jpg"
  )
  mork = Store(
    name="Mork's Choppa Chain",
    description="Don't lissen to 'em nobz at Gork's Dakka Dealers. Orkz was made for getting stuck up in da middle of a scrap, and there's nowhere dat gets ya right and ready for a scrap like Mork's Choppaz.  All bladez 'as been foroughly tested on captured humies and those pointy-ear Eldar gits. An anyfing too dull to use for slicin' and stabbin' is still gonna be good for a bit of bashin' and mashin'.",
    owner_id=3,
    banner_image="https://orksybucket.s3.us-east-2.amazonaws.com/Choppa-store.jpg"
  )

  db.session.add(snagrod)
  db.session.add(mekkz)
  db.session.add(gork)
  db.session.add(buzzgob)
  db.session.add(mork)
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
