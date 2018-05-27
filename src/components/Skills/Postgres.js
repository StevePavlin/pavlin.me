import React from 'react';

export const Postgres = props => {
  return (
    <div>
      <div className="skill-progress">
        Experience
        <div className="progress-bar">
          <div className="progress" style={{width: '90%'}}/>
        </div>
      </div>
      <p>
        As crazy as it sounds, I never even used an ORM until 2018. I've been used to writing raw sql and using stored procedures.
        Finally picking up Sequelize was a godsend, but I was happy I learned alot about whats "under the hood" prior.

        <br />
        <br />

        Knowledge:
        <ul>
          <li>
            <span>
              <span className="fake-link">
                Concurrency
              </span> – Transaction isolation levels
            </span>
          </li>
          <li>
            <span>
              <span className="fake-link">
                Optimization
              </span> – Improving read performance using indexes
            </span>
          </li>
          <li>
            <span>
              <span className="fake-link">
                Integrity
              </span> – Forcing data integrity using foreign keys
            </span>
          </li>
        </ul>
      </p>
    </div>
  )
};