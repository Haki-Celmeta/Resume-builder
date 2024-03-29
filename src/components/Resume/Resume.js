import React from "react";
import './_resume.scss';
import { Slider } from "@mui/material";

//TODO: Make the context API for details and profile
//TODO: Add validation for skills, education and experience
//TODO: Add maximum number for skills, education and experience

const Resume = () => {
  return (
    <div className="resume-cv-container">
      <div className="resume-container">
        <div className="resume-details">
          <div className="full-name-proffesion">
            <h3>Sophie Walton</h3>
            <h4>Receptionist</h4>
          </div>
          <div className="details">
            <h4>Details</h4>
            <div>
              <ul>
                <li>3230 42nd Avenue</li>
                <li>Albania</li>
                <li>068 23 67 888</li>
                <li>Sophie.w@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="skills">
            <h4>Skills</h4>
            <ul>
              <li>
                <div>Communication skill</div>
                <Slider
                  defaultValue={2}
                  step={1}
                  marks
                  min={0}
                  max={5}
                  disabled
                  sx={{
                    padding: '0px',
                    '& .MuiSlider-thumb': {
                      display: 'none',
                    },
                  }} />
              </li>
              <li>
                <div>Trend Analysis</div>
                <Slider
                  defaultValue={5}
                  step={1}
                  marks
                  min={0}
                  max={5}
                  disabled
                  sx={{
                    padding: '0px',
                    '& .MuiSlider-thumb': {
                      display: 'none',
                    },
                  }} />
              </li>
              <li>
                <div>Financial Analysis</div>
                <Slider
                  defaultValue={4}
                  step={1}
                  marks
                  min={0}
                  max={5}
                  disabled
                  sx={{
                    padding: '0px',
                    '& .MuiSlider-thumb': {
                      display: 'none',
                    },
                  }} />
              </li>
              <li>
                <div>Team Leadership</div>
                <Slider
                  defaultValue={5}
                  step={1}
                  marks
                  min={0}
                  max={5}
                  disabled
                  sx={{
                    padding: '0px',
                    '& .MuiSlider-thumb': {
                      display: 'none',
                    },
                  }} />
              </li>
              <li>
                <div>English</div>
                <Slider
                  defaultValue={5}
                  step={1}
                  marks
                  min={0}
                  max={5}
                  disabled
                  sx={{
                    padding: '0px',
                    '& .MuiSlider-thumb': {
                      display: 'none',
                    },
                  }} />
              </li>
            </ul>
          </div>
        </div>
        <div className="resume-non-details">
          <div className="profile non-det-li">
            <h4>Profile</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Facilisis gravida neque convallis a cras semper auctor.
              Commodo ullamcorper a lacus vestibulum sed arcu non odio. Dolor sit amet consectetur adipiscing elit.
              Egestas diam in arcu cursus euismod quis viverra nibh. Pellentesque adipiscing commodo elit at.
              Blandit massa enim nec dui. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant.
              Elementum facilisis leo vel fringilla est. Augue interdum velit euismod in pellentesque massa.
            </p>
          </div>
          <div className="employment-his non-det-li">
            <h4>Employment History</h4>
            <div className="jobs-list">
              <div className="job">
                <h5>Customer Service Representative, Gold tt, Seattle</h5>
                <div className="dates">
                  <span>12 january 2020</span>
                  <span> - </span>
                  <span>16 april 2021</span>
                </div>
                <ul>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</li>
                  <li>ut labore et dolore magna aliqua. Facilisis gravida neque convallis a cras semper auctor. Commodo ullamcorper a lacus vestibulum sed arcu non odio.</li>
                  <li>Blandit massa enim nec dui. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant.</li>
                  <li> Blandit massa enim nec dui. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Elementum facilisis leo vel fringilla est. Augue interdum velit euismod in pellentesque massa.</li>
                </ul>
              </div>
              <div className="job">
                <h5>Customer Service Representative, Gold tt, Seattle</h5>
                <div className="dates">
                  <span>12 january 2020</span>
                  <span> - </span>
                  <span>16 april 2021</span>
                </div>
                <ul>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</li>
                  <li>ut labore et dolore magna aliqua. Facilisis gravida neque convallis a cras semper auctor. Commodo ullamcorper a lacus vestibulum sed arcu non odio.</li>
                  <li>Blandit massa enim nec dui. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant.</li>
                  <li> Blandit massa enim nec dui. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Elementum facilisis leo vel fringilla est. Augue interdum velit euismod in pellentesque massa.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="education non-det-li">
            <h4>Education</h4>
            <div className="educations">
              <div className="edu">
                <h5>Bachelor of Business Informatics, Metropolitan, Tirane</h5>
                <div className="dates">
                  <span>12 january 2020</span>
                  <span> - </span>
                  <span>16 april 2021</span>
                </div>
              </div>
              <div className="edu">
                <h5>High School Diploma, Gjimnazi Myslym Keta, Tirane</h5>
                <div className="dates">
                  <span>12 january 2020</span>
                  <span> - </span>
                  <span>16 april 2021</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume;