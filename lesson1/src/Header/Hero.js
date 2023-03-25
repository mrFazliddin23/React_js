import '../Header/Hero.css';
import Heroimg from '../Header/hero.png';
import Button from 'react-bootstrap/Button';

function Hero(){
    return(
    
       <div className='menu_hero mb-5'>
            <div className='container'>
                <div className='hero_leftRight d-lg-flex align-items-center justify-content-between'>
                   <div className='hero_left'>
                    <p className='hero-text text-white mb-4 fs-4 fw-bolder text-capitalize'style={{fontFamily:'Open Sans'}}>Chase the new Flavour</p>
                    <h1 className='hero_left-title text-white mb-4 fw-bolder'>The key to Fine dining</h1>
                    <p className='hero_left-text text-white fw-normal '>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
                
                    <Button variant="danger" className=' btn fw-bolder mt-5 mb-5'style={{fontFamily:'Open Sans'}}>Explore Menu</Button>
                   </div>
                    <img src={Heroimg} alt="hero Img" className="rightImg"></img>
                   
                </div>
            </div>
       </div>
        
    );
}
export default Hero;