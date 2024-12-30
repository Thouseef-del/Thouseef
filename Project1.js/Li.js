import React from 'react'
import './Li.css';
import lge from './nutroso-high-resolution-logo-transparent.png';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BatterySaverIcon from '@mui/icons-material/BatterySaver';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import RunCircleIcon from '@mui/icons-material/RunCircle';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import PetsIcon from '@mui/icons-material/Pets';
import AnimationIcon from '@mui/icons-material/Animation';
import MotionPhotosAutoIcon from '@mui/icons-material/MotionPhotosAuto';
import BalanceIcon from '@mui/icons-material/Balance';
import GrassIcon from '@mui/icons-material/Grass';
import FenceIcon from '@mui/icons-material/Fence';
import WhatshotIcon from '@mui/icons-material/Whatshot';
const Li = () => {
  return (
    <>
    <div>
    <nav>
            <div className='nav_logo'>
                <a href='/home'><img src={lge} alt='logo'></img></a>


            </div>
            <ul className='nav_links'>
                <li className='link'><a href='/home'>Home</a></li>
                <li className='link'><a href='#'>Program</a></li>
                <li className='link'><a href='#'>Services</a></li>
                <li className='link'><a href='#'>About</a></li>
                <li className='link'><a href='#'>Contact_us</a></li>

            </ul>
            <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </Stack>
        </nav>
        <div className='explore_grid'>
                <div className='explore_card'>
                    <span><FitnessCenterIcon/></span>
                    <h4>Fitness</h4>
                    <p>
                     
                    Strengthen your resolve and unlock the invincible potential that lies within.
                    </p>
                    <a href='/Days'>Start your diet now <ArrowForwardIcon/></a>

                </div>
                <div className='explore_card'>
                    <span><BatterySaverIcon/></span>
                    <h4>Dietary lifestyle</h4>
                    <p>
                        To keep your body shine for the world with your innovatives
                        as they are the resource of smile.
                    </p>
                    <a href='/Days'>Start your diet now <ArrowForwardIcon/></a>

                </div><div className='explore_card'>
                    <span><RunCircleIcon/></span>
                    <h4>Fat Lose</h4>
                    <p>
                        Look handsome untill your life ends to discourage us,
                        begin your controversy here to fulfill yours.
                    </p>
                    <a href='/Days'>Start your diet now <ArrowForwardIcon/></a>

                </div>
                <div className='explore_card'>
                    <span><MonitorHeartIcon/></span>
                    <h4>Weight Gain</h4>
                    <p>
                        Bulk our heart with your body gains of energetic which fills
                        the complete wisdomatic soul.
                    </p>
                    <a href='/Days'>Start your diet now <ArrowForwardIcon/></a>

                </div>
                <div className='explore_card'>
                    <span><BalanceIcon/></span>
                    <h4>Balanced Diet</h4>
                    <p>
                    To provide a wide range of nutrients from all food groups.
                    </p>
                    <a href='/Days'>Start your diet now <ArrowForwardIcon/></a>

                </div>
                <div className='explore_card'>
                    <span><MotionPhotosAutoIcon/></span>
                    <h4>Ketogenic Diet (Keto)</h4>
                    <p>
                    Promotes fat burning by switching the body’s main energy source from carbohydrates to fats (ketosis).
                    </p>
                    <a href='/Days'>Start your diet now <ArrowForwardIcon/></a>

                </div>
                <div className='explore_card'>
                    <span><PetsIcon/></span>
                    <h4>Paleo Diet</h4>
                    <p>
                    Focuses on eating foods similar to those eaten by early humans
                    </p>
                    <a href='/Days'>Start your diet now <ArrowForwardIcon/></a>

                </div>
                <div className='explore_card'>
                    <span><GrassIcon/></span>
                    <h4>Vegan Diet</h4>
                    <p>
                    Excludes all animal products for health, ethical, or environmental reasons.
                    </p>
                    <a href='/Days'>Start your diet now <ArrowForwardIcon/></a>

                </div>
                <div className='explore_card'>
                    <span><WhatshotIcon/></span>
                    <h4>Vegetarian Diet</h4>
                    <p>
                    Similar to the vegan diet but allows animal by-products like dairy and eggs.
                    </p>
                    <a href='/Days'>Start your diet now <ArrowForwardIcon/></a>

                </div>
                <div className='explore_card'>
                    <span><MonitorWeightIcon/></span>
                    <h4>Mediterranean Diet</h4>
                    <p>
                    Modeled after the traditional diet of Mediterranean countries.
                    </p>
                    <a href='/Days'>Start your diet now <ArrowForwardIcon/></a>

                </div>
                <div className='explore_card'>
                    <span><FenceIcon/></span>
                    <h4>DASH Diet (Dietary Approaches to Stop Hypertension)</h4>
                    <p>
                    Designed to lower blood pressure and improve heart health.
                    </p>
                    <a href='/Days'>Start your diet now <ArrowForwardIcon/></a>

                </div>
                <div className='explore_card'>
                    <span><AnimationIcon/></span>
                    <h4>Gluten-Free Diet</h4>
                    <p>
                    For people with celiac disease or gluten sensitivity.
                    </p>
                    <a href='/Days'>Start your diet now <ArrowForwardIcon/></a>

                </div>

                

            </div>
        
    </div>
    </>
  )
}

export default Li