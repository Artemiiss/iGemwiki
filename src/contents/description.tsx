import { Link } from 'react-router-dom';
export function Description() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="content2">
        <p>
          The global population is predicted to exceed 10 billion by around 2050, raising serious concerns about meeting dietary needs. In this context, nutritious marine fish have gained attention.<br />
        </p>
        <img src="https://static.igem.wiki/teams/5432/results/description01.png" style={{ width: '20%', display: 'block', margin: '20px auto' }} />
        <div style={{ height: '20px' }}></div>
        <p>
          Currently, marine fish are widely farmed worldwide, with flatfish, known for their high nutritional value, becoming the second most farmed marine fish species. In China, the primary species in flatfish farming is turbot, with the scientific name <em>Scophthalmus maximus.</em>
        </p>
        <div style={{ height: '20px' }}></div>
        <p>
          Although the <em>Scophthalmus maximus</em> is an excellent and suitable fish for farming, our investigation reveals significant impacts from fish diseases in the industry. Viral, bacterial, and parasitic infections cause substantial fish mortality. Moreover, our preliminary research indicates that many fish may be in a suboptimal health state, potentially carrying pathogens without showing symptoms due to strong resistance or unsuitable conditions for pathogen survival. Importantly, in China, halibut farming occurs in two stages—larval and grow-out phases—where the transition between these stages can significantly weaken the fish's immune system. Additionally, the grow-out phase often coincides with temperatures that are ideal for pathogen growth, leading to sudden disease outbreaks.
        </p>
        <img src="https://static.igem.wiki/teams/5432/results/description02.png" style={{ maxWidth: '100%' }} />
        <div style={{ height: '20px' }}></div>
        <p>
          Fishermen typically address these outbreaks through three main approaches: eliminating all infected and potentially infected fish, using large quantities of drugs to control the disease, or applying specific drugs after testing. However, each method has limitations, and vaccination is considered the most effective preventive measure against disease.<br />
          Various vaccines for fish diseases have been developed, including those targeting <em>Vibrio anguillarum</em> and <em>Edwardsiella tarda</em>. However, most commercially available vaccines require high levels of expertise and management, leading many fishermen to avoid using them. We assembled a team to visit aquaculture facilities and observe the vaccine usage procedures of the Ministry of Agriculture and Rural Affairs of China. We noted that vaccine administration follows a specific sequence, with all vaccines given in succession over about two months. This inspired us to develop a "Trojan Horse" vaccine that can be implanted in the fish and release antigens in a timed sequence.
        </p>
        <div style={{ height: '20px' }}></div>

        {/* 插入视频的 iframe */}
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <iframe 
            title="ECUST: description03 (2024) [English]" 
            width="896" 
            height="504" 
            src="https://video.igem.org/videos/embed/00b73a32-8941-4242-a612-2ba40667ff31" 
            frameBorder="0" 
            allowFullScreen 
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          ></iframe>
        </div>

        <div style={{ height: '20px' }}></div>
        <p>
          We chose <em>Edwardsiella piscicida</em>, a bacterium commonly used in aquatic vaccine development, as our vaccine carrier due to its good colonization ability and lack of pathogenicity to humans. To ensure it loses virulence but retains its colonization capability, we used a trained large language model to predict the key effector proteins of its virulence system. We converted the protein properties into analyzable vectors and, through vector analysis, identified several effector proteins, including the previously reported eseBCD and newly discovered bolA. Using Tn-seq technology, we isolated the bolA::Tn mutant strain from the library, which has lost its virulence due to the transposon insertion disrupting the bolA gene.
        </p>
        <img src="https://static.igem.wiki/teams/5432/results/description04.png" style={{ width: '50%', display: 'block', margin: '20px auto' }} />
        <div style={{ height: '20px' }}></div>
        <p>
          Fish experiments confirmed that the bolA::Tn mutant strain has indeed lost its pathogenic ability.
        </p>
        <img src="https://static.igem.wiki/teams/5432/results/description05.png" style={{ width: '50%', display: 'block', margin: '20px auto' }} />
        <div style={{ height: '20px' }}></div>
        <p>
          With the vaccine chassis established, we aimed to design pathways for the bacterial functional execution. Our goal was to create a strain that could detect signals within the <em>Scophthalmus maximus</em> and activate and secrete antigens in response, with the ability to regulate or switch to the secretion of the next antigen based on these signals. Although we initially considered using vernalization and plant photoreceptors as design inspirations for membrane receptors, the high dependency on specialized trained prediction models led us to defer this approach due to time constraints.
        </p>
        <img src="https://static.igem.wiki/teams/5432/description061.png" style={{ width: '50%', display: 'block', margin: '20px auto' }} />
        <div style={{ height: '20px' }}></div>
        <p>
          We then designed a vaccine based on exogenous signaling molecules, named "Poros-vaccine" after the god of time, to emphasize its temporal aspect rather than automatic activation like the Trojan Horse. We selected non-accumulative, fish-safe signaling molecules such as arabinose, sucrose, and TMAO, which can be added to fish feed. To address the reduction of these inducers due to metabolic reactions, we incorporated a negative feedback mechanism for stable expression within a certain range. We introduced an exogenous signaling pathway and designed an antigen secretion pathway, which was confirmed to respond to inducers and express the corresponding proteins. Our tests showed no response from other pathway proteins to the inducers, validating its specificity. We also added a suicide pathway to ensure the bacteria do not leak after immunity is achieved. Our research on aquaculture facilities and private farms in China led to the design of an automated immunization and farming system to reduce human contact and reliance on specialists. Preclinical trials were conducted to ensure vaccine safety and efficacy, marking initial success in vaccine development.
        </p>
        <img src="https://static.igem.wiki/teams/5432/results/description07.png" style={{ width: '50%', display: 'block', margin: '20px auto' }} />
        <div style={{ height: '20px' }}></div>
        <p>
        <Link to="/design">see more</Link>
        </p>
        <div style={{ height: '20px' }}></div>
        <p>
          Based on our accumulated data, we analyzed the strengths and weaknesses of the vaccine using mathematical models. Our product is expected to generate significant revenue, especially given the large population of <em>Scophthalmus maximus</em>. However, issues such as lower-than-expected protection rates and survival rates in simulations were identified. We plan to optimize certain aspects before further clinical trials to enhance safety, efficacy, and minimize potential impacts.
        </p>
        <p>
        <Link to="/Math Model">see more</Link>
        </p>
        <div style={{ height: '20px' }}></div>
        <p>
          Additionally, concerns about live bacterial vaccines persisted among some individuals due to a lack of understanding of <em>E. piscicida</em> and live vaccines. We addressed this by educating the public at various levels: introducing specific immunity concepts to elementary students through stories, explaining scientific research and synthetic biology to high school students, discussing the importance of sequential immunization with undergraduates, and informing the general public about non-pathogenic pathogens and vaccines. Follow-up surveys showed increased acceptance of our product.<br />
          <Link to="/education">see more</Link>
        </p>
        <div style={{ height: '20px' }}></div>
        <p>
          We believe that with further project optimization and successful clinical trials, the future of smart agriculture may be imminent.
        </p>
      </div>
    </div>
  );
}
