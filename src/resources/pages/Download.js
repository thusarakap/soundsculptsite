// Downloads.js
import React, { useEffect, useState } from 'react';
import '../styles/downloads.css';

const Downloads = () => {
  const [releases, setReleases] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/repos/thusarakap/SoundSculpt/releases')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setReleases(data);
        } else {
          console.error('Error: Expected array but received', data);
          setReleases([]);
        }
      })
      .catch(error => {
        console.error('Error fetching releases:', error);
        setReleases([]);
      });
  }, []);

  return (
    <div className="releases-page">
      <h1>Releases</h1>
      {releases.map(release => (
        <div className="release" key={release.id}>
          <a href={release.zipball_url} download>{release.name || release.tag_name}</a>
        </div>
      ))}
    </div>
  );
};

export default Downloads;