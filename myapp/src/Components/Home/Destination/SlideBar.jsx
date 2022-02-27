import React from "react";
import Slider from "react-slick";



//Images
import alleppey from '../../../assets/images/all_images/Alleppey.svg'
import aurangabad from '../../../assets/images/all_images/aurangabad.svg'
import bangalore from '../../../assets/images/all_images/Bangalore.svg'
import barot from '../../../assets/images/all_images/barot.svg'
import manali from '../../../assets/images/all_images/Manali.svg'
import mashobra from '../../../assets/images/all_images/Mashobra.svg'
import mcleod from '../../../assets/images/all_images/mcledo.svg'
import mumbai from '../../../assets/images/all_images/mumbai.svg'
import bir from '../../../assets/images/all_images/bir.svg'
import kinnaur from '../../../assets/images/all_images/kinnaur.svg'
import assam from '../../../assets/images/all_images/Assam.svg'
import coorg from '../../../assets/images/all_images/coorg.svg'
import mysore from '../../../assets/images/all_images/mysore.svg'
import salmer from '../../../assets/images/all_images/jaisalmer.svg'
import munroe from '../../../assets/images/all_images/munroe.svg'
import chennai from '../../../assets/images/all_images/chennai.svg'




 const settings = {
    infinite: false,
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 2
};

export const Slidebar = () => {



    return (
        <div className="majourDiv">
        <div className="firstRow">
            <div className="imgeandtextDiv" >
                <img className="image" src={alleppey} alt="" />
                <div className="textDiv shadow-box-example">
                <p>alleppey</p>
                </div>
                
            </div>
            <div className="imgeandtextDiv" >
                <img className="image" src={ aurangabad} alt="" />
                <div className="textDiv shadow-box-example">
                <p> aurangabad</p>
                </div>
                
            </div>
            <div className="imgeandtextDiv" >
                <img className="image" src={bangalore} alt="" />
                <div className="textDiv shadow-box-example">
                <p>bangalore</p>
                </div>
                
            </div>
            <div className="imgeandtextDiv" >
                <img className="image" src={barot} alt="" />
                <div className="textDiv shadow-box-example">
                <p>barot</p>
                </div>
                
            </div>
            <div className="imgeandtextDiv" >
                <img className="image" src={manali} alt="" />
                <div className="textDiv shadow-box-example">
                <p>manali</p>
                </div>
                
            </div>
            <div className="imgeandtextDiv" >
                <img className="image" src={mashobra} alt="" />
                <div className="textDiv shadow-box-example">
                <p>mashobra</p>
                </div>
                
            </div>
            <div className="imgeandtextDiv" >
                <img  src={mcleod} alt="" />
                <div className="textDiv shadow-box-example">
                <p>mcleod</p>
                </div>
                
            </div>
            <div className="imgeandtextDiv" >
                <img src={mumbai} alt="" />
                <div className="textDiv shadow-box-example">
                <p>mumbai</p>
                </div>
                
            </div>
        </div>
        <div className="secondRow">
        <div className="imgeandtextDiv" >
                <img className="image" src={ bir} alt="" />
                <div className="textDiv shadow-box-example">
                <p> bir</p>
                </div>
                
            </div>
            <div className="imgeandtextDiv" >
                <img  className="image" src={kinnaur} alt="" />
                <div className="textDiv shadow-box-example">
                <p>kinnaur</p>
                </div>
                
            </div>
            <div className="imgeandtextDiv" >
                <img className="image"  src={assam} alt="" />
                <div className="textDiv shadow-box-example">
                <p>assam</p>
                </div>
                
            </div>
            <div className="imgeandtextDiv" >
                <img className="image"  src={coorg} alt="" />
                <div className="textDiv shadow-box-example">
                <p>coorg</p>
                </div>
                
            </div>
            <div className="imgeandtextDiv" >
                <img className="image"  src={mysore} alt="" />
                <div className="textDiv shadow-box-example">
                <p>mysore</p>
                </div>
                
            </div>
            <div className="imgeandtextDiv" >
                <img  className="image" src={salmer} alt="" />
                <div className="textDiv shadow-box-example">
                <p>mumbai</p>
                </div>
                
            </div>
            <div className="imgeandtextDiv" >
                <img className="image" src={munroe} alt="" />
                <div className="textDiv shadow-box-example">
                <p>munroe</p>
                </div>
                
            </div>








        </div>
            
        </div>
    );
}


