import "/src/containers/App/members.css";

export function Members() {
  const teamMembers = [
    {
      name: 'Runsheng Chen',
      imageUrl: 'https://static.igem.wiki/teams/5432/member/runshengchen.png',
      description: 'My name is Runsheng Chen, and I am a 2022 undergraduate student majoring in Biomedical Science at East China University of Science and Technology. I am a member of the Chinese Society for Biochemistry and Molecular Biology, with a research focus on pathogen-host interactions. This year, I have also taken on the role of leader for the iGEM club at my university, where I frequently organize various activities. I enjoy sharing and discussing cutting-edge research findings with my friends.',
    },
    {
      name: 'Ruoyi Zhang',
      imageUrl: 'https://static.igem.wiki/teams/5432/member/ruoyizhang.jpg',
      description: 'Hi there! I am Ruoyi Zhang, a bubbly student from ECUST, class of Bio-medicine2201. I am all about the fun and frolic, and I am the cheerful leader of the wiki team in ECUST-iGEM2024, with a sprinkle of magic as a member of the hp and lab groups. My hobbies are as delightful as they sound: capturing moments through photography, playing badminton with a spring in my step, indulging in the scrumptiousness of hairy stomach hotpot, and sipping on the creamy goodness of bubble tea. My life goal? To live a life full of joy and laughter. And when the golden years come knocking, I plan to pack my bags, grab my camera, and let my pension fund take me on a photographic adventure around the world!'
    },
    {
      name: 'Laijiayun Jin',
      imageUrl: 'https://static.igem.wiki/teams/5432/member/laijiayunjin.jpg',
      description: 'As a junior majoring in biomedicine, Jin loves biology since forever. In her eyes, biology is an ingenious craftsman who designs all exquisite machanisms in nature. Biology is everybody, every bird, every tree, every insect, everything that grows strongly and determinantly, for every living thing is a creation of biology. That is why she loves it, and longs to take biological study as a career.',
    },
    {
      name: 'Yiyang Gu',
      imageUrl: 'https://static.igem.wiki/teams/5432/member/yiyanggu.jpg',
      description: 'I am Yiyang Gu, a senior student in the College of Biological Engineering. I am passionate about the field of biotechnology and have been committed to advancing this field through scientific research. At school, I had the honor to be the leader of the digital module of the International Genetically Engineered Machine Competition (iGEM) team. During my college years, I participated in a number of research projects, and I was able to skillfully operate various molecular biology experimental techniques, which made me comfortable in the laboratory.In the iGEM team, I am responsible for leading team members in mathematical modeling and data analysis to support our biological research.By applying mathematical and computational methods, we can more accurately predict the dynamic behavior of biological systems and provide theoretical support for experimental design.My work is not limited to the theoretical level, but I am personally involved in the design of experiments to ensure that our models are compatible with actual biological processes.',
    },
    {
      name: 'Haibin Zhu',
      imageUrl: 'https://static.igem.wiki/teams/5432/member/haibinzhu.jpg',
      description: 'I am a undergraduate student from East China University of Science and Technology, majoring in biology working on the study of Synthetic Biology.Apart from academics, I enjoy traveling immensely and aspire to witness every breathtaking landscape in China.',
    },
    {
      name: 'Jialuo Wang',
      imageUrl: 'https://static.igem.wiki/teams/5432/member/jialuowang.jpg',
      description: 'Hello everyone, I’m Jialuo Wang, a junior student. My daily work involves dealing with virtual fish and vaccines, simulating the economic impact of various vaccine strategies. I ensure that our fish not only grow healthy but also bring in a good “fin-ancial” return (profit)! Not only can I predict the effectiveness of vaccines through complex mathematical models, but I can also tell you the best timing and methods for vaccinating these little fish to maximize our returns.',
    },
    {
      name: 'Jiming Fu',
      imageUrl: 'https://static.igem.wiki/teams/5432/member/jimingfu.jpg',
      description: 'Hello everyone！ I am Jiming Fu from the School of Pharmacy at East China University of Science and Technology! In the ECUST team, I was mainly responsible for human practice in the early stage. Later on, I also took on the management and design of wet experiments, and participated in Wiki and other artistic creations. Life science is so beautiful in my eyes that since I can remember, I have been immersed in all the creatures and things on Earth. I spent a lot of time to observe the movement of ants. I have also gone deep into the tropical rainforest and the Himalayas to observe the diversity of species. Professor Cheng Xiawei from the School of Pharmacy at East China University of Science and Technology led me into the wonderful world of molecular biology and cell autophagy. Since then, I have been determined to explore the mysteries of cell metabolism and diseases.',
    },
    {
      name: 'Jiawei E',
      imageUrl: 'https://static.igem.wiki/teams/5432/member/jiaweie.jpg',
      description: 'Hello everyone ! I’m Jiawei E from ECUST majoring in bioscience.  I’m mainly responsible for the experiments of knock-in in the ECUST team. Well,  If there is one thing I hope people who meet me for the first time could know about me, it is the learner.  I’m convinced of the opinion that there must be something could be learned from everything we met. The feelings of learning  fascinate me so much that I love to stand on the learner’s point of view to view things. Always keep modest, curious, positive and life is always full of beauty.',
    },
    {
      name: 'Bing Chen',
      imageUrl: 'https://static.igem.wiki/teams/5432/member/bingchen.jpg',
      description: 'I am Bing Chen, a junior majoring in biological science. I am responsible for the single pathway quantitative experiment in this project. I like to challenge myself and push my boundaries with different projects.',
    },
    {
      name: 'Zhenyue Huang',
      imageUrl: 'https://static.igem.wiki/teams/5432/member/zhenyuehuang.jpg',
      description: (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <br /><br /><br /> {/* 添加空行 */}
          <p style={{ textAlign: 'center' }}>
          &nbsp;&nbsp;&nbsp;&nbsp;Responsible for ALL wiki coding.
          </p>
        </div>
      ),
    },
    
    {
      name: 'Yipeng Ye',
      imageUrl: 'https://static.igem.wiki/teams/5432/members/yipengye.jpg',
      description: 'Grade 22 Art undergraduate, good at digital art creation, including but not limited to illustration, animation, video production, game production. The short term goal is to make a game of your own design.',
    },
    {
      name: 'Wenkai Wang',
      imageUrl: 'https://static.igem.wiki/teams/5432/member/wenkaiwang.jpg',
      description: 'I am a undergraduate student majoring in Pharmacy admitted in 2023 with a sunny and outgoing personality, warm-hearted, and responsible. I enjoy running and cycling, music and guitar, listening to music for over 100 hours per week. I also enjoy chess and badminton, especially loving Minesweeper. I hope to continue on the path of scientific research and one day have my own research group, with projects that I can be proud of, and make something truly helpful for humanity.',
    },
    {
      name: 'Rui Liu',
      imageUrl: 'https://static.igem.wiki/teams/5432/member/ruiliu.jpg',
      description: 'I am about to enter my senior year, and in the iGEM team, I have been responsible for the core experimental work, turning conceptual ideas into validated results through experimental techniques. I have always sought to foster a harmonious and supportive team environment, creating connections and a sense of belonging among members. During this time, I’ve met many kind, unique, thoughtful, and talented friends, all working towards a common goal, supporting and helping each other. This will undoubtedly be an unforgettable experience for me.I believe that life’s trajectory is shaped by the people we meet and the experiences we share in each chapter of our journey. From the initial fear of the unknown, through tentative attempts, to the joy of success, these moments of growth that I’ve experienced with my team will continue to guide me on my path forward.',
    },
    {
      name: 'Junjie Zhu',
      imageUrl: 'https://static.igem.wiki/teams/5432/member/junjiezhu.jpg',
      description: 'Hello everyone, I am Junjie Zhu, a 22-level biomedical student, I am a more lively and cheerful person, so I choose to participate in HP work, I like to communicate and share my thoughts with IGEM colleagues from all over the world, through the big platform of IGEM, to meet more friends, witness more amazing biological ideas and methods, and treat the world with love and sincerity.',
    },
    {
      name: 'Haoning Jia',
      imageUrl: 'https://static.igem.wiki/teams/5432/member/haoningjia.jpg',
      description: 'I am Haoning Jia from Industrial Design 230, serving as a member of the class culture and Sports committee. I am committed to becoming an excellent industrial designer in China and even the world, helping national brand products go to sea, and truly realizing the great rejuvenation of the Chinese nation!',
    },
    {
      name: 'WanShu Lai',
      imageUrl: 'https://static.igem.wiki/teams/5432/member/wanshulai.jpg',
      description: 'I am Wanshu Lai, majoring in biological engineering, grade 2021. I participated in the related work of antigen modification of iGEM experimental group. During the process of participating in the experiment, I learned and improved myself, and I also met many like-minded good friends.',
    },
    {
      name: 'Yuping Zhang',
      imageUrl: 'https://static.igem.wiki/teams/5432/member/yupingzhang.jpg',
      description: 'I am a 2021 undergraduate majoring in food quality and safety at East China University of Science and Technology, and my research direction is RNA biosensor. Outgoing like singing, always love life. I am interested in the intersection of food science and biology science. Because of my outgoing personality and the trust of the team, I participated in the experimental group, hp group and Wiki group.',
    },
    {
      name: 'Xinling Shen',
      imageUrl: 'https://static.igem.wiki/teams/5432/member/xinlingshen.jpg',
      description: 'I am a third-year student majoring in Biomedical Science. I want to travel the world, see different landscapes, experience diverse customs and cultures, and meet different people.',
    },
    {
      name: 'Xiran Yang',
      imageUrl: 'https://static.igem.wiki/teams/5432/member/xiranyang.jpg',
      description: 'I am Xiran Yang, a level 22 student, responsible for modeling and poster design. I enjoy doing handicrafts, listening to music, and drawing. My life goal is to become a wealthy woman!',
    },
    {
      name: 'QinYue Zhang',
      imageUrl: 'https://static.igem.wiki/teams/5432/member/qinyuezhang.jpg',
      description: 'Visual Communication student, responsible for IP and visual presentation of posters',
    },
    {
      name: 'Linjie Ji',
      imageUrl: 'https://static.igem.wiki/teams/5432/member/linjieji.jpg',
      description: 'I am Linjie Ji. Currently, I am a senior student at East China University of Science and Technology. In the project, I actively participate in promoting tasks. During the exploration process, I deeply feel the infinite charm of knowledge. I think I am a person full of curiosity and perseverance. When facing study and work, I will be serious and treat every task meticulously. I hope to contribute my strength to the project so that our project can contribute to the development of fish vaccines. At the same time, I also hope to continuously challenge myself, go to more places, experience different cultures, and make my life more colorful.',
    },
    {
      name: 'Yao Liu',
      imageUrl: 'https://static.igem.wiki/teams/5432/member/yaoliu.jpg',
      description: 'I am a typical Taurus and an ISFJ, which allows me to engage well in resource management within the team. I have a great fondness for synthetic biology; the ability to conduct molecular-level operations within a small Eppendorf tube fascinates me. This fascination has led me to greatly look forward to participating in the iGEM competition, where I hope to learn more. I tend to warm up slowly, and since biological experiments often have lengthy cycles, this aligns well with my personality and has made me increasingly reliant on the various aspects of lab work. I believe that as I delve deeper into my studies, I will become a better person.',
    },
    {
      name: 'Linguo Jin',
      imageUrl: 'https://static.igem.wiki/teams/5432/members/linguojin.jpg',
      description: 'My name is Linguo Jin, 21 years old. I am a third year undergraduate student majoring in Industrial Design at the School of Art Design and Media, East China University of Science and Technology. I enjoy fitness, piano, and art design, and my academic performance has always been at the top of my class. I have received the Shanghai Scholarship and the first-class special scholarship from the university. In terms of professional ability, I am proficient in the process of graphic design, product design, as well as various design software and office software. I have participated in design innovation competitions multiple times and have rich practical experience.',
    },
    {
      name: 'Shuman Ren',
      imageUrl: 'https://static.igem.wiki/teams/5432/member/shumanren.jpg',
      description: 'A 22-year-old industrial design student, member of a design team, skilled in Photoshop and photography. In my free time, I enjoy exploring, making friends, listening to rock music, and dancing hip-hop. As a result, I volunteer as a photographer at various music festivals and dance events. My life goal is to raise a glass to make friends and put it down to focus on my profession.',
    },
    {
      name: 'Yufeng Han',
      imageUrl: 'https://static.igem.wiki/teams/5432/member/yufenghan.jpg',
      description: 'I am a freshman majoring in biomedicine, responsible for the work of the experimental group, data investigation, and PPT production in the team. I have a wide range of hobbies and a lively and outgoing personality. My life goal is to do something for the virtuous society.',
    },
  ];

  const instructors = [
    {
      name: 'Qiyao Wang',
      imageUrl: 'https://static.igem.wiki/teams/5432/members/qiyaowang.jpg',
      description: 'Ph.D. Research areas: researches on pathogenic mechanism of pathogenic bacteria in marine animals.',
    },
    {
      name: 'Youyuan Li',
      imageUrl: 'https://static.igem.wiki/teams/5432/members/youyuanli.jpg',
      description: 'Ph.D. Many papers were published on journals of bioinformatics. Research areas: Fermentation process optimization and microbial metabolic regulation research, proteomics research.',
    },
    {
    name: 'Yue Ma',
    imageUrl: 'https://static.igem.wiki/teams/5432/members/yuema.jpg',
    description: 'Ph.D., Associate Professor of Biochemical Engineering. Research directions : 1.Molecular pathogenic mechanism of pathogenic microorganisms and VBNC mechanism. The molecular mechanism of multi-pathogen co-infection in aquatic animals. 3.Development of vaccine intelligent manufacturing technology and formulation of industrial standards.',
    },
    {
name: 'Pengfei Li',
  imageUrl: 'https://static.igem.wiki/teams/5432/members/pengfeili.jpg',
    description: 'Lecturer. The research interest includes biosensors, especially electrochemical biosensor, colorimetric biosensor, nano-based biosensor; biological analysis, mainly towards disease marker proteins, DNA and cells with clinical implications.',
    },
    {
name: 'Shuhong Gao',
  imageUrl: 'https://static.igem.wiki/teams/5432/members/shuhonggao.jpg',
    description: 'Ph.D. Research areas: Microbial fermentation optimization and metabolic regulation, exogenous expression and directional transformation of enzymes.',
    },
    {
name: 'Jiaofang Huang',
  imageUrl: 'https://static.igem.wiki/teams/5432/members/jiaofanghuang.jpg',
    description: 'Ph.D., doctoral supervisor. Research directions : Synthetic biological modification of microorganisms and their biofilms, construction of living materials and their application in the fields of environment and medicine.',
    },
    {
name: 'Shuai Shao',
  imageUrl: 'https://static.igem.wiki/teams/5432/members/shuaishao.jpg',
    description: 'Ph.D., Lecturer, Master Supervisor. Research direction : . 1.Based on multi-omics technology, the interaction mechanism between intestinal pathogenic bacteria and host during infection was studied, especially the molecular mechanism of pathogen type III secretion system ( T3SS ) -mediated metabolic perception, metabolic utilization and escape of nutritional immunity.',
    },
    {
name: 'Jianhua Fan',
  imageUrl: 'https://static.igem.wiki/teams/5432/members/jianhuafan.jpg',
    description: 'Ph.D., Associate Professor. He conducts basic and applied basic research on bioactive substances of eukaryotic microalgae, cyanobacteria and other photosynthetic microorganisms.',
    },
    {
name: 'Peng Zuo',
  imageUrl: 'https://static.igem.wiki/teams/5432/members/pengzuo.jpg',
    description: 'Ph.D., Associate Professor. Research areas: Constructions and applications of nano-enhanced signal amplification systems, the construction of enzyme-catalyzed signal amplification methods, and the construction and application of nano-functionalized microfluidic systems.',
    },
    {
name: 'Yibei Zhang',
  imageUrl: 'https://static.igem.wiki/teams/5432/members/yibeizhang.jpg',
    description: 'Ph.D., lecturer. Research directions: 1. Molecular pathogenesis of pathogens. 2. Development of rapid detection and diagnosis technology of pathogenic bacteria.',
    },
    {
name: 'Mian Zhou',
  imageUrl: 'https://static.igem.wiki/teams/5432/members/mianzhou.jpg',
    description: 'Ph.D., Associate Professor. The research results are published on influential journals such as Nature, Molecular Microbiology, and EMBO Reports. Research areas: Studies of the effects of codon usage on protein expression, folding, and function.',
    },
    {
name: 'Hui Wu',
  imageUrl: 'https://static.igem.wiki/teams/5432/members/huiwu.jpg',
    description: 'Ph.D., Associate Professor, the deputy director of China Light Industry Bio-based Materials Engineering Key Laboratory. He has published many papers on Metabolic Engineering, Biotechnology Advances, ACS Synthetic Biology as the first author or correspondent author.',
    },
    {
name: 'Xiao Wu',
  imageUrl: 'https://static.igem.wiki/teams/5432/members/xiaowu.jpg',
    description: 'Xiao Wu, a doctoral student majoring in Bioengineering at the School of Bioengineering in 2023, is a member of the Communist Party of China, a member of the 21st Graduate Teaching Support Team, a recipient of the Jiangxi Building Materials Innovation Scholarship, and an outstanding Communist Party member of East China University of Science and Technology in 2022. Has won the National Scholarship, Angel Yeast Talent Scholarship, and the National Gold Award of the China International College Student Innovation Competition (2023). Served as the first person in charge of a national level innovation project, participated in science and technology innovation competitions such as the Zhixing Cup and Challenge Cup, and won 2 national level awards, 2 provincial level awards, and 4 municipal level awards. As the secretary of the graduate student party branch of Ahua Institute, he led the branch to be awarded the title of "Excellent Student Cadre", "Excellent Social Work Award", "Excellent Communist Youth League Cadre" and other honorary titles for two consecutive years.',
    },
    {
name: 'Boya Zhang',
  imageUrl: 'https://static.igem.wiki/teams/5432/members/boyazhang.jpg',
    description: 'Boya Zhang, currently a graduate student in the second doctoral program, has been studying the pathogenic mechanism of pathogenic bacteria infection in the host, hoping to explore disease drug targets and new vaccine target screening. I was the Wiki leader of the last IGEM competition in our school, while taking care of the experimental group tasks and related content writing. Help members solve the problems in the experiment during this competition schedule.',
    },
    {
name: 'Yue Peng',
  imageUrl: 'https://static.igem.wiki/teams/5432/members/yuepeng.jpg',
    description: 'Microbiology PhD with expertise in bioinformatics and machine learning, providing techincal support for this task.',
    },
    
  ];

return (
  <div className="members-container" style={{ overflowY: 'auto', height: '100vh' }}>
    <div className="full-width-image">
      <img src="https://static.igem.wiki/teams/5432/members/members01.jpg" alt="Members" />
    </div>

    <div className="content4">
      <div className="meet-the-team-title">Meet the Team</div>

      <div className="centered-image">
        <img src="https://static.igem.wiki/teams/5432/members/members02.jpg" alt="成员" />
      </div>
      <div className="meet-the-team-text">
        We are a team composed of undergraduate students from East China University of Science and Technology, dedicated instructors in their respective fields, and senior students. We all have a strong interest in life sciences and a passion for exploring the unknown. Therefore, through our efforts, we have reorganized our team after two years to participate in the iGEM competition, working together to pursue this shared and exciting goal.
      </div>

      <div className="meet-the-team-title">Members</div>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div className="member-name">{member.name}</div>
            <div className="member-image">
              <img src={member.imageUrl} alt={member.name} />
              <div className="member-description">{member.description}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ height: '20px' }}></div> {/* 这是两张图片之间的空行，可以调整高度 */}

      <div className="meet-the-team-title">Instructors</div>

      <div className="instructors-grid">
        {instructors.map((instructor, index) => (
          <div key={index} className="instructor-item">
            <img src={instructor.imageUrl} alt={instructor.name} className="instructor-image" />
            <div className="instructor-info">
              <div className="instructor-name">{instructor.name}</div>
              <div className="instructor-description">{instructor.description}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="meet-the-team-title">Vibes</div>

      <div className="centered-image">
        <img src="https://static.igem.wiki/teams/5432/members/members03.jpg" alt="成员" />
      </div>
    </div>
  </div>
);
}
