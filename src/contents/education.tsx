import { ScrollModule } from '../components/ScrollModule';

const sections = [
  { title: 'On-campus iGEM Competition Sharing Forum', id: 'forum' },
  { title: 'Promoting iGEM and Our Project in Hohhot', id: 'promote' },
  { title: 'Club', id: 'club' },
  { title: 'Highlight', id: 'highlight' },
];

export function Education() {
  return (
    <div className="content-container2">
      <ScrollModule sections={sections} />
      <div className="content" id="content">
        <section id="forum">
          <h2>On-campus iGEM Competition Sharing Forum</h2>
          <h3>Purpose</h3>
          <p>
            Promoting iGEM is a very important thing. Our team is organizing this forum to help more students who are interested in iGEM learn about it, attract capable students to contribute their strength, and provide guidance to those currently preparing for iGEM.
          </p>
          <img src="https://static.igem.wiki/teams/5432/education001.jpg" style={{ maxWidth: '100%' }} />
          <p>
            【Preach】<br />
            <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

            The first iGEM Competition Experience Sharing Forum was held online on August 3rd at 9 PM Beijing time via the Tencent Meeting platform, with the leader of our iGEM team, Runsheng Chen, as the main speaker.
          </p>
          <img src="https://static.igem.wiki/teams/5432/education002.png" style={{ maxWidth: '100%' }} />
          <p>
            【On-campus iGEM Competition Sharing Forum】<br />
            <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

            Team leader Runsheng Chen first introduced the general situation of the 2023 iGEM competition: the 2023 iGEM competition had a total of 393 teams, with 8,829 participants from 44 countries and regions. He then explained what iGEM is by discussing its significance and theme, and further compared it with other popular competitions like the "Challenge Cup" to highlight the unique aspects of the iGEM competition.
          </p>
          <img src="https://static.igem.wiki/teams/5432/education003.jpg" style={{ maxWidth: '100%' }} />
          <p>
            【Preach】<br />
            <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

            Next, team leader Runsheng Chen introduced the four components of an iGEM competition team: the Engineering group, the Human Practice (HP) group, the Wiki & Art Design group, and the Modeling group, and briefly introduced our project for this competition.
          </p>
          <img src="https://static.igem.wiki/teams/5432/education004.jpg" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}
          <img src="https://static.igem.wiki/teams/5432/education005.jpg" style={{ maxWidth: '100%' }} />
          <p>
            【Preach】<br />
            <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

            Finally, team leader Runsheng Chen answered questions from the participants. At this meeting, students actively asked many questions, and our team members also patiently answered the questions that the students were concerned about. The lively atmosphere demonstrated the strong interest and high level of attention that university students have towards the iGEM competition, and also reflects that we have achieved our promotional goals.
          </p>
          <img src="https://static.igem.wiki/teams/5432/education006.jpg" style={{ maxWidth: '100%' }} />
          <p>
            【Preach】
          </p>
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

        </section>

        <section id="promote">
          <h2>Promoting iGEM and Our Project in Hohhot</h2>
          <p>
            From July 13th to 24th, the "Zhici Qinglü" volunteer teaching team, part of the Academic Practice Department of the iGEM Association, carried out a volunteer teaching activity in Hohhot, Inner Mongolia Autonomous Region. The beneficiaries of this activity were the Triangle Line Community Service Center and the third-grade students of a local primary school.<br />
            On the morning of the 17th, the team leader of this volunteer teaching initiative and HP group member, Wenkai Wang, conducted an iGEM lecture. The lecture began with an introduction to marine fish farming and aquatic vaccines, leading to a discussion on the safety issues of aquatic products and the necessity of the iGEM project. Wang then explained the basic mechanism of how vaccines work in fish cells. The audience, consisting of local residents, listened attentively and frequently raised their hands to ask questions and engage in interactions.
          </p>
          <img src="https://static.igem.wiki/teams/5432/education007.jpg" style={{ maxWidth: '100%' }} />
          <p>
            【Preach】
            </p>
            <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

            <p>
            In the afternoon of the 17th, the team members visited a local elementary school to conduct a science outreach session for third-grade students. Compared to the morning session, the students here were even more enthusiastic, with many able to accurately name several terms related to marine biology and aquaculture. <br />
            When Yawen Bai introduced vaccines to the students, many eagerly shared their own stories about getting vaccinated. Yawen Bai used these stories as a starting point to explain the entire process of how a vaccine works after being injected into an organism, step by step, which helped the students expand their knowledge and broaden their horizons.
          </p>
          <img src="https://static.igem.wiki/teams/5432/education008.jpg" style={{ maxWidth: '100%' }} />
          <p>
            【Preach】
          </p>
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

        </section>

        <section id="club">
          <h3>Club</h3>
          <p>
            We have a club to support competitions, promote projects, cultivate students' research enthusiasm, and exercise their research abilities.
          </p>
          <img src="https://static.igem.wiki/teams/5432/education009.jpg" style={{ maxWidth: '100%' }} />
          <p>
            【Synthetic Biology Salon】<br />
            <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

            Our club has Rongchuang Workshop as the venue for group meetings and salons, and a laboratory as the experimental site.
          </p>

          <img src="https://static.igem.wiki/teams/5432/education010.jpg" style={{ maxWidth: '100%' }} />
          <p>
          【Rongchuang Space Residence Defense】<br />
          </p>
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

        </section>

        <section id="highlight">
          <h3>Highlight</h3>
          <p>
          The team shared important safety knowledge related to aquaculture with the residents and students of Hohhot, while also explaining the mechanism by which aquatic vaccines work. Facing different audiences, the team members adapted their approach by imagining themselves in the shoes of the residents and students, trying to explain these complex physiological mechanisms from their perspective. Their engaging teaching style aimed to raise awareness about aquaculture safety among the public and spark a deep curiosity in the students, planting the seeds of interest in marine biology and aquatic vaccines. At the same time, this effort also increased public recognition of our project.
          </p>
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

        </section>
      </div>
    </div>
  );
}
