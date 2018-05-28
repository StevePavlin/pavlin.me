import React from 'react';
import { Progress } from "./Progress";

export const UIUX = props => {
  return (
    <div>
      <Progress width={20}/>
      <p>
        When building frontends with react, I'm usually provided a psd (photoshop document) to create the ui.
        <br />
        <br />
        After multiple years of cloning these files pixel-by-pixel, I've learned what sort of ui elements users love, work on mobile, and have begun to incorporate this in my own work.

        <br />
        <br />

        Knowledge:
        <ul className="bullets">
          <li>
            <span>
              <span className="fake-link">
                Responsive design
              </span> – Mobile first design approach
            </span>
          </li>
          <li>
            <span>
              <span className="fake-link">
                kiss
              </span> – Keep it simple, stupid
            </span>
          </li>
        </ul>
      </p>
    </div>
  )
};