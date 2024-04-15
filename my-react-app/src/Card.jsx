// import the name of pic from its location
import profilePic from './assets/mylinkedinpic.jpg'

function Card(){
    return(
        <div className="card">
            {/* we use {} to add parameters*/}
            <img className="card-image" src={profilePic} width={250} height={250} alt="profile picture"/>
            <h2 className="card-title">Allison Xuan Chen</h2>
            <p className="card-text">Junior Frontend Developer</p>
        </div>
    );
}

export default Card