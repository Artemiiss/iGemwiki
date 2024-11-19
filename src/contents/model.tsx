
import { MathJax, MathJaxContext } from 'better-react-mathjax';
{/*
const sections = [
  { title: 'Inducer Response Peak Model', id: 'inducer-response' },
  { title: 'Antigen Immunology Model', id: 'antigen-immunology' },
  { title: 'Fish Farming Economic Benefit Model', id: 'economic' },
];
*/}
export function model() {

  return (
    <MathJaxContext>
      <div className="content-container2">
        {/* <ScrollModule sections={sections} /> */}
        <div className="content">
          <section id="inducer-response">

            <h2>Inducer Response Peak Model</h2>

            <h3>1. Introduction</h3>
            <p>
              In the context of pathway validation, developing a robust mathematical model is paramount. Such a model
              not
              only predicts pathway behavior under varying conditions but also offers a structured way to simulate
              outcomes, thus driving the efficiency of experimental design. By integrating fluorescence protein
              reactions
              as measurable indicators, this model allows for the prediction of optimal inducer concentrations, guiding
              researchers toward maximizing pathway activation. Ultimately, the model serves as a critical tool for
              optimizing both experimental processes and biological insights, ensuring more informed decisions in
              pathway
              modulation.
            </p>

            <h3>2. Model Assumptions</h3>
            <p>
              <strong>1. Biphasic Behavior:</strong> The biological response follows a biphasic nature with initial
              activation and subsequent inhibition as concentration increases.<br/>
              <strong>2. Additivity of Multiple Effects:</strong> For complex systems, the model assumes that multiple
              biphasic effects (representing different biological processes or sub-pathways) can be superimposed.<br/>
              <strong>3. Parameter Estimation:</strong> Assumptions regarding parameters such as <strong>V<sub>max</sub></strong>,
              <strong>K<sub>d</sub></strong>, and Hill coefficients are made to describe the intensity and threshold of
              activation
              and inhibition.<br/>
              The assumptions here reflect common biological behaviors, particularly in gene regulation pathways where a
              biphasic response is typical. By framing the model around this well-established pattern, it efficiently
              predicts how different inducer concentrations impact pathway activity. Though parameters such as
              V<sub>max</sub> and K<sub>d</sub>
              are hypothetical, they align with known biological ranges, providing a reasonable basis for experimental
              planning and optimization.
            </p>

            <h3>3. Model Principles</h3>
            <p>
              The Biphasic Model Structure serves as a fundamental framework for capturing the dual nature of biological
              pathway responses—activation and inhibition—when exposed to varying inducer concentrations.
              Mathematically,
              this model is represented by two key components:<br/>
              <strong>1. Activation phase:</strong><br/>
              <MathJax>
                {'$$ \\text{activation} = \\frac{V_{\\text{max1}} \\cdot x^{n_1}}{K_{\\text{d1}}^{n_1} + x^{n_1}} $$'}
              </MathJax><br/>
              where the pathway activity increases with inducer concentration.<br/>
              <strong>2. Inhibition phase:</strong><br/>
              <MathJax>
                {'$$ \\text{inhibition} = \\frac{V_{\\text{max2}} \\cdot x^{n_2}}{K_{\\text{d2}}^{n_2} + x^{n_2}} $$'}
              </MathJax><br/>
              where activity decreases after reaching a peak.<br/>
              These two phases are combined into a total system response:<br/>
              <MathJax>
                {'$$ \\text{Response} = \\frac{V_{\\text{max1}} \\cdot x^{n_1}}{K_{\\text{d1}}^{n_1} + x^{n_1}} - \\frac{V_{\\text{max2}} \\cdot x^{n_2}}{K_{\\text{d2}}^{n_2} + x^{n_2}} $$'}
              </MathJax>
              Here, <strong>V<sub>max1</sub></strong> and <strong>V<sub>max2</sub></strong> represent the maximum
              activation and inhibition
              rates, <strong>K<sub>d1</sub></strong> and <strong>K<sub>d2</sub></strong> are dissociation constants,
              and <strong>n<sub>1</sub></strong> and <strong>n<sub>2</sub></strong> are Hill coefficients
              that describe the steepness of the activation and inhibition curves. This flexible mathematical model
              allows
              us to simulate how different biological systems behave under specific conditions by adjusting these six
              parameters.<br/>
              For systems with multiple pathways or response phases, a single biphasic model may not suffice. In these
              cases, the model is extended to handle Multi-Peak Detection. This involves summing several biphasic
              models, each defined by a unique set of parameters. The total response is given by:<br/>
              <MathJax>
                {'$$ \\text{TotalResponse} = \\sum_{i=1}^{N} \\left( \\frac{V_{\\text{max1i}} \\cdot x^{n_{1i}}}{K_{\\text{d1i}}^{n_{1i}} + x^{n_{1i}}} - \\frac{V_{\\text{max2i}} \\cdot x^{n_{2i}}}{K_{\\text{d2i}}^{n_{2i}} + x^{n_{2i}}} \\right) $$'}
              </MathJax><br/>
              where <strong>N</strong> represents the number of peaks. This extension allows the model to capture
              complex
              biological behaviors where multiple activation and inhibition cycles occur in response to varying inducer
              concentrations.<br/>
              In the Optimization and Fitting phase, the model parameters are adjusted iteratively to minimize the error
              between experimental data and the model’s predictions. Tools such as `curve_fit` from the `scipy` library
              are used to perform this fitting, starting with initial guesses based on the observed data. The final
              fitted model is validated by ensuring consistency between the theoretical predictions and the actual data,
              particularly around critical points like detected peaks.
            </p>

            <h3>4. Results</h3>
            <p>
              We applied the multi-biphasic model to fit the relationship between fluorescence protein concentration and
              inducer concentration. The model successfully captured the multiple peaks observed in the experimental
              data,
              reflecting both activation and inhibition phases. Compared to other models like exponential, logarithmic,
              and sigmoid fits, the multi-biphasic model showed a higher accuracy and better fit to the complex
              biological
              reactions.<br/>
              This fitting approach provides valuable insights for experimental design, helping to identify key inducer
              concentration ranges for further investigation of activation and inhibition mechanisms. Additionally, the
              model aids in optimizing experimental conditions, improving data reliability and reproducibility in future
              experiments.
            </p>

            <img src="https://static.igem.wiki/teams/5432/mathmodel04.png" style={{maxWidth: '100%'}}/>
            <div style={{height: '20px'}}></div>

            <img src="https://static.igem.wiki/teams/5432/mathmodel05.png" style={{maxWidth: '100%'}}/>
            <div style={{height: '20px'}}></div>

            <img src="https://static.igem.wiki/teams/5432/mathmodel06.png" style={{maxWidth: '100%'}}/>
            <div style={{height: '20px'}}></div>

            <h3>5. Limitations and Prospects</h3>
            <p>
              This model successfully simulated the behavior of biological channels under different concentrations of
              inducers by assuming biphasic response, and provided important references for optimizing experimental
              design. However, the limitation of the model is that the parameters used (such as V<sub>max</sub>,
              K<sub>d</sub>, and Hill
              coefficient) are all assumed values and have not been fully validated based on experimental data. This may
              lead to some deviation in predicting the concentration of inducers in practical applications. However,
              despite these parameters being assumed values, the model still provides a reliable framework for the
              design
              of fully automated vaccines or other biological pathways. Through this model, experimenters can predict
              the
              effect of different inducer concentrations on channel activity in the early stages and optimize
              experimental
              conditions. In the future, models can be calibrated with more experimental data to improve the accuracy of
              predictions and extended to more complex multi-path systems, providing detailed experimental guidance for
              optimizing more biological processes.
            </p>
          </section>

          <section id="antigen-immunology">
            <h2>Antigen Immunology Model</h2>

            <h3>1. Introduction</h3>
            <p>
              This model focuses on simulating the immune response to multiple antigens using mathematical modeling and
              ordinary differential equations (ODEs). The model evaluates the dynamics of antigen expression and immune
              responses over time, considering the interaction between antigen load and immune system activation. By
              developing a framework that simulates the immune response to different antigens introduced sequentially,
              we
              aim to provide insights into the timing and strength of immune reactions under various conditions. This
              model can assist in optimizing vaccine strategies by identifying the most effective antigen presentation
              schedules for enhanced immune protection.
            </p>

            <h3>2. Summary</h3>
            <p>
              The immune response model consists of three primary phases corresponding to the introduction of three
              antigens (A, B, and C). The ODEs simulate antigen concentrations and their respective immune responses,
              accounting for antigen expression rates, degradation, and immune reaction decay. The simulation determines
              the optimal timing for introducing subsequent antigens based on immune system thresholds. This helps to
              fine-tune vaccine schedules and improve the overall immune response.<br/>
              <strong>Phase 1</strong>: Models the response to antigen A, where the system tracks antigen concentration
              and immune activation. A threshold immune response triggers the introduction of antigen B.<br/>
              <strong>Phase 2</strong>: Antigen B is introduced after the immune response to antigen A reaches its peak
              and declines. The model continues to track immune activation for antigen B, eventually determining when
              to introduce antigen C.<br/>
              <strong>Phase 3</strong>: The final phase introduces antigen C, completing the simulation of sequential
              antigen exposure and immune response.
            </p>

            <h3>3. Model Assumptions</h3>
            <p>
              <strong>1. Antigen Presentation:</strong> Each antigen is presented for 5 days, after which its expression
              ceases.<br/>
              <strong>2. Immune Response:</strong> Follows a sigmoidal curve with activation, peak, and decline
              phases.<br/>
              <strong>3. Threshold-Driven Antigen Introduction:</strong> The timing for subsequent antigen introductions
              is determined by immune system thresholds.<br/>
              <strong>4. Constant Parameters:</strong> Antigen degradation and immune decay rates are constant.<br/>
              These assumptions are based on typical immune response patterns, making the model a useful tool for
              exploring the timing of antigen introduction and its impact on immunity. While it simplifies the full
              complexity of immune interactions, this approach offers a structured way to optimize vaccine schedules,
              allowing for targeted improvements in immune response dynamics.
            </p>

            <h3>4. Model Principles</h3>
            <p>
              The model uses a system of ODEs to represent the interaction between antigen concentrations and immune
              responses:<br/>
              <strong>Antigen Expression</strong>: Each antigen follows a dynamic where its concentration increases
              during its expression phase and decreases once its production stops.<br/>
              <strong>Immune Activation</strong>: The immune response to each antigen is proportional to its
              concentration
              but is limited by a decay factor, representing the natural decline of immune memory over time.<br/>
              Mathematically, the immune response to antigen A can be expressed as:<br/>
              <MathJax>
                {'$$ \\frac{dX}{dt} = k_X \\cdot f(X) - d_X \\cdot X $$'}
              </MathJax><br/>
              <MathJax>
                {'$$ \\frac{dI_X}{dt} = \\alpha_X \\cdot X - \\gamma_X \\cdot I_X $$'}
              </MathJax><br/>
              Immune activation and decay are modeled for each antigen, with similar equations governing antigens B and
              C.
            </p>

            <h3>5. Results</h3>
            <p>
              The simulation results demonstrate the sequential immune responses to antigens A, B, and C. The timing of
              antigen B’s introduction is critical for maximizing the overall immune response, and introducing it too
              early or too late may reduce efficacy. This model successfully captures the complex interplay between
              antigen presentation and immune response, allowing for optimization of vaccine schedules based on immune
              system behavior.
            </p>

            <img src="https://static.igem.wiki/teams/5432/mathmodel07.png" style={{maxWidth: '100%'}}/>
            <div style={{height: '20px'}}></div>


            <img src="https://static.igem.wiki/teams/5432/mathmodel08.png" style={{maxWidth: '100%'}}/>
            <div style={{height: '20px'}}></div>


            <h3>6. Limitations and Prospects</h3>
            <p>
              This model simulates the immune response triggered by antigens through ODEs and successfully predicts the
              activation effects of multiple antigens on the immune system at different time sequences. The model
              demonstrates how the timing of antigen presentation affects the intensity and duration of immune
              responses, providing important references. However, the limitation of this model is that it simplifies the
              complexity of the immune system, especially by not fully considering immune memory, interactions between
              different antigens, and individual immune differences. These factors are crucial in the development of
              vaccines in reality. In addition, the immune response parameters used in the model are based on
              theoretical
              settings and may not fully reflect the immune dynamics in actual biological systems.<br/>
              Looking ahead, this model can improve prediction accuracy by combining more experimental data and more
              complex immune mechanisms, especially in optimizing immune strategies under multi antigen vaccination.
              Further improvements can include simulating differences in immune responses among different individuals,
              introducing immune memory effects, etc., to better guide vaccine design. In addition, this model can also
              be used to explore the effects of immune enhancers, thereby optimizing the timing and dosage of antigen
              presentation and providing more practical guidance for vaccine development.
            </p>
          </section>


          <section id="economic">
            <h2>Fish Farming Economic Benefit Model</h2>
            <h3>1. Introduction</h3>
            <p>
              In the development of new vaccines, evaluating the economic benefits is crucial. The aquaculture industry
              typically operates with narrow profit margins, so factors such as fish mortality, disease outbreaks, and
              operational costs (like feed and vaccines) directly impact overall profitability. In addition to the
              biological efficacy of the vaccine, its economic impact is equally important.<br/>
              This model simulates different vaccination strategies to help assess the effect of vaccines on fish survival
              rates and economic returns. It enables farmers to understand how factors like vaccine effectiveness,
              coverage, and price influence total costs and profits, while also providing a comparison with scenarios
              where no vaccines are used, giving a clearer prediction of potential economic benefits.<br/>
              For aquaculture farmers and vaccine developers, this model aids in making informed decisions about whether
              to use or develop new vaccines, ensuring that the vaccine not only protects the fish but also delivers
              economic gains.
            </p>
            <h3>2. Summary</h3>
            <p>
              This model consists of two primary phases.<br/>
              In the first phase, Monte Carlo simulation and differential evolution algorithm are used to estimate the
              overall survival rate and disease conditions of the current fish farm, providing a solid foundation for the
              data requirements in the second phase. The simulation focuses on severe, mild, and common diseases, building
              a fish fry survival model based on actual fish farm disease data. The differential evolution algorithm
              optimizes the occurrence probabilities of various diseases, incorporating data from HP group research and
              field visits to simulate fish farm operations.<br/>
              In the second phase, the POROS Vaccine is introduced to simulate its effectiveness in disease control. By
              applying Monte Carlo simulation, the model assumes vaccine intervention and quantifies the vaccine’s
              efficacy, leading to the conclusion that economic benefits are significantly enhanced with the support of
              the POROS Vaccine. The introduction of the vaccine not only reduces the probability of disease occurrence
              but also offers a cost-effective solution for future fish farming, promoting the sustainable development of
              the aquaculture industry.
            </p>
            <h3>3. Model Assumptions</h3>
            <p>
              <strong>3.1. Vaccine Efficacy</strong>: The vaccine's protective efficacy against each disease is constant
              and does not vary with time, environmental factors, or individual differences among the fish. The vaccine
              provides uniform protection for all fry, with no variations in individual immune responses.<br/>
              <strong>3.2. Vaccine Characteristics</strong>: The vaccine works by reducing the probability of disease
              occurrence, without providing treatment for existing diseases. Its effects begin immediately upon
              administration and remain constant throughout the simulation period. <br/>
              <strong>3.3. Vaccine Side Effects</strong>: The vaccine does not cause any negative effects or side effects
              in the fry.<br/>
              <strong>3.4. Uniform Farming Environment</strong>: The environmental conditions in which the fry live, such
              as water quality and temperature, remain consistent throughout the simulation and do not influence the
              occurrence of disease or the vaccine's efficacy. Furthermore, aside from diseases, the natural mortality
              rate of the fry is negligible, meaning all fry deaths are attributed to disease.<br/>
              <strong>3.5. Complete Randomness in Monte Carlo Simulation</strong>: All random sampling strictly follows
              the set probabilities, fully representing real-world stochastic processes.<br/>
              These assumptions provide a simplified framework to focus on the economic impact of vaccination. By assuming
              constant vaccine efficacy and negligible natural mortality, the model isolates the vaccine’s effects on fish
              survival and profitability, ensuring a clear analysis without environmental or biological complexities. This
              approach offers practical insights into the economic benefits of vaccination strategies, especially in the
              early stages of decision-making.
            </p>
            <h3>4. Fish Mortality Monte Carlo Simulation Model</h3>
            <p>
              <strong>4.1. Setting Up the Scenario</strong>: We start with 10,000 fish fry at the beginning of the
              simulation. Over the course of 18 months, these fish will be exposed to different diseases, and each disease
              can affect their survival. The simulation runs a total of 1,000 times, allowing us to average the results
              and understand the overall trend.<br/>
              <strong>4.2. Diseases and Their Impact</strong>: We simulate three types of diseases, each with its own
              potential loss range:
              • Severe Disease: This is the most dangerous, with a loss rate between 50% and 90% of the infected
              population.
              • Mild Disease: This is less harmful but still significant, causing losses between 3% and 8%.
              • Common Disease: This one falls somewhere in between, leading to losses ranging from 8% to 10%.
              <br/>
              <strong>4.3. Simulation Dynamics:</strong><br/>
              At each month <strong>t</strong>, we simulate whether a disease occurs using its respective
              probability <strong>p_i</strong>. If a disease occurs, the number of fish affected is calculated as:<br/>
              <MathJax>
                {'$$ \\Delta N = N_t \\times p_i \\times d_i $$'}
              </MathJax><br/>
              where <strong>N_t</strong> is the fish population at month <strong>t</strong>, <strong>p_i</strong> is
              the probability of the disease occurring, and <strong>d_i</strong> is the loss rate.<br/>
              For each month, the total loss is calculated across all diseases, and the fish population is updated:<br/>
              <MathJax>
                {'$$ N_{t+1} = N_t - \\sum_i \\Delta N_i $$'}
              </MathJax><br/>
              This process is repeated for 18 months, and at the end of the simulation, the survival rate is given
              by:<br/>
              <MathJax>
                {'$$ SurvivalRate = \\frac{N_{18}}{N} \\times 100 $$'}
              </MathJax><br/>
              <strong>4.4. Adjusting the Disease Probabilities:</strong><br/>
              Our goal is to adjust the disease probabilities <strong>p_Severe</strong>, <strong>p_Mild</strong>,
              <strong>p_Common</strong> to achieve a target survival rate of 75%. This can be formalized as an
              optimization problem where we minimize the difference between the simulated survival rate <strong>S_sim</strong> and the
              target <strong>S_target = 75%</strong>:<br/>
              <MathJax>
                {'$$ \\text{Minimize}\\ |S_{\\text{sim}} - S_{\\text{target}}| $$'}
              </MathJax><br/>
              <strong>4.5. Optimization with Differential Evolution</strong>:<br/>
              We use an optimization algorithm called differential evolution to explore different probability values.
              This algorithm works by continuously adjusting the disease probabilities within given ranges to find the
              optimal probabilities that minimize the objective function. The probabilities are within the following ranges:<br/>
              <MathJax>
                {'$$ p_{\\text{Severe}} \\in [0.01, 0.1], \\quad p_{\\text{Mild}} \\in [0.05, 0.2], \\quad p_{\\text{Common}} \\in [0.05, 0.2] $$'}
              </MathJax><br/>
              At each iteration, the algorithm adjusts the probabilities and computes the corresponding survival rate,
              progressively converging towards the optimal solution.<br/>
              <strong>6. Results</strong>: Once the optimization is complete, we can determine the best probabilities
              for each disease. With these probabilities, we can re-run the simulation and check if the survival rate
              reaches (or at least comes quite close to) the 75% target.<br/>
            </p>

            <table style={{width: '100%', borderCollapse: 'collapse', textAlign: 'center'}}>
              <thead>
              <tr>
                <th style={{border: '1px solid white', padding: '8px'}}>Type of Disease</th>
                <th style={{border: '1px solid white', padding: '8px'}}>Probability</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td style={{border: '1px solid white', padding: '8px', verticalAlign: 'middle'}}>Severe Disease</td>
                <td style={{border: '1px solid white', padding: '8px', verticalAlign: 'middle'}}>1.04%</td>
              </tr>
              <tr>
                <td style={{border: '1px solid white', padding: '8px', verticalAlign: 'middle'}}>Mild Disease</td>
                <td style={{border: '1px solid white', padding: '8px', verticalAlign: 'middle'}}>5.65%</td>
              </tr>
              <tr>
                <td style={{border: '1px solid white', padding: '8px', verticalAlign: 'middle'}}>Common Disease</td>
                <td style={{border: '1px solid white', padding: '8px', verticalAlign: 'middle'}}>6.66%</td>
              </tr>
              </tbody>
            </table>


            <h2>5. Fish Survival and Disease Impact Simulation Model Based on Differential Evolution Algorithm</h2>
            <p>
              After optimizing disease probabilities in the first part, the second phase of the project focuses on
              introducing interventions to see how different strategies can further improve fish survival. Here’s an
              overview of how this phase works:
            </p>


            <h3>5.1. Introducing Interventions:</h3>
            <p>
              In this section, we test different intervention strategies designed to reduce the impact of diseases on the
              fish population. These interventions could include measures such as improved vaccination, better water
              quality management, or optimized feeding schedules. Each intervention is modeled to modify the probability
              or severity of disease outbreaks, with the goal of improving fish survival.
            </p>

            <h3>5.2. Adjusting Disease Dynamics:</h3>
            <p>
              The effect of each intervention is modeled by changing key parameters in the simulation:<br/>
              • Reduction in Disease Probability: An intervention may decrease the
              probability <strong>p_Severe</strong>, <strong>p_Mild</strong>, <strong>p_Common</strong> of a disease
              occurring.<br/>
              For example, if an intervention targets severe disease, it might reduce the probability from <strong>p_Severe
              = 0.1</strong>to <strong>p_Severe = 0.05</strong>:<br/>
              <MathJax>
                {'$$ p\'_{\\text{Severe}} = p_{\\text{Severe}} \\times (1 - \\text{InterventionEffectiveness}) $$'}
              </MathJax><br/>
              where <strong>p'_Severe = 0.05</strong> is the new reduced probability after the intervention.<br/>
              • Limiting Disease Impact: Instead of preventing diseases entirely, some interventions reduce the severity
              of their impact. For example, the loss rate for severe disease <strong>d_Severe</strong> might be reduced
              from the original range <strong>[0.5, 0.9]</strong> to <strong>[0.4, 0.8]</strong>. Mathematically, the new
              loss range can be represented as:<br/>
              <MathJax>
                {'$$ d\'_{\\text{Severe}} = d_{\\text{Severe}} \\times (1 - \\text{InterventionSeverityReduction}) $$'}
              </MathJax><br/>
              where <strong>d'_Severe</strong> is the adjusted loss rate after the intervention.
            </p>

            <h3>5.3. Simulating Different Scenarios:</h3>
            <p>
              For each intervention strategy, the simulation is run multiple times to account for variability in outcomes.
              Each time, we simulate the survival rate <strong>S</strong> based on different disease probabilities
              <strong>p_Severe</strong>, <strong>p_Mild</strong>, <strong>p_Common</strong> and loss
              rates <strong>d_Severe</strong>, <strong>d_Mild</strong>, <strong>d_Common</strong>.
              This allows us to evaluate how well different combinations of interventions perform under various
              conditions.<br/>
              For example, combining improved vaccination (which lowers <strong>p_Severe</strong>) with better water
              quality (which also lowers <strong>p_Severe</strong>) may have a larger effect than either intervention on its own: <br/>
              <MathJax>
                {'$$ S = \\frac{N_{\\text{final}}}{N} \\times 100 $$'}
              </MathJax><br/>
              where <strong>N_final</strong> is the population of surviving fish after 18 months, and <strong>N</strong>
              is the initial population.
            </p>

            <h3>5.4. Maximize Survival:</h3>
            <p>
              The goal here is to optimize the intervention strategies by adjusting key parameters such as the reduction
              in disease probabilities and mitigation of disease impact (severity). The algorithm will aim to minimize
              total losses (death rate) and maximize economic outcomes (profitability), based on different combinations of
              interventions.<br/>
              The total cost of interventions is factored in, as we are optimizing not only to maximize fish survival but
              also to maximize profit. The total cost is the sum of the monthly fixed costs and the cost of vaccinations
              or other interventions, represented as:<br/>
              <MathJax>
                {'$$ \\text{TotalCost} = \\sum_{t=1}^{18} N_t \\times \\text{cost}_{\\text{per-fish}} + \\text{vaccine-cost} $$'}
              </MathJax><br/>
              where the vaccine cost depends on the coverage rate and vaccine price.<br/>
              The overall net profit is given by:<br/>
              <MathJax>
                {'$$ \\text{NetProfit} = \\text{Revenue} - \\text{TotalCost} $$'}
              </MathJax><br/>
              where revenue is based on the number of surviving fish sold at market price:<br/>
              <MathJax>
                {'$$ \\text{Revenue} = N_{\\text{final}} \\times \\text{market price per fish} $$'}
              </MathJax><br/>
              The optimization algorithm, therefore, seeks to minimize the total cost and maximize the net profit by
              adjusting the intervention parameters. The objective function can be written as:<br/>
              <MathJax>
                {'$$ \\max \\text{NetProfit} = \\text{Revenue} - (\\text{FixedCosts} + \\text{VaccineCosts}) $$'}
              </MathJax><br/>
            </p>

            <h3>5.5. Iterating Through Strategies:</h3>
            <p>
              Just like before, we apply optimization techniques to find the best combination of interventions. However,
              instead of adjusting disease probabilities, the optimization algorithm now tunes the parameters related to
              the intervention’s impact. This allows us to fine-tune how much of each intervention is needed to achieve
              the desired survival rate while involving the costs and feasibility of these interventions in real-world
              settings.
            </p>

            <h3>6. Outcome:</h3>
            <p>
              By the end of this phase, we identify the most effective set of interventions, along with the
              corresponding survival rates. This provides valuable insights into how fish farmers can apply targeted
              strategies to dramatically reduce losses and maintain a healthy fish population.
            </p>
            <img src="https://static.igem.wiki/teams/5432/mathmodel01.png" style={{maxWidth: '100%'}}/>
            <div style={{height: '20px'}}></div>
            {/* 这是两张图片之间的空行，可以调整高度 */}

            <img src="https://static.igem.wiki/teams/5432/mathmodel02.png" style={{maxWidth: '100%'}}/>
            <div style={{height: '20px'}}></div>


            <img src="https://static.igem.wiki/teams/5432/mathmodel03.png" style={{maxWidth: '100%'}}/>
            <div style={{height: '20px'}}></div>


            <h3>7. Limitations and Prospects</h3>
            <p>
              This model offers accurate economic benefit predictions for researchers by simulating fish survival rates
              and vaccination strategies, particularly in assessing the critical role of vaccines in reducing fish
              mortality and boosting economic returns. However, one limitation is that the model assumes relatively simple
              environmental conditions, neglecting various factors in fish farming such as water quality, temperature
              fluctuations, and feed quality, all of which can significantly impact vaccine effectiveness and fish health.
              Additionally, the model treats vaccine efficacy as a static factor, failing to account for variations over
              time or among different fish species.<br/>
              Looking ahead, the model’s predictive accuracy could be enhanced by incorporating more complex environmental
              variables and simulating dynamic vaccine efficacy. Furthermore, integrating more on-site data and conducting
              multi-scenario simulations would allow the model to better capture the complexities of fish farming. As
              breeding technology and vaccine development continue to advance, the model could also be expanded to
              evaluate the economic benefits of new vaccines or multiple intervention measures, providing valuable
              insights for more precise business decisions and industry growth.
            </p>
          </section>

        </div>
      </div>
    </MathJaxContext>
  );
}
