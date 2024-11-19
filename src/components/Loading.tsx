import { useEffect, useState } from 'react';

const Loading = () => {
  const [loading, setLoading] = useState(true); // 定义 loading 状态，初始为 true

  useEffect(() => {
    const handleImageLoad = () => {
      setLoading(false); // 图片成功加载后，设置 loading 为 false
    };

    const handleImageError = () => {
      console.error("Image failed to load.");
      // 图片加载失败时，可以保持 loading 为 true 或执行其他逻辑
    };

    // 获取所有图片元素
    const images = document.querySelectorAll('img');

    let loadedImages = 0;
    images.forEach((img) => {
      if (img.complete) {
        loadedImages++;
      } else {
        img.addEventListener('load', handleImageLoad);
        img.addEventListener('error', handleImageError);
      }
    });

    if (loadedImages === images.length) {
      setLoading(false); // 如果页面上的图片已经全部加载完毕，则设置为 false
    }

    return () => {
      images.forEach((img) => {
        img.removeEventListener('load', handleImageLoad);
        img.removeEventListener('error', handleImageError);
      });
    };
  }, []);

  return (
    <div className="loading-overlay">
      {loading && (
        <img
          src="https://static.igem.wiki/teams/5432/loading.gif"
          alt="Loading..."
          className="loading-gif"
        />
      )}
    </div>
  );
};

export default Loading;
