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
  squiggoth = Product(
    name="Squiggoth",
    description="Squiggoths are reptilian in nature and resemble Terran dinosaurs, although there have also been reports of mammoth-like Squiggoths adapted to cold climates that possess heavy fur and tusks. Squiggoths used for combat will have armoured barding placed around the creature's neck and head, along with a small armoured howdah (or even a fort on the largest Squiggoths) built on the creature's back. The fort carries Ork Boyz, along with powerful Ork artillery pieces such as Supa-Lobbas.",
    price=50000,
    store_id=1,
    image="https://orksybucket.s3.us-east-2.amazonaws.com/squiggoth-1.jpg"
  )
  red_squig = Product(
    name="Red Squig",
    description="Attack Squigs are one of the most common types of Squig. An Attack Squig is a bouncing ball of claws and razor-sharp teeth, with immense variations in morphology between individuals, with some having horns and a devil-like tail, while others are single-eyed or single-nosed creatures. Gretchin use them as both a food source (if the Squig doesn't eat them first!) or as a weapon of war, pushing herds of them into the enemy. Orks like to keep them as pets, and sometimes even as weapons as well.",
    price=20,
    store_id=1,
    image="https://orksybucket.s3.us-east-2.amazonaws.com/red+squig.jpg"
  )
  flyboy = Product(
    name="Flyboy",
    description="",
    price=4000,
    store_id=4,
    image="https://orksybucket.s3.us-east-2.amazonaws.com/flyboy-1.jpg"
  )
  burna = Product(
    name="Burna",
    description="A Burna Boyz' main armament, the Burna, is a heavy-duty combination cutting torch and flamethrower, alternating between the two functions with a simple twist of the spigot and altering the Promethium fuel pressure. Burnas themselves, like most examples of Orkish engineering, are designed to sustain the worst sort of battering and are very robust. They have to be, as more than one Burna Boy has been reduced to using it as a bludgeon after getting over-enthusiastic with his fuel supply.",
    price=60,
    store_id=3,
    image="https://orksybucket.s3.us-east-2.amazonaws.com/burna-1.jpg"
  )
  
  db.session.add(meganobz)
  db.session.add(gargant)
  db.session.add(squiggoth)
  db.session.add(red_squig)
  db.session.add(flyboy)
  db.session.add(burna)
  db.session.commit()
  
def undo_products():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM products")
        
    db.session.commit()
