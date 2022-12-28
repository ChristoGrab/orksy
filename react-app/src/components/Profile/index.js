import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { getMyStoreThunk } from "../../store/stores";
import UserReviews from "../Reviews/UserReviews/index.js"
import userAvatar from "../../assets/user-avatar.png"
import "./Profile.css"

const ProfilePage = () => {

  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user)
  const store = useSelector(state => state.stores.singleStore)

  // const quotes = [
  //   "Gork loves me, and Mork finks I is da best. No puny oomies is gonna kill me, not when da greenest gods in da galaxy is watchin' me!",
  //   "We is gonna stomp da universe flat and kill anyfink that fights back. we're da Orks, and was made ta fight and win.",
  //   "Right, first I'll take those teef out for yer, dat should help ease da pain in yer leg. Grokkit, hand me that wrench. Now then... Open wide, and say... AAARGH!",
  //   "Wot's faster than a warbuggy, more killy than a warbike, and flies through da air like a bird? I got no bleedin' idea, but I'm gonna find out."
  // ]

  useEffect(() => {
    dispatch(getMyStoreThunk())
  }, [dispatch])

  if (!sessionUser) return null;
  let storeLinks;

  if (store && !store.error) {
    storeLinks = (
      <div className="profile-store-functions">
        <Link id="profile-page-store-link" to={`/store/${store.id}`}>{store.name}</Link>
      </div>
    )
  } else {
    storeLinks = (
      <div className="profile-store-functions">
        <Link id="profile-page-store-link" to="/store/create">Create Yer Store</Link>
      </div>
    )
  }

  return (
    <div className="profile-page-container">
      <div className="profile-page-userinfo">
        <img id="profile-page-avatar" src={userAvatar} alt="user avatar"></img>
        <div id="profile-page-username">
          {sessionUser.username}
          {storeLinks}
        </div>
      </div>

      <div>
        Your reviewz:
        <UserReviews />
      </div>

      {/* <div className="profile-page-quotes">
        <div id="inspiration-quote-message">Orkish inspiration of da day:</div>
        {quotes[Math.floor(Math.random()*quotes.length)]}
      </div> */}

      <div className="orksy-explanation-container">
        <div className="orksy-explanation-title">
          Note to the User:
        </div>
        <div className="orksy-explanation-text">
          Welcome to Orksy!  Orksy is a fullstack project built to emulate the popular e-commerce platform "Etsy".
          <br />
          Orksy is themed after the Ork faction from the fictional Warhammer 40K universe.
          If you are familiar with this setting, you probably know what to expect from a site made for everyone's favourite intergalactic fungoids.
          <br />
          If not though, never fear!  Some of the inside jokes may go over your head, but the site is still designed to be easily navigated by any and all!
          <br />
          From this page, you can click on the link right below your username to either create a new store, or visit your store's page if you already own one.
          Once you have a store up and running, you'll be able to start adding, editing or deleting products that will be viewable to you or any other visitors to the site!
          <br />
          <br />
          <ul id="orkish-facts">Some Ork facts to note:

            <li>Orks in the Warhammer 40K universe are green, mean, and thick as bricks.</li>
            <li>All Orks speak with an exagerrated Cockney accent.</li>
            <li>Orks are like sharks in that their teeth will regularly fall out and grow back in.  "Teef" have become the Orks' form of currency, so the prices on Orksy are all listed as such.</li>
            <li>Orks are made for two things: fighting, and winning.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage;
