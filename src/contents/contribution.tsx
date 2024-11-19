import { ScrollModule } from '../components/ScrollModule';

const sections = [
    { title: 'Introduction', id: 'Introduction' },
    { title: 'Campus clubs', id: 'clubs' },
    { title: 'Public outreach and activities', id: 'activities' },
    { title: '3D printing ', id: '3D' },
];

export function contribution() {
    return (
        <div className="content-container2">
            <ScrollModule sections={sections} />
            <div className="content" id="content">
                <section id="Introduction">
                    <h2>Introduction</h2>
                    <p>
                        Our team has experienced a vibrant year during which we collectively worked hard to complete the entire project. Throughout this process, we identified several areas where we excelled, from which other teams could draw valuable lessons. We have categorized these insights into the following three points.</p>

                </section>

                <section id="clubs">
                    <h2>Campus clubs</h2>
                    <p>
                        Due to the pandemic and other factors, our school has been unable to participate in iGEM for the past two years, which has been a significant regr6et for us. This year, when we announced our intention to resume participation, it generated tremendous interest. We have established clubs and associations related to iGEM within the school to ensure the continuous promotion of iGEM and synthetic biology. These efforts, along with the activities we organized, have sparked a strong interest in synthetic biology among students and a keen desire to participate in iGEM.<br />
                        Through iGEM-related clubs, we have helped many students within the school find their preferred academic and research directions. We frequently organize reading and study sessions focused on cutting-edge literature related to our topics, and we optimize our experiments to allow interested students to learn and participate. We also established a synthetic biology salon, inviting distinguished researchers to engage with students in discussing intriguing topics.<br />
                        We believe that establishing a club based on the competition team can inspire many other teams. This not only facilitates more effective integrated human practices but also encourages more aspiring individuals to engage in biology and iGEM, allowing them to gain new insights about their projects through discussions.
                    </p>

                </section>

                <section id="activities">
                    <h2>Public outreach and activities</h2>
                    <p>
                        We have conducted multi-faceted and multi-level promotional activities. We established clubs and associations related to iGEM within the school and regularly held events and lectures. Additionally, we organized activities where experienced team members mentored younger students in conducting research projects. We also engaged in ecological practices, biology education outreach, and more. Our efforts include explaining biological knowledge to the general public, primarily focusing on our projects. After each event, we gather participant feedback for further improvements. These initiatives have garnered strong support from various colleges within the school and have made a notable impact in the community.<br />
                        We conducted numerous collaborative activities with the College of Bioengineering and the School of Pharmacy to foster students' interest in biology and enhance their understanding and mastery of biological skills. We organized research activities in conjunction with the college to improve the undergraduate education training system. Additionally, we encouraged team members to participate in the teaching and research activities of our faculty and supported students in becoming teaching assistants, providing practical examples to assist instructors in their teaching.<br />
                        We believe these initiatives can inspire other teams to better leverage their school's resources.
                    </p>

                </section>


                <section id="3D">
                    <h2>3D printing</h2>
                    <p>
                        Our school's team has a longstanding tradition of designing hardware for our own projects, and this year is no exception. Based on site visits to existing fish farming companies and factories, we combined our project's requirements with potentially applicable technologies to design a futuristic flatfish farming facility. We created a model of this design using 3D printing, and the relevant design details can be found on our hardware page. We hope these details will be helpful for future teams looking to design 3D-printed solutions.<br />
                        We believe that utilizing 3D printing technology to visualize many abstract concepts can effectively elucidate these ideas.
                    </p>

                </section>

            </div>
        </div>
    );
}
