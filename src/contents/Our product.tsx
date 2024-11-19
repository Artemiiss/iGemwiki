import { ScrollModule } from '../components/ScrollModule';

const sections = [
  { title: 'Introduction', id: 'Introduction' },
  { title: 'Action Mechanism', id: 'action' },
  { title: 'Value Position ', id: 'value' },
  { title: 'Targeted Customers ', id: 'target' },
];

export function Ourproduct() {
  return (
    <div className="content-container2">
      <ScrollModule sections={sections} />
      <div className="content" id="content">
        <section id="Introduction">
          <h2>Introduction</h2>
          <p>
            Our fish vaccine product uses <em>Edwardsiella piscicida</em> EIB202 as a carrier. This bacterium can deliver multiple antigens at different times and locations within the fish. This approach enhances the effectiveness of the vaccine by providing a more targeted immune response.
          </p>
          <img src="https://static.igem.wiki/teams/5432/op001.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}
          <p>
            【The European flounder(left),<em>Edwardsiella piscicida</em> EIB202(right)】           </p>
        </section>

        <section id="action">
          <h2>Action Mechanism</h2>
          <p>
            Additionally, this vaccine design helps to avoid the issue of "cytokine storm," which is an excessive immune reaction that can impact the effectiveness of vaccines. By using this method, we reduce the risk of such side effects and ensure that the vaccine provides better protection for fish against diseases. <br />
            Furthermore, our fish vaccine uses an immersion method for administration, which offers several advantages. Firstly, immersion is simple to perform and does not require complex injection equipment or techniques, making it cost-effective and suitable for various aquaculture operations. During the immersion process, all fish uniformly come into contact with the vaccine. Compared to injections, this method also reduces the impact on the fish.
          </p>
          <img src="https://static.igem.wiki/teams/5432/op002.png" style={{ maxWidth: '100%' }} />
          <p>
            【Sample graph,created by Fu. Jiming】
          </p>
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

        </section>

        <section id="value">
          <h2>Value Position</h2>
          <p>
            Our project focuses on the development of time-sequenced immunization vaccines for fish, highlighting the social benefits of this vaccine product from multiple angles.
          </p>
          <img src="https://static.igem.wiki/teams/5432/op003.jpg" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}
          <p>
            【What Values】
          </p>
          <p>
            So what role does our team play in the entire process of fishery production and aquaculture? First, when selecting and introducing fish species for aquaculture farms, we need to conduct big data analysis on fish epidemiology for the target species, and use mathematical modeling to construct infectious disease transmission models. This modeling guides the immunization plan for the fish. Our POROS sequential immunization vaccine undoubtedly has advantages over traditional vaccines in terms of being healthier and more environmentally friendly. Similarly, aquaculture farms will also consider introducing smart fishery management systems, adapting to the biological habits of the fish, establishing biosecurity measures, and conducting market demand analysis and research. Starting from these four aspects, we create models to optimize the aquaculture plan and begin the formal fish farming production plan with the introduction of the vaccine. After producing finished products, we conduct QC quality testing to guide the next production plan. Additionally, our team’s Education segment focuses on end consumers, providing popular science knowledge on aquaculture, explaining the causes of farming diseases, highlighting the advantages of Poros-vaccine sequential vaccines, and educating about food safety to help the public gain more information related to fisheries.
          </p>
          <img src="https://static.igem.wiki/teams/5432/op004.jpg" style={{ maxWidth: '100%' }} />
          <p>【Pioneering Green Transformation】</p>
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <p>
            Lastly, on a moral level, fish epidemics can lead to widespread social panic, which is detrimental to the stability of social order.
          </p>

          <img src="https://static.igem.wiki/teams/5432/op0051.png" style={{ maxWidth: '100%' }} />
          <p>
            【<em>Edwardsiella piscicida</em> EIB202】
          </p>
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}
        </section>

        <section id="target">
          <h2>Targeted Customers</h2>
          <p>
            Our research has found that large aquaculture operations widely use various effective fish vaccines, while small and medium-sized farmers rarely use vaccines or experience limited effectiveness. To address this, we aim to lower the vaccine prices and enhance their efficacy for small and medium-sized farmers. This will encourage them to purchase and use vaccines, reducing economic losses due to fish diseases and promoting the development of the aquaculture industry.
          </p>
          <img src="https://static.igem.wiki/teams/5432/op007.png" style={{ width: '40%' }} />
          <p>
          【The European flounder】
          </p>
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}
       
        </section>

      </div>
    </div>
  );
}
