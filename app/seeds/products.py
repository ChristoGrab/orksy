from app.models import db, Product, SCHEMA, environment

def seed_products():
  meganobz = Product(
    name="Meganob Armur",
    description="Meganobz are da richest 'n most battle-'ardened Nobz around. Klad in Mek-built mega armur (wif enuf platin' to turn any nob into a smaller, less mekky Killa Kan)",
    price=65,
    store_id=2,
    image="https://orksybucket.s3.us-east-2.amazonaws.com/meganob-1.jpg"
  )
  gargant = Product(
    name="Gargant",
    description="Gargantz are da biggest and most Orky of meks, as big as a puny humie Titan and at least three times as 'ard.  Add dis jugganaut to ya arsenal an' you'll be able to wreck an entire sektor.",
    price=80000,
    store_id=2,
    image="https://orksybucket.s3.us-east-2.amazonaws.com/gargant.jpg"
  )
  
  db.session.add(meganobz)
  db.session.add(gargant)
  db.session.commit()
  
def undo_products():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM products")
        
    db.session.commit()
