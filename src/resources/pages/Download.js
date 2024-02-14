// Downloads.js
import React from 'react';
import '../styles/downloads.css';

const Downloads = () => {
  return (
    <div class="releases-page">
        <h1>Releases</h1>
        <div class="release">
            <a href="release1.zip" download>Release 1</a>
        </div>
        <div class="release">
            <a href="release2.zip" download>Release 2</a>
        </div>
        <div class="release">
            <a href="release3.zip" download>Release 3</a>
        </div>
    </div>
  );
};

export default Downloads;
