import { ScrollModule } from '../components/ScrollModule';

const sections = [
  { title: 'Description', id: 'Description' },
  { title: 'Factory layout', id: 'Factory' },
  { title: '3D modeling diagram', id: 'modeling' },
  { title: 'Video animation ', id: 'Video' },
  { title: '3D printed model shot', id: 'printed' },
  { title: 'Site visit', id: 'Site' },
  { title: 'References', id: 'References' },
];

export function Hardware() {
  return (
    <div className="content-container2">
      <ScrollModule sections={sections} />
      <div className="content" id="content">
        <section id="Description">
          <h2>Description</h2>
          <p>
            The name of our hardware is Poros-Vaccine Multipat Automated Immunization and Breeding Factory.Let's follow the eyes of a juvenile Turbot to see what it does in the factory！
          </p>
          <img src="https://static.igem.wiki/teams/5432/hardware/hardware01.jpg" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div>
          <p>The young turbot begins its life in a nursery pond, where it is nurtured and fed until it achieves a suitable size. Then, it is carefully transferred to an immunization pond. Here, a bacterial solution for immunization is prepared in advance, and the fish undergoes 30 minutes treatment to bolster its immune system. Post-immunization, the fish is gently transferred to a culture pond using a fish pump for further growth.<br />
            Throughout the cultivation process, an automated management system within the facility constantly monitors key environmental factors such as temperature, humidity, and dissolved oxygen levels via sensors. This ensures that the turbot thrive in an optimal environment. The facility's automated feeding system, which includes small robots, operates on a schedule to provide regular meals, thereby achieving precise control and significantly reducing the labor required. The feed is specially formulated with inducers to enhance the fish's disease resistance and promote growth.<br />
            The facility's primary competitive edge is its ability to automate management and regulation. By leveraging modern techniques and integrating various sensors and control systems, it minimizes manual labor in the breeding process and maximizes production efficiency. Additionally, the initial immunization in the pond prepares the fish to better combat diseases, mitigating their impact on turbot production and boosting overall yield.
          </p>
          <img src="https://static.igem.wiki/teams/5432/hardware/hardware02.jpg" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div>


        </section>

        <section id="Factory">
          <h2>I. Factory layout</h2>
          <h4>1.1 Breeding area</h4>
          <p>Large circular breeding pond: 10 meters in diameter and 2 meters in depth, with a total of 2.<br />
            Small circular immunization pond: 2.5 meters in diameter and 1.5 meters in depth, used for fry cultivation and vaccine immersion, with a total of 4.<br />
            Note the proportional difference in size between large breeding ponds and small immunization ponds when constructing fish ponds. A central aeration pipeline is set in the fish pond and connected to the oxygen control system. Next to the fish pond, the pipeline is connected to the water treatment system.
          </p>
          <h4>1.2 Water treatment area</h4>
          <p>Sedimentation tank: used for preliminary sedimentation of aquaculture wastewater, with a volume of 5 cubic meters.<br />
            Biological filter tank: uses microorganisms to decompose organic matter, with an area of 5 square meters.<br />
            Ultraviolet disinfection tank: disinfects the treated water, with a volume of 5 cubic meters.<br />
            The water treatment system is divided into three sections of equal area, directly separated by partitions in the middle.
          </p>
          <h4>1.3 Feed storage and processing area</h4>
          <p>Feed warehouse: stores various feeds, with an area of 20 square meters.<br />
            Feed processing workshop: equipped with crushing, mixing and other equipment, with an area of 50 square meters.
          </p>
          <h4>1.4 Equipment control area and office area</h4>
          <p>Central control room: installs monitoring equipment and control system, with an area of 20 square meters.<br />
            Office: for managers to work, with an area of 20 square meters.<br />
            Conference room: used for holding meetings and trainings, with an area of 20 square meters.
          </p>
          <h3>II. Breeding system</h3>
          <h4>2.1 Water circulation system</h4>
          <p>Inlet pipeline: 40 centimeters in diameter.<br />
            Drainage pipeline: 40 centimeters in diameter.<br />
            Water pump.<br />
            Filtering equipment.
          </p>
          <h4>2.2 Temperature control system</h4>
          <p>Heating device: uses electric heating or solar heating.<br />
            Cooling device: realized through a chiller.<br />
            The temperature control system can be set as a digital display screen and placed in a centralized area or placed next to each fish pond and then connected to the corresponding temperature controller.
          </p>
          <h4>2.3 Aeration system</h4>
          <p>Aerator: reserved for emergencies.<br />
            The oxygen control area is designed as a large oxygen pump and then connected to each fish pond in the form of pipelines.
          </p>
          <h3>III. Automated equipment</h3>
          <h4>3.1 Feeding system</h4>
          <p>Automatic feeder: feeds according to the set time and feeding amount.<br />
            The automated feeding pipeline can be set up in the form of a conveyor belt pipeline that connects from the feed storage workshop to each fish pond.
          </p>
          <h4>3.2 Monitoring system</h4>
          <p>Water quality sensor: monitors water temperature, salinity, dissolved oxygen, pH value, etc.<br />
            Fish group monitoring camera: observes the growth and activity of fish.
          </p>
          <h4>3.3 Control system</h4>
          <p>Central control computer: integrates various data to achieve automated control.</p>

        </section>

        <section id="modeling">
          <h2>3D modeling diagram</h2>
          <img src="https://static.igem.wiki/teams/5432/hardware/hardware03.jpg" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div>
          <img src="https://static.igem.wiki/teams/5432/hardware/hardware04.jpg" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div>
          <img src="https://static.igem.wiki/teams/5432/hardware/hardware05.jpg" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div>


        </section>


        <section id="Video">
          <h2>Video animation</h2>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <iframe 
            title="ECUST: Hardware007 (2024) [English]" 
            width="1120" 
            height="630" 
            src="https://video.igem.org/videos/embed/62b0d762-eaf5-4d9f-bd2a-df9523021ae4" 
            frameBorder="0" 
            allowFullScreen 
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          ></iframe>
        </div>
        </section>

        <section id="printed">
          <h2>3D printed model shot</h2>
          <p>
            It is difficult to show the specifics of the factory we designed because of the scale-down, as the parts are enlarged.
          </p>
          <img src="https://static.igem.wiki/teams/5432/hardware/hardware08.jpg" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div>
          <img src="https://static.igem.wiki/teams/5432/hardware091.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div>
          <img src="https://static.igem.wiki/teams/5432/hardware/hardware10.jpg" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div>
          <img src="https://static.igem.wiki/teams/5432/hardware/hardware11.jpg" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div>
          <img src="https://static.igem.wiki/teams/5432/hardware/hardware12.jpg" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
            <iframe title="ECUST: Hardware (2024) [English]"
              width="1120"
              height="630"
              src="https://video.igem.org/videos/embed/b988075a-8158-418f-8c20-db776bfb40b5" 
              frameBorder="0"
              allowFullScreen
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            ></iframe>
          </div>
        </section>
        
        <section id="Site">
          <h2>Site visit</h2>
          <p>
            To understand diseases and treatment methods in aquaculture and to collect samples for reference research in Shanghai, our iGEM team's HP group conducted a field survey in Qinhuangdao and Tangshan, Hebei Province, from August 5th to 7th. The team provided guidance and solutions based on the issues raised by the fisheries staff.<br />
            The survey was attended by iGEM advisors Professor Qiyao Wang and Associate Professor Yue Ma, as well as team leader and HP group leader Runsheng Chen and member Ruoyi Zhang.<br />
            The staff reported that recent fish fry deaths were due to various reasons and that traditional management methods had been ineffective. <br />
            Professor Wang and Associate Professor Ma noted that while fish disease symptoms might appear similar, they could be caused by different diseases, necessitating a change in prevention strategies. They suggested that last year's unsatisfactory immune experiment results might have been due to immunization conducted on infected or sub-healthy fish. Therefore, starting this year, the experimental approach will be modified to include quarantine before immunization.<br />
            This field survey was crucial as it allowed our team to move beyond theoretical research and engage directly with real-world challenges in fish disease management. By interacting with industry professionals and observing firsthand the practical difficulties they face, we gained valuable insights into the gaps and inefficiencies in current disease prevention and treatment strategies.
          </p>

        </section>

        <section id="References">
          <h2>References</h2>
          <p>
            1.	B. Novoa, S. Nun˜ez, C. Fernández-Puentes, A.J. Figueras, A.E. Toranzo,Epizootic study in a turbot farm: bacteriology, virology, parasitology and histology,Aquaculture,Volume 107, Issues 2–3,1992,Pages 253-258<br />
            2.	A.E. Toranzo, B. Novoa, J.L. Romalde, S. Núñez, S. Devesa, E. Mariño, R. Silva, E. Martínez, A. Figueras, J.L. Barja,Microflora associated with healthy and diseased turbot (Scophthalmus maximus) from three farms in northwest Spain,Aquaculture,Volume 114, Issues 3–4,1993,Pages 189-202<br />
            3.	马爱军,王新安.大菱鲆(Scophthalmus maximus)种业发展及相关前沿技术应用[J].海洋与湖沼,2015,46(06):1461-1466.

          </p>

        </section>

      </div>
    </div>
  );
}
