import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { Footer, Navbar, NotFound } from "../../components"; // 移除 Header 组件
import { getPathMapping, stringToSlug } from "../../utils";
import { useEffect, useState } from "react";
import "./App.css";
import Loading from '../../components/Loading';

const App = () => {
  const [isLoading, setIsLoading] = useState(true); // 加载状态
  const pathMapping = getPathMapping();
  const currentPath =
    location.pathname
      .split(`/${stringToSlug(import.meta.env.VITE_TEAM_NAME)}`)
      .pop() || "/";
      
  // Set Page Title
  const title =
    currentPath in pathMapping ? pathMapping[currentPath].title : "Not Found";

    useEffect(() => {
      document.title = `${title || ""} | ${import.meta.env.VITE_TEAM_NAME} - iGEM ${import.meta.env.VITE_TEAM_YEAR}`;
    }, [title]);

  useEffect(() => {
    document.title = `${title || ""} | ${import.meta.env.VITE_TEAM_NAME} - iGEM ${import.meta.env.VITE_TEAM_YEAR}`;

    const timer = setTimeout(() => {
      setIsLoading(false); // 加载完成后设置为 false
    }, 3000);

    return () => clearTimeout(timer); // 清理定时器
  }, [title]);

  return (
    <>
      {/* 加载动画 */}
      {isLoading && <Loading />} {/* 显示加载动画组件 */}

      {/* App 内容 */}
      <div className={`App ${isLoading ? 'hidden' : ''}`}>
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <div className="content-container">
          <main className="main-content">
            <Routes>
              {Object.entries(pathMapping).map(
                ([path, { component: Component,name: componentName }]) => (
                  <Route
                    key={path}
                    path={path}
                    element={
                      <>
                        {/* 移除 Header */}
                        {componentName === "Home" || componentName === "Software&AI" ? (
                          <Component />
                        ) : (
                          <div className="container">
                            <Component />
                          </div>
                        )}
                      </>
                    }
                  />
                )
              )}
              <Route
                path="*"
                element={
                  <>
                    {/* 移除 Header */}
                    <NotFound />
                  </>
                }
              />
            </Routes>
          </main>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default App;
