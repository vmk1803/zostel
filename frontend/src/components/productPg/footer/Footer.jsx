import './footer.css'
import mainLogo from '../img/mainLogo.svg'

export default function footer() {
  return (
        <>
        <div className='main1'>
            <div>
                <div className='heading'>
                    <img className="logo" src={mainLogo} alt="Logo" />
                    <p className="siteName">ZOSTEL</p>
                </div>
                <div className="subHeadings">
                    <p>Explore with Zostel - oldest & the biggest backpacker hostel brand of India. 
                        Travel India & Nepal on budget while having fun at our quirky, activity-led hostels.</p>
                </div>
            </div>

            <div className="links">
                <p className="impLink">IMPORTANT LINKS</p>
                <p className="allLink">Terms</p>
                <p  className="allLink">Privacy Policy</p>
                <p  className="allLink">Guest Policy</p>
                <p  className="allLink">COVID-19 FAQs</p>
            </div>
        </div>
        <div className="copyRight" >
            <p>Zostel © 2020. All Rights Reserved</p>
        </div>
        </>
        )
        }
