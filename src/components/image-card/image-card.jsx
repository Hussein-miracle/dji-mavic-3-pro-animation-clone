import React,{useLayoutEffect} from 'react';
import { gsap , Back} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import './image-card.scss';


import img0 from '../../assets/images/0.webp';
import img1 from '../../assets/images/1.webp';
import img2 from '../../assets/images/2.webp';
import img3 from '../../assets/images/4.webp';
import img4 from '../../assets/images/4.webp';
import img5 from '../../assets/images/5.webp';
import img6 from '../../assets/images/6.webp';
import img7 from '../../assets/images/7.webp';
import img8 from '../../assets/images/8.webp';
import img9 from '../../assets/images/9.webp';
import img10 from '../../assets/images/10.webp';
import img11 from '../../assets/images/11.webp';
import img12 from '../../assets/images/12.webp';
import img13 from '../../assets/images/13.webp';
import img14 from '../../assets/images/14.webp';
import img15 from '../../assets/images/15.webp';
import img16 from '../../assets/images/16.webp';
import img17 from '../../assets/images/17.webp';
import img18 from '../../assets/images/18.webp';
import img19 from '../../assets/images/19.webp';
import img20 from '../../assets/images/20.webp';
import img21 from '../../assets/images/21.webp';
import img22 from '../../assets/images/22.webp';
import img23 from '../../assets/images/23.webp';
import img24 from '../../assets/images/24.webp';
import img25 from '../../assets/images/25.webp';
import img26 from '../../assets/images/26.webp';
import img27 from '../../assets/images/27.webp';
import img28 from '../../assets/images/28.webp';
import img29 from '../../assets/images/29.webp';
import img30 from '../../assets/images/30.webp';
import img31 from '../../assets/images/31.webp';
import img32 from '../../assets/images/32.webp';
import img33 from '../../assets/images/33.webp';
import img34 from '../../assets/images/34.webp';
import img35 from '../../assets/images/35.webp';
import img36 from '../../assets/images/36.webp';
import img37 from '../../assets/images/37.webp';
import img38 from '../../assets/images/38.webp';
import img39 from '../../assets/images/39.webp';
import img40 from '../../assets/images/40.webp';
import img41 from '../../assets/images/41.webp';
import img42 from '../../assets/images/42.webp';
import img43 from '../../assets/images/43.webp';
import img44 from '../../assets/images/44.webp';
import img45 from '../../assets/images/45.webp';
import img46 from '../../assets/images/46.webp';
import img47 from '../../assets/images/47.webp';
import img48 from '../../assets/images/48.webp';
import img49 from '../../assets/images/49.webp';
import img50 from '../../assets/images/50.webp';
import img51 from '../../assets/images/51.webp';
import img52 from '../../assets/images/52.webp';
import img53 from '../../assets/images/53.webp';
import img54 from '../../assets/images/54.webp';
import img55 from '../../assets/images/55.webp';
import img56 from '../../assets/images/56.webp';
import img57 from '../../assets/images/57.webp';
import img58 from '../../assets/images/58.webp';
import img59 from '../../assets/images/59.webp';
import img60 from '../../assets/images/60.webp';
import img61 from '../../assets/images/61.webp';
import img62 from '../../assets/images/62.webp';
import img63 from '../../assets/images/63.webp';
import img64 from '../../assets/images/64.webp';
import img65 from '../../assets/images/65.webp';
import img66 from '../../assets/images/66.webp';
import img67 from '../../assets/images/67.webp';
import img68 from '../../assets/images/68.webp';
import img69 from '../../assets/images/69.webp';
import img70 from '../../assets/images/70.webp';
import img71 from '../../assets/images/71.webp';
import img72 from '../../assets/images/72.webp';
import img73 from '../../assets/images/73.webp';
import img74 from '../../assets/images/74.webp';
import img75 from '../../assets/images/75.webp';
import img76 from '../../assets/images/76.webp';
import img77 from '../../assets/images/77.webp';
import img78 from '../../assets/images/78.webp';
import img79 from '../../assets/images/79.webp';
import img80 from '../../assets/images/80.webp';
import img81 from '../../assets/images/81.webp';
import img82 from '../../assets/images/82.webp';
import img83 from '../../assets/images/83.webp';
import img84 from '../../assets/images/84.webp';
import img85 from '../../assets/images/85.webp';
import img86 from '../../assets/images/86.webp';
import img87 from '../../assets/images/87.webp';
import img88 from '../../assets/images/88.webp';
import img89 from '../../assets/images/89.webp';
import img90 from '../../assets/images/90.webp';
import img91 from '../../assets/images/91.webp';
import img92 from '../../assets/images/92.webp';
import img93 from '../../assets/images/93.webp';
import img94 from '../../assets/images/94.webp';
import img95 from '../../assets/images/95.webp';
import img96 from '../../assets/images/96.webp';
import img97 from '../../assets/images/97.webp';
import img98 from '../../assets/images/98.webp';
import img99 from '../../assets/images/99.webp';
import img100 from '../../assets/images/100.webp';
import hand from '../../assets/images/dji-hand.png';

