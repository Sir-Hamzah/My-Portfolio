import React from 'react';
import {motion} from "motion/react"
import "./styleAboutMe.css"
import devPic from "../../assets/developer-sunset.jpg"
const AboutMeComponent = () => {
    return (
        <div className='aboutMeContainer'>
            <img src={devPic} alt="div pic" className='devPic' />


            <section className='AboutMeSection'>
                <h2> نبذة عني  <span className='pulse-dot '></span></h2>

                <ul className='aboutMeUL'>
    <li>
        <span className='HighlightedText'>مطور مواقع وواجهات مستخدم</span>
        {" "}شغوف بتحويل الأفكار إلى{" "}
        <span className='HighlightedText'>تجارب رقمية حديثة وسلسة</span>
        ، باستخدام{" "}
        <span className='HighlightedText'>أحدث تقنيات الويب</span>
        {" "}لبناء واجهات فعّالة، منظمة و{" "}
        <span className='HighlightedText'>سهلة الاستخدام</span>
        ، بما يحقق أهداف المنشأة ويعزز{" "}
        <span className='HighlightedText'>تجربة المستخدم</span>
        ✨ 🚀
        <span className='hiddenItems'>.ء </span>
    </li>

    <li>
        خريج{" "}
        <span className='HighlightedText'>بكالوريس بتخصص تقنية المعلومات</span>
        {" "}بمعدل{" "}
        <span className='HighlightedText'>3.65</span>
        {" "}بتقدير{" "}
        <span className='HighlightedText'>ممتاز مع مرتبة الشرف</span>
    </li>

    <li>
        خريج{" "}
        <span className='HighlightedText'>دبلوم الكلية التقنيه بتبوك</span>
        {" "}بتخصص{" "}
        <span className='HighlightedText'>وسائط متعددة وتقنيات الويب</span>
    </li>

    <li>
        مدري وش احط .. 
    </li>
</ul>

                <motion.button className='downloadBtn' 
                
                
                                whileHover={{ y: -5}}
                                whileTap={{scale : 1.3 , y:-2}}
                                transition={{type : "spring" ,stiffness: 300,  damping: 6}}>
                     Download my CV ! 
                </motion.button>
            </section>
            
        </div>
    );
}

export default AboutMeComponent;
