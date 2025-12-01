// src/components/UserList.jsx
import React, { useState } from 'react';
import UserCard from './UserCard';

// Initial dummy data
const initialUsers = [
  { name: "Alice Johnson", email: "alice@example.com", age: 28 },
  { name: "Bob Smith", email: "bob@example.com", age: 45 },
];

const UserList = ({ initialUsersProp = initialUsers }) => {
  const [users, setUsers] = useState(initialUsersProp);
  const [newUser, setNewUser] = useState({ name: '', email: '', age: '' });
  const [errors, setErrors] = useState({});

  // Helper function to validate email format
  const isValidEmail = (email) => {
    // Basic regex for email validation
    return /\S+@\S+\.\S+/.test(email);
  };

  const validateInputs = () => {
    let newErrors = {};
    let isValid = true;

    // 1. Name validation (Non-empty string)
    if (!newUser.name.trim()) {
      newErrors.name = 'Name is required.';
      isValid = false;
    }

    // 2. Email validation (Valid format)
    if (!isValidEmail(newUser.email)) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    // 3. Age validation (Positive integer)
    const ageValue = parseInt(newUser.age);
    if (isNaN(ageValue) || ageValue <= 0) {
      newErrors.age = 'Age must be a positive number.';
      isValid = false;
    } else if (ageValue.toString() !== newUser.age.toString()) {
      // Check if input was a decimal or non-integer
      newErrors.age = 'Age must be an integer.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prev => ({ ...prev, [name]: value }));
    // Clear the error for the field being edited
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleAddUser = (e) => {
    e.preventDefault();

    if (validateInputs()) {
      // Create a new user object with the age converted to a number
      const userToAdd = {
        ...newUser,
        age: parseInt(newUser.age) 
      };

      // **Efficient List Update via Virtual DOM:**
      // We create a new array (...users, userToAdd) and pass it to setUsers.
      // React sees that the *previous* list and the *new* list are mostly the same.
      // Because we provide a unique `key` (which should ideally be a unique ID, 
      // but for this example, we'll rely on the array index for simplicity),
      // React efficiently patches the real DOM to only add the new <li> element.
      setUsers(prevUsers => [...prevUsers, userToAdd]);

      // Clear the form and errors
      setNewUser({ name: '', email: '', age: '' });
      setErrors({});
      console.log(`User ${userToAdd.name} added successfully.`);
    }
  };

  return (
    <div>
      <h1>User Management System 🧑‍💻</h1>
      
      {/* --- User Input Form --- */}
      <form onSubmit={handleAddUser} className="user-form">
        <h3>Add New User</h3>
        
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={newUser.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={newUser.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={newUser.age}
            onChange={handleChange}
          />
          {errors.age && <p className="error">{errors.age}</p>}
        </div>

        <button type="submit">Add User</button>
      </form>

      <hr />
      
      {/* --- Dynamic User List Rendering --- */}
      <h2>Current Users ({users.length})</h2>
      <div className="user-list-container">
        {users.map((user, index) => (
          // IMPORTANT: The `key` prop is crucial for React's Virtual DOM 
          // reconciliation algorithm to efficiently update the list.
          <UserCard key={index} user={user} />
        ))}
        {users.length === 0 && <p>No users found. Add one above!</p>}
      </div>
    </div>
  );
};

export default UserList;