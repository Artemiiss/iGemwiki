import { useEffect, useState } from 'react';

interface ScrollModuleProps {
  sections: { title: string; id: string }[];
}

// 手动实现 throttle
function throttle(fn: Function, delay: number) {
  let lastCall = 0;
  return function (...args: any) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  };
}
let lockScroll = false

export function ScrollModule({ sections }: ScrollModuleProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const getClosestChildElement = (parentElement: HTMLElement) => {
    const children = parentElement.children;
    let closestElement = null;
    let closestDistance = Infinity;

    for (const child of children) {
      const distance = Math.abs(child.getBoundingClientRect().top - parentElement.getBoundingClientRect().top);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestElement = child;
      }
    }
    return closestElement;
  };
  useEffect(() => {
    const parentElement: HTMLElement = document.getElementById('content') as HTMLElement;

    const handleScroll = () => {
      const closestChild = getClosestChildElement(parentElement as HTMLElement);
      if (closestChild) {
        if (lockScroll) {
          return
        }
        console.log(lockScroll, 'lockScroll')
        setActiveSection(closestChild.id)
      }
    };

    parentElement.addEventListener('scroll', handleScroll);

    // 在组件卸载时移除事件监听器
    return () => {
      parentElement.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleScroll = throttle(() => {
      let currentSection: string | null = null;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // 检测部分在可视区域
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
            currentSection = section.id;
          }
        }
      });

      setActiveSection(currentSection);
    }, 100); // 100ms 节流

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);
  const scrollToChild = (parentId:string, childId: string) => {
    const parentElement = document.getElementById(parentId);
    const childElement = document.getElementById(childId);

    if (parentElement && childElement) {
      parentElement.scrollTo({
        top: childElement.offsetTop - parentElement.offsetTop,
        behavior: 'smooth'  // 可以使用 'auto' 或 'smooth' 来控制滚动的动画
      });
    } else {
      console.error('无法找到指定的父级或子级元素');
    }
  }
  return (
    <div className="scroll-module">
      <div className="toc">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`toc-item scroll-tab-item ${activeSection === section.id ? 'left-module-active' : ''}`}
            onClick={() => {
              const element = document.getElementById(section.id);
              if (element) {
                setActiveSection(section.id)
                lockScroll = true
                setTimeout(() => {
                  lockScroll = false
                }, 500)
                scrollToChild('content', section.id)
                // element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            {section.title}
          </div>
        ))}
      </div>
    </div>
  );
}
