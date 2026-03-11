function UserCard({ user }) {

  return (

    <div className="card">

      <h3>{user.name}</h3>

      <p><strong>Email:</strong> {user.email}</p>

      <p><strong>City:</strong> {user.address.city}</p>

      <p><strong>Company:</strong> {user.company.name}</p>

    </div>

  );

}

export default UserCard;