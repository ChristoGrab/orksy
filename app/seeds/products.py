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
  battlewagon = Product(
    name="Battlewagon",
    description="Designed to carry a whole fighting mob of Orks, plus any Gretchin, Snotlings, Squigs or shiny things that may belong to the mob, Battlewagons are typically large, heavy and noisy. Ownership of a Battlewagon marks an Ork out as particularly prestigious or 'flash'. A typical Battlewagon owner is most likely a Nob of some description, though various Oddboyz may have access to Battlewagons at certain times. Warbosses often mount themselves and their immediate retinue in Battlewagons when travelling to battle, and may have more than one if their retinue is of sufficient size.",
    price=32000,
    store_id=2,
    image="https://orksybucket.s3.us-east-2.amazonaws.com/BattlewagonArt.jpg"
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
  colossal_squig = Product(
    name="Colossal Squig",
    description="Colossal Squigs are enormous, improbable and quite insane. These fungoid beasts possess insatiable appetites and boundless energy which, coupled with their mountainous size, means they can unleash untold havoc in battle! Their impossibly large, fleshy mouths can messily devour swathes of foes in an instant, while their rush to eat usually means anything that escapes their grisly jaws is squashed flat by the beast as it careens headlong towards its next meal.",
    price=3500,
    store_id=1,
    image="https://orksybucket.s3.us-east-2.amazonaws.com/colossal-squig.jpg"
  )
  boom_squig = Product(
    name="Boom Squig",
    description="Orks sometimes use Squigs as running explosives, exploiting their natural tendency to chase anything that moves. Explosives are strapped to their sides or gripped firmly in their teeth and when properly goaded, they run headlong at the desired target, usually enemy vehicles. The best bomb squigs will have undergone rudimentary training to hunt enemy tanks, chasing through the encampment after a looted wagon to snatch juicy Snotling rewards off its back bumper. However, these creatures are not famed for their intellect and can sometimes chase a friendly vehicle instead - a price Orks are willing to pay. Bomb squigs have been seen taking to the field strapped with everything from tankbusta bombs and pressure-mines to directionally explosive cranial transplants, but usually are equipped with as many Stikkbombs as possible. Imperial post-action reports even claim that the Ultresica Breach Disaster began with a single, mad-eyed bomb squig charging into the midst of the Corscan 3rd Artillery with a filched vortex grenade clamped between its teeth. These living weapons are usually used by Ork Tankbustas.",
    price=130,
    store_id=1,
    image="https://orksybucket.s3.us-east-2.amazonaws.com/boom-squig.jpg"
  )
  orkeosaurus = Product(
    name="Feral Orkeosaurus",
    description="The rarely seen Orkeosaurus is an even larger sub-species of squig than the more infamous Squiggoth. They are used by Feral Orks as troop-transports and warmachines.",
    price=4200,
    store_id=1,
    image="https://orksybucket.s3.us-east-2.amazonaws.com/orkeosaurus.jpg"
  )
  flyboy = Product(
    name="Flyboy",
    description="Most Orks prefer to keep their feet firmly on the ground, and believe the real fighting is done up close and personal. Ork aircraft are the ultimate expression of a particular mania that can seize an Ork's mind. The afflicted Ork seeks ever-greater thrills from speed and danger, driving or, in extreme cases, flying faster and faster. Those afflicted are called Speed Freeks, and regardless of their original klan, invariably belong to the Kult of Speed. The majority of Speed Kultists come from the Evil Sunz klan, but not all, and the mania can seize any Ork. Few actually become pilots, because most Orks have a natural distrust of flying, and much prefer to remain with their feet solidly upon the ground, where the proppa' scrappin is done.",
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
  deffgun = Product(
    name="Deffgun",
    description="Deffguns are heavy Ork weapons, fine examples of the Mek's craft that are made from all kinds of materials, mainly scavenged heavy weaponry of other races. Deffguns are so large they must be mounted on a special firing rig strapped to to an Ork's broad shoulders. No man could hope to fit into a Deffgun's rig without heavy augmetics or thick slabs of vat-grown muscle. This cumbersome rig is needed to absorb bone-breaking recoil each time the Deffgun is fired. They fire dakka of extremely high calibre, rounds which easily smash bikes and reliably penetrate transports' armour. Given their variable origins they may vary tremendously in properties and appearance, but a typical Deffgun is similar to an Imperial Autocannon, although much less predictable.",
    price=140,
    store_id=3,
    image="https://orksybucket.s3.us-east-2.amazonaws.com/Deffgun.jpg"
  )
  rokkit_launcha = Product(
    name="Rokkit Launcha",
    description="Rokkit Launchas probably spawned from an Ork's desire to make something explode, that wasn't within easy reach of a grenade. It is a massive, but very simple weapon - usually a stout stick with a simple trigger mechanism or a tubular launcher with as many rokkits as Orks can get a hold of. Rokkits can be loaded one at a time, or loaded automatically from a magazine if the weapon is a bit more complex. Orks can use it on the move with no noticeable loss of accuracy. Its simplicity makes it very easy to manufacture and it is a fairly common Ork special weapon. It is usually mounted on vehicles such as Warbuggyz or Killa Kans, but sometimes Ork Boyz equip themselves with Rokkit Launchas, that gives their mob the ability to shoot down armoured vehicles. It is also a primary weapon of Ork Tankbustas. Due to its simplicity, it is often combined with a Shoota to make a Kombi-Weapon.",
    price=115,
    store_id=3,
    image="https://orksybucket.s3.us-east-2.amazonaws.com/Rokkit_Launcha.jpg"
  )
  
  db.session.add(meganobz)
  db.session.add(gargant)
  db.session.add(battlewagon)
  db.session.add(squiggoth)
  db.session.add(red_squig)
  db.session.add(colossal_squig)
  db.session.add(boom_squig)
  db.session.add(orkeosaurus)
  db.session.add(flyboy)
  db.session.add(burna)
  db.session.add(deffgun)
  db.session.add(rokkit_launcha)
  db.session.commit()
  
def undo_products():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM products")
        
    db.session.commit()
