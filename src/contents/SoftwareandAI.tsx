import { ScrollModule } from '../components/ScrollModule';

const sections = [
  { title: 'Overview of deep learning models and technologies', id: 'overview' },
  { title: 'Cross-Modal Learning for Protein Classification and Function Prediction', id: 'cross-modal' },
  { title: 'PACE VS CLEF', id: 'pace-vs-clef' },
  { title: 'CLEF predicts key effector proteins of E.piscicida', id: 'clef-predictions' },
];

export function SoftwareandAI() {
  return (
    <div className="content-container2 ">
      <ScrollModule sections={sections} />
      <div className="content ai-scroll-content" id="content">
        <section id="overview">
          <h2>Overview of deep learning models and technologies</h2>
          <h3>1. Transformer Architecture</h3>
          <p>
            The Transformer architecture is a deep learning model introduced in the paper "Attention is All You Need." It is designed to handle sequential data, particularly in natural language processing tasks. The core innovation of the Transformer is the self-attention mechanism, which allows the model to weigh the importance of different words in a sequence when encoding them. This is achieved through multiple layers of attention heads that capture various aspects of the input data. The architecture consists of an encoder-decoder structure, where the encoder processes the input sequence and generates a set of continuous representations, while the decoder uses these representations to produce the output sequence. This parallelization capability significantly enhances training efficiency compared to recurrent neural networks (RNNs).
          </p>
          <h3>2. Multi-Layer Perceptron (MLP)</h3>
          <p>
            A Multi-Layer Perceptron (MLP) is a type of feedforward artificial neural network that consists of multiple layers of neurons, including an input layer, one or more hidden layers, and an output layer. Each neuron in one layer is connected to every neuron in the subsequent layer, allowing for complex mappings from inputs to outputs. MLPs utilize activation functions, such as ReLU or sigmoid, to introduce non-linearity into the model, enabling it to learn intricate patterns in the data. During training, MLPs employ backpropagation and optimization algorithms (e.g., stochastic gradient descent) to minimize a loss function, thereby adjusting the weights of the connections to improve performance on specific tasks.
          </p>
          <h3>3.Layer Normalization</h3>
          <p>
            Layer Normalization is a technique used to stabilize and accelerate the training of deep neural networks. Unlike batch normalization, which normalizes the activations across the batch dimension, layer normalization normalizes the activations across the features for each individual sample. This is done by computing the mean and variance of the features and then scaling and shifting the normalized values using learnable parameters. By reducing internal covariate shift, layer normalization helps mitigate issues related to vanishing or exploding gradients, leading to improved convergence rates and overall model performance, particularly in recurrent architectures and Transformers.
          </p>
          <h3>4.infoNCE Loss</h3>
          <p>
            The infoNCE loss is a contrastive loss function used in unsupervised learning to maximize the mutual information between different representations of the same data point while minimizing the similarity between representations of different data points. It operates by comparing a positive sample (e.g., a data point and its augmentation) against a set of negative samples (e.g., other data points). The loss encourages the model to assign higher similarity scores to positive pairs and lower scores to negative pairs. This approach is particularly effective in learning robust feature representations, as it helps the model discern meaningful patterns and relationships within the data.          </p>
          <h3>5.Binary Cross-Entropy (BCE) Loss</h3>
          <p>
            Binary Cross-Entropy (BCE) loss is a widely used loss function for binary classification tasks in machine learning. It quantifies the difference between the predicted probabilities and the actual binary labels (0 or 1) of the samples. The BCE loss is defined as the negative log-likelihood of the true labels given the predicted probabilities, which can be mathematically expressed as:
            {/* 公式 */}
            where (N) is the number of samples, (y_i) is the true label, and (p_i) is the predicted probability of the positive class. The BCE loss penalizes incorrect predictions more heavily, thereby guiding the model to improve its accuracy in distinguishing between the two classes during training.
          </p>
        </section>

        <section id="cross-modal">
          <h2>Cross-Modal Learning for Protein Classification and Function Prediction</h2>
          <h3>Prediction</h3>
          <p>
            In this study, we imported protein sequence data into the pre-trained protein language model ESM2 to obtain an initial processed feature representation. Subsequently, we employed a Transformer architecture and a Multi-Layer Perceptron (MLP) to further extract these features, resulting in a cross-modal representation. Additionally, we collected protein annotations and other biological feature data, which were processed through MLP and Layer Normalization to obtain another set of feature representations. These two sets of data collectively formed the original dataset for contrastive learning.

            Through an unsupervised learning strategy, utilizing an infoNCE loss function, the model effectively learned the similarities and differences between samples, thereby enhancing feature discriminability. Following this, a supervised learning approach was applied, using a Binary Cross-Entropy (BCE loss) function for optimization, to improve the model's performance in protein classification and functional prediction tasks. Ultimately, the constructed model, through the aforementioned training process, was able to accurately predict protein classifications and functions.
          </p>
          <img src="https://static.igem.wiki/teams/5432/software01.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}


        </section>

        <section id="pace-vs-clef">
          <h3>PACE VS CLEF</h3>
          <p>
            <strong>PACE (Pathway-based Analysis of Cellular Events)</strong>is a methodology designed to analyze cellular processes by integrating biological pathway information. It focuses on understanding the roles of genes and their interactions within known biological pathways, enabling researchers to identify key genes and signaling pathways associated with specific biological functions or diseases. PACE leverages gene expression patterns within these pathways to infer their contributions to cellular events, providing insights into the underlying mechanisms of biological processes.<br />
            <strong>CLEF (Classification of Labeled Entities in Frameworks)</strong>, on the other hand, is a classification method utilized in bioinformatics and machine learning to identify and categorize labeled biological entities, such as genes and proteins. CLEF employs advanced machine learning algorithms and deep learning techniques to process and analyze large biological datasets, aiming to enhance the accuracy of biological entity classification. This approach allows for the extraction of meaningful information from complex datasets, facilitating various tasks in biological research, including gene function prediction and disease classification.<br />
            <strong>Key Differences</strong><br />
            Focus: PACE emphasizes the analysis of cellular events through the lens of biological pathways, while CLEF concentrates on the classification and identification of biological entities using machine learning techniques.<br />
            Methodology: PACE integrates pathway information to understand gene interactions and cellular processes, whereas CLEF utilizes deep learning and machine learning algorithms to classify and analyze biological data.<br />
            Application: PACE is primarily used for elucidating the roles of genes within biological pathways and their contributions to cellular functions, while CLEF is employed for enhancing the accuracy of classifications in biological research, such as predicting gene functions and categorizing diseases.<br />
          </p>

        </section>

        <section id="clef-predictions">
          <h2>CLEF predicts key effector proteins of <em>E.piscicida</em></h2>
          <img src="https://static.igem.wiki/teams/5432/software02.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <p>
            Network graph illustrating the virulence genes identified by PACE and CLEF and their KEGG-pathway annotations. Each edge links the virulence gene and the method that predict it. Each gene node was labeled with different colors representing its KEGG pathway annotation. Genes without mapped KEGG pathways were not shown in the graph.
          </p>
          <img src="https://static.igem.wiki/teams/5432/software03.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <p>
            Intracellular replication ability of screened <em>E. piscicida</em> variants. <em>RAW264.7</em> cells were infected at an MOI of 10. The CFU of intracellular <em>E. piscicida</em> variants at 6 h post-infection was normalized to cell numbers to determine the bacterial proliferation capacity.
          </p>
          <img src="https://static.igem.wiki/teams/5432/software04.png" style={{ maxWidth: '100%' }} />
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

          <p>
            Time series curves from CRISPRi-seq showing the reads abundance change of selected genes after infection. The master virulence regulator esrB was served as the positive control. The results were shown as the mean ±S.D. (n=3). ***, P&lt;0.001; **, P&lt;0.01; *, P&lt;0.05; ns, non-significance, P&gt;0.05 based on one-tailed Student’s t-test.
          </p>
        </section>
      </div>
    </div>
  );
}
