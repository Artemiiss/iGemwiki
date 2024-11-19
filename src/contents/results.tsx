import { ScrollModule } from '../components/ScrollModule';

const sections = [
  { title: 'Chassis Bacteria Construction', id: 'Chassis Bacteria Construction' },
  { title: 'Single Pathway Validation', id: 'Single Pathway Validation' },
  { title: 'Single Pathway Quantification Experiment', id: 'Single Pathway Quantification Experiment' },
  { title: 'Genomic Knock-in', id: 'Genomic Knock-in' },
  { title: 'Antigen Excretion Validation', id: 'Antigen Excretion Validation' },
  { title: 'In Vivo Fish Experiments', id: 'In Vivo Fish Experiments' },
  { title: 'Experimental Outlook', id: 'Experimental Outlook' },
  { title: 'Reference', id: 'Reference' },
];

export function Results() {
  return (
    <div className="content-container2">
      <ScrollModule sections={sections} />
      <div className="content" id="content">
        <p>
          Poros-Vaccine is dedicated to creating a novel chronological and safe multivalent vaccine to avoid the problem of cytokine storm and expand the possibility of multivalent vaccine combinations. Also, the manual model enables precise starting time control of immunization, making the immunized fish better able to cope with seasonal diseases.<br />
          To achieve these purposes, our experiments involves mainly six parts: carrier bacteria construction, single pathway validation plus intensity quantification, genomic knock-in of the single pathway, antigen excretion validation, and in vivo fish experiment. The detailed results are listed below.
        </p>

        <section id="Chassis Bacteria Construction">
          <h2>Chassis Bacteria Construction: to construct chassis bacteria using artificial intelligence.</h2>
          <p>
            This figure presents the results of safety testing for the attenuated strain. We randomly divided the experimental fish into four groups, consisting of two groups receiving PBS and two groups inoculated with bolA::Tn, with 30 fish per group. We employed a wild-type bacterial concentration known to induce a mortality rate of approximately 90% in fish, administering it via immersion to immunize the experimental subjects. We monitored and recorded fish mortality over a 14-day period, revealing no significant differences in mortality rates between the experimental and control groups.
          </p>
          <img src="https://static.igem.wiki/teams/5432/results/results29.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}
          <img src="https://static.igem.wiki/teams/5432/results/results30.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

        </section>

        <section id="Single Pathway Validation">
          <h2>Single Pathway Validation: to verify the functionality or activity of an inducible promoter or a two-component-system (TCS).</h2>
          <p>
            As mentioned in Design, We have decided to use arabinose, mannose and TMAO as inducers for the three pathways to construct in Edwardsiella piscicida. We first constructed certain pathways in Escherichia coli to test if the plasmids can express report protein. The results are listed below.
          </p>
          <p>
            1.To use arabinose as inducer: The arabinose-inducible promoter is a bidirectional promoter that initiates transcription of araC from one direction and the other structural gene from the other. AraC is a protein that binds to the arabinose-inducible promoter to repress transcription. Upon entry into the cell, arabinose binds to the araC protein, altering its conformation and thereby relieving the repression on the araBAD promoter, enabling transcription of downstream genes.
          </p>
          <img src="https://static.igem.wiki/teams/5432/results/results02.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <p>
            We designed a plasmid containing arabinose-inducible promoter whose structural gene is araC and GFP gene.
          </p>
          <img src="https://static.igem.wiki/teams/5432/results/results01.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <p>
            Having amplified three gene fragments, we ligated them and transformed the constructed plasmid into Escherichia coli. The sequencing result is listed below.
          </p>
          <img src="https://static.igem.wiki/teams/5432/results/results16.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <p>
            The western-blotting result is displayed below.
          </p>
          <img src="https://static.igem.wiki/teams/5432/results/results03.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <p>
            2.To use TMAO as inducer: The full name of TMAO is Trimethylamine N-oxide, which can be used as a feed additive for fish. The pathway with TMAO as an inducer is a two-component system that includes two proteins: TorS and TorR. TorS is a histidine kinase that transmits the information of TMAO's presence to the TorR protein, which in turn binds to and activates the promoter region, initiating the transcription of structural genes.
          </p>
          <img src="https://static.igem.wiki/teams/5432/results/results05.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <p>
            We designed a plasmid containing TMAO-inducible promoter whose structural gene is GFP gene.
          </p>
          <img src="https://static.igem.wiki/teams/5432/results/results04.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <p>
            Having amplified three gene fragments, we ligated them and transformed the constructed plasmid into Escherichia coli. The sequencing result is listed below.
          </p>
          <img src="https://static.igem.wiki/teams/5432/results/results17.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <p>
            The western-blotting result is displayed below.
          </p>
          <img src="https://static.igem.wiki/teams/5432/results/results06.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <p>
            3.To use IPTG as inducer: In the absence of IPTG, the LacI repressor protein binds to the operator region of the lac operon, preventing transcription of the target genes. Upon addition of IPTG, it mimics lactose and binds to the LacI repressor, causing a conformational change that dissociates the repressor from the operator. This allows RNA polymerase to access the promoter region and initiate transcription of the target genes. We use a plasmid containing IPTG-inducible promoter whose structural gene is GFP gene.
          </p>
          <img src="https://static.igem.wiki/teams/5432/results/results07.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <p>
            The promoter is too strong that there is no need for western-blotting. We used ultraviolet light on the culture medium and a distinct green light was shown.
          </p>
          <img src="https://static.igem.wiki/teams/5432/results/results08.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <p>
          The gene cassette is provided by Yiyang Gu. The sequencing result is listed below.
          </p>
          <img src="https://static.igem.wiki/teams/5432/results/results18.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <p>
            4.To use sucrose as inducer: Consulting the articles, we learned about the sacB promoter related to sucrose induction, which initiates transcription of sacB. Its expression level is 100 times higher in the presence of sucrose than in the absence of sucrose, and it is commonly used as a selection marker. In the plasmid library of our research group, we found suicide plasmids related to genome knock-in: pDMK and pDM4, both of which contain the fructan sucrose transferase gene, transcribed by the sacB promoter. Based on this, We designed a plasmid containing sucrose-inducible promoter whose structural gene is GFP gene.
          </p>
          <img src="https://static.igem.wiki/teams/5432/results/results09.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <p>
            Having amplified three gene fragments, we ligated them and transformed the constructed plasmid into Escherichia coli. The sequencing result is listed below.
          </p>
          <img src="https://static.igem.wiki/teams/5432/results/results19.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <p>
            The western-blotting result is displayed below.
          </p>
          <img src="https://static.igem.wiki/teams/5432/results/results10.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <p>
            5.To use mannose as inducer: After entering the bacterial cell, mannose is metabolized into mannose-6-phosphate, which binds with EvrA protein to form a complex. This complex then binds to the esrB promoter, initiating the transcription of downstream genes. The EvrA protein alone cannot bind to the esrB promoter.
          </p>
          <img src="https://static.igem.wiki/teams/5432/results/results12.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <p>
            We constructed a plasmid containing mannose-inducible promoter whose structural gene is GFP gene.
          </p>
          <img src="https://static.igem.wiki/teams/5432/results/results11.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <p>
            Having amplified three gene fragments, we ligated them and transformed the constructed plasmid into Escherichia coli. The verification results of nucleic acid electrophoresis is listed below.
          </p>
          <img src="https://static.igem.wiki/teams/5432/results/results20.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}
          <p>
            However, using BLAST, we found out that E.coli do not have this pathway naturally, so we decided to directly transform the plasmid into E.piscicida to do the verification.<br />
            However, all the attempts to transform the plasmid into Edwardsiella piscicida were failed. Therefore, the result of the single-pathway validation only proves that the first four plasmid constructions are feasible and can be expressed in E. coli and the verification in E.piscicida remains to be solved. We decided to use the method of genome knock-in to integrate expression cassettes into the genome of E.piscicida, followed by further validation experiments (see genomic knock-in).
          </p>
        </section>

        <section id="Single Pathway Quantification Experiment">
          <h2>Single Pathway Quantification Experiment: to quantitatively measure the activity or expression level of a single biological pathway.</h2>
          <h3>1. Strain recovery</h3>
          <p>
            The E. coli bacteria solution or glycerin preservation solution was inoculated into LB medium for activation.
          </p>
          <h3>2. Inductor induction</h3>
          <p>
            Then 50μl of the activated bacteria solution was transferred into 5mlLB medium (1% inoculation volume) to OD600 of about 0.6-0.8, centrifuged at 8,000 g for 3min, collected the bacteria, and washed twice with sterile water. The bacteria solution were inoculated in LB medium containing corresponding inducers (IPTG, saccharose, arabinose, TMAO) and cultured using 24-well plates or 1.5mleppendorf tubes. The OD600 value was about 0.6.
          </p>
          <h3>3. Fluorescence quantitative detection</h3>
          <p>
            The samples were taken at 14h, washed twice with deionized water, and the bacteria were collected as samples to be tested. During the test, deionized water was added to the samples to OD600 of about 10.0, and the samples were fully shaken and shaken. 30μl of bacterial liquid was added to the 96-well plate and 270μl of deionized water was added to make the total volume 300μl. A multi-channel pipette was used to separate 100μl into a black 96-well plate and a transparent 96-well plate to measure the fluorescence value （reporter gene:GFP-uv: The excitation light length is 395 and the absorption light length is 509）and OD600 value of the sample, respectively.
          </p>
          <h3>4. results</h3>
          <h4>①Lactose pathway</h4>
          <p>
            0.068~0.1mM IPTG has induced peaks.
          </p>
          <img src="https://static.igem.wiki/teams/5432/results/results12.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <h4>②arabinose pathway</h4>
          <p>
            When the concentration of arabinose was 0.1-9mM, the induced expression intensity nearly did not change. 0.5-0.9mM has a induced peaks.
          </p>
          <img src="https://static.igem.wiki/teams/5432/results/results13.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <h4>③saccharose pathway</h4>
          <p>
            When the concentration of saccharose was 0.1-9mM, the induced expression intensity nearly did not change.
          </p>
          <img src="https://static.igem.wiki/teams/5432/results/results14.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <h4>④TMAO pathway</h4>
          <p>
            When the concentration of TMAO was 0.1-9mm, the induced expression intensity nearly did not change.0.9-1mM has a Tiny induced peaks.
          </p>
          <img src="https://static.igem.wiki/teams/5432/results/results15.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}


        </section>

        <section id="Genomic Knock-in">
          <h2>Genomic Knock-in: to introduce three designed pathways at a precise location within the genome of the chassis bacteria.</h2>
          <p>
            Following the successful verification of individual pathways, we aimed to combine each of these into a multi-pathway strain. We accomplished this by sequentially integrating the validated pathways into the genome using homologous recombination. Specifically, we targeted the neutral ETAE_0456 gene, which encodes rpsU, for genome editing. The R plasmid was constructed to facilitate the knock-in. Initially, we tested the process on Escherichia coli BL21 before applying it to Edwardsiella piscicida. The results confirmed successful plasmid construction.
          </p>
          <h3>Detail:</h3>
          <p>
            Using homologous recombination, we constructed a plasmid capable of simultaneously knocking out neutral genes and integrating pre-validated pathways. For demonstration, we used the lac operator as a model. Initially, we attempted to linearize pDM4 and pDMK using reverse PCR, but due to the long vector length, these attempts were unsuccessful. As an alternative, we linearized them by enzymatic digestion: pDM4 was cut with SacI and SalI, while pDMK was cut with XbaI. The linearization results are shown in figure
          </p>
          <img src="https://static.igem.wiki/teams/5432/results/results21.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}
          <p>
            Next, we designed primers to amplify the upstream and downstream of ETAE_0456 from the genomes of E. coli BL21 and E. piscicida as templates. Similarly, primers were designed to amplify the lac operator from the previously constructed and the verified lac operator plasmid. The amplification results are also shown in figure.
          </p>
          <img src="https://static.igem.wiki/teams/5432/results/results22.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}
          <p>
            We then used homologous recombination to ligate the vector, upstream and downstream sequences, and the lac operator.
          </p>
          <img src="https://static.igem.wiki/teams/5432/results/results23.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}
          <p>
            The reconstructed plasmid was transformed into E. coli BL21 for amplification and verification, as shown in figure
          </p>
          <img src="https://static.igem.wiki/teams/5432/results/results4.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}



        </section>

        <section id="Antigen Excretion Validation">
          <h2>Antigen Excretion Validation: to validate the ability of the chassis bacteria to excrete antigens.</h2>
          <h3>Experimental Objective</h3>
          <p>
            This experiment is designed to verify the feasibility of Poros-Vaccine by focusing on the expression and secretion of the antigen, thereby enhancing the overall integrity of the experiment and ensuring that the antigen is successfully expressed and secreted in the target bacteria.
          </p>

          <h3>1. Plasmid Construction</h3>
          <p>
            We selected two common disease-related antigens in turbot, OmpK and AshA, as candidate antigens. To optimize the expression and secretion of these antigens, signal peptides were added to the N-terminus of the antigen sequences, and His-tags were appended to the C-terminus to facilitate subsequent purification and detection. The modified OmpK and AshA sequences were inserted into the multiple cloning site (MCS) of the expression vector pET28a, constructing the engineered bacterial strains. The plasmid synthesis and sequence verification were outsourced to a commercial company.
          </p>
          <img src="https://static.igem.wiki/teams/5432/results/results25.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}
          <p>
            Snapgene sketch of the plasmid designed for OmpK excretion validation in E.coli
          </p>
          <img src="https://static.igem.wiki/teams/5432/results/results26.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}
          <p>
            Snapgene sketch of the plasmid designed for AshA excretion validation in E.coli
          </p>
          <img src="https://static.igem.wiki/teams/5432/results/results27.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}
          <p>
            Snapgene sketch of the plasmid designed for OmpK excretion validation in E.piscicida
          </p>
          <img src="https://static.igem.wiki/teams/5432/results/results28.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}
          <p>
            Snapgene sketch of the plasmid designed for AshA excretion validation in E.piscicida
          </p>

          <h3>2. Plasmid Transformation</h3>
          <p>
            To verify the secretion of the antigens, the constructed Pet-28a-OmpK and Pet-28a-AshA plasmids were transformed into two different host strains, Escherichia coli and Edwardsiella piscicida, by calcium chloride-mediated transformation and electroporation, respectively. These strains represent common laboratory strains and pathogenic models.\
          </p>
          <h3>3. Verification of Transformants</h3>
          <p>
            The transformants were selected on antibiotic-containing selective media to identify positive clones. The selected transformants were then subjected to PCR amplification to verify the presence of the target antigen genes, OmpK or AshA, ensuring successful plasmid insertion into the target strains.
          </p>
          <h3>4. Fermentation and Antigen Verification</h3>
          <p>
            Single colonies were picked and cultured to OD600 = 0.6-0.8, at which point the bacteria were in the logarithmic growth phase. IPTG was then added to induce antigen expression. After harvesting the bacterial culture, both the supernatant and cell lysate were extracted and analyzed via SDS-PAGE and Western Blotting to verify whether the antigens were successfully secreted extracellularly. The presence of the His-tag on SDS-PAGE will provide preliminary confirmation of the antigen, while Western Blotting will further verify antigen secretion.
          </p>
          <h3>Conclusion</h3>
          <p>
            Through this series of experiments, we aim to validate the secretion efficiency of the antigens in the Poros-Vaccine, thereby providing scientific data for the development of fish vaccines. Successful antigen expression and secretion will offer critical experimental evidence supporting the application of Poros-Vaccine.
          </p>

        </section>

        <section id="In Vivo Fish Experiments">
          <h2>In Vivo Fish Experiments: experiments performed on live fish.</h2>
          <p>
            We immersed the experimental fish in the selected bolA::Tn strain and assessed the presence of bolA::Tn in the gills, intestines, liver, spleen, and peritoneal fluid on days 0, 1, 3, 7, and 14. The organs or extracted fluids were homogenized and diluted before being plated onto the differentiation medium DHL for Edwardsiella piscicida. We recorded the presence of characteristic black colonies. Additionally, we corroborated these findings using PCR on the diluted samples. The consistent results from both methods were compiled and summarized in a table.
          </p>
          <img src="https://static.igem.wiki/teams/5432/results/results31.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

        </section>

        <section id="Experimental Outlook">
          <h2>Experimental Outlook</h2>
          <p>
            To stimulate the activation of the subsequent pathway after the previous pathway reaches a certain level of expression, we have conducted preliminary automated design. Through literature retrieval, we have understood the working principle of the bacterial two-component system (TCS). TCS contains two proteins: The histidine kinase(HK) and the response regulator(RR). Our plan is to achieve the purpose of sequential expression of the previous and subsequent pathways by protein modification of HK to modify its inducer-binding site, so that the latter pathway responds to the antibodies generated by the immune system of the previous pathway. We'll knock the gene cassettes into the E.piscicida genome achieve our goal.
          </p>
        </section>

        <section id="Reference">
          <h2>Reference</h2>
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
