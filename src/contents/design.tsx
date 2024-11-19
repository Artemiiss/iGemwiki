import { ScrollModule } from '../components/ScrollModule';
import { Link } from 'react-router-dom';

const sections = [
  { title: 'Overview', id: 'Overview' },
  { title: 'Software&AI to predict effector proteins of E.piscicida', id: 'Predict' },
  { title: 'Construction of bolA : : Tn attenuated strain', id: 'Construction' },
  { title: 'Safety test of bolA : : Tn attenuated strain', id: 'safetytest' },
  { title: 'Bacterial colonization experiment', id: 'Bacterial' },
  { title: 'Single-path verification', id: 'singlepath' },
  { title: 'Negative feedback regulation', id: 'negative' },
  { title: 'Antigen excretion validation', id: 'validation' },
  { title: 'Merger of three pathways', id: 'pathways' },
  { title: 'Future prospect', id: 'prospect' },
  { title: 'References', id: 'References' },
];

export function design() {
  return (
    <div className="content-container2">
      <ScrollModule sections={sections} />
      <div className="content" id="content" >
        <section id="Overview">
          <h2>Overview</h2>
          <p>
            The Poros-Vaccine comprises two vaccine models: the manual timing immunization model and the automatic timing immunization model. In the manual timing immunization model, the expression of antigens in the carrier strain can be stimulated by manually adding inducers, thus solving the problem of controlling the timing of immunization.In the automatic timing immunization model, the inducer of the latter pathway is designed to be the antibody produced by the organism through the former pathway, thereby achieving the purpose of timed immunization without human intervention.<br />
            After consulting a large amount of data, we decided to take the manual version as our first goal.
          </p>
          <img src="https://static.igem.wiki/teams/5432/design01.png" style={{ maxWidth: '100%' }} />
          <p>
            In order to achieve our plan step by step, we intended to first build a model using Escherichia coli as the chassis strain, while modifying the Edwardsiella piscicida EIB202 as the vector, ultimately obtaining a vaccine with an attenuated strain of Edwardsiella piscicida EIB202 as the carrier.<br />
            To create Poros-Vaccine, our design encompasses three major segments: modification of the carrier bacteria, the design of individual pathways, and the chronological connection between these pathways.
          </p>
        </section>

        <section id="Predict">
          <h2>Software&AI to predict effector proteins of E.p</h2>
          <p>
            Utilizing an artificial intelligence model, we have identified a virulence-critical protein in Edwardsiella piscicida and suppressed its gene via transposon insertion, thereby obtaining attenuated strains that can serve as vaccine carriers.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
            <iframe title="ECUST: design02 (2024) [English]"
              width="1120"
              height="630"
              src="https://video.igem.org/videos/embed/f8449235-b0e4-47d6-8f27-b24ae0058d14"
              frameBorder="0"
              allowFullScreen
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            ></iframe>
          </div>

          <p>
            <Link to="/SoftwareandAI">see more</Link>
          </p>

        </section>

        <section id="Construction">
          <h3>Construction of bolA : : Tn attenuated strain</h3>
          <p>
            We obtained the library of E. piscicida subjected to Tn-seq analysis stored in the lab, diluted the library, and plated it. After isolating single colonies, each colony was picked and cultured, and its bolA gene was sequenced. Based on the sequencing results, we selected bolA::Tn mutant strains, which were then further cultured and validated by sequencing after the expansion.
          </p>
        </section>

        <section id="safetytest">
          <h3>Safety test of bolA : : Tn attenuated strain</h3>
          <p>
            According to the results of the AI prediction model, the bolA::Tn mutant strain should meet the criteria for attenuated strains, meaning that for experimental fish, bolA::Tn does not significantly increase fish mortality compared to the negative control group. Therefore, we designed the following experiment. In the experiment, we randomly divided the fish into four groups: two experimental groups and two negative control groups, with 30 fish in each group. The experimental groups were treated with bolA::Tn diluted in PBS buffer added to seawater, while the negative control groups received an equal volume of sterilized PBS buffer. After soaking for 30 minutes, the fish were removed and the timing began, with observations of fish mortality over the following two weeks. The quantity of bacteria used in the experimental groups was the same amount found in previous experiments to cause approximately 90% mortality in the experimental fish.
          </p>
          <img src="https://static.igem.wiki/teams/5432/design03.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

        </section>

        <section id="Bacterial">
          <h3>Bacterial colonization experiment</h3>
          <p>
            We aim to determine the distribution of Edwardsiella piscicida, which has entered the fish body through immersion, at various time points. In the experiment, we added bolA::Tn diluted in PBS buffer to seawater. After soaking for 30 minutes, the fish were removed and timing began. We observed the presence of E. piscicida in the gills, liver, spleen, intestines, and abdominal cavity fluid of the experimental fish at 0, 1, 3, 7, and 14 days post-treatment. Previous experiments have shown that E. piscicida typically colonizes the liver, spleen, and intestines.
          </p>
          <img src="https://static.igem.wiki/teams/5432/design04.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

        </section>

        <section id="singlepath">
          <h3>Single-path verification</h3>
          <p>
            The primary challenge facing us is the issue of selecting a single-pathway system, specifically deciding on which inducible promoters to use to achieve the targeted protein (antigen or lethal factor) induction. <br />
            We consider that the inducer for the single-pathway system should ideally possess high signal-to-noise ratio, minimal interference with critical biochemical processes of the strain itself, and that relevant pathways for these inducers should already exist in the chassis bacterium, plus no harm on the chassis. Through bioinformatics methods such as BLAST and extensive literature retrieval, we have found that very few inducers meet these criteria. Ultimately, we have determined that mannose, TMAO (trimethylamine N-oxide), and arabinose will be used as inducers for Edwardsiella piscicida. Additionally, sucrose and IPTG (isopropyl β-D-1-thiogalactopyranoside) will be employed for preliminary experiments in Escherichia coli strains. We plan to construct certain plasmids for introduction of these pathways into both Escherichia coli and Edwardsiella piscicida to initially validate the efficacy of these pathways in these two strains (See Figure 2, Figure 4, Figure 6). If this step is unsuccessful, we will attempt to demonstrate their functionality through genomic knock-in methods.
          </p>
          <div className="image-row" style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
            <img src="https://static.igem.wiki/teams/5432/design1002/design05.png" style={{ width: '49%', height: 'auto' }} />
            <img src="https://static.igem.wiki/teams/5432/design06.png" style={{ width: '49%', height: 'auto' }} />
          </div>
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}
          <div className="image-row" style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
            <img src="https://static.igem.wiki/teams/5432/design1002/design07.png" style={{ width: '49%', height: 'auto' }} />
            <img src="https://static.igem.wiki/teams/5432/design08.png" style={{ width: '49%', height: 'auto' }} />
          </div>
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <div className="image-row" style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
            <img src="https://static.igem.wiki/teams/5432/design1002/design09.png" style={{ width: '49%', height: 'auto' }} />
            <img src="https://static.igem.wiki/teams/5432/design10.png" style={{ width: '49%', height: 'auto' }} />
          </div>
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <p>
            To obtain the optimal inducer input, we have also designed quantitative single-pathway experiments, which investigate the effect of different concentrations of inducer on GFP expression levels. Through these experiments, we aim to determine the lower limit of inducer input for each pathway and the upper limit of GFP expression. We plan to represent GFP expression levels by detecting fluorescence using a microplate reader.
          </p>
          <img src="https://static.igem.wiki/teams/5432/design11.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

        </section>

        <section id="negative">
          <h3>Negative feedback regulation</h3>
          <p>
            To prevent fluctuations in immune response due to variations in feed containing these inducers, we employed negative feedback regulation to stabilize expression. <br />
            We achieved this by adding expressible inhibitory gene (lacI) to the structural gene region and regulatory gene (lacO) to the promoter region, which enable LacI expressed to bind promoter region and suppress expression, thereby implementing negative feedback regulation. <br />
            When the inducer initiates downstream transcription, LacI expressed. However, the initial amount is too small to have much inhibitory effect. When the expression level of the target fragment exceeds the threshold, the amount of LacI is also sufficient to produce a strong inhibitory effect. On the contrary, when the expression level is below the threshold, the amount of lacI also decreases accordingly, weakening the inhibition and thus enhancing expression. Finally, the expression level gradually tends to the threshold.<br />
          </p>
          <img src="https://static.igem.wiki/teams/5432/design12.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

        </section>

        <section id="validation">
          <h3>Antigen excretion validation</h3>
          <p>
            To elicit an immune response from the body against an antigen, the first crucial step is to ensure that the antigen can be exported out of the cell. Therefore, we have designed experiments to validate the export of antigens. This module is divided into two parts, focusing on Escherichia coli and Edwardsiella piscicida. Through literature research, we will attach the corresponding bacterial export signal peptide and a 6His tag to each antigen gene. Subsequently, the plasmids containing these modified antigen genes will be introduced into the respective bacterial strains. To detect the export of these antigens, we will employ Western-blotting techniques. This approach will allow us to confirm the successful export of the antigens, which is essential for triggering an immune response in the host organism.
          </p>
          <div className="image-row" style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
            <img src="https://static.igem.wiki/teams/5432/design13.png" style={{ width: '49%', height: 'auto' }} />
            <img src="https://static.igem.wiki/teams/5432/design14.png" style={{ width: '49%', height: 'auto' }} />
          </div>
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <div className="image-row" style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
            <img src="https://static.igem.wiki/teams/5432/design15.png" style={{ width: '49%', height: 'auto' }} />
            <img src="https://static.igem.wiki/teams/5432/design16.png" style={{ width: '49%', height: 'auto' }} />
          </div>
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

        </section>

        <section id="pathways">
          <h3>Merger of three pathways</h3>
          <p>
            Meanwhile, we determined that the protein factors expressed by the three pathways should be OmpK, AshA, and EnrR in sequence, which are antigens of Vibrio anguillarum, Aeromonas hydrophila, and the suicide factor of Edwardsiella piscicida, respectively. In our preliminary vaccine model, we have employed mannose, arabinose, and TMAO as inducers to activate these three pathways, using uvGFP, mCherry, and tsPurple as the reporter gene, respectively. Furthermore, we constructed these three pathways into the chassis bacteria through genome knock-in methods.
          </p>
          <img src="https://static.igem.wiki/teams/5432/design17.png" style={{ maxWidth: '100%' }} />
          <img src="https://static.igem.wiki/teams/5432/design18.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

        </section>

        <section id="prospect">
          <h3>Future prospect</h3>
          <p>
            To stimulate the activation of the subsequent pathway after the previous pathway reaches a certain level of expression, we have conducted preliminary automated design. Through literature retrieval, we have understood the working principle of the bacterial two-component system (TCS). Our plan is to achieve the purpose of sequential expression of the previous and subsequent pathways by protein modification of TCS protein so that the latter pathway responds to the antibodies generated by the immune system of the previous pathway.
          </p>
          <img src="https://static.igem.wiki/teams/5432/design19.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

        </section>

        <section id="References">
          <h3>References</h3>
          <p>
            [1]	Lewis M, (2013). Allostery and the lac Operon. Journal of Molecular Biology, 425(13): 2309-2316.<br />
            [2]	Crutz A M, Steinmetz M, (1992). Transcription of the Bacillus subtilis sacX and sacY genes, encoding regulators of sucrose metabolism, is both inducible by sucrose and controlled by the DegS-DegU signalling system. Journal of Bacteriology, 174(19): 6087-6095. <br />
            [3]	Soisson S M, MacDougall-Shackleton B, Schleif R, et al., (1997). Structural Basis for Ligand-Regulated Oligomerization of AraC. Science, 276(5311): 421-425. <br />
            [4]	Ansaldi M, Théraulaz L, Baraquet C, Panis G, Méjean V. (2007), Aerobic TMAO respiration in Escherichia coli. Mol Microbiol. 66(2):484-94. <br />
            [5]	Bordi C, Ansaldi M, Gon S, Jourlin-Castelli C, Iobbi-Nivol C, Méjean V. (2004), Genes regulated by TorR, the trimethylamine oxide response regulator of Shewanella oneidensis. J Bacteriol. 186(14):4502-9. <br />
            [6]	Simon G, Méjean V, Jourlin C, Chippaux M, Pascal MC. (1994), The torR gene of Escherichia coli encodes a response regulator protein involved in the expression of the trimethylamine N-oxide reductase genes. J Bacteriol. 176(18):5601-6. <br />
            [7]	Schmidl SR, Ekness F, Sofjan K, Daeffler KN, Brink KR, Landry BP, Gerhardt KP, Dyulgyarov N, Sheth RU, Tabor JJ. (2019), Rewiring bacterial two-component systems by modular DNA-binding domain swapping. Nat Chem Biol. 15(7):690-698. <br />
            [8]	Liu Y, Zhao L, Yang M, Yin K, Zhou X, Leung KY, Liu Q, Zhang Y, Wang Q. (2017), Transcriptomic dissection of the horizontally acquired response regulator EsrB reveals its global regulatory roles in the physiological adaptation and activation of T3SS and the cognate effector repertoire in Edwardsiella piscicida during infection toward turbot. Virulence. 8(7):1355-1377. <br />
            [9]	Mao Q, Jiang J, Wu X, Xu R, Ma Y, Zhang Y, Shao S, Wang Q. (2022), Coordinate regulation of carbohydrate metabolism and virulence by PtsH in pathogen Edwardsiella piscicida. Appl Microbiol Biotechnol. 106(5-6):2063-2077. <br />
            [10]	Wei L, Qiao H, Sit B, Yin K, Yang G, Ma R, Ma J, Yang C, Yao J, Ma Y, Xiao J, Liu X, Zhang Y, Waldor MK, Wang Q. (2019), A Bacterial Pathogen Senses Host Mannose to Coordinate Virulence. iScience. 20:310-323. <br />
            [11]	Li J, Tang L, Wang P, Li G, Jin H, Mo Z. (2021)Identification and application of T3SS translocation signal in Edwardsiella piscicida attenuated carrier as a bivalent vaccine. J Fish Dis. 44(5):513-520. <br />
            [12]	Ma R, Liu Y, Gan J, Qiao H, Ma J, Zhang Y, Bu Y, Shao S, Zhang Y, Wang Q.(2022) Xenogeneic nucleoid-associated EnrR thwarts H-NS silencing of bacterial virulence with unique DNA binding. Nucleic Acids Res. 22;50(7):3777-3798. <br />
            [13]	杨智慧,李宁求,白俊杰,等. (2006).19株海水鱼致病性弧菌OmpK基因序列及其抗原性分析[J].中国水产科学(05),807-813. <br />
            [14]	刘嘉.(2009) 三种弧菌外膜蛋白K基因的克隆、表达及其潜在应用的研究[D].中国海洋大学. <br />
            [15]	Hamod A M ,Nithin S M ,Shukur N Y , et al.(2012). Outer membrane protein K as a subunit vaccine against V. anguillarum.Aquaculture ,354-355107-110. <br />
            [16]	Qian R ,Xiao Z ,Zhang C , et al.(2008). A conserved outer membrane protein as an effective vaccine candidate from Vibrio alginolyticus.Aquaculture ,278(1-4):5-9. <br />
            [17]	Suleman M M ,Iqra E ,Muhammad S , et al.(2023). In silico designing and characterization of outer membrane protein K (OmpK) from Vibrio anguillarum and its expression in Nicotiana tabacum for the development of a plant-based vaccine against fish vibriosis..Journal of biotechnology,38051-63. <br />
            [18]	Poobalane, (2007). Saravanane Aeromonas hydrophila vaccine development using immunoproteomics Dissertation/Thesis. <br />
            [19]	Poobalane S., Thompson K.D., Ard L., Verjan N., Han H.J., Jeney G., Hironoc I., Aokic T., Adamsa A.(2010). Production and efficacy of an Aeromonas hydrophila recombinant S-layer protein vaccine for fish Vaccine, 28, pp. 3540-3547<br />
            [20]	S.R. Thomas, T.J. Trust. (1995). Tyrosine phosphorylation of the tetragonal paracrystalline array of Aeromonas hydrophila: molecular cloning and high-level expression of the S-layer protein gene J Mol Biol, 245, pp. 568-581<br />
            [21]	何若昱,林福玉,高向东,等.(2021).信号肽在大肠杆菌分泌系统中的研究与应用进展[J].中国生物工程杂志,41(05):87-93. <br />
            [22]	[1]刘祥,李惠.(2013).大肠埃希菌外膜蛋白OmpA表达质粒构建和诱导条件优化[J].生物技术,23(04):14-19. <br />
            [23]	[1]陈梦仟,郭帅,孙朋洋,等.(2018).大肠杆菌基因工程菌诱导表达重组琼胶酶rAga0917的条件优化[J].基因组学与应用生物学,37(08):3434-3439. <br />
            [24]	Traore SM, Zhao B.(2011). A novel Gateway®-compatible binary vector allows direct selection of recombinant clones in Agrobacterium tumefaciens. Plant Methods.7;7(1):42. <br />
          </p>
        </section>

      </div>
    </div>
  );
}
