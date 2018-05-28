import React from 'react';

export const ClipThat = props => {
  return (
    <div>
      <h3>ClipThat</h3>

      <p>
        A bot that utilizes <a target="_blank" href="https://github.com/not-an-aardvark/snoowrap">snoowrap</a> to scan live reddit posts that contain a twitch clip, then mirrors them to YouTube.
      </p>

      <a target="_blank" href="https://github.com/StevePavlin/clipthat-bot">
        <i className="fab fa-2x fa-github"/>
      </a>
    </div>
  )
};