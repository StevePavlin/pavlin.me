import React from 'react';
import { Progress } from "./Progress";

export const Analytics = props => {
  return (
    <div>
      <Progress width={60}/>
      <p>
        Throughout my projects, I've had a chance to work closely with people in charge of marketing.
        Through these experiences, I've learned a good amount about Google Analytics and advertising in general.
        <br />
        <br />

        Knowledge:
        <ul className="bullets">
          <li>
            <span>
              <span className="fake-link">
                High conversion design
              </span> – Building websites with a clear CTA ("call to action") to better optimize the conversion funnel
            </span>
          </li>
          <li>
            <span>
              <span className="fake-link">
                pay per click
              </span> – Running basic ppc ad campaigns on YouTube and Instagram
            </span>
          </li>
          <li>
            <span>
              <span className="fake-link">
                Influencer Marketing
              </span> – Running marketing campaigns with groups of influencers from sites like YouTube and Twitch
            </span>
          </li>
          <li>
               <span>
              <span className="fake-link">
                Tracking KPI's
              </span> – Analyzing key performance indicators before a campaign to estimate revenue
            </span>
          </li>
        </ul>
      </p>
    </div>
  )
};