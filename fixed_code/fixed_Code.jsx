function UserProfile(props) {
  return (
    <div>
      <h2>User Profile</h2>
      {props.user && (
        <div>
          <p>Name: {props.user.name}</p> {/* Fixed: changed 'user' to 'props.user' */}
          <p>Email: {props.user.email}</p> {/* Fixed: changed 'user' to 'props.user' */}
        </div>
      )}
    </div>
  );
}

function App() {
  const user = {
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com"
  };

  return (
    <div>
      <h1>Welcome</h1>
      <UserProfile user={user} /> {/* Fixed: added the user prop */}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);