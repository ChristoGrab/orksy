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
    description="Ork Gargants are the largest land-based Ork fighting machines. Effigies of the Ork Gods Gork and Mork, these towering War Engines compare in size and power to Imperial Titans, dominating the battlefield with fearsome firepower. They are constructed by a prospecting Warboss, who is visited by dreams of massive mayhem and carnage, or by orks he has bullied into doing it. This drives the Orks into a frenzy and effectively begins the Warboss' prospective Waaagh!",
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
  fighta = Product(
    name="Fighta",
    description="Ork Fightas are the smallest type of aircraft produced by Ork Mek Boyz, used for dog-fighting and ground attack. Fightas are built for speed and firepower, typically carrying Big Shootas and a small wing of bombs and rockets. Despite its crude design, a Fighta is easily a match for any Imperial Navy fighter and its engine is remarkably effective, capable of producing a huge amount of thrust. Ork Fighta Pilots love nothing more then to fly in close to enemy aircraft and tear it apart with hail of dakka.",
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
  big_shoota = Product(
    name="Big Shoota",
    description="A Big Shoota is a loud, heavy, large-calibre machine gun that bucks and sparks like crazy when the trigger is pulled. Big Shootas are usually bolted on vehicles - from Grot Tanks to Stompas for anti-personnel support, but sometimes a Shoota Boy manages to acquire a big shoota that gives his mob some real anti-infantry power, causing envy among other Boys. Big shootas are fed from chunky magazines of ammo by crank handles, motors or some other clever mechanisms. They are often 'kustomized' to have multiple barrels, big crosshair sights, longer ammo belts and such.",
    price=95,
    store_id=3,
    image="https://orksybucket.s3.us-east-2.amazonaws.com/big-shoota.jpg"
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
  dakkajet = Product(
    name="Dakkajet",
    description="A Dakkajet is an Ork fighter aircraft specializing in both air-to-air and ground attack missions. A blur of colour and noise amidst the smoke and clamour of battle, the Dakkajet is propelled by a single, massive jet engine. It roars through the sky, gunz blazing a near constant stream of bullets, tormenting fleeing infantry or enemy aircraft. Dakkajet pilots believe firmly in quantity over quality, and commonly bolt as many guns as possible to their aircraft - some of those bullets are bound to hit the target. The engines of the Dakkajet are crude and simple, but powerful and incredibly effective at producing enormous levels of thrust. In a straight line, they are more than a match for any other aircraft in the Galaxy but their maneuverability leaves much to be desired. Thus most Dakkajets are equipped with angled thrust nozzles used to change trajectory with extreme violence. Consequently, they appear to be dangerously out of control and always a millisecond away from disaster.",
    price=5000,
    store_id=4,
    image="https://orksybucket.s3.us-east-2.amazonaws.com/dakkajet.jpg"
  )
  big_choppa = Product(
    name="Kustom Big Choppa",
    description="These weapons serve as the mark of a real connoisseur of brutality, even amongst Ork warriors. They can take many forms from great axes with jagged metal teeth to heavy clubs with plenty of spikes to make them more 'killy' and give them a more agressive look. Some Mekboys even make Big Choppas resembling crude Ork versions of Chainaxes. Their unsubtle design and massive weight is capable of packing a considerably harder hit than regular Choppas - wielded with a overhead swing which will turn most opponents into splutchy pancakes on hit. They are are chosen more for sheer weight than subtlety and require both hands to carry and wield them. Big Choppas are usually wielded by Ork Nobs or Warbosses who can do even more damage with it using their great strength and skill.",
    price=320,
    store_id=5,
    image="https://orksybucket.s3.us-east-2.amazonaws.com/Big+Choppa-1.jpg"
  )
  stompa = Product(
    name="Stompa",
    description="Stompas are enormous walking fortresses clad in layers of scrap-iron armor and bristling with enormous amounts of firepower. They live up to their name by stomping across the battlefield and annihilating everything in their path. Every one of these vehicles is a unique creation, the product of several Mekboyz fevered brains and countless hours of Grot slave labor. However as they approach their state of completion, all Stompas begin to share a few similarities. First of these is their fat-bellied and belligerent appearance made as effigies to the Ork Gods Gork and Mork. Secondly, they are usually powered by massive internal boilers and furnances that link to a forest of smokestacks and vents. Thirdly, one arm is a hydraulic affair the size of a docking crane and ends in a monstrous Chainsaw known as a Mega-Choppa. The other arm usually consists of a mass of artillery, the largest of which is a Deffkannon. All Stompas also sport a belly-mounted Supa-Gatler.",
    price=2700,
    store_id=2,
    image="https://orksybucket.s3.us-east-2.amazonaws.com/stompa.jpg"
  )
  chain_toof = Product(
    name="Randum Chain Toof",
    description="We found dis chain toof layin on da ground of a right 'ard battlefield. Pulled it out of a humie spine and put in da market, cuz why not?",
    price=12,
    store_id=5,
    image="https://orksybucket.s3.us-east-2.amazonaws.com/chain-toof.jpg"
  )
  power_klaw = Product(
    name="Power Klaw",
    description="It is similar in characteristics to an Imperial Power Fist, being an armoured, powered gauntlet, strapped to an Ork's arm with a piston-driven pincer comprising two to three snapping blades. These are sheathed in energy the same way a Power Fist is, and so can effortlessly rip through any armour, tearing any enemy into bloody paste. It is particularly effective against vehicles. These weapons are amongst the biggest and choppiest an Ork can possess and often serve as symbol of status as well as a weapon. As such, many of them are owned by Warbosses or by particularly brutish Nobs, in which hands Power Klaws become even more effective, due to their skill and strength. Orks often amputate their own arms, taking the weapon as an augmetic implant. Power Klaws are most often found incorporated into Mega Armour.",
    price=230,
    store_id=5,
    image="https://orksybucket.s3.us-east-2.amazonaws.com/power-klaw.jpg"
  )
  hammer_kroozer = Product(
    name="Hammer Kroozer",
    description="Like its smaller cousins (the Kill Kroozer and Terror Ship) the Hammer is built on the salvaged hulks of other destroyed cruisers. Hammers, however, are specifically built from the hulks of ships armed with Nova Cannons, the parts of which have been rigged up into a truly ingenious weapon: a launcher capable of being loaded with either torpedoes or bombardment cannon shells. Other commonl weapons are Kannonz. Over time, through salvage and impromptu refits, a handful of Hammers have grown to truly massive sizes comparable to Imperial Battleships. Luckily, these Ork 'Battleships' are few in number. Hammer-class Battlekroozers are a favorite among Ork Warbosses, who often take them as their flagships. This high status ensures that the Hammers get the best weapons and crews in the Ork fleet, making them even more powerful opponents in a battle.[1]",
    price=85000,
    store_id=4,
    image="https://orksybucket.s3.us-east-2.amazonaws.com/HammerKroozer.jpg"
  )
  hammer_stompa = Product(
    name="Hammer Stompa",
    description="The Hammer Stompa is a type of large Ork vessel and a variant of the Hammer Battlekroozer. It's equipped with launch bays for Attack Craft, Torpedo launchers, and Gunz and Heavy Gunz batteries.",
    price=60000,
    store_id=4,
    image="https://orksybucket.s3.us-east-2.amazonaws.com/HammerStompa.jpg"
  )
  slam_blasta = Product(
    name="Slam Blasta",
    description="Like many Ork ships, the 'Battleship' Slamblasta was built on the hulk of a destroyed Imperial vessel. In the case of the Slamblasta, the hulk was that of the Gothic Class Cruiser Pallas Imperious. Unable to properly repair the hulk's broadside lances, the Orks stripped them out and attempted to combine the parts into two larger lance-type weapons. In typical Ork fashion, the result looked more dangerous than it actually was, but it nonetheless gave the Slamblasta a lance capability that was unheard-of for Ork vessels. The Slamblasta played a crucial role in the Third Armageddon War as part of the raiding groups sent ahead of the main invasion fleet. There, its prow lances proved invaluable to the Orks' efforts to cripple the system's outmost defenses.[1]",
    price=100000,
    store_id=4,
    image="https://orksybucket.s3.us-east-2.amazonaws.com/Slamblasta.jpg"
  )
  basha_kroozer = Product(
    name="Basha Lite Kroozer",
    description="The Basha Kroozer is analogous to Imperial Light Cruisers in role, these ships were first seen in large numbers during the Third War for Armageddon. Like most Ork ships Lite Kroozers are ramshackle and heavily customized, with many being equipped for ramming enemy vessels while others may sport exotic weaponry. Many are constructed from captured Dauntless and Endeavor hulls.",
    price=48000,
    store_id=4,
    image="https://orksybucket.s3.us-east-2.amazonaws.com/bashakroozer.jpg"
  )
  
  db.session.add(meganobz)
  db.session.add(gargant)
  db.session.add(power_klaw)
  db.session.add(battlewagon)
  db.session.add(squiggoth)
  db.session.add(basha_kroozer)
  db.session.add(rokkit_launcha)
  db.session.add(red_squig)
  db.session.add(burna)
  db.session.add(colossal_squig)
  db.session.add(hammer_kroozer)
  db.session.add(boom_squig)
  db.session.add(stompa)
  db.session.add(orkeosaurus)
  db.session.add(fighta)
  db.session.add(chain_toof)
  db.session.add(deffgun)
  db.session.add(dakkajet)
  db.session.add(big_choppa)
  db.session.add(slam_blasta)
  db.session.add(big_shoota)
  db.session.add(hammer_stompa)
  db.session.commit()
  
def undo_products():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM products")
        
    db.session.commit()
