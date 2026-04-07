import React from 'react'
import "./Team.css"

export const Team = () => {
  return (
    <div className="team">
      <div className="head2">
        <h4>Team Collabrations</h4>
        <button>+ Add member</button>
      </div>

      <div className="containerimg">
        <div className="member-row">
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.bbvU439P56LmylUZAHVqEgHaHa?pid=ImgDet&w=179&h=179&c=7&dpr=1.1&o=7&rm=3"
            alt="Vijay"
          />
          <div className="member-info">
            <h5>Vijay</h5>
            <p>Working on cloud</p>
          </div>
          <div className="bt1">
            <button>Progress</button>
          </div>
        </div>

        <div className="member-row">
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.T_h7Jt0OA5WvKeD_sSqjBQAAAA?pid=ImgDet&w=179&h=179&c=7&dpr=1.1&o=7&rm=3"
            alt="Jana"
          />
          <div className="member-info">
            <h5>Jana</h5>
            <p>Working on cloud</p>
          </div>
          <div className="bt">
            <button>Pending</button>
          </div>
        </div>

        <div className="member-row">
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.LR0cZaFePUiJDXdRLGjtDAHaHa?w=626&h=626&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Aravind"
          />
          <div className="member-info">
            <h5>Aravind</h5>
            <p>Working on cloud</p>
          </div>
          <div className="bt2">
            <button>Complete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Team



