import { ScrollModule } from '../components/ScrollModule';

const sections = [
  { title: 'Iteration1', id: 'Iteration1' },
  { title: 'Iteration2', id: 'Iteration2' },
  { title: 'Iteration3', id: 'Iteration3' },
  { title: 'Iteration4', id: 'Iteration4' },
  { title: 'Iteration5', id: 'Iteration5' },
  { title: 'Iteration6', id: 'Iteration6' },
  { title: 'Iteration7', id: 'Iteration7' },
];

export function Engineering() {
  return (
    <div className="content-container2">
      <ScrollModule sections={sections} />
      <div className="content" id="content">
        <section id="Iteration1">
          <h2>Iteration1</h2>
          <h3>Design</h3>
          <p>
            Generally speaking, any system or network that executes functions will be associated with several key nodes. In bioinformatics, we refer to these nodes as hubs. When these hubs are affected—such as being severed or inhibited—it can disrupt the functionality of the entire network. The secretion system of Edwardsiella piscicida operates similarly. Thus, we conceived the idea that instead of knocking out the type III and type VI secretion systems of Edwardsiella piscicida, we could potentially impair its virulence by targeting the hubs. Would this approach also achieve a reduction in virulence?
          </p>
          <h3>Build</h3>
          <p>
            The first challenge we encountered was how to identify the critical nodes. After careful consideration, we chose to utilize an AI large language model. We consulted with our team's instructor, who provided us with valuable insights regarding AI large language models, as well as a specific AI tool that could predict the interactions between proteins. Through our understanding of the principles of AI and the results obtained from the treatment of Edwardsiella piscicida, we were pleased to discover that the model offered predictions for several key effector proteins involved in virulence systems.<br />
            During the process of constructing the deletion mutant, we encountered difficulties in introducing foreign plasmids into Edwardsiella piscicida, and the approach of using conjugation followed by homologous recombination for knockout proved to be excessively time-consuming. In our search for alternatives, we discovered a Tn-seq library of Edwardsiella piscicida stored in the laboratory, from which we successfully screened and identified an insertion-deletion mutant. This mutant lacks a key protein predicted by the model, which has not been mentioned in previous reports. Our team found this particularly intriguing and decided to use this deletion mutant to validate the reliability of the AI predictions and the accuracy of our hypothesis.
          </p>
          <h3>Test</h3>
          <p>
            We first confirmed that the gene had indeed been inserted and deleted, with experimental results indicating that the expression cassette of the gene had been completely disrupted. Subsequently, we designed an experimental protocol for in vivo fish studies and submitted it to the ethics committee for approval. Once the experiment was permitted, we immersed the fish in seawater containing a specific concentration of the deletion mutant, based on previous experimental data. At this concentration, the wild-type Edwardsiella piscicida caused approximately 90% mortality in the flounder, and we included a control group treated with PBS buffer. The results showed that the mortality caused by the deletion mutant was not significantly different from that of the buffer control. Therefore, we verified that the deletion mutant indeed achieved the goal of reduced virulence.          </p>
          <h3>Learn</h3>
          <p>
            During this engineering cycle, we successfully developed a vaccine platform that meets the preliminary criteria for reduced virulence. We also confirmed that attenuation can be achieved through the inhibition or disruption of hubs. Additionally, our team had the opportunity to initially engage with and learn about the role and significance of AI in scientific research, gaining a deeper understanding of bioinformatics. In the subsequent engineering cycles, we implemented many experimental strategies and practices that we refer to as “dry experiment guiding wet experiment,” all of which are fundamentally rooted in the foundations established during this engineering cycle.
          </p>
        </section>

        <section id="Iteration2">
          <h2>Iteration2</h2>
          <h3>Design</h3>
          <p>
            In order to achieve the goal of manually controlling three pathways, we should first select three suitable inducible promoters. Since the inducer will be used in fish, its selection should be careful and the inducer cannot be harmful to fish. At the same time, it is best not to be the starting or intermediate product of normal fish metabolism, otherwise it will affect its induction effect, and the signal-to-noise ratio should be as high as possible. After extensive literature research, we decided to use arabinose as one of the inducers. Since fish are not easily exposed to arabinose, its signal-to-noise ratio is relatively high.<br />
            The arabinose-inducible promoter is a bidirectional promoter that initiates transcription of araC from one direction and the other structural gene from the other. AraC is a protein that binds to the arabinose-inducible promoter to repress transcription. Upon entry into the cell, arabinose binds to the araC protein, altering its conformation and thereby relieving the repression on the araBAD promoter, enabling transcription of downstream genes. We designed a plasmid containing arabinose-inducible promoter whose structural gene is araC and GFP gene.
          </p>
          <img src="https://static.igem.wiki/teams/5432/engineering01.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <h3>Build</h3>
          <p>
            We amplified the arabinose-inducible promoter and araC region from pCas, which was provided by Yiyang Gu, who also offered the GFP fragment. The gene fragment from pET28a was amplified from pET28a. Having amplified three gene fragments, we ligated them and transformed the constructed plasmid into Escherichia coli. The sequencing result is listed below.
          </p>
          <img src="https://static.igem.wiki/teams/5432/engineering02.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <h3>Test</h3>
          <p>
            Since the structural gene we used is GFPuv, which emits green light (509nm) under ultraviolet light (395nm), we first cultured the constructed strain to the logarithmic growth phase (OD value reaches 0.6-0.8). Then, we added 3/1000 volume of 1M sterile arabinose aqueous solution for induction. After 14 hours, we used an ultraviolet flashlight to illuminate it, hoping to see green light. However, no green light was produced. Therefore, we turned to the method of Western-blotting to detect the presence of GFP. The results are as follows: the strain expressed GFP under induction.
          </p>
          <img src="https://static.igem.wiki/teams/5432/engineering03.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <h3>Learn</h3>
          <p>
            Through this iteration, we discovered that the strength of some promoter may not be strong enough to produce enough GFPuv to form the green light, and therefore our previous validation method could not be used. This iteration provided the pattern of other inducible pathway validation followed.
          </p>
        </section>

        <section id="Iteration3">
          <h2>Iteration3</h2>
          <h3>Design</h3>
          <p>
            The second inducer we chose was TMAO. Although the signal-to-noise ratio may not be as high as arabinose, it is safe and comparably palatable for fish.<br />
            The full name of TMAO is Trimethylamine N-oxide, which can be used as a feed additive for fish. The pathway with TMAO as an inducer is a two-component system that includes two proteins: TorS and TorR. TorS is a histidine kinase that transmits the information of TMAO's presence to the TorR protein, which in turn binds to and activates the promoter region, initiating the transcription of structural genes. We designed a plasmid containing TMAO-inducible promoter whose structural gene is GFP gene.
          </p>
          <img src="https://static.igem.wiki/teams/5432/engineering04.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <h3>Build</h3>
          <p>
            We amplified the TMAO-inducible promoter region from Escherichia.coli. The gene fragment from pET28a was amplified from pET28a plus GFP provided by Yiyang Gu. Having amplified three gene fragments, we ligated them and transformed the constructed plasmid into Escherichia coli. The sequencing result is listed below.          </p>
          <img src="https://static.igem.wiki/teams/5432/engineering05.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <h3>Test</h3>
          <p>
            Refering to the last iteration's result, we used Western-blotting to detect the presence of GFP. The results are as follows: the strain expressed GFP under induction.           </p>
          <img src="https://static.igem.wiki/teams/5432/engineering06.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <h3>Learn</h3>
          <p>
            During this cycle, we have drawn lessons from the experience of the previous cycle and chose the most reliable test method. Until this iteration, the two of the three needed inducers had been chosen and validated.
          </p>
        </section>

        <section id="Iteration4">
          <h2>Iteration4</h2>
          <h3>Design</h3>
          <p>
            The full name of TMAO is Trimethylamine N-oxide, which can be used as a feed additive for fish. The pathway with TMAO as an inducer is a two-component system that includes two proteins: TorS and TorR. TorS is a histidine kinase that transmits the information of TMAO's presence to the TorR protein, which in turn binds to and activates the promoter region, initiating the transcription of structural genes. We designed a plasmid containing TMAO-inducible promoter whose structural gene is GFP gene.
          </p>
          <img src="https://static.igem.wiki/teams/5432/engineering07.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <h3>Build</h3>
          <p>
            We amplified the mannose-inducible promoter region from Edwardsiella piscicida. The gene fragment from pET28a was amplified from pET28a plus GFP provided by Yiyang Gu. Having amplified three gene fragments, we ligated them and transformed the constructed plasmid into Escherichia coli. The verification results of nucleic acid electrophoresis is listed below.           </p>
          <img src="https://static.igem.wiki/teams/5432/engineering08.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <h3>Test</h3>
          <p>
            Since the esrB promoter only existed in Edwardsiella piscicida, the gene cassetette should be transformed into E.piscicida. Through our effort, we failed to do so. Therefore, we decided to use the method of genome knock-in to integrate expression cassettes into the genome of E.piscicida, followed by further validation experiments (see iteration 7).          </p>

        </section>

        <section id="Iteration5">
          <h2>Iteration5</h2>
          <h3>Design</h3>
          <p>
            Besides arabinose, TMAO, and mannose, we also tried other inducible promoters that may not be that suitable, one of which is sucrose-inducible promoter.<br />
            Consulting the articles, we learned about the sacB promoter related to sucrose induction, which initiates transcription of sacB. Its expression level is 100 times higher in the presence of sucrose than in the absence of sucrose, and it is commonly used as a selection marker. In the plasmid library of our research group, we found suicide plasmids related to genome knock-in: pDMK and pDM4, both of which contain the fructan sucrose transferase gene, transcribed by the sacB promoter. Based on this, We designed a plasmid containing sucrose-inducible promoter whose structural gene is GFP gene.
          </p>
          <img src="https://static.igem.wiki/teams/5432/engineering09.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <h3>Build</h3>
          <p>
            Having amplified three gene fragments, we ligated them and transformed the constructed plasmid into Escherichia coli. The sequencing result is listed below.
          </p>
          <img src="https://static.igem.wiki/teams/5432/engineering10.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <h3>Test</h3>
          <p>
            Refering to the last iteration's result, we used Western-blotting to detect the presence of GFP. The results are as follows: the strain expressed GFP under induction.
          </p>

          <h3>Learn</h3>
          <p>
            During this cycle, we utilized the sacB promoter as an inducible promoter and incorporated it into the construction of a pathway.          </p>

        </section>

        <section id="Iteration6">
          <h2>Iteration6</h2>
          <h3>Design</h3>
          <p>
            To ensure the safety of vaccines, we plan to incorporate a suicide pathway into the host bacteria. For this purpose, we have conducted extensive literature reviews and consulted laboratory instructors, senior students, and postgraduates. In doing so, we came across a relatively overlooked gene known as ETAE_0051, also named enrR. This gene has the ability to compete with H-NS, the silencing factor of Edwardsiella piscicida ‘s secretion systems, and thereby enhancing the expression of type III and type VI secretion systems. Additionally, it possesses an understudied and underutilized function, which is to induce the expression of prophage genes on the genome, leading to bacterial lysis. We have learned that this gene exhibits this effect in both Escherichia coli and E.piscicida. Based on this, We designed a plasmid containing arabinose-inducible promoter whose structural gene is enrR and first designed to transform it into E.coli BL21.
          </p>
          <img src="https://static.igem.wiki/teams/5432/engineering12.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <p>
            To confirm that the death of the bacteria is not caused by excessive expression pressure, we decided to use the formerly constructed strain which contains the plasmid with arabinose-inducible promoter and GFP gene, which is longer than enrR, as control. The preliminary experiment plan is displayed.
          </p>
          <img src="https://static.igem.wiki/teams/5432/engineering13.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <p>
            We anticipate completing this part of the experiment by October.
          </p>

        </section>

        <section id="Iteration7">
          <h2>Iteration7</h2>
          <h3>Design</h3>
          <p>
            Following the successful verification of individual pathways, we aimed to combine each of these into a multi-pathway strain. We accomplished this by sequentially integrating the validated pathways into the genome using homologous recombination. Specifically, we targeted the neutral ETAE_0456 gene, which encodes rpsU, for genome editing. The R plasmid was constructed to facilitate the knock-in. Initially, we tested the process on Escherichia coli BL21 before applying it to Edwardsiella piscicida.
          </p>

          <h3>Build</h3>
          <p>
            Using homologous recombination, we constructed a plasmid capable of simultaneously knocking out neutral genes and integrating pre-validated pathways. For demonstration, we used the lac operator as a model. <br />
            Initially, we attempted to linearize pDM4 and pDMK using reverse PCR, but due to the long vector length, these attempts were unsuccessful. As an alternative, we linearized them by enzymatic digestion: pDM4 was cut with SacI and SaII, while pDMK was cut with XbaI. The linearization results are shown in figure
          </p>
          <img src="https://static.igem.wiki/teams/5432/engineering14.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <p>
            Next, we designed primers to amplify the upstream and downstream of ETAE_0456 from the genomes of E. coli BL21 and E. piscicida as templates. Similarly, primers were designed to amplify the lac operator from the previously constructed and the verified lac operator plasmid. The amplification results are also shown in figure
          </p>
          <img src="https://static.igem.wiki/teams/5432/engineering15.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <p>
            We then used homologous recombination to ligate the vector, upstream and downstream sequences, and the lac operator.
          </p>
          <img src="https://static.igem.wiki/teams/5432/engineering16.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <p>
            The reconstructed plasmid was transformed into E. coli BL21 for amplification and verification, as shown in figure           </p>
          <img src="https://static.igem.wiki/teams/5432/engineering17.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}



          <h3>Test</h3>
          <p>
            We expect to complete this part of iteration by October.
          </p>

          <h3>Learn</h3>
          <p>
            Up till now, we have learned that the plasmid pDMK is not suitable to be linearized by PCR, and enzymatic digestion is clearly a better choice. This can help us with future experiments.
          </p>
        </section>
      </div>
    </div>
  );

}
