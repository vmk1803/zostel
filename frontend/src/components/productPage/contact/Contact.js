import React from 'react'
import "./contact.css"
import whatsapp from '../img/whatsapp.svg'
import locate from '../img/locate.svg'
import daero from '../img/daero.svg'

export default function Map() {
  return (
    <section>
      <div className="main">
                <div>
                    <p className="heading">Locate Us</p>
                    <p className="address">Address</p>
                    <p className="location"> Beach Road, Near Vijay Beach Park, Sea View Ward, Padinjare Kurisadi, Kanjiramchira, Alappuzha, Kerala</p>
                    <p className="location">175131</p>
                    <p className="contact"> Contact: <span className="cNo">02248962265</span></p>

                    <p className="whDiv">
                        <img className="whIcon" src={whatsapp} alt="Whatsapp" />
                        <span className="whatsapp">Whatsapp</span>
                    </p>
                    <p className="direction">Direction
                        <span className="daero">
                            <img src={daero} alt="" />
                        </span>
                    </p>
                    <p className="locateDiv">
                        <img className="locateIcon" src={locate} alt="Locate" />
                        <span className="locate">Location</span>
                    </p>
                </div>
                <div className='mapPlace'>
                    {/* <MyComponent /> */}
                    <iframe width="100%" height="100%" src="https://www.google.com/maps/place/Alappuzha,+Kerala/@9.5011196,76.3070864,
                    13z/data=!3m1!4b1!4m5!3m4!1s0x3b0884f1aa296b61:0xb84764552c41f85a!8m2!3d9.4980667!4d76.3388484"
                     title="Google app" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
      </div>
    </section>
  )
}
