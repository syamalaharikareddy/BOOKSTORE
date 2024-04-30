import React, { useState, useEffect } from 'react';

const Apps = () => {
  const [following, setFollowing] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/defunkt/following')
      .then(response => response.json())
      .then(data => setFollowing(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Following</h1>
      <ul>
        {following.slice(5, 10).map(user => (
          <li key={user.id}>
            <img src={user.avatar_url} alt={user.login} />
            <p>Name: {user.login}</p>
            <p>ID: {user.id}</p>
            <p>Profile URL: <a href={user.html_url}>{user.html_url}</a></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Apps;