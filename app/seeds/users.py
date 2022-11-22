from app.models import db, User, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@teef.io', password='password')
    gork = User(
        username='Gork', email='gork@teef.io', password='password2')
    mork = User(
        username='Mork', email='mork@teef.io', password='password3')
    thrakka = User(
        username="Thrakka", email="thrak@teef.io", password='password4')
    grog = User(
        username="Grog", email="brog@teef.io", password='password5')
    snagrod = User(
        username="Snagrod", email="snagrod@teef.io", password='password6')
    klawjaw = User(
        username="KlawJaw", email="klaws@teef.io", password="password7")
    blackfang = User(
        username="BlackFang", email="fangs@teef.io", password="password8")
    tuska = User(
        username="Tuska", email="tusks@teef.io", password="password9")
    buzzgob = User(
        username="Buzzgob", email="buzzgob@teef.io", password="password10")
    

    db.session.add(demo)
    db.session.add(gork)
    db.session.add(mork)
    db.session.add(thrakka)
    db.session.add(grog)
    db.session.add(snagrod)
    db.session.add(klawjaw)
    db.session.add(blackfang)
    db.session.add(tuska)
    db.session.add(buzzgob)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")
        
    db.session.commit()
