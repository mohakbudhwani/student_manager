import React, { useState } from 'react';

function StudentForm({ addStudent }) {
  const [name, setName] = useState('');
  const [phone, setphone] = useState('');
  const [address, setaddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent({ name, phone, address});
    setName('');
    setphone('');
    setaddress('');
  };

  return (
    <React.Fragment>
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='name'>Name</label>
            <input
            type="text"
            value={name} 
            onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor='phone'>Phone</label>
            <input
            type="number"
            value={phone} 
            onChange={(e) => setphone(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor='address'>Address</label>
            <input
            type="text"
            value={address} 
            onChange={(e) => setaddress(e.target.value)}
            />
        </div>
        <button type="submit">Add</button>
    </form>
    </React.Fragment>
  );
}

export default StudentForm;
