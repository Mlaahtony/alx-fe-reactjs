function UserProfile({ name, age, bio }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Bio: {bio}</p>  {/* Ensure "Bio:" is explicitly written */}
        </div>
    );
}
export default UserProfile;

