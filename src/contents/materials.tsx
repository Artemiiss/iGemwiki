import { ScrollModule } from '../components/ScrollModule';

const sections = [
  { title: 'DNA', id: 'DNA' },
  { title: 'Plasmid', id: 'Plasmid' },
  { title: 'RBS', id: 'RBS' },
  { title: 'Regulatory', id: 'Regulatory' },
  { title: 'Tag', id: 'Tag' },
  { title: 'Terminator', id: 'Terminator' },
];

export function materials() {
  return (
    <div className="content-container2">
      <ScrollModule sections={sections} />
      <div className="content" id="content">
        <section id="DNA">
          <h2>DNA</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', color: 'white' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid white', padding: '8px' }}>Number</th>
                <th style={{ border: '1px solid white', padding: '8px' }}>Short description</th>
                <th style={{ border: '1px solid white', padding: '8px' }}>used for</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>
                  <a href="https://parts.igem.org/Part:BBa_K5432003" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">
                    BBa_K5432003
                  </a>
                </td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>GFP(Green fluorescent protein)</td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>reporter protein(GFP) expression</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>
                  <a href="https://parts.igem.org/Part:BBa_K5432004" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">
                    BBa_K5432004
                  </a>
                </td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>E.piscicida-up</td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>homologous recombination: the first half of ETAE_0456 gene</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>
                  <a href="https://parts.igem.org/Part:BBa_K5432005" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">
                    BBa_K5432005
                  </a>
                </td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>E.piscicida-down</td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>homologous recombination: the latter half of ETAE_0456 gene</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>
                  <a href="https://parts.igem.org/Part:BBa_K5432006" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">
                    BBa_K5432006
                  </a>
                </td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>E.Coli-up</td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>homologous recombination: the first half of rpsU</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>
                  <a href="https://parts.igem.org/Part:BBa_K5432007" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">
                    BBa_K5432007
                  </a>
                </td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>E.Coli-down</td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>homologous recombination: the latter half of rpsU</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>
                  <a href="https://parts.igem.org/Part:BBa_K5432008" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">
                    BBa_K5432008
                  </a>
                </td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>ompk</td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>antigen(OmpK) expression</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>
                  <a href="https://parts.igem.org/Part:BBa_K5432011" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">
                    BBa_K5432011
                  </a>
                </td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>ompK-ompA</td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>antigen(OmpK) expression and exocytosis in E.coli</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>
                  <a href="https://parts.igem.org/Part:BBa_K5432013" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">
                    BBa_K5432013
                  </a>
                </td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>enrR</td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>suicide factor(EnrR) expression</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>
                  <a href="https://parts.igem.org/Part:BBa_K5432016" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">
                    BBa_K5432016
                  </a>
                </td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>AshA</td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>antigen(AshA) expression</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>
                  <a href="https://parts.igem.org/Part:BBa_K5432018" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">
                    BBa_K5432018
                  </a>
                </td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>ashA-ompA</td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>antigen(AshA) expression and exocytosis in E.coli</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>
                  <a href="https://parts.igem.org/Part:BBa_K5432021" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">
                    BBa_K5432021
                  </a>
                </td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>ompK-EseG108</td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>antigen(OmpK) expression and exocytosis in E.piscicida</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>
                  <a href="https://parts.igem.org/Part:BBa_K5432022" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">
                    BBa_K5432022
                  </a>
                </td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>ashA-EseG108</td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>antigen(AshA) expression and exocytosis in E.piscicida</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>
                  <a href="https://parts.igem.org/Part:BBa_K5432025" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">
                    BBa_K5432025
                  </a>
                </td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>torR binding site</td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>TorR binding to activate structural gene expression</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>
                  <a href="https://parts.igem.org/Part:BBa_K5432026" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">
                    BBa_K5432026
                  </a>
                </td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>araC</td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>regulatory protein(AraC) expression</td>
              </tr>
            </tbody>
          </table>
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

        </section>

        <section id="Plasmid">
          <h2>Plasmid</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', color: 'white' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid white', padding: '8px' }}>Number</th>
                <th style={{ border: '1px solid white', padding: '8px' }}>Short description</th>
                <th style={{ border: '1px solid white', padding: '8px' }}>used for</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>
                  <a href="https://parts.igem.org/Part:BBa_K5432014" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">
                    BBa_K5432014
                  </a>
                </td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>pDM4</td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>suicide plasmid used in genomic knock-in in E.coli</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>
                  <a href="https://parts.igem.org/Part:BBa_K5432015" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">
                    BBa_K5432015
                  </a>
                </td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>pDMK</td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>suicide plasmid used in genomic knock-in in E.piscicida</td>
              </tr>
            </tbody>
          </table>
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

        </section>

        <section id="RBS">
          <h3>RBS</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', color: 'white' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid white', padding: '8px' }}>Number</th>
                <th style={{ border: '1px solid white', padding: '8px' }}>Type</th>
                <th style={{ border: '1px solid white', padding: '8px' }}>Short description</th>
                <th style={{ border: '1px solid white', padding: '8px' }}>used for</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>
                  <a href="https://parts.igem.org/Part:BBa_K5432012" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">
                    BBa_K5432012
                  </a>
                </td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>RBS</td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>RBS(Ribosome binding site)</td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>ribosome guidance</td>
              </tr>
            </tbody>
          </table>
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}


        </section>

        <section id="Regulatory">
          <h2>Regulatory</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', color: 'white' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid white', padding: '8px' }}>Number</th>
                <th style={{ border: '1px solid white', padding: '8px' }}>Short description</th>
                <th style={{ border: '1px solid white', padding: '8px' }}>used for</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>
                  <a href="https://parts.igem.org/Part:BBa_K5432027" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">
                    BBa_K5432027
                  </a>
                </td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>araBAD promoter</td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>to activate structural gene transcription at arabinose's presence</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>
                  <a href="https://parts.igem.org/Part:BBa_K5432028" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">
                    BBa_K5432028
                  </a>
                </td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>esrB promoter</td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>to activate structural gene transcription at mannose's presence</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>
                  <a href="https://parts.igem.org/Part:BBa_K5432029" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">
                    BBa_K5432029
                  </a>
                </td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>sacB promoter</td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>to activate structural gene transcription at sucrose's presence</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>
                  <a href="https://parts.igem.org/Part:BBa_K5432030" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">
                    BBa_K5432030
                  </a>
                </td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>T7 promoter</td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>conserved gene expression</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>
                  <a href="https://parts.igem.org/Part:BBa_K5432031" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">
                    BBa_K5432031
                  </a>
                </td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>cat promoter</td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>to regulate the transcription of the cat gene</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>
                  <a href="https://parts.igem.org/Part:BBa_K5432032" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">
                    BBa_K5432032
                  </a>
                </td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>lacI promoter</td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>to activate structural gene transcription at IPTG's presence</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>
                  <a href="https://parts.igem.org/Part:BBa_K5432033" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">
                    BBa_K5432033
                  </a>
                </td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>torACD promoter</td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>to activate structural gene transcription at TMAO's presence</td>
              </tr>
            </tbody>
          </table>
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

        </section>

        <section id="Tag">
        <h2>Tag</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', color: 'white' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid white', padding: '8px' }}>Number</th>
                <th style={{ border: '1px solid white', padding: '8px' }}>Short description</th>
                <th style={{ border: '1px solid white', padding: '8px' }}>used for</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>
                  <a href="https://parts.igem.org/Part:BBa_K5432019" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">
                    BBa_K5432019
                  </a>
                </td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>6xHis</td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>target protein labeling</td>
              </tr>
            </tbody>
          </table>
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

        </section>

        <section id="Terminator">
          <h3>Terminator</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', color: 'white' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid white', padding: '8px' }}>Number</th>
                <th style={{ border: '1px solid white', padding: '8px' }}>Short description</th>
                <th style={{ border: '1px solid white', padding: '8px' }}>used for</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>
                  <a href="https://parts.igem.org/Part:BBa_K5432020" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">
                    BBa_K5432020
                  </a>
                </td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>T7 terminator</td>
                <td style={{ border: '1px solid white', padding: '8px', verticalAlign: 'middle' }}>to terminate transcription</td>
              </tr>
            </tbody>
          </table>
          <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}


        </section>
      </div>
    </div>
  );
}
