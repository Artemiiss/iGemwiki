import { stringToSlug } from "../utils";

export function Footer() {
  const teamYear = import.meta.env.VITE_TEAM_YEAR;
  const teamName = import.meta.env.VITE_TEAM_NAME;
  const teamSlug = stringToSlug(teamName);

  return (
    <footer className="footer-container">
      <div className="image-container">
        <img
          src="https://static.igem.wiki/teams/5432/footerbackground.png"
          alt="Footer Background"
          className="footer-background"
        />
        <a href="https://space.bilibili.com/306484373" target="_blank" rel="noopener noreferrer">
          <img
            src="https://static.igem.wiki/teams/5432/footerbilibili.png"
            alt="Bilibili"
            className="footer-icon"
            style={{ top: '40%', right: '17%', width: '2%', height: 'auto' }}  // 调整图标大小和位置
          />
        </a>
        <a href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzkzNjYwNDI4OQ==&scene=124#wechat_redirect" target="_blank" rel="noopener noreferrer">
          <img
            src="https://static.igem.wiki/teams/5432/footerwechat.png"
            alt="WeChat"
            className="footer-icon"
            style={{ top: '40%', right: '20%', width: '2%', height: 'auto' }}  // 调整图标大小和位置
          />
        </a>
        <a href="https://www.ecust.edu.cn/en/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://static.igem.wiki/teams/5432/fotterecust.png"
            alt="ECUST"
            className="footer-icon"
            style={{ top: '10%', left: '40%', width: '23%', height: 'auto' }}  // 调整图标大小和位置
          />
        </a>
        <a href="https://biotech.ecust.edu.cn" target="_blank" rel="noopener noreferrer">
          <img
            src="https://static.igem.wiki/teams/5432/footersob.png"
            alt="School of Biotechnology"
            className="footer-icon"
            style={{ top: '45%', left: '40%', width: '23%', height: 'auto' }}  // 调整图标大小和位置
          />
        </a>
        <div className="footer-content">
  <p className="footer-text">
    © 2024 - Content on this site is licensed under a{" "}
    <a
      className="subfoot"
      href="https://creativecommons.org/licenses/by/4.0/"
      rel="license"
    >
      Creative Commons Attribution 4.0 International license
    </a>
    .
  </p>
  <p className="footer-text">
    The repository used to create this website is available at{" "}
    <a href={`https://gitlab.igem.org/${teamYear}/${teamSlug}`}>
      gitlab.igem.org/{teamYear}/{teamSlug}
    </a>
  </p>
</div>


      </div>



    </footer>
  );
}
