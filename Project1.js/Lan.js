import React from 'react'
import './He.css';
import img1 from './pngegg.png';
import lge from './nutroso-high-resolution-logo-transparent.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BatterySaverIcon from '@mui/icons-material/BatterySaver';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import RunCircleIcon from '@mui/icons-material/RunCircle';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import img2 from './1stup.jpg';
import img3 from './clk.jpg';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import jad from './jadu.jpg';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Lan = () => {
  return (
    <>
    
    <div>
        <nav>
            <div className='nav_logo'>
                <a href='#'><img src={lge} alt='logo'></img></a>


            </div>
            <ul className='nav_links'>
                <li className='link'><a href='/home'>Home</a></li>
                <li className='link'><a href='#'>Program</a></li>
                <li className='link'><a href='#'>Services</a></li>
                <li className='link'><a href='#'>About</a></li>
                <li className='link'><a href='#'>Contact_us</a></li>

            </ul>
            <button className='btn'>Profile</button>
        </nav>
        <header className='section_container header_container'>
            <div className='header_content'>
                <span className='bg_blur'> </span>
                <span className='bg_blur header_blur'> </span>
                <h4>BEST DIET PLANNER</h4>
                <h1><span>MAKE</span>YOUR BODY BETTER</h1>
                <p>
                    Unleash your potential and embark on a journey to make you stronger,
                    fitter, and more energetic you. Sign up for 'Make Your Body Better' Now
                    and witness the world best transformation your body is capable of!
                </p>
               <a href="/Li"><button className='btn' >Diet Now</button></a> 
            </div>
            <div className='header_image'>
            <img src={img1} alt='header'></img>
            </div>
        </header>

        <section className='section_container explore_container'>
            <div className='explore_header'>
                <h2 className='section_header'>EXPLORE US</h2>
                <div className='explore_nav'>
                    <span><ArrowBackIcon/></span>
                    <span><ArrowForwardIcon/></span>

                </div>

            </div>
            <div className='explore_grid'>
                <div className='explore_card'>
                <a href="/Li">
                    <span><FitnessCenterIcon/></span>

                    <h4>Fitness</h4>
                    <p>
                     
                    Strengthen your resolve and unlock the invincible potential that lies within.
                    </p>
                    <a href='#'>Start your diet now <ArrowForwardIcon/></a>
                </a>
                </div>
                <div className='explore_card'>
                <a href="/Li">
                    <span><BatterySaverIcon/></span>
                    <h4>Dietary lifestyle</h4>
                    <p>
                        To keep your body shine for the world with your innovatives
                        as they are the resource of smile.
                    </p>
                    <a href='/Li'>Start your diet now <ArrowForwardIcon/></a>
                </a>
                </div><div className='explore_card'>
                    <span><RunCircleIcon/></span>
                    <h4>Fat Lose</h4>
                    <p>
                        Look handsome untill your life ends to discourage us,
                        begin your controversy here to fulfill yours.
                    </p>
                    <a href='/Li'>Start your diet now <ArrowForwardIcon/></a>

                </div>
                <div className='explore_card'>
                    <span><MonitorHeartIcon/></span>
                    <h4>Weight Gain</h4>
                    <p>
                        Bulk our heart with your body gains of energetic which fills
                        the complete wisdomatic soul.
                    </p>
                    <a href='/Li'>Start your diet now <ArrowForwardIcon/></a>

                </div>

            </div>
        </section>
        <section className='section_container class_container'>
            <div className='class_image'>
                <span className='bg_blur'></span>
                <img src={img2} alt='class' className='class_img-1'></img>
                

            </div>
            <div className='class_content'>
                <h2 className='section_header'>GET YOUR DIET CHART HERE</h2>
                <p>
                    Led by experts care and motivational instructions, "The Diet Chart" for
                    your health precautions are advised accordingly to your habitual and that will
                    perfect blend of health conditions better as well. Each doubts are tribute for your 
                    expensive time to embark on your goals to acheive endeavors.
                </p>
                <button className='btn' ><a href='https://meet.google.com/qer-qpvn-gsx'>Connect Experts </a></button>
            </div>

        </section>
        <section className='section_container join_container'>
            <h2 className='section_header'>WHY JOIN US ?</h2>
            <p className='section_subheader'>
            The experts here are highly skilled and fully equipped to consult on a wide range of queries, offering not only thorough exploration 
            but also unwavering support. They dedicate themselves to addressing your concerns with the utmost effort, ensuring that every detail is meticulously 
            considered. Their commitment to your success is evident in the way they provide guidance and advice, always aiming to motivate and inspire you to reach
            your fullest potential. With their extensive knowledge and relentless dedication, these experts are determined to help you overcome challenges
             and achieve your goals, pushing you to exceed your own expectations.</p>
            <div className='join_image'>
                <img src={img3} alt='Join'></img>
                <div className='join_grid'>
                    <div className='join_card'>
                        <span><PersonSearchIcon/></span>
                        <div className='join_card_content'>
                        <h4>Personalised Trainer</h4>
                        <p>Unlock your potential with our expert Personalised Trainer.</p>
                    </div>
                   </div> 
                   <div className='join_card'>
                        <span><VideoCameraFrontIcon/></span>
                        <div className='join_card_content'>
                        <h4>Live Counsellor</h4>
                        <p>Here we are to make your comfort valid.</p>
                    </div>
                   </div>
                   <div className='join_card'>
                        <span><EmojiEmotionsIcon/></span>
                        <div className='join_card_content'>
                        <h4>Patience Replacer</h4>
                        <p>Though it is our duty to give our presence to you.</p>
                    </div>
                   </div>
               </div>
            </div>

        </section>

        <section className='review'>
            <div className='section_container review_container'>
                <span><FormatQuoteRoundedIcon/></span>
                <div className='review_content'>
                    <h4>MEMBER REVIEW</h4>
                    <p>
                    If you're looking for a top-notch nutrition app, NUTROSO stands out as one of the best.
                     It offers a comprehensive and user-friendly platform that helps you track your meals, monitor your calorie intake, and achieve your health goals.
                      The app's extensive database of foods, including many popular brands and restaurant dishes, makes logging meals easy and accurate.
                       It also allows you to scan barcodes for quick entry and offers personalized insights based on your dietary preferences and goals. With features like meal planning, progress tracking, and integration with other fitness apps, The Nutroso provides everything you need to stay on top of your nutrition and maintain a healthy lifestyle.
                    </p>
                    <div className='review_rating'>
                        <span><StarRoundedIcon/></span>
                        <span><StarRoundedIcon/></span>
                        <span><StarRoundedIcon/></span>
                        <span><StarRoundedIcon/></span>
                        <span><StarRoundedIcon/></span>

                    </div>
                    <div className='review_footer'>
                        <div className='review_member'>
                            <img src={jad} alt='member'></img>
                            <div className='review_member_details'>
                                <h4>Nagul Periyasamy</h4>
                                <p>CEO</p>
                            </div>
                        </div>
                        <div className='review_nav'>
                            <span><ArrowBackIcon/></span>
                            <span><ArrowForwardIcon/></span>

                        </div>

                    </div>

                </div>

            </div>
        </section >
        <footer className='section_container footer_container'>
            <span className='bg_blur'></span>
            <span className='bg_blur footer_blur'></span>
            <div className='footer_col'>
                <div className='footer_logo'>
                    <img src={lge} alt='logo'></img>

                </div>
                <p>
                    Take the first step towards a healthier,stronger you with our unbeatable dietary charts.

                </p>
                <div className='footer_socials'> 
                    <a href='https://www.facebook.com/'><FacebookIcon/></a>
                    <a href='https://www.instagram.com/shafas__diet_parlour?igsh=MXAxbTFvOHh0NWJ1bg=='><InstagramIcon/></a>
                    <a href='#'><LinkedInIcon/></a>
                </div>

            </div>
            <div className='footer_col'>
                <h4>Company</h4>
                <a href='#'>Business</a>
                <a href='#'>Franchise</a>
                <a href='#'>Partnership</a>
                <a href='#'>Network</a>

            </div>
            <div className='footer_col'>
                <h4>About US</h4>
                <a href='#'>Blogs</a>
                <a href='#'>Security</a>
                <a href='#'>Career</a>
               

            </div><div className='footer_col'>
                <h4>Conatct</h4>
                <a href='#'>Contact Us</a>
                <a href='#'>Privacy Policy</a>
                <a href='#'>Terms & Conditions</a>
                <a href='#'>BMI Calculator</a>

            </div>


        </footer>
        <div className='footer_bar'>
            Copyright © 2024 Web Design Mastery. All rights reserved.
            
        </div>
    </div>
    
    
    
    </>
  )
}

export default Lan
