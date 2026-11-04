import {Author, Publication} from '../models/publication';

const DerekAuthor: Author = {
  first: 'Derek',
  last: 'Garcia'
}

export const PUBLICATIONS = {
  sbom: {
    title: 'A Landscape Study of Open-Source Tools for Software Bill of Materials (SBOM) and Supply Chain Security',
    abstract: 'Modern software applications heavily rely on diverse third-party components, libraries, and frameworks sourced from various vendors and open source repositories. This presents a complex challenge for securing the software supply chain. To address this complexity, the adoption of a Software Bill of Materials (SBOM) has emerged as a promising solution, offering a unifying standard that inventories all third-party components and dependencies used in an application. Recent supply chain breaches, exemplified by the SolarWinds attack, underscore the urgent need to enhance software security and mitigate vulnerability risks. SBOMs play a pivotal role in this endeavor by revealing potential vulnerabilities, outdated components, and unsupported elements. This research paper conducts an extensive empirical analysis to assess the current landscape of open-source tools related to SBOM. We investigate emerging use cases in software supply chain security and identify gaps in SBOM technologies. Our analysis encompasses 84 tools, providing a snapshot of the current market and highlighting areas for improvement.',
    datePublished: new Date('05/01/2025'),
    authors: [
      DerekAuthor,
      {
        'first': 'Mehdi',
        'last': 'Tarrit Mirakorhli'
      },
      {
        'first': 'Schuyler',
        'last': 'Dillon'
      },
      {
        'first': 'Kevin',
        'last': 'Laporte'
      },
      {
        'first': 'Matthew',
        'last': 'Morrison'
      },
      {
        'first': 'Henry',
        'last': 'Lu'
      }, {
        'first': 'Viktoria',
        'last': 'Koscinski'
      }, {
        'first': 'Christopher',
        'last': 'Enoch'
      }, {
        'first': 'Mohamad',
        'last': 'Fazelnia'
      }, {
        'first': 'Roger',
        'last': 'Chen'
      }
    ],
    boldIndex: 0,
    href: 'https://ieeexplore.ieee.org/document/11039284',
    keywords: ['SBOM', 'Supply Chain Security'],
    tags: [
      {
        type: 'copy',
        key: 'Cite',
        value: '@INPROCEEDINGS{11039284,\n' +
          '  author={Garcia, Derek and Mirakorhli, Mehdi Tarrit and Dillon, Schuyler and Laporte, Kevin and Morrison, Matthew and Lu, Henry and Koscinski, Viktoria and Enoch, Christopher and Fazelnia, Mohamad and Chen, Roger},\n' +
          '  booktitle={2025 IEEE/ACM 3rd International Workshop on Software Vulnerability Management (SVM)}, \n' +
          '  title={A Landscape Study of Open-Source Tools for Software Bill of Materials (SBOM) and Supply Chain Security}, \n' +
          '  year={2025},\n' +
          '  volume={},\n' +
          '  number={},\n' +
          '  pages={37-45},\n' +
          '  keywords={Support vector machines;Conferences;Supply chains;Bills of materials;Market research;Software;Libraries;Computer security;Standards;Research and development;Software Bill of Materials (SBOM);Software Supply Chain Security},\n' +
          '  doi={10.1109/SVM66695.2025.00010}}\n'
      },
      {
        type: 'link',
        key: 'ArXiv',
        value: 'https://arxiv.org/abs/2402.11151'
      },
      {
        type: 'link',
        key: 'Repo',
        value: 'https://github.com/SoftwareDesignLab/SBOM-Landscape-Study'
      }
    ]
  },
  siexvults: {
    title: 'SIExVulTS: Sensitive Information Exposure Vulnerability Detection System Using Transformer Models and Static Analysis',
    abstract: 'Sensitive Information Exposure (SIEx) vulnerabilities (CWE-200) remain a persistent and underaddressed threat across software systems, often leading to serious security breaches. Existing detection tools rarely target the diverse subcategories of CWE-200 or provide context-aware analysis of code-level data flows. Aims: This paper aims to present SIExVulTS, a novel vulnerability detection system that integrates transformer-based models with static analysis to identify and verify sensitive information exposure in Java applications. Method: SIExVulTS employs a three-stage architecture: (1) an Attack Surface Detection Engine that uses sentence embeddings to identify sensitive variables, strings, comments, and sinks; (2) an Exposure Analysis Engine that instantiates CodeQL queries aligned with the CWE-200 hierarchy; and (3) a Flow Verification Engine that leverages GraphCodeBERT to semantically validate source-to-sink flows. We evaluate SIExVulTS using three curated datasets, including real-world CVEs, a benchmark set of synthetic CWE-200 examples, and labeled flows from 31 open-source projects. Results: The Attack Surface Detection Engine achieved an average F1 score greater than 93%, the Exposure Analysis Engine achieved an F 1 score of 85.71 %, and the Flow Verification Engine increased precision from 22.61 % to 87.23 %. Moreover, SIExVulTS successfully uncovered six previously unknown CVEs in major Apache projects. Conclusions: The results demonstrate that SIExVulTS is effective and practical for improving software security against sensitive data exposure, addressing limitations of existing tools in detecting and verifying CWE-200 vulnerabilities.',
    datePublished: new Date('10/02/2025'),
    authors: [
      {
        first: 'Kyler',
        last: 'Katz'
      },
      {
        first: 'Sara',
        last: 'Moshtari'
      },
      {
        first: 'Ibrahim',
        last: 'Mujhid'
      },
      {
        first: 'Mehdi',
        last: 'Tarrit Mirakhorli'
      },
      DerekAuthor
    ],
    boldIndex: 4,
    href: 'https://ieeexplore.ieee.org/abstract/document/11323419',
    keywords: ['Static Analysis', 'CWE-200', 'Transformers'],
    tags: [
      {
        type: 'copy',
        key: 'Cite',
        value: '@INPROCEEDINGS{11323419,\n' +
          '  author={Katz, Kyler and Moshtari, Sara and Mujhid, Ibrahim and Mirakhorli, Mehdi and Garcia, Derek},\n' +
          '  booktitle={2025 ACM/IEEE International Symposium on Empirical Software Engineering and Measurement (ESEM)}, \n' +
          '  title={SIExVulTS: Sensitive Information Exposure Vulnerability Detection System Using Transformer Models and Static Analysis}, \n' +
          '  year={2025},\n' +
          '  volume={},\n' +
          '  number={},\n' +
          '  pages={230-241},\n' +
          '  keywords={Analytical models;Java;Biological system modeling;Static analysis;Benchmark testing;Transformers;Software systems;Security;Software measurement;Engines;Software Security;Static Analysis;Transformer Models;CWE-200;Sensitive Information Exposure},\n' +
          '  doi={10.1109/ESEM64174.2025.00012}}\n'
      },
      {
        type: 'link',
        key: 'ArXiv',
        value: 'https://arxiv.org/abs/2508.19472'
      },
      {
        type: 'link',
        key: 'Repo',
        value: 'https://github.com/MSUSEL/hawaii-pique-cwe200'
      }
    ]
  },
  cveBreadcrumbs: {
    title: 'CVE Breadcrumbs: Tracking Vulnerabilities Through Versioned Apache Libraries',
    abstract: 'The Apache Software Foundation (ASF) ecosystem underpins a vast portion of modern software infrastructure, powering widely used components such as Log4j, Tomcat, and Struts. However, the ubiquity of these libraries has made them prime targets for high-impact security vulnerabilities, as illustrated by incidents like Log4Shell. Despite their widespread adoption, Apache projects are not immune to recurring and severe security weaknesses. We conduct a historical analysis of the Apache ecosystem to follow the "breadcrumb trail of vulnerabilities" by compiling a comprehensive dataset of Common Vulnerabilities and Exposures (CVEs) and Common Weakness Enumerations (CWEs). We examine trends in exploit recurrence, disclosure timelines, and remediation practices. Our analysis is guided by four key research questions: (1) What are the most persistent and repeated CWEs in Apache libraries? (2) How long do CVEs persist before being addressed? (3) What is the delay between CVE introduction and official disclosure? and (4) How long after disclosure are CVEs remediated? We present a detailed timeline of vulnerability lifecycle stages across Apache libraries and offer insights to improve secure coding practices, vulnerability monitoring, and remediation strategies. Our contributions include a curated dataset covering 24,285 Apache libraries, 1,285 CVEs, and 157 CWEs, along with empirical findings and developer-focused recommendations.',
    datePublished: new Date('12/01/2025'),
    authors: [
      DerekAuthor,
      {
        first: 'Briana',
        last: 'Lee'
      },
      {
        first: 'Ibrahim',
        last: 'Matar'
      },
      {
        first: 'David',
        last: 'Rickards'
      },
      {
        first: 'Andrew',
        last: 'Zilnicki'
      }
    ],
    boldIndex: 0,
    href: 'https://arxiv.org/abs/2512.02259',
    keywords: ['Software Supply Chain', 'Apache Libraries', 'NVD'],
    tags: [
      {
        type: 'copy',
        key: 'Cite',
        value: '@misc{https://doi.org/10.48550/arxiv.2512.02259,\n' +
          '  doi = {10.48550/ARXIV.2512.02259},\n' +
          '  url = {https://arxiv.org/abs/2512.02259},\n' +
          '  author = {Garcia,  Derek and Lee,  Briana and Matar,  Ibrahim and Rickards,  David and Zilnicki,  Andrew},\n' +
          '  keywords = {Cryptography and Security (cs.CR),  Software Engineering (cs.SE),  FOS: Computer and information sciences,  FOS: Computer and information sciences},\n' +
          '  title = {CVE Breadcrumbs: Tracking Vulnerabilities Through Versioned Apache Libraries},\n' +
          '  publisher = {arXiv},\n' +
          '  year = {2025},\n' +
          '  copyright = {Creative Commons Attribution 4.0 International}\n' +
          '}'
      },
      {
        type: 'link',
        key: 'Repo',
        value: 'https://github.com/dlg1206/cve-breadcrumbs'
      }
    ]
  },
  ossSurvey: {
    title: 'Enjoying the Product but Not Joining the Builders: Investigating Why Students Don\'t Contribute to OSS',
    abstract: 'Open-source software (OSS) participation provides students with authentic exposure to collaborative, real-world software development, yet active contributions remain limited. This short paper presents an exploratory study of computing students\' perceptions, knowledge, and experiences with OSS at the University of Hawai\'i at Manoa. We administered a survey and analyzed 122 responses using both quantitative and qualitative methods. Students reported moderate OSS familiarity and frequent OSS use in coursework and personal projects, yet only 12.3% actively contributed and engagement with OSS communities was limited. Key barriers included skill gaps (72.89% of non-contributors), time constraints (59.81%), and codebase complexity (66.67% of contributors), often alongside imposter syndrome (36.45%). Students indicated that more time, mentorship, beginner-friendly issues, better onboarding/documentation, and curricular incentives (e.g., course credit) would most increase participation, while most reported their courses do not require or incentivize OSS contributions (58.20%). Grounded in a single institutional context, this study provides a nuanced understanding of how curriculum structure, faculty encouragement, and competing academic demands shape OSS participation. These insights inform the design of targeted curricular and institutional interventions aimed at supporting student onboarding and participation in OSS communities.',
    datePublished: new Date('10/15/2026'),
    authors: [
      {
        first: 'Italo',
        last: 'Santos'
      },
      {
        first: 'Briana',
        last: 'Lee'
      },
      DerekAuthor,
      {
        first: 'Yick',
        last: 'Ching Wong'
      },
      {
        first: 'Anthony',
        last: 'Peruma'
      }
    ],
    boldIndex: 2,
    href: 'https://arxiv.org/abs/2610.22664',
    keywords: ['OSS', 'Software Engineering Education'],
    tags: [
      {
        type: 'copy',
        key: 'Cite',
        value: '@misc{https://doi.org/10.48550/arxiv.2610.22664,\n' +
          '  doi = {10.48550/ARXIV.2610.22664},\n' +
          '  url = {https://arxiv.org/abs/2610.22664},\n' +
          '  author = {Santos,  Italo and Lee,  Briana and Garcia,  Derek and Wong,  Yick Ching and Peruma,  Anthony},\n' +
          '  keywords = {Software Engineering (cs.SE),  FOS: Computer and information sciences},\n' +
          '  title = {Enjoying the Product but Not Joining the Builders: Investigating Why Students Don\'t Contribute to OSS},\n' +
          '  publisher = {arXiv},\n' +
          '  year = {2026},\n' +
          '  copyright = {Creative Commons Attribution 4.0 International}\n' +
          '}'
      },
      {
        type: 'link',
        key: 'Repo',
        value: 'https://github.com/dlg1206/uh-manoa-ics-oss-survey'
      }
    ]
  },
  signHere: {
    title: 'Sign Here: Attributing a Source for a More Trustworthy Software Supply Chain',
    abstract: 'Software supply chain attacks continue to be on the rise, exploiting the trust that helps open source ecosystems thrive. Recent incidents like the Shai-Hulud worm and the Axios compromise demonstrate that a single malicious package can have wide reaching and devastating impacts overnight. These high profile attacks can be traced back to the same culprit: package registries. Although they are a useful convenience to pull prebuilt packages from, is such a commonly exploited component of the software supply chain worth the risk? In this paper, we investigate whether removing the registry from the developer workflow by building packages directly from source can serve as a malware prevention strategy - effectively removing an entire attack surface. Our hypothesis is that malicious packages avoid attributing a source to minimize visibility, while benign packages seek exposure and therefore link to their repositories. We evaluate this through three research questions: how effective is building from source at avoiding malware, how feasible is it to build from source in the current state of the supply chain, and how the building from source strategy compares to state-of-the-art security scanners. To do so, we (1) construct an aggregate dataset of 47,066 malicious packages from four academic and one industry malicious datasets source across npm and PyPI ecosystems, (2) build a snapshot index of all 3.9 million npm and 764 thousand PyPI packages, and (3) analyze all malicious samples alongside a statistically significant sample of 16,569 packages from each registry, totaling 33,138 packages. We find that simply checking for a source has a success rate between 87.7 and 99.9 percent of preventing malware, depending on the level of source vetting. Consequently, there is a significant lack of transparency within benign packages, with only 47.4 percent attributing a source an end user could build from.',
    datePublished: new Date('10/15/2026'),
    authors: [DerekAuthor],
    boldIndex: 0,
    href: 'https://arxiv.org/abs/2610.28794',
    keywords: ['Malware Detection', 'Open Source Security'],
    tags: [
      {
        type: 'copy',
        key: 'Cite',
        value: '@misc{https://doi.org/10.48550/arxiv.2610.28794,\n' +
          '  doi = {10.48550/ARXIV.2610.28794},\n' +
          '  url = {https://arxiv.org/abs/2610.28794},\n' +
          '  author = {Garcia,  Derek},\n' +
          '  keywords = {Cryptography and Security (cs.CR),  Software Engineering (cs.SE),  FOS: Computer and information sciences},\n' +
          '  title = {Sign Here: Attributing a Source for a More Trustworthy Software Supply Chain},\n' +
          '  publisher = {arXiv},\n' +
          '  year = {2026},\n' +
          '  copyright = {Creative Commons Attribution Non Commercial Share Alike 4.0 International}\n' +
          '}'
      },
      {
        type: 'link',
        key: 'Repo',
        value: 'https://github.com/chainguard-sandbox/build-from-source'
      }
    ]
  }
} satisfies Record<string, Publication>;

