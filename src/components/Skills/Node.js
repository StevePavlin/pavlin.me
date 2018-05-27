import React from 'react';

export const Node = props => {
  return (
    <div>
      <div className="skill-progress">
        Experience
        <div className="progress-bar">
          <div className="progress" style={{width: '100%'}}/>
        </div>
      </div>
      <p>
        My node journey began in 2015. This language took me from writing awful nested callback
        christmas trees to writing clear, concise async await code.
        <br />
        <br />
        Over the many private projects that I've worked with clients on, here's the tech/libraries I'm become proficient with:

        <ul>
          <li>
            <span>
              <a target="_blank" href="https://github.com/OptimalBits/bull">Express</a> – MVC api structure
            </span>
          </li>
          <li>
            <span>
              <a target="_blank" href="http://www.chaijs.com/">Sequelize</a> – Postgres ORM
            </span>
          </li>
          <li>
            <span>
              <a target="_blank" href="https://socket.io">Socket.IO</a> – Realtime web services
              </span>
          </li>
          <li>
            <span>
              <a target="_blank" href="https://redis.io">Redis</a> – Distributed caching and publish/subscribe
            </span>
          </li>
          <li>
            <span>
              <a target="_blank" href="https://github.com/OptimalBits/bull">Bull</a> – Job processing/message queueing
            </span>
          </li>
          <li>
            <span>
              <a target="_blank" href="http://www.mochajs.org/">Chai</a> – Assertions
            </span>
          </li>
          <li>
            <span>
              <a target="_blank" href="http://www.chaijs.com/">Mocha</a> – Unit testing
            </span>
          </li>
        </ul>
      </p>
    </div>
  )
};