import { ScrollModule } from '../components/ScrollModule';

const sections = [
  { title: 'Overview', id: 'Overview' },
  { title: 'Questionnaire survey', id: 'survey' },
  { title: 'Expert interview', id: 'interview' },
  { title: 'Field Survey of Fisheries in Qinhuangdao and Tangshan', id: 'Field' },
];

export function integratedHP() {
  return (
    <div className="content-container2">
      <ScrollModule sections={sections} />
      <div className="content" id="content">
        <section id="Overview">
          <h2>Overview</h2>
          <p>
            Due to the significant demand in the fisheries industry and the widespread challenges in fish disease prevention and control, we have identified the development of disease-resistant fish vaccines as an ideal solution. From the initial idea to proposal and problem definition, we have engaged in extensive dialogue with the public, experts, and businesses to ensure that our project effectively addresses fish disease issues. To optimize our experimental approach and advance the project, we have actively engaged in exchanges and discussions with some universities and organized a series of related activities.
          </p>
        </section>

        <section id="survey">
          <h2>Questionnaire survey</h2>
          <h3>Basic Analysis</h3>
          <p>
            Reliability of questionnaire<br />
            The questionnaire was distributed in almost all parts of the country. More sample sizes were obtained in Liaoning, Tianjin, Hebei and Shandong, the main turbot culture areas.
          </p>
          <img src="https://static.igem.wiki/teams/5432/integrated-hp001.png" style={{ maxWidth: '100%' }} />
          <p>
            【Data analysis】<br />
            <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

            In education, we have done a lot of popular science for teenagers in primary and secondary schools, and there are more investigations under the age of 18. Fishermen, aquaculture farmers and scientific researchers were mostly 40-49 years old, and the questionnaires accounted for more. Most of the heads of aquaculture companies were 50-59 years old, and more questionnaires were conducted.          </p>

          <img src="https://static.igem.wiki/teams/5432/integrated-hp002.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <p>
            It shows a balanced gender ratio.
          </p>

          <img src="https://static.igem.wiki/teams/5432/integrated-hp003.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <p>
            Most of the people in the survey are college graduates, and they belong to the group with higher education in the society.
          </p>

          <img src="https://static.igem.wiki/teams/5432/integrated-hp004.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <p>
            More than half of the people chose "Not sure", indicating that the survey population has insufficient cognition of specific freshwater fish diseases, and more popular science publicity is needed.
          </p>

          <img src="https://static.igem.wiki/teams/5432/integrated-hp005.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <p>
            More than half of the people chose "Not sure", indicating that the survey population has insufficient cognition of the specific pathogens causing Marine fish diseases, and more popular science publicity is needed.
          </p>

          <img src="https://static.igem.wiki/teams/5432/integrated-hp006.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <p>
            Some people still chose "No aquaculture vaccines", indicating that the popularization of aquatic vaccine products on the market still needs to be strengthened.          </p>

          <img src="https://static.igem.wiki/teams/5432/integrated-hp007.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <img src="https://static.igem.wiki/teams/5432/integrated-hp008.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <p>
            More than half of the people chose "Don't know", indicating that the survey population has insufficient cognition of the specific products of aquatic vaccines, and more popular science publicity is needed.
          </p>

          <img src="https://static.igem.wiki/teams/5432/integrated-hp009.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <p>
            More than half of the people chose "Don't know", indicating that the survey population has insufficient cognition of the specific products of aquatic vaccines, and more popular science publicity is needed.
          </p>

          <img src="https://static.igem.wiki/teams/5432/integrated-hp010.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <p>
            The need to develop an effective vaccine<br />
            The majority of people who choose "Disease outbreaks" and "Insufficient technical expertise" indicate that the main problem facing the aquaculture industry is the serious aquatic diseases and insufficient treatment means, and it is necessary to develop more convenient and efficient aquatic vaccines.
          </p>

          <img src="https://static.igem.wiki/teams/5432/integrated-hp011.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <p>
            The majority of people choose "Understand but hope to reduce usage", indicating that the abuse of antibiotics has attracted the attention of the population, the need to reduce the use of antibiotics in Marine fish farming, that is, the need to develop better treatment means, aquatic vaccines are a good example.
          </p>
          <img src="https://static.igem.wiki/teams/5432/integrated-hp012.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <img src="https://static.igem.wiki/teams/5432/integrated-hp013.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <h3>Interactive Analysis with the Region</h3>
          <p>
            More sample sizes were obtained in Liaoning, Tianjin, Hebei and Shandong, so that these regions are mainly analyzed. In these areas, the majority of people chose "Disease outbreaks" and "Insufficient technical expertise". It eminently indicates that the main problem facing the aquaculture industry is the serious aquatic diseases and insufficient treatment means, and it is necessary to develop more convenient and efficient aquatic vaccines.
          </p>

          <img src="https://static.igem.wiki/teams/5432/integrated-hp014.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <h3>Interactive Analysis with Age</h3>
          <p>
            Teenagers are always under the age of 18, they chose ”Disease outbreaks” more. Fishermen, aquaculture farmers and scientific researchers were mostly 40-49 years old, they chose ”Insufficient technical expertise” and “Disease outbreaks” more. Most of the heads of aquaculture companies were 50-59 years old, they chose “Insufficient technical expertise” and “Disease outbreaks” more. Obviously, serious aquatic diseases and backward production technology are serious problems. Therefore, it is necessary to develop efficient and convenient aquatic vaccines.
          </p>
          <img src="https://static.igem.wiki/teams/5432/integrated-hp015.jpg" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}


        </section>

        <section id="interview">
          <h3>Expert interview</h3>
          <p>
            The main purpose of this interview is to engage in in-depth discussions with Professor, Wang Qiyao, the Deputy Chief of the Sea Fish System at the Ministry of Agriculture and Rural Affairs of China. We aim to share our preliminary findings on the temporal vaccine research and gather Professor Wang's professional opinions and suggestions to further refine our research plan. We discuss the fundamental concepts, application principles, and potential benefits of temporal vaccines in aquaculture. We listen to the Professor Wang's views on the future prospects of temporal vaccines and discuss potential expansion directions for our research.
          </p>
          <img src="https://static.igem.wiki/teams/5432/interview1.jpg" style={{ maxWidth: '100%' }} />
          <p>【Team leader Chen Sought Advice from Professor Wang】</p>
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <h3>Market</h3>
          <p>The main purpose of this interview is to engage in discussions with vendors and stakeholders at the seafood market regarding the application of the vaccine for turbot. We aim to share our preliminary findings on the research and gather insights and feedback from market participants to further refine our research plan. </p>
          <img src="https://static.igem.wiki/teams/5432/interview2.jpg" style={{ maxWidth: '100%' }} />
          <p>【Team leader Chen Interviews the Fish Seller】</p>
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <p>We gather insights from seafood market vendors on the challenges they face regarding fish health and disease management and discuss how market feedback can inform future research directions and improve vaccine applications in aquaculture.</p>
          <img src="https://static.igem.wiki/teams/5432/interview3.jpg" style={{ maxWidth: '100%' }} />
          <p>【Yao Liu Interviews the Fish Seller】</p>
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <h3>The public</h3>
          <p>The main purpose of these interviews is to randomly engage pedestrians on the street to understand their perceptions of turbot and related disease prevention in aquaculture. We aim to share our preliminary findings from the research and gather public opinions and feedback to further refine our research plan.<br />
            We inquire if pedestrians are familiar with vaccines, especially how vaccines can be applied in aquaculture. We explore the public's awareness and perception of turbot, as well as their views on its presence in the market. We collect pedestrians’ attitudes toward the disease prevention measures in aquaculture and the strategies they believe are most important. We ask the public about their expectations regarding future technological advancements in aquaculture, including the use of vaccines and other innovative techniques.
          </p>
          <img src="https://static.igem.wiki/teams/5432/interview4.jpg" style={{ maxWidth: '100%' }} />
          <p>【Wenkai Wang interviews passersby】</p>
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

        </section>

        <section id="Field">
          <h2>Field Survey of Fisheries in Qinhuangdao and Tangshan</h2>
          <h3>Purpose</h3>
          <p>
            To understand diseases and treatment methods in aquaculture and to collect samples for reference research in Shanghai, our iGEM team's HP group conducted a field survey in Qinhuangdao and Tangshan, Hebei Province, from August 5th to 7th. The team provided guidance and solutions based on the issues raised by the fisheries staff.<br />
            The survey was attended by iGEM advisors Professor Wang Qiyao and Associate Professor Ma Yue, as well as team leader and HP group leader Runsheng Chen  and member Ruoyi Zhang.
          </p>
          <img src="https://static.igem.wiki/teams/5432/integrated-hp016.jpg" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <p>
            On the early morning of the 5th, the survey team departed from the South Gate of East China University of Science and Technology's Xuhui campus and flew to Beidaihe, Qinhuangdao. Upon arriving in Beidaihe, the team visited two fisheries in Changli County, toured the aquaculture bases, and discussed fish diseases and preventive measures with the managers and workers.
          </p>
          <img src="https://static.igem.wiki/teams/5432/integrated-hp017.jpg" style={{ maxWidth: '100%' }} />
          <p>
            【Turbot breeding pond】<br />
            <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

            The staff reported that recent fish fry deaths were due to various reasons and that traditional management methods had been ineffective.
          </p>
          <img src="https://static.igem.wiki/teams/5432/integrated-hp018.jpg" style={{ maxWidth: '100%' }} />
          <p>
            【The staff introduces the fishing ground to HP group leader Runsheng Chen】<br />
            <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

            Professor Wang and Associate Professor Ma noted that while fish disease symptoms might appear similar, they could be caused by different diseases, necessitating a change in prevention strategies. They suggested that last year's unsatisfactory immune experiment results might have been due to immunization conducted on infected or sub-healthy fish. Therefore, starting this year, the experimental approach will be modified to include quarantine before immunization.
          </p>
          <img src="https://static.igem.wiki/teams/5432/integrated-hp019.jpg" style={{ maxWidth: '100%' }} />
          <p>
            【Associate Professor Ma observe turbot】<br />
            <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

            Subsequently, the team collected several fish samples, including liver, spleen, kidney, and gill tissues. They also selected fish samples preliminarily identified as healthy, sub-healthy, diseased, and confirmed diseased and dead based on anatomical and morphological observations. These samples will be brought back to the laboratory for further examination and research.
          </p>
          <img src="https://static.igem.wiki/teams/5432/integrated-hp020.jpg" style={{ maxWidth: '100%' }} />
          <p>
            【Associate Professor Ma collected fish samples】<br />
          </p>
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <h3>Issues Identified</h3>
          <p>
            On August 6th, the survey team revisited aquaculture bases in Tangshan for further discussions. One company representative reported that after relocating northern fish fry to the south for expanded cultivation, the fish began to suffer from diseases and experience high mortality rates. Associate Professor Ma Yue suggested that the likely cause might be that the northern fish fry were already infected, and the rise in water temperature in the south led to the proliferation of pathogens, resulting in an outbreak.
          </p>
          <img src="https://static.igem.wiki/teams/5432/integrated-hp021.jpg" style={{ maxWidth: '100%' }} />
          <p>
            【HP group member Ruoyi Zhang collected fish samples】
          </p>
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <p>
            Regarding the issue of managing aquatic diseases, Professor Wang Qiyao noted that traditionally, large amounts of antibiotics were used to control diseases. However, due to policy restrictions and sustainability considerations, some antibiotics can no longer be used, and alternative options have proven unsatisfactory. The fishery manager indicated that their strategy involved using multiple drugs for diseased fish and selecting specific drugs based on their effectiveness. This approach, however, is time-consuming, costly, and leads to antibiotic overuse. The manager hoped to replace these cumbersome management methods with preventative strategies for fish diseases.
          </p>
          <img src="https://static.igem.wiki/teams/5432/integrated-hp022.jpg" style={{ maxWidth: '100%' }} />
          <p>
            【HP group leader Runsheng Chen collected fish samples】
          </p>
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <h3>Solutions</h3>
          <p>
            After discussions, it was initially determined that lower water temperatures might help suppress the outbreak of fish diseases. The survey team proposed two solutions: one was to use cooling water to control disease outbreaks, and the other was to use vaccines for fish immunization. Additionally, the team completed sampling of various fish species, which will be taken back to the laboratory for testing. The team plans to return to the fishery later in the month to apply vaccines and collect more data for analysis.
          </p>
          <img src="https://static.igem.wiki/teams/5432/integrated-hp023.jpg" style={{ maxWidth: '100%' }} />
          <p>
            【Dissecting a sick turbot】
          </p>
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <h3>Significance</h3>
          <p>
            This field survey was crucial as it allowed our team to move beyond theoretical research and engage directly with real-world challenges in fish disease management. By interacting with industry professionals and observing firsthand the practical difficulties they face, we gained valuable insights into the gaps and inefficiencies in current disease prevention and treatment strategies.
          </p>
          <img src="https://static.igem.wiki/teams/5432/integrated-hp024.jpg" style={{ maxWidth: '100%' }} />
          <p>
            【Turbot breeding pond】
          </p>
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <p>
            The identification of specific issues, such as the impact of temperature changes on disease outbreaks and the limitations of antibiotic use, has provided a clearer understanding of the context in which our research operates. This direct engagement will help refine our research focus and tailor our approaches to address the most pressing problems in aquaculture.<br />
            The solutions proposed, including the use of cooling systems and vaccines, are informed by the real-world observations and feedback gathered during the survey. This practical relevance ensures that our research is not only innovative but also applicable and beneficial to the industry.<br />
            Furthermore, the data collected and the subsequent analysis will contribute to a more nuanced understanding of fish disease dynamics and prevention strategies. The ability to test and validate potential solutions in the field, rather than solely in a controlled laboratory setting, will enhance the robustness and applicability of our research outcomes.
          </p>
          <img src="https://static.igem.wiki/teams/5432/integrated-hp025.jpg" style={{ maxWidth: '100%' }} />
          <p>
            【From left to right: Professor Wang, HP group leader Runsheng Chen, HP group member Ruoyi Zhang,  Associate Professor Ma】
          </p>
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <p>
            Overall, this field survey has significantly enriched our research perspective, strengthened our connection with industry needs, and will guide the strategic direction of our future projects, ultimately contributing to advancements in sustainable aquaculture practices.
          </p>
          <img src="https://static.igem.wiki/teams/5432/integrated-hp026.jpg" style={{ maxWidth: '100%' }} />
          <p>
            【Photo with aquatic enterprises】
          </p>
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}


        </section>

      </div>
    </div>
  );
}
