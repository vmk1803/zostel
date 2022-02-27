import React from "react";
import Footer from "../footer/Footer";
import Contact from "../contact/Contact";
import "./product.css";
function ProductPolicy() {
  return (
    <div className="productSec">
      <section className="section0">
        <Contact />
      </section>

      <section className="section1">
        <h2>COVID Policy</h2>
        <p>
          - For intra-state travelers - At the time of check-in, all guests
          travelling from within the same state are required to present either a
          negative RT-PCR report not older than 72 hours, or a
          double-vaccination certificate.
        </p>
        <p>
          - For inter-state travelers - At the time of check-in, all guests
          travelling from another state are required to present a negative
          RT-PCR report not older than 72 hours, or a vaccination certificate
          (either single or double dose).
        </p>
        <p>
          - Please ensure you have read the health and travel advisory issued by
          your destination state.
        </p>
        <p>
          - Well-equipped first-aid and Covid-19 observation kits are available
          at this hostel in case of a medical emergency.
        </p>
        <p>
          - This hostel follows universal hygiene guidelines and a strict
          sanitisation protocol. Moreover, travellers and staff regularly
          undergo temperature checks to curtail any health lapses.
        </p>
        <p>
          - While most staff members stay at the hostel itself, outsider staff
          undergo a strict thermal check and periodic testing regime.
        </p>
        <p>
          - This hostel is equipped with a sanitisation counter where travellers
          can disinfect any outside materials such as parcels, bags, etc.
        </p>
        <p>
          - For long-stay residents, a meal package is available at INR 500,
          covering three meals per day.
        </p>
      </section>
      <section className="section2">
        <h2>Property Policy</h2>
        <p>
          - Guests are required to pay a 21% advance at the time of booking
          itself.
        </p>
        <p>
          - We strictly DO NOT allow a group of more than 8 people. In case of a
          group of 4 or more, you might be purposefully allotted different dorm
          rooms. Further, if the group behaviour is deemed unfit at the
          property, the Zostel Property Manager, upon subjective evaluation,
          retains the full right to take required action which may also result
          in an on-spot cancellation without refunds.
        </p>
        <p>
          - Children below 18 years of age are not permitted entry/stay at any
          of our hostels, with or without guardians. We do not recommend
          families.
        </p>
        <p>
          - Our standard check-in time is 12 PM and the standard check-out time
          is 10 AM
        </p>
        <p>
          - We only accept a government ID as valid identification proof. No
          local IDs shall be accepted at the time of check-in.
        </p>
        <p>
          - Guests are not permitted to bring outsiders inside the hostel
          campus.
        </p>
        <p>
          - We believe in self-help and do not provide luggage assistance or
          room services.
        </p>
        <p>
          - Drugs and any substance abuse is strictly banned inside and around
          the property.
        </p>
        <p>
          - Alcohol consumption is permitted at the premises as per the
          property’s discretion and local laws. Please reach out to the property
          prior to your arrival to confirm the same.
        </p>
        <p>- Right to admission reserved.</p>
      </section>
      <section className="section3">
        <h2>Cancellation Policy</h2>
        <p>
          We understand that sometimes plans change. Hence, to make it light on
          your pocket, we are only charging a 21% advance, which is on a
          non-refundable basis.
        </p>
        <p>NOTE:</p>
        <p>
          - 21% advance payment is non-refundable at all times, as stated above.
        </p>
        <p>
          - If you have paid any amount over this 21%, it stands applicable for
          a credit only if the cancellation is informed 7 days or more in
          advance. You will be able to avail the credited amount for any future
          booking at any of our properties.
        </p>
        <p>
          - If informed within 7 days of the standard check-in time (12 pm), the
          amount shall be adjusted against the cancellation fee.
        </p>
        <p>
          For any other queries, please reach out to us at
          reservations@zostel.com.
        </p>
        <br />
        <br />
        <br />
        <br />
      </section>
      <Footer />
    </div>
  );
}

export { ProductPolicy };
