function UserProfile(props) {
    return (
        <div>
            <h2>{props.name}</h2>  {/* Using props.name explicitly */}
            <p>Age: {props.age}</p>  {/* Using props.age explicitly */}
            <p>Bio: {props.bio}</p>  {/* Using props.bio explicitly */}
        </div>
    );
}
export default UserProfile;

