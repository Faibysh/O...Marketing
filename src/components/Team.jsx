import React from "react";

const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <h2 className="title team__title">Our Team</h2>
        <div className="team__items">
          <div className="team__item">
            <img src="images/team-1.jpg" alt="Dmytro" />
            <h6 className="team__name">Dmytro</h6>
            <p className="team__position">CEO</p>
          </div>
          <div className="team__item">
            <img src="images/team-2.jpg" alt="Tetiana" />
            <h6 className="team__name">Tetiana</h6>
            <p className="team__position">Co-Founder</p>
          </div>
          <div className="team__item">
            <img src="images/team-3.jpg" alt="Khrystyna" />
            <h6 className="team__name">Khrystyna</h6>
            <p className="team__position">Designer</p>
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className="title pricing__title">Pricing Plans</h2>
        <div className="pricing__items">
          <ul className="pricing__item">
            <li className="pricing__item-name">Basic</li>
            <li className="pricing__item-num">
              <sup>$</sup>290
            </li>
            <li>1 Logo Design</li>
            <li>1 Website Design</li>
            <li>1 Domain Free</li>
            <li>3 Month License</li>
            <li>1 GB Storage</li>
            <li>
              <a className="pricing__item-link" href="#">
                CHOOSE PLAN
              </a>
            </li>
          </ul>
          <ul className="pricing__item">
            <li className="pricing__item-name">Starter</li>
            <li className="pricing__item-num">
              <sup>$</sup>500
            </li>
            <li>2 Logo Design</li>
            <li>2 Website Design</li>
            <li>1 Domain Free</li>
            <li>6 Month License</li>
            <li>1 GB Storage</li>
            <li>
              <a className="pricing__item-link" href="#">
                CHOOSE PLAN
              </a>
            </li>
          </ul>
          <ul className="pricing__item">
            <li className="pricing__item-name">Professional</li>
            <li className="pricing__item-num">
              <sup>$</sup>1500
            </li>
            <li>3 Logo Design</li>
            <li>3 Website Design</li>
            <li>2 Domain Free</li>
            <li>12 Month License</li>
            <li>2 GB Storage</li>
            <li>
              <a className="pricing__item-link" href="#">
                CHOOSE PLAN
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="clients">
        <div className="container">
          <ul className="clients__list">
            <li>
              <img src="images/clients/1.png" alt="client1" />
            </li>
            <li>
              <img src="images/clients/2.png" alt="client2" />
            </li>
            <li>
              <img src="images/clients/3.png" alt="client3" />
            </li>
            <li>
              <img src="images/clients/4.png" alt="client4" />
            </li>
            <li>
              <img src="images/clients/5.png" alt="client5" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Team;
