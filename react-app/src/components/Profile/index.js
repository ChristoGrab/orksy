import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { getMyStoreThunk } from "../../store/stores";
import userAvatar from "../../assets/user-avatar.png"
import "./Profile.css"

const ProfilePage = () => {

  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user)
  const store = useSelector(state => state.stores.singleStore)
  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    dispatch(getMyStoreThunk())
    .then(setDataLoaded(true))
  }, [dispatch])

  if (!dataLoaded) return null;
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

      <div className="orksy-explanation-container">
        <div className="orksy-explanation-title">
          Welcome to Orksy!
        </div>
        <div className="orksy-explanation-text">
          Orksy is a fullstack project built to emulate the popular e-commerce platform "Etsy".
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
          <ul id="orkish-facts"><strong>Some Ork facts to keep in mind:</strong>

            <li>Orks in the Warhammer 40K universe are green, mean, and thick as bricks.</li>
            <li>All Orks speak with an exagerrated Cockney accent.</li>
            <li>Orks are like sharks in that their teeth will regularly fall out and grow back in.  "Teef" have become the Orks' form of currency, so the prices on Orksy are all listed as <i className="fa-solid fa-tooth" />.</li>
            <li>Orks are made for two things: fighting, and winning.</li>
          </ul>
        </div>
      </div>
      
      <div className="profile-page-review-container">
      </div>
    </div>
  )
}

export default ProfilePage;
