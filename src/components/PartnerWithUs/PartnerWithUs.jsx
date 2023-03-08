import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import networkIcon from '../../img/card-icons/network.png';
import donateIcon from '../../img/card-icons/charity.png';
import contributeIcon from '../../img/card-icons/jigsaw.png';
import resourcesIcon from '../../img/card-icons/resources.png';
// Partner Logo Imports:
import partner1 from '../../Partner Logos/AHSCE_South_Africa_logo-removebg-preview.png'
import partner2 from '../../Partner Logos/ASA Logo HighRes.png'
import partner3 from '../../Partner Logos/BASA logo black.png'
import partner4 from '../../Partner Logos/Copy of British Council Logo (Black).png'
import partner5 from '../../Partner Logos/BASA logo black.png'
import partner6 from '../../Partner Logos/CortexHubBlock-removebg-preview.png'
import partner7 from '../../Partner Logos/Image_20221117_124247_685_PM-removebg-preview.png'
import partner8 from '../../Partner Logos/Original_Logo_for_MZTV-removebg-preview.png'
import partner9 from '../../Partner Logos/SASFED-removebg-preview.png'
import partner10 from '../../Partner Logos/SoCreative Summit Logo_black_no tagline.png'
import partner11 from '../../Partner Logos/Wits_Logo-removebg-preview.png'
import partner12 from '../../Partner Logos/WSOA-CPM_Logo-removebg-preview.png'


import Sponers from "../Sponsers/Sponers";





const PartnerWithUs = () => {
  return (
    <div className='partner-section'>
        <div className="partner-text">
            <h1>Partner With <span>Us!</span></h1>
            <h3>
                We are supported by forward thinking organizations that care
                deeply and believe in <span>our mission</span> and include how to support it.
            </h3>
        </div>

        <h4 className='support-text'>How You Can <span>Support:</span></h4>
        
        <div className="main-card-wrapper">
            <div className="row-1">
                <div className='support-card'>
                    <img className='partner-icon' src={networkIcon} alt=""/>
                    <h5>Power Our <span>Network</span></h5>
                </div>
                <div className='support-card'>
                    <img className='partner-icon' src={contributeIcon} alt=""/>
                    <h5>Contribute To our <span>Programming</span></h5>
                </div>
            </div>
            <div className="row-2">
                <div className='support-card'>
                    <img className='partner-icon' src={donateIcon} alt=""/>
                    <h5><span>Donate</span></h5>
                </div>
                <div className='support-card'>
                    <img className='partner-icon' src={resourcesIcon} alt=""/>
                    <h5>Provide <span>Resources</span></h5>
                </div>
            </div>
        </div>
        <div className="contact-link">
            <Link className='partner-contact' to="/contact">Contact</Link>
        </div>
        <h2 className='our-partners-heading'>Our <span>Partners:</span></h2>
        <div className="our-partners">
                <img className='partner-image' src={partner1} alt=""/>
                <img className='partner-image' src={partner2} alt=""/>
                <img className='partner-image' src={partner3} alt=""/>
                <img className='partner-image' src={partner4} alt=""/>
                <img className='partner-image' src={partner5} alt=""/>
                <img className='partner-image' src={partner6} alt=""/>
           
                <img className='partner-image' src={partner7} alt=""/>
                <img className='partner-image' src={partner8} alt=""/>
                <img className='partner-image' src={partner9} alt=""/>
                <img className='partner-image' src={partner10} alt=""/>
                <img className='partner-image' src={partner11} alt=""/>
                <img className='partner-image' src={partner12} alt=""/>
            
        </div>
        {/* <Sponers/> */}


    </div>
  )
}

export default PartnerWithUs