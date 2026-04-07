import React from 'react'
import "./App.css"

import  Team  from "./Team";
import Progress from "./Progress";
import Time  from './Time';
// @ts-ignore
import CanvasJSReact from "@canvasjs/react-charts";
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
export const App :React.FC = () => {
  const options = {
    height: 120,
    title: {
      text: "Project Analytics",
    },

    data: [
      {
        type: "column",
        dataPoints: [
          { label: "Apple", y: 10 },
          { label: "Orange", y: 15 },
          { label: "Banana", y: 25 },
          { label: "Mango", y: 30 },
          { label: "Grape", y: 28 },
        ],
      },
    ],
  };

  return (
    <>
      <div className="container">
        <div className="sidebar">
          <div className="logo">
            <img
              width="57"
              height="57"
              src="https://img.icons8.com/external-others-inmotus-design/67/external-D-alphabet-others-inmotus-design-6.png"
              alt="external-D-alphabet-others-inmotus-design-6"
            />{" "}
            Denozo
          </div>
          <p className="menu"> MENU </p>
          <div className="Dashboard">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/fluency-systems-filled/48/40C057/dashboard-layout.png"
              alt="dashboard-layout"
            />
            Dashboard
          </div>
          <div className="task">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/ios-glyphs/30/task.png"
              alt="task"
            />
            Task <button>+12</button>
          </div>
          <div className="Calendar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-calendar-minus2-icon lucide-calendar-minus-2"
            >
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M3 10h18" />
              <path d="M10 16h4" />
            </svg>
            Calendar
          </div>
          <div className="Analytics">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-chart-column-stacked-icon lucide-chart-column-stacked"
            >
              <path d="M11 13H7" />
              <path d="M19 9h-4" />
              <path d="M3 3v16a2 2 0 0 0 2 2h16" />
              <rect x="15" y="5" width="4" height="12" rx="1" />
              <rect x="7" y="8" width="4" height="9" rx="1" />
            </svg>
            Analytical
          </div>
          <div className="Team">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-shield-half-icon lucide-shield-half"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
              <path d="M12 22V2" />
            </svg>
            Team
          </div>
          <div className="General">GENERAL</div>
          <div className="Settings">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-settings-icon lucide-settings"
            >
              <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            Settings
          </div>
          <div className="Help">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-file-question-mark-icon lucide-file-question-mark"
            >
              <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
              <path d="M12 17h.01" />
              <path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" />
            </svg>
            Help
          </div>
          <div className="Logout">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-log-out-icon lucide-log-out"
            >
              <path d="m16 17 5-5-5-5" />
              <path d="M21 12H9" />
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            </svg>
            Logout
          </div>

          <div className="bottom">
            <h4>Download your mobile app Get easy in another way</h4>

            <button>Download</button>
          </div>
        </div>
        {/* --------------------------------------------------------------------------------------- */}
        <div className="sec">
          <div className="nav">
            <div className="search-container">
              <button>
                <img
                  src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"
                  alt="search"
                />
              </button>
              <input type="text" placeholder="Search your task..." />
            </div>
            <div className="nav-right">
              <button className="icon-btn">
                <img
                  src="https://img.icons8.com/ios-glyphs/30/000000/new-post.png"
                  alt="email"
                />
              </button>
              <button className="icon-btn">
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/windows/32/appointment-reminders--v1.png"
                  alt="appointment-reminders--v1"
                />
              </button>
            </div>
            <div className="avatar">
              <img
                width="34"
                height="34"
                src="https://tse4.mm.bing.net/th/id/OIP.bbvU439P56LmylUZAHVqEgHaHa?pid=ImgDet&w=179&h=179&c=7&dpr=1.1&o=7&rm=3"
                alt="gender-neutral-user"
              />
            </div>
            <div className="txt">
              <h5>vijay</h5>

             
            </div>
            <div className='em'>
               <p>vijay123@gmail.com </p>
            </div>
          </div>
          {/* -------------------------------     -------  ------ ----------------------------------------------------------------------- */}
          <div className="main">
            <div className="head">
              <h3>Dashboard</h3>
              <h4>plan priorities and accomplish your task with ease</h4>
              <div className="btn">
                <button className="add">+ Add project</button>
                <button className="import">import data</button>
              </div>
            </div>
            
            <div className="grid row1">
              <div className="box">
                <div className="box1">
                  <p>Total porjects </p>
                  <div className="first">
                    <h3>24</h3>
                  </div>
                  <button>6^</button>
                  <div className="f">
                    <h6>Increase from Last Month</h6>
                  </div>
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/ios-glyphs/30/forward-arrow.png"
                    alt="forward-arrow"
                  />
                </div>
              </div>
              <div className="box">
                <div className="box1">
                  
                  <p>Ending porjects </p>
                  <div className="first">
                    <h3 className="num">12</h3>
                  </div>
                  <button>6^</button>
                  <h6>Increase from Last Month</h6>

                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/ios-glyphs/30/forward-arrow.png"
                    alt="forward-arrow"
                  />
                </div>
              </div>
              <div className="box">
                <div className="box1">
                  <p>Running porjects </p>
                  <div className="first">
                    <h3 className="num">10</h3>
                  </div>
                  <button>6^</button>
                  <h6>Increase from Last Month</h6>

                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/ios-glyphs/30/forward-arrow.png"
                    alt="forward-arrow"
                  />
                </div>
              </div>
              <div className="box">
                <div className="box1">
                  <p>Pending porjects </p>
                  <div className="first">
                    <h3 className="num">2</h3>
                  </div>
                  <div className="on">
                    <h6>On discuss</h6>
                  </div>
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/ios-glyphs/30/forward-arrow.png"
                    alt="forward-arrow"
                  />
                </div>
              </div>
            </div>

            <div className="grid row2">
              <div className="box">
                <div className="graph">
                  <div className="chart-container">
                    <CanvasJSChart options={options} />
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="graph2">
                  <p>Reminders</p>

                  <h4>Meetings with Arc </h4>
                  <h3>company</h3>

                  <h6>Time:2:00pm -4:00pm</h6>
                  <button>
                    <img
                      width="14"
                      height="14"
                      src="https://img.icons8.com/material-outlined/24/FFFFFF/video-call.png"
                      alt="video-call"
                    />
                    Start meetings
                  </button>
                </div>
              </div>

              <div className="box">
                <div className="project">
                  <div className="project1">
                    project
                    <button>+ New</button>
                  </div>
                  <div className="api">
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/material-rounded/24/228BE6/api-settings.png"
                      alt="api-settings"
                    />

                    <h2>Develop API endpoint</h2>
                    <p>Due date nov 20,2026</p>
                    <br />
                  </div>
                  <div className="onboarding">
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/sf-black/64/FD7E14/wind.png"
                      alt="wind"
                    />
                    <h2>Onboarding flow</h2>
                    <p>Due date nov 20,2026</p>
                  </div>
                  <div className="build">
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/ios-filled/50/40C057/statistics--v1.png"
                      alt="statistics--v1"
                    />
                    <h2>Build Dash Board</h2>
                    <p>Due Dae Apr 1,2002</p>
                  </div>
                  <div className="opti">
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/material/24/FA5252/uld.png"
                      alt="uld"
                    />
                    <h2>Optimize Page Load</h2>
                    <p>Due Date JAn 2,2004</p>
                  </div>
                  <div className="Cross">
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/glyph-neue/64/FAB005/maltese-cross.png"
                      alt="maltese-cross"
                    />
                    <h2>Cross Browse Over</h2>
                    <p>Due Date Feb 2,2003</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Row - 3 columns */}
            <div className="grid row3">
              <div className="box">
                <Team />
              </div>
              <div className="box">
                <Progress />
              </div>
              <div className="box">
                <Time />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App