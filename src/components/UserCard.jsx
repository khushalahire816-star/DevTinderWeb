const UserCard = ({user}) => {
  const {firstName, lastName, about, photoUrl, gender, skill} = user;
  return (
    <div className="card bg-base-300 w-96 shadow-sm">
      <figure>
        <img
          src={user.photoUrl}
          alt="Photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <p>{about}</p>
        {skill && <p>{skill}</p>}
        <div className="card-actions justify-center my-2">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Send Request</button>
        </div>
      </div>
    </div>
  )
}

export default UserCard;