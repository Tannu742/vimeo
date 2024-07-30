import React, { useEffect, useRef } from 'react';
import { faArrowRight, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import back from '../../assets/img/back.avif';
import img1 from '../../assets/img/1.avif';
import img2 from '../../assets/img/2.avif';
import img3 from '../../assets/img/3.avif';
import img4 from '../../assets/img/4.avif';
import img5 from '../../assets/img/5.avif';
import scroll1 from '../../assets/img/scroll1.avif';
import scroll2 from '../../assets/img/scroll2.avif';
import scroll3 from '../../assets/img/scroll3.avif';
import scroll4 from '../../assets/img/scroll4.avif';
import scroll5 from '../../assets/img/scroll5.avif';
import scroll6 from '../../assets/img/scroll6.avif';
import scroll7 from '../../assets/img/scroll7.avif';
import scroll8 from '../../assets/img/scroll8.avif';
import Video from '../../components/videoPlatform';
import Discover from '../../components/discover';
import dis1 from '../../assets/img/dis1.avif';
import dis2 from '../../assets/img/dis2.avif';
import dis3 from '../../assets/img/dis3.avif';
import Slider from '../../components/slider';
import Button from '../../components/button';

const videoList = [
    {
        id: 1,
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        poster: 'https://i.vimeocdn.com/custom_asset/3b519a6d03c716419d34270adc3a7889?w=1408&q=80',
    },
    {
        id: 2,
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        poster: 'https://i.vimeocdn.com/custom_asset/3cb41dceafd91acc5f09269d42abff7d?w=1408&q=80',
    },
    {
        id: 3,
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        poster: 'https://i.vimeocdn.com/custom_asset/e0dab8beb6c817de5b52637aae31b7c1?w=1408&q=80',
    },
];

const slider = [
    {
        id: 1,
        src: img1
    }, {
        id: 2,
        src: img2
    }, {
        id: 3,
        src: img3
    }, {
        id: 4,
        src: img4
    }, {
        id: 5,
        src: img5
    }
]
const sliderSecond = [
    {
        id: 1,
        src: scroll1
    },
    {
        id: 2,
        src: scroll2
    }, {
        id: 3,
        src: scroll3
    }, {
        id: 4,
        src: scroll4
    }, {
        id: 5,
        src: scroll5
    }, {
        id: 6,
        src: scroll6
    }, {
        id: 7,
        src: scroll7
    }, {
        id: 8,
        src: scroll8
    }
]
const cards = [
    { id: 1, img: dis1, head: 'spring 2024 Release', describe: 'Explore our new and updated features' },
    { id: 2, img: dis2, head: 'Vimeo Central', describe: 'Meet Vimeo Central: Our secure, Al-powered video hub' },
    { id: 3, img: dis3, head: 'Resources', describe: 'Better way to Work Guide' }
];
const Home = () => {
    const videoItems = useRef([]);

    useEffect(() => {
        if (videoItems.current.length) {
            videoItems.current.forEach(el => {
                el.addEventListener('mouseover', function () {
                    videoItems.current.forEach(el => el.classList.remove('isActive'));
                    this.classList.add('isActive');
                });
            });
        }
    }, [videoItems]);

    return (
        <>
            <div className='home container'>
                <div className='row text-align-center'>
                    <h1>Do more with video</h1>
                    <p>Meet the complete video platform transform the way you do business.</p>
                </div>
                <div className='dFlex middle place-content-center'>
                    <Button head={'See plans'} classname={'homeBtn'}/>
                    <Button head={'join for free'} classname={'homeBtn1'}/>
                </div>
            </div>
            <section className='playVideo'>
                <div className='container'>
                    <video autoPlay muted loop src="https://player.vimeo.com/progressive_redirect/playback/938226648/rendition/1080p/file.mp4?loc=external&signature=b1d907631c774c4dba6d9b4530f6db8ea5be4d9e5225df477b2b16dba0e080fb"></video>
                </div>
            </section>
            <section className='RequestDemo'>
                <div className='container positionRelative'>
                    <div className='row justify-content-center'>
                        <div className='col-8'>
                            <h2>Your full suite of video tools</h2>
                            <p>Get everything you need to edit, manage, and publish stunning videos that move the needle.</p>
                            <Button head={'request a demo'} classname={'requestBtn'}/>
                            {/* <div className='positionRelative btn3'>
                                <span>Request a Demo</span>
                                <div className='btn'>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
            <section className="trustedBusiness">
                <div className='container'>
                    <div className='text-align-center marginAuto col-7'>
                        <h2>Trusted by 287 million creatives,enterpreneurs, and businesses</h2>
                    </div>
                    <Slider imgs={slider} />
                </div>
            </section>
            <section className='videoPlatform'>
                <div className='container'>
                    <div className='row text-align-center'>
                        <h5>Home of the best video experiences on the internet</h5>
                        <h1>Your AI-powered video platform</h1>
                    </div>
                    <Video />
                </div>
            </section>
            <section className='logoScroll'>
                <div className='container'>
                    <div className='row text-align-center'>
                        <h2>Integrations with Vimeo</h2>
                        <h1> Streamline Your workflow </h1>
                    </div>
                    <div className='row positionRelative'>
                        <Slider imgs={sliderSecond} />
                    </div>
                    <Button head={'Request a Demo'} classname={'sliderRequestBtn'}/>
                    {/* <div className='positionRelative btn4'>
                        <span>Request a Demo</span>
                        <div className='btn'>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                    </div> */}
                </div>
            </section>
            <section className='hoverPlay'>
                <div className='container'>
                    <div className='row text-align-center'>
                        <h5>Uses Cases</h5>
                        <h1>How Customers use Vimeo</h1>
                    </div>
                    <div className='row justify-content-spaceAround'>
                        {
                            videoList.map((video, i) => (
                                <div className='col-4' ref={el => videoItems.current[i] = el} key={video.id}>
                                    <video poster={video.poster} src={video.src}></video>
                                    <div className='play'>
                                        <FontAwesomeIcon icon={faPlay} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section>
                {
                    cards.map((item) => <Discover key={item.id} head={item.head} describe={item.describe} img={item.img} />)
                }
            </section>
        </>
    );
}

export default Home;
