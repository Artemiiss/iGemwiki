export function Notebook() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      overflow: 'auto', 
      alignItems: 'center', 
      padding: '20px', 
       scrollbarWidth: 'none', // 针对 Firefox
      height: '100vh' // 设置外层容器的高度
    }}>
      <div style={{ 
        margin: '20px 0', 
        width: '100%', 
        maxWidth: '600px', 
        border: '1px solid #ccc' 
      }}>
        <iframe 
          src="https://static.igem.wiki/teams/5432/results/ecust-igem-experiment-records.pdf" 
          width="100%" 
          height="400px" 
          title="实验记录"
        >
          该浏览器不支持 PDF 文件预览，请点击<a href="https://static.igem.wiki/teams/5432/results/ecust-igem-experiment-records.pdf">这里下载 PDF</a>。
        </iframe>
      </div>
      
      <div style={{ 
        margin: '20px 0', 
        width: '100%', 
        maxWidth: '600px', 
        border: '1px solid #ccc' 
      }}>
        <iframe 
          src="https://static.igem.wiki/teams/5432/results/ecust-igem-protocol.pdf" 
          width="100%" 
          height="400px" 
          title="实验协议"
        >
          该浏览器不支持 PDF 文件预览，请点击<a href="https://static.igem.wiki/teams/5432/results/ecust-igem-protocol.pdf">这里下载 PDF</a>。
        </iframe>
      </div>
    </div>
  );
}
