import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b> Shree Das </b>and <b>3 other friends </b>have a birthday today
          </span>
        </div>
        <img className="rightbarAd" src="assets/friends.jpeg" alt="" />
        <h4 className="rightBarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

const ProfileRightbar = () => {
  return(
    <>
    <h4 className="rightbarTitle">User information</h4>
    <div className="rightbarInfo">
      <div className="rightbarInfoitem">
        <span className="rightbarInfoKey">City</span>
        <span className="rightbarInfoValue">New York</span>
      </div>
      <div className="rightbarInfoitem">
        <span className="rightbarInfoKey">From</span>
        <span className="rightbarInfoValue">Madrid</span>
      </div>
      <div className="rightbarInfoitem">
        <span className="rightbarInfoKey">Relationship</span>
        <span className="rightbarInfoValue">Single</span>
      </div>
    </div>
    <h4 className="rightbarTitle">User friends</h4>
    <div className="rightbarFollowings">
      <div className="rightbarFollowing">
        <img src="assets/p1.jpeg" alt="" className="rightbarFollowingImg"/>
        <span className="rightbarFollowingName">Tanuja Bhatia</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/p2.webp" alt="" className="rightbarFollowingImg"/>
        <span className="rightbarFollowingName">Tanuja Bhatia</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/p3.jpeg" alt="" className="rightbarFollowingImg"/>
        <span className="rightbarFollowingName">Tanuja Bhatia</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/p4.webp" alt="" className="rightbarFollowingImg"/>
        <span className="rightbarFollowingName">Tanuja Bhatia</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/p5.jpeg" alt="" className="rightbarFollowingImg"/>
        <span className="rightbarFollowingName">Tanuja Bhatia</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/p6.webp" alt="" className="rightbarFollowingImg"/>
        <span className="rightbarFollowingName">Tanuja Bhatia</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/p7.webp" alt="" className="rightbarFollowingImg"/>
        <span className="rightbarFollowingName">Tanuja Bhatia</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/p8.jpeg" alt="" className="rightbarFollowingImg"/>
        <span className="rightbarFollowingName">Tanuja Bhatia</span>
      </div>
      

    </div>
    </>
  )
}

  return (
    <div className="rightbar">
      <div className="rightbarWrraper">
      {profile ? <ProfileRightbar /> : <HomeRightbar/>}
      </div>
    </div>
  );
}