gsap.registerPlugin(ScrollTrigger);

const ImageCard = () => {


  useLayoutEffect(()=>{




        
    let t1 = gsap.timeline({
      defaults:{duration:100, ease: Back.easeOut.config(2)},
      scrollTrigger: {
        trigger:'.image-card',
        // pin: ".image-card__image-container",
        pin:true,
        start:'top top',
        end: 'bottom bottom',
        scrub:true,
        // end: "+=500",
        onUpdate:(self) =>{
          // let progress = self.progress;
          // console.log(progress, 'progress');

        }
      }
  
    });

    t1.from('.img0',{rotate:10 , x: 30, y: -50}, "=3")
    t1.from('.img0',{rotate:7.5, x: 20, y: -35}, "=3")
    t1.from('.img0',{rotate:4, x: 10, y: -15}, "=3")
    t1.from('.img0',{rotate:0 , x: 0, y: 0}, "=3")
    t1.to('.img0',{display:'none'}, "-=9")
    t1.to('.img1',{display:'block'}, "=3")
    t1.to('.img2',{display:'block'}, "=3")
    t1.to('.img3',{display:'block'}, "=3")
    t1.to('.img4',{display:'block'}, "=3")
    t1.to('.img5',{display:'block'}, "=3")
    t1.to('.img6',{display:'block'}, "=3")
    t1.to('.img7',{display:'block'}, "=3")
    t1.to('.img8',{display:'block'}, "=3")
    t1.to('.img9',{display:'block'}, "=3")
    t1.to('.img10',{display:'block'}, "=3")
    t1.to('.img11',{display:'block'}, "=3")
    t1.to('.img12',{display:'block'}, "=3")
    t1.to('.img13',{display:'block'}, "=3")
    t1.to('.img14',{display:'block'}, "=3")
    t1.to('.hand',{y:50}, "=3")
    t1.to('.hand',{opacity:0.8}, "=5")
    t1.to('.hand',{opacity:0.7}, "=5")
    t1.to('.hand',{opacity:0.5}, "=5")
    t1.to('.hand',{opacity:0.3}, "=5")
    t1.to('.hand',{opacity:0.1}, "=5")
    t1.to('.hand',{opacity:0}, "=5")
    t1.to('.img15',{display:'block'}, "=3")
    t1.to('.img16',{display:'block'}, "=3")
    t1.to('.img17',{display:'block'}, "=3")
    t1.to('.img18',{display:'block'}, "=3")
    t1.to('.img19',{display:'block'}, "=3")
    t1.to('.img20',{display:'block'}, "=3")
    t1.to('.img21',{display:'block'}, "=3")
    t1.to('.img22',{display:'block'}, "=3")
    t1.to('.img23',{display:'block'}, "=3")
    t1.to('.img24',{display:'block'}, "=3")
    t1.to('.img25',{display:'block'}, "=3")
    t1.to('.img26',{display:'block'}, "=3")
    t1.to('.img27',{display:'block'}, "=3")
    t1.to('.img28',{display:'block'}, "=3")
    t1.to('.img29',{display:'block'}, "=3")
    t1.to('.img30',{display:'block'}, "=3")
    t1.to('.img31',{display:'block'}, "=3")
    t1.to('.img32',{display:'block'}, "=3")
    t1.to('.img33',{display:'block'}, "=3")
    t1.to('.img34',{display:'block'}, "=3")
    t1.to('.img35',{display:'block'}, "=3")
    t1.to('.img36',{display:'block'}, "=3")
    t1.to('.img37',{display:'block'}, "=3")
    t1.to('.img38',{display:'block'}, "=3")
    t1.to('.img39',{display:'block'}, "=3")
    t1.to('.img40',{display:'block'}, "=3")
    t1.to('.img42',{display:'block'}, "=3")
    t1.to('.img43',{display:'block'}, "=3")
    t1.to('.img44',{display:'block'}, "=3")
    t1.to('.img45',{display:'block'}, "=3")
    t1.to('.img46',{display:'block'}, "=3")
    t1.to('.img47',{display:'block'}, "=3")
    t1.to('.img48',{display:'block'}, "=3")
    t1.to('.img49',{display:'block'}, "=3")
    t1.to('.img50',{display:'block'}, "=3")
    t1.to('.img51',{display:'block'}, "=3")
    t1.to('.img52',{display:'block'}, "=3")
    t1.to('.img53',{display:'block'}, "=3")
    t1.to('.img54',{display:'block'}, "=3")
    t1.to('.img55',{display:'block'}, "=3")
    t1.to('.img56',{display:'block'}, "=3")
    t1.to('.img57',{display:'block'}, "=3")
    t1.to('.img58',{display:'block'}, "=3")
    t1.to('.img59',{display:'block'}, "=3")
    t1.to('.img60',{display:'block'}, "=3")
    t1.to('.img61',{display:'block'}, "=3")
    t1.to('.img62',{display:'block'}, "=3")
    t1.to('.img63',{display:'block'}, "=3")
    t1.to('.img64',{display:'block'}, "=3")
    t1.to('.img65',{display:'block'}, "=3")
    t1.to('.img66',{display:'block'}, "=3")
    t1.to('.img67',{display:'block'}, "=3")
    t1.to('.img68',{display:'block'}, "=3")
    t1.to('.img69',{display:'block'}, "=3")
    t1.to('.img70',{display:'block'}, "=3")
    t1.to('.img71',{display:'block'}, "=3")
    t1.to('.img72',{display:'block'}, "=3")
    t1.to('.img73',{display:'block'}, "=3")
    t1.to('.img74',{display:'block'}, "=3")
    t1.to('.img75',{display:'block'}, "=3")
    t1.to('.img76',{display:'block'}, "=3")
    t1.to('.img77',{display:'block'}, "=3")
    t1.to('.img78',{display:'block'}, "=3")
    t1.to('.img79',{display:'block'}, "=3")
    t1.to('.img80',{display:'block'}, "=3")
    t1.to('.img81',{display:'block'}, "=3")
    t1.to('.img82',{display:'block'}, "=3")
    t1.to('.img83',{display:'block'}, "=3")
    t1.to('.img84',{display:'block'}, "=3")
    t1.to('.img85',{display:'block'}, "=3")
    t1.to('.img86',{display:'block'}, "=3")
    t1.to('.img87',{display:'block'}, "=3")
    t1.to('.img88',{display:'block'}, "=3")
    t1.to('.img89',{display:'block'}, "=3")
    t1.to('.img90',{display:'block'}, "=3")
    t1.to('.img91',{display:'block'}, "=3")
    t1.to('.img92',{display:'block'}, "=3")
    t1.to('.img93',{display:'block'}, "=3")
    t1.to('.img94',{display:'block'}, "=3")
    t1.to('.img95',{display:'block'}, "=3")
    t1.to('.img96',{display:'block'}, "=3")
    t1.to('.img97',{display:'block'}, "=3")
    t1.to('.img98',{display:'block'}, "=3")
    t1.to('.img99',{display:'block'}, "=3")
    t1.to('.img100',{display:'block'}, "=3")
    t1.to('.img100',{scale:2,transformOrigin:'center center'}, "=5")
    t1.to('.img100',{scale:5}, "=6")
    t1.to('.img100',{scale:8}, "=6")
    t1.to('.img100',{scale:10}, "=8")
    t1.to('.img100',{scale:13}, "=10")
    t1.to('.img100',{scale:15}, "=12")
    // t1.to('.image-card__image-container--img',{display:'none'}, "=1")
    

  },[])




  return (
    <section className='image-card'>

      <div className='image-card__image-container'>
        <img src={img0} alt="img0" className='image-card__image-container--img img0'/>
        <img src={img1} alt="img0" className='image-card__image-container--img img1'/>
        <img src={img2} alt="img0" className='image-card__image-container--img img2'/>
        <img src={img3} alt="img0" className='image-card__image-container--img img3'/>
        <img src={img4} alt="img0" className='image-card__image-container--img img4'/>
        <img src={img5} alt="img0" className='image-card__image-container--img img5'/>
        <img src={img6} alt="img0" className='image-card__image-container--img img6'/>
        <img src={img7} alt="img0" className='image-card__image-container--img img7'/>
        <img src={img8} alt="img0" className='image-card__image-container--img img8'/>
        <img src={img9} alt="img0" className='image-card__image-container--img img9'/>
        <img src={img10} alt="img0" className='image-card__image-container--img img10'/>
        <img src={img11} alt="img0" className='image-card__image-container--img img11'/>
        <img src={img12} alt="img0" className='image-card__image-container--img img12'/>
        <img src={img13} alt="img0" className='image-card__image-container--img img13'/>
        <img src={img14} alt="img0" className='image-card__image-container--img img14'/>
        <img src={img15} alt="img0" className='image-card__image-container--img img15'/>
        <img src={img16} alt="img0" className='image-card__image-container--img img16'/>
        <img src={img17} alt="img0" className='image-card__image-container--img img17'/>
        <img src={img18} alt="img0" className='image-card__image-container--img img18'/>
        <img src={img19} alt="img0" className='image-card__image-container--img img19'/>
        <img src={img20} alt="img0" className='image-card__image-container--img img20'/>
        <img src={img21} alt="img0" className='image-card__image-container--img img21'/>
        <img src={img22} alt="img0" className='image-card__image-container--img img22'/>
        <img src={img23} alt="img0" className='image-card__image-container--img img23'/>
        <img src={img24} alt="img0" className='image-card__image-container--img img24'/>
        <img src={img25} alt="img0" className='image-card__image-container--img img25'/>
        <img src={img26} alt="img0" className='image-card__image-container--img img26'/>
        <img src={img27} alt="img0" className='image-card__image-container--img img27'/>
        <img src={img28} alt="img0" className='image-card__image-container--img img28'/>
        <img src={img29} alt="img0" className='image-card__image-container--img img29'/>
        <img src={img30} alt="img0" className='image-card__image-container--img img30'/>
        <img src={img31} alt="img0" className='image-card__image-container--img img31'/>
        <img src={img32} alt="img0" className='image-card__image-container--img img32'/>
        <img src={img33} alt="img0" className='image-card__image-container--img img33'/>
        <img src={img34} alt="img0" className='image-card__image-container--img img34'/>
        <img src={img35} alt="img0" className='image-card__image-container--img img35'/>
        <img src={img36} alt="img0" className='image-card__image-container--img img36'/>
        <img src={img37} alt="img0" className='image-card__image-container--img img37'/>
        <img src={img38} alt="img0" className='image-card__image-container--img img38'/>
        <img src={img39} alt="img0" className='image-card__image-container--img img39'/>
        <img src={img40} alt="img0" className='image-card__image-container--img img40'/>
        <img src={img41} alt="img0" className='image-card__image-container--img img41'/>
        <img src={img42} alt="img0" className='image-card__image-container--img img42'/>
        <img src={img43} alt="img0" className='image-card__image-container--img img43'/>
        <img src={img44} alt="img0" className='image-card__image-container--img img44'/>
        <img src={img45} alt="img0" className='image-card__image-container--img img45'/>
        <img src={img46} alt="img0" className='image-card__image-container--img img46'/>
        <img src={img47} alt="img0" className='image-card__image-container--img img47'/>
        <img src={img48} alt="img0" className='image-card__image-container--img img48'/>
        <img src={img49} alt="img0" className='image-card__image-container--img img49'/>
        <img src={img50} alt="img0" className='image-card__image-container--img img50'/>
        <img src={img51} alt="img0" className='image-card__image-container--img img51'/>
        <img src={img52} alt="img0" className='image-card__image-container--img img52'/>
        <img src={img53} alt="img0" className='image-card__image-container--img img53'/>
        <img src={img54} alt="img0" className='image-card__image-container--img img54'/>
        <img src={img55} alt="img0" className='image-card__image-container--img img55'/>
        <img src={img56} alt="img0" className='image-card__image-container--img img56'/>
        <img src={img57} alt="img0" className='image-card__image-container--img img57'/>
        <img src={img58} alt="img0" className='image-card__image-container--img img58'/>
        <img src={img59} alt="img0" className='image-card__image-container--img img59'/>
        <img src={img60} alt="img0" className='image-card__image-container--img img60'/>
        <img src={img61} alt="img0" className='image-card__image-container--img img61'/>
        <img src={img62} alt="img0" className='image-card__image-container--img img62'/>
        <img src={img63} alt="img0" className='image-card__image-container--img img63'/>
        <img src={img64} alt="img0" className='image-card__image-container--img img64'/>
        <img src={img65} alt="img0" className='image-card__image-container--img img65'/>
        <img src={img66} alt="img0" className='image-card__image-container--img img66'/>
        <img src={img67} alt="img0" className='image-card__image-container--img img67'/>
        <img src={img68} alt="img0" className='image-card__image-container--img img68'/>
        <img src={img69} alt="img0" className='image-card__image-container--img img69'/>
        <img src={img70} alt="img0" className='image-card__image-container--img img70'/>
        <img src={img71} alt="img0" className='image-card__image-container--img img71'/>
        <img src={img72} alt="img0" className='image-card__image-container--img img72'/>
        <img src={img73} alt="img0" className='image-card__image-container--img img73'/>
        <img src={img74} alt="img0" className='image-card__image-container--img img74'/>
        <img src={img75} alt="img0" className='image-card__image-container--img img75'/>
        <img src={img76} alt="img0" className='image-card__image-container--img img76'/>
        <img src={img77} alt="img0" className='image-card__image-container--img img77'/>
        <img src={img78} alt="img0" className='image-card__image-container--img img78'/>
        <img src={img79} alt="img0" className='image-card__image-container--img img79'/>
        <img src={img80} alt="img0" className='image-card__image-container--img img80'/>
        <img src={img81} alt="img0" className='image-card__image-container--img img81'/>
        <img src={img82} alt="img0" className='image-card__image-container--img img82'/>
        <img src={img83} alt="img0" className='image-card__image-container--img img83'/>
        <img src={img84} alt="img0" className='image-card__image-container--img img84'/>
        <img src={img85} alt="img0" className='image-card__image-container--img img85'/>
        <img src={img86} alt="img0" className='image-card__image-container--img img86'/>
        <img src={img87} alt="img0" className='image-card__image-container--img img87'/>
        <img src={img88} alt="img0" className='image-card__image-container--img img88'/>
        <img src={img89} alt="img0" className='image-card__image-container--img img89'/>
        <img src={img90} alt="img0" className='image-card__image-container--img img90'/>
        <img src={img91} alt="img0" className='image-card__image-container--img img91'/>
        <img src={img92} alt="img0" className='image-card__image-container--img img92'/>
        <img src={img93} alt="img0" className='image-card__image-container--img img93'/>
        <img src={img94} alt="img0" className='image-card__image-container--img img94'/>
        <img src={img95} alt="img0" className='image-card__image-container--img img95'/>
        <img src={img96} alt="img0" className='image-card__image-container--img img96'/>
        <img src={img97} alt="img0" className='image-card__image-container--img img97'/>
        <img src={img98} alt="img0" className='image-card__image-container--img img98'/>
        <img src={img99} alt="img0" className='image-card__image-container--img img99'/>
        <img src={img100} alt="img0" className='image-card__image-container--img img100'/>

      </div>


      <img className='hand' src={hand}  alt='hand'/>

    </section>
  )
}

export default ImageCard;