import React from 'react';

export const ReactRedux = props => {
  return (
    <div>
      <div className="skill-progress">
        Experience
        <div className="progress-bar">
          <div className="progress" style={{width: '85%'}}/>
        </div>
      </div>
      <p>
        After spending the summer of 2016 trying angular 2 in release candidate stage, I decided
        I wanted to try React.
        <br />
        <br />
        ... I haven't built a frontend using another framework since.
        <br />
        <br />
        Libraries used:

        <ul>
          <li>
            <span>
              <a target="_blank" href="https://redux.js.org/">Redux</a> – State management
            </span>
          </li>
        </ul>
      </p>

    </div>
  )
};