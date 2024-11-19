import { useEffect } from "react";
import "/src/containers/App/members.css";


export function Attributions() {
  const teamID = import.meta.env.VITE_TEAM_ID;

  useEffect(() => {
    function listenToIframeHeight(e: MessageEvent) {
      if (e.origin === "https://teams.igem.org") {
        const { type, data } = JSON.parse(e.data);
        if (type === "igem-attribution-form") {
          const element = document.getElementById("igem-attribution-form");
          if (element) {
            element.style.height = `${data + 100}px`;
          }
        }
      }
    }
    window.addEventListener("message", listenToIframeHeight);
    return () => {
      window.removeEventListener("message", listenToIframeHeight);
    };
  }, []);

  return (
    <>
      <div className="members-container" style={{ overflowY: 'auto', height: '100vh' }}>
        <div className="full-width-image">
          <img src="https://static.igem.wiki/teams/5432/attribution01.jpg" alt="Attribution" />
        </div>
        <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

        <iframe
          style={{ width: "100%" }}
          id="igem-attribution-form"
          src={`https://teams.igem.org/wiki/${teamID}/attributions`}
        />

        <div className="meet-the-team-title">ECUST 2024</div>
        <div className="content2">
          <p>
            On this page, we comprehensively present the efforts and contributions of each team member, with particular emphasis on their notable achievements. We also wish to extend our sincere gratitude to all external individuals and institutions that have provided invaluable support.<br />
            This year, every member of our team has demonstrated remarkable dedication. Despite the time constraints that hindered us from fully achieving our initial objectives, the creativity and exceptional problem-solving skills exhibited by each individual have been commendable, allowing us to secure substantial outcomes. Throughout this process, we encountered numerous challenges, and the successes we ultimately attained through our collective efforts and perseverance have become integral to our development. Each experience, whether positive or negative, serves as a valuable lesson. The commitment and enthusiasm brought forth by each member were evident, and the team has consistently acknowledged and respected the contributions of all individuals. Each member is vital and irreplaceable within our team. Over the past year, the collective contributions and sacrifices of our members have not only inspired and motivated us but have also influenced younger students in our institution, making many of them role models and sources of inspiration.<br />
            Furthermore, we would like to express our profound appreciation to the external teams for their support and assistance. Throughout the implementation of the project, we have become acutely aware of our own limitations and proactively sought external help when necessary. We consulted with experts and professionals in relevant fields, engaged in dialogues with like-minded peers, and conducted interviews with many passersby. Whether through the guidance of experts or the support from partners and even strangers we encountered, your contributions have been pivotal to the success of our project. We extend our heartfelt thanks to all external supporters; your encouragement and assistance have laid a robust foundation.
          </p>
        </div>
      </div>
    </>
  );
}
