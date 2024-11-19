import { ScrollModule } from '../components/ScrollModule';

const sections = [
  { title: 'Introduction', id: 'Introduction' },
  { title: 'Project Safety', id: 'Project-safety' },
  { title: 'Regulations', id: 'Regulations' },
];

export function Safety() {
  return (
    <div className="content-container2">
      <ScrollModule sections={sections} />
      <div className="content" id="content">
        <section id="Introduction">
          <h2>Introduction</h2>
          <p>
            Safety is the primary principle of our project, running through all stages of our project.<br />
            Our team members have received strict training from Biosafety, Biosecurity and Bioethics office in ECUST, and follow the lab regulations for proper handling of microorganisms during experiments.
          </p>
        </section>

        <section id="Project-safety">
          <h2>Project Safety</h2>
          <h3>Experimental Design Safety</h3>
          <p>
            In terms of experimental design, our project carefully selected edible substances, including arabinose, sucrose, and trimethylamine N-oxide (TMAO), to serve as inducers. By using natural, edible inducers, we aim to minimize potential side effects and ensure compatibility with the biological processes involved, while also enhancing the sustainability and applicability of the experiment in food-related or biotechnological contexts.
          </p>
          <h3><em>Scophthalmus maximus L.</em> Usage Check In</h3>
          <p>
            <em>Scophthalmus maximus L.</em> (turbot fish) was used as a model animal to conduct animal experiments. Our vaccine is developed specifically for flatfish, particularly <em>Scophthalmus maximus</em>. Therefore, to obtain data on the vaccine's safety, reliability, and efficacy, we must conduct experiments with fish to further ensure the overall safety of the project and the product. Animal care and welfare is fully considered and strictly followed under regulations.
          </p>
          <h3><em>Edwardsiella piscicida</em> WED Usage Check In</h3>
          <p>
            <em>Edwardsiella piscicida</em> WED (a licensed live attenuated vaccine strain with Biosafety certification issued from the National Agriculture GMO office of MARA, China, No. 2013-267) acts as the carrier of the fish vaccine developed in the project.<br />
            <em>Edwardsiella piscicida</em> WED has been strictly proved to be environmental safety, and safe to fish inoculated with it, as well as safety to humans handling it. To prevent <em>Edwardsiella piscicida</em> from leaking, all wastewater, laboratory utensils and other wastes generated during the experiment are treated with high temperature sterilization or appropriate disinfectant to ensure that the <em>Edwardsiella piscicida</em> WED is completely killed before treatment.
          </p>
          {/* 图片 */}
          <img src="https://static.igem.wiki/teams/5432/safety01.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <h3>Pensonnel Safety</h3>
          <p>
            When entering the lab, personnel must wear appropriate work attire, including lab coats, hats, and shoes. After completing experiments, hands should be thoroughly washed with soap and water, using disinfectants if necessary. Lab coats should be cleaned regularly, especially before holidays. Upon finishing the experiments, the workspace and equipment should be promptly cleaned, and any contaminated materials should be disinfected and sterilized. We conduct daily inspections, which include checks on water, electricity, and equipment. Before leaving, doors and windows must be securely locked.
          </p>
          <h3>Lab Facilities</h3>
          <p>
            During the project, our team conduct laboratory experiments in standard microbiological lab. The laboratory is equipped with various instruments, including incubators, autoclaves, regular refrigerators, low-temperature freezers, shakers, microscopes, centrifuges, laminar flow hoods, oscillators, balances, pH meters, and high-speed refrigerated centrifuges. Lab workers must strictly follow operating procedures when using instruments.
          </p>
          <img src="https://static.igem.wiki/teams/5432/safety02.jpg" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <img src="https://static.igem.wiki/teams/5432/safety03.jpg" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <h3>Environmental Safety</h3>
          <p>
            To maintain cleanliness and hygiene in the laboratory, we clean and disinfect surfaces such as tables and cabinets daily to prevent contamination. The lab is kept organized, with personal items and equipment stored in designated areas, and laboratory supplies are arranged systematically with fixed locations. Personnel ensure a clean environment at all times, avoiding littering with paper scraps or other debris, and promptly disposing of used materials in designated containers. Regular safety checks are conducted to ensure compliance with standardized procedures. Additionally, all wastewater, laboratory utensils, and other waste generated during experiments must undergo high-temperature sterilization or be treated with appropriate disinfectants to ensure the complete eradication of <em>Edwardsiella piscicida</em> WED before disposal.           </p>

        </section>

        <section id="Regulations">
          <h3>Regulations</h3>
          <p>
            All animal protocols used were approved by the Animal Care Committee of the East China University of Science and Technology Biosafety, Biosecurity and Bioethics office (2006272). <br />
            The experimental animal care and use guidelines from the Ministry of Science and Technology of China (MOST-2011-02) were strictly followed.

          </p>

        </section>

      </div>
    </div>
  );
}
