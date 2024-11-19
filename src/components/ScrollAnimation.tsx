import "/src/containers/App/ScrollAnimation.css";
import React, {useCallback, useEffect, useRef, useState} from 'react';

interface LoadingBarProps {
    rate?: string
}

interface BackgroundProps {
    start?: () => void
}


const LoadingBar = (props: LoadingBarProps) => {
    return (
        <div className="progress" style={{
            height: '2rem',
            position: 'fixed',
            zIndex: 999,
            width: '200px',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            margin: 'auto'
        }}>
            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                 style={{width: props.rate}}></div>
        </div>
    );
};
const Background = (props: BackgroundProps) => {
    const backgroundImage = [
        'https://static.igem.wiki/teams/5432/new-home/tap/background.png',
        'https://static.igem.wiki/teams/5432/new-home/tap/1.png',
        'https://static.igem.wiki/teams/5432/new-home/tap/2.png',
        'https://static.igem.wiki/teams/5432/new-home/tap/3.png',
    ]
    const [buttonIsHide, setButtonIsHide] = useState(false)
    setInterval(() => {
        setButtonIsHide((prevState) => {
            return !prevState;
        })
    }, 2000)
    return (
        <div className="background" style={{
            height: '100%',
            position: 'absolute',
            zIndex: 999,
            width: '100%',
            left: 0,
            top: 0,
        }}>
            {
                backgroundImage.map((image, i) => (
                    <img src={image} className={'background-image-' + i} alt="" key={i}/>))
            }
            <div className={`click-button ${buttonIsHide ? 'hide' : ''}`} onClick={props.start}>Tap Here</div>
        </div>
    );
};
const VideoImagePage: React.FC = () => {
    const [animationStep, setAnimationStep] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [loadImage, setLoadImage] = useState(0);
    const images = Array.from({length: 600}, (_, i) => `https://static.igem.wiki/teams/5432/home-102/${String(i + 1).padStart(3, '0')}.png`);
    const  secImages = Array.from({length: 529}, (_, i) => `https://static.igem.wiki/teams/5432/new-home/home5-8-1/${String(i + 1).padStart(3, '0')}.png`);
    const  home9 = Array.from({length: 302}, (_, i) => `https://static.igem.wiki/teams/5432/new-home/home9-12/${String(i + 1).padStart(3, '0')}.png`);
    const  will = Array.from({length: 285}, (_, i) => `https://static.igem.wiki/teams/5432/will/${i + 1}.png`);
    images.push(...secImages)
    images.push(...home9)
    images.push(...will)
    const imageRef = useRef<HTMLImageElement | null>(null);
    let playEndIndex = images.length - 1
    // let nextStepTimer: number = 0
    // let playTimer: NodeJS.Timeout | number
    // const [playTimer, setPlayTimer] = useState<NodeJS.Timeout | null | number>(null);
    // const [loadDoneImage, setLoadDoneImage] = useState(0);
    const [loadingShow, setLoadingShow] = useState(true);
    const [tipsIsHide, setTipsIsHide] = useState(true)
    const [animationContentHide] = useState(false)
    let tipsIsHideTimer: NodeJS.Timeout | number
    let handleScrollLock = false
    // let cutImageTime = 26
    const virImage = [
        'https://static.igem.wiki/teams/5432/new-home/home1-4/1.png',
        'https://static.igem.wiki/teams/5432/new-home/home1-4/2.png',
        'https://static.igem.wiki/teams/5432/new-home/home1-4/3.png',
        'https://static.igem.wiki/teams/5432/new-home/home1-4/4.png',
    ]
    const virZoomImage = [
        '',
        'https://static.igem.wiki/teams/5432/new-home/home1-4/11.png',
        'https://static.igem.wiki/teams/5432/new-home/home1-4/22.png',
        'https://static.igem.wiki/teams/5432/new-home/home1-4/33.png',
        'https://static.igem.wiki/teams/5432/new-home/home1-4/44.png',
    ]
    const virItemClassName = [
        'left-top',
        'right-top',
        'left-bottom',
        'right-bottom',
    ]
    const  [virIntroDisplay, setVirIntroDisplay]= useState(0)
    const  [gifshow, setGifshow]= useState(0)
    // const  [gifFirstshow, setgifFirstshow]= useState(0)
    const scrollSign = useRef('next');
    const goNextStep = () => {

        setAnimationStep(prevIndex => {
            console.log('播放到第：' + (prevIndex + 1))
            return prevIndex + 1
        });
    }
    const goForwardStep = () => {
        console.log("上一步")
        setAnimationStep(prevIndex => {
            return prevIndex - 1
        });
    }
    const handleScroll = useCallback((event: WheelEvent) => {
        event.preventDefault();
        if (handleScrollLock) {
            return;
        }
        handleScrollLock = true;

        if (event.deltaY > 0) {
            scrollSign.current = 'next'
            // 向上滚动
            goNextStep()
        } else {
            scrollSign.current = 'forward'
            // 向下滚动
            goForwardStep()
        }

        setTimeout(() => {
            handleScrollLock = false;
        }, 1300);
    }, [handleScrollLock]);
    const playImage = () => {
        const timer = setTimeout(playImage, 36);
        console.log("执行", scrollSign.current)
        setCurrentImageIndex(prevIndex => {
            if (scrollSign.current === 'next') {
                if (prevIndex >= playEndIndex) {
                    clearTimeout(timer)
                    console.log("播放结束", prevIndex)
                    return prevIndex
                }
                return prevIndex + 1
            }
            if (scrollSign.current === 'forward') {
                if (prevIndex <= playEndIndex) {
                    clearTimeout(timer)
                    console.log("播放结束", prevIndex)
                    return prevIndex
                }
                return prevIndex - 1
            }
            return prevIndex
        });
    }
    useEffect(() => {
        const animationStepMap: { [key: number | string]: number } = {
            1: 223,
            2: 234,
            3: 250,
            4: 264,
            5: 282,
            6: 297,
            7: 312,
            8: 349,
            9: 376,
            10: 599,
            11: 599 + 95,
            12: 599 + 170,
            13: 599 + 240,
            14: 599 + 310,
            15: 599 + 370,
            16: 599 + 430,
            17: 599 + 490,
            18: 599 + 529,
            19: 599 + 529 + 80,
            20: 599 + 529 + 100,
            21: 599 + 529 + 210,
            22: 599 + 529 + 235,
            23: 599 + 529 + 302,
            24: 599 + 529 + 302 + 70,
            25: 599 + 529 + 302 + 135,
            26: 599 + 529 + 302 + 165,
            27: 599 + 529 + 302 + 195,
            28: 599 + 529 + 302 + 225,
            29: 599 + 529 + 302 + 255,
            30: 599 + 529 + 302 + 285,
            31: 599 + 529 + 302 + 285 + 1,
        }
        if (!animationStep) {
            return
        }
        playEndIndex = animationStepMap[animationStep] || images.length
        console.log("步数变化，图片播放到:", playEndIndex)


        playImage()
    }, [animationStep]);

    useEffect(() => {
        // window.addEventListener('wheel', handleScroll, {passive: false});

        return () => {
            window.removeEventListener('wheel', handleScroll );
            console.log("removeEventListener")
        };
    }, []);
    useEffect(() => {
        console.log("当前图片改变", currentImageIndex)
        if (currentImageIndex === 223) {
            clearInterval(tipsIsHideTimer)
            setTimeout(() => {
                setTipsIsHide((prevState) => {
                    return !prevState;
                })
                tipsIsHideTimer = setInterval(() => {
                    setTipsIsHide((prevState) => {
                        return !prevState;
                    })
                }, 2000)
            }, 1000)

        }
        // if (currentImageIndex === 304) {
        //     setTimeout(() => {
        //         goNextStep()
        //     }, 1000)
        // }
        // if (currentImageIndex === 315) {
        //     setTimeout(() => {
        //         goNextStep()
        //     }, 1000)
        // }
        // if (currentImageIndex === 404) {
        // }
        // if (currentImageIndex === 749 + 529) {
        //     console.log("移除监听")
        //     window.removeEventListener('wheel', handleScroll );
        // }
    }, [currentImageIndex]);
    const startPlay = () => {
        setAnimationStep(1)
    }
    const backgroundClickStart = () => {
        console.log("点击开始")
        window.addEventListener('wheel', handleScroll, {passive: false});
        setLoadingShow(false)
        startPlay()
    }
    const handleImageLoad = () => {
        setLoadImage((prevState) => {
            console.log( prevState + 1 + "张图片加载完成")
            return prevState + 1
        })
        if (loadImage === 750) {
            // setLoadDoneImage((prevState) => {
            //     const newState = prevState + 1
            //     return newState
            // })
        }

        // if (loadDoneImage === images.length) {
        //     console.log(images.length + "张图片加载完成")
        //     startPlay()
        // }
    }
    const handleVideo10Ended = () => {
        goNextStep()
    }

    const handleVideo12Ended = () => {
        // setAnimationContentHide(true)
        goNextStep()
    }

    return (
        <div className={`animation-content ${animationContentHide ? 'hide' : ''}`}>
            {false && <LoadingBar rate={((loadImage / images.length) * 100) + '%'}/>}
            {loadingShow && <Background start={backgroundClickStart}/>}
            <img className={`display-image`}
                 ref={imageRef} src={currentImageIndex > (images.length - 1) ? images[images.length - 1] : images[currentImageIndex]}
                 alt={`Image ${currentImageIndex + 1}`}/>
            {
                currentImageIndex >= 599 + 529 + 302 &&  <img className={`display-image last-display-image ${currentImageIndex === 599 + 529 + 302 + 285 + 1 ? 'show': ''}`}
                     src="https://static.igem.wiki/teams/5432/new-home/finish/finish.png"
                     alt={`Image Last`}/>
            }
            {currentImageIndex === 223 &&
                <p className={`scroll-tips ${tipsIsHide ? '' : 'show'}`}>Scroll to keep the turbot swimming！</p>}
            {currentImageIndex === 599 && <div className="vir-intro-box">
                <img className={`display-image`}
                     src={virIntroDisplay ? virZoomImage[virIntroDisplay] : images[599]}
                     alt={`Image ${currentImageIndex + 1}`}/>
                {virItemClassName.map((v, vindex) => {
                    return (
                        <p className={`${v} vir-item`}
                           key={vindex}
                           onMouseLeave={() => {
                               setVirIntroDisplay(0)
                           }}
                           onMouseEnter={() => {
                               setVirIntroDisplay(vindex + 1)
                           }}></p>
                    )
                })}
                {virImage.map((img, index) => {
                    return (
                        <img src={img} key={index} alt=""
                             className={`display-image vir-item-intro-img vir-item-intro-img-${index + 1} ${virIntroDisplay === (index + 1) ? 'show' : ''}`}/>
                    )
                })}
            </div>}
            {
                currentImageIndex >= 234 && currentImageIndex <= 375 &&
                <img className="fish-gif return-gif" src="https://static.igem.wiki/teams/5432/new-home/fish/return.gif"
                     alt=""/>
            }
            {
                currentImageIndex >= 600 && !gifshow &&
                <img className="fish-gif" src="https://static.igem.wiki/teams/5432/new-home/fish-1/fish.gif"
                     onLoad={() => {
                         setTimeout(() => {
                             setGifshow(1)
                         }, 2500)
                     }} alt=""/>
            }
            {
                gifshow && currentImageIndex <= 599 + 529 + 235 &&
                <img className="fish-gif return-gif" src="https://static.igem.wiki/teams/5432/new-home/fish/return.gif"
                     alt=""/>
            }
            {
                currentImageIndex === 1208 && <video
                    onEnded={handleVideo10Ended}
                    autoPlay={true}
                    className="home-video"
                    src="https://video.igem.org/download/streaming-playlists/hls/videos/f8449235-b0e4-47d6-8f27-b24ae0058d14-1576-fragmented.mp4"></video>
            }
            {
                currentImageIndex === 1338 && <video autoPlay={true} className="home-video home-11-video"
                                                                  src="https://video.igem.org/download/web-videos/cb8728ec-f58c-4177-9806-fab140c5b2e5-1400.mp4"></video>
            }
            {
                currentImageIndex === 1430 && <video
                    onEnded={handleVideo12Ended}
                    autoPlay={true} className="home-video home-12-video"
                                                                  src="https://video.igem.org/download/streaming-playlists/hls/videos/1654cb76-089f-44f3-946c-e9a0fb7a3516-1080-fragmented.mp4"></video>
            }
            <div className="hide-image">
                {images.map((img, index) => {
                    return (
                        <img src={img} alt="" key={index} onError={() => handleImageLoad()}
                             onLoad={() => handleImageLoad()}/>
                    )
                })}
            </div>

            <div className="hide-image">
                {virZoomImage.map((img, index) => {
                    return (
                        <img src={img} alt="" key={index + 'zoom'} onError={() => handleImageLoad()}
                             onLoad={() => handleImageLoad()}/>
                    )
                })}
            </div>
            <div className="hide-image">
                {['https://static.igem.wiki/teams/5432/new-home/fish-1/fish.gif', 'https://static.igem.wiki/teams/5432/new-home/fish/return.gif'].map((img, index) => {
                    return (
                        <img src={img} alt="" key={index + 'zoom'} onError={() => handleImageLoad()}
                             onLoad={() => handleImageLoad()}/>
                    )
                })}
            </div>
        </div>
    );
};

export default VideoImagePage;
