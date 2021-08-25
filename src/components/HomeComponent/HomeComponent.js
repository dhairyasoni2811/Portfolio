import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import styles from './HomeComponent.module.css';
import WOW from 'wowjs';
import background from '../../Images/titleBackground2.png';

class HomeComponent extends React.Component{
  componentDidMount(){
    new WOW.WOW().init();
  }

  render(){
  return(
  <div className={styles.HomeComponent}>
    <div className={styles.titleBackground}>
      <img className={styles.titleBackgroundImage} src={background} height={window.innerHeight}/>
    </div>
    <div className={styles.titleText}>
      <div className="animate__animated animate__fadeInDown animate__delay-1s"><div>Hello There, I'm</div></div>
      <div className="animate__animated animate__fadeInLeft animate__delay-2s"><div className={styles.biggerFontTitle}>Dhairya Soni</div></div>
      <TypeWriterEffect
            startDelay={2000}
            cursorColor="white"
            multiText={[
              'a Web Developer',
            ]}
            multiTextDelay={2100}
            typeSpeed={170}
            hideCursorAfterText={true}
          />
      <div className="animate__animated animate__bounceInDown animate__delay-5s">
        <div className={styles.downArrowDiv}>
          <i class="fa fa-angle-double-down"></i>
        </div>
      </div>
    </div>
  </div>);
}}

export default HomeComponent;
