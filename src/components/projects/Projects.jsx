import React from 'react'
import pic1 from '../../assets/img/portfolio-1.jpg'
import pic2 from '../../assets/img/portfolio-2.jpg'
import pic3 from '../../assets/img/portfolio-3.jpg'
import pic4 from '../../assets/img/portfolio-4.jpg'
import './Projects.css'
const Projects = () => {
    return (
        <div>
            <section class="content-section" id="portfolio">
    <div class="container margu">
      <div class="content-section-heading text-center">
        <h2 class="mb-2">Portfolio</h2>
        <h4 class="text-secondary  mb-5">Recent Projects</h4>
      </div>
      <div class="row no-gutters">
        <div class="col-lg-6">
          <a class="portfolio-item" href="#!">
            <div class="caption">
              <div class="caption-content">
                <div class="h2">Stationary</div>
                <p class="mb-0">A yellow pencil with envelopes on a clean, blue backdrop!</p>
              </div>
            </div>
            <img class="img-fluid" src={pic1} alt=""/>
          </a>
        </div>
        <div class="col-lg-6">
          <a class="portfolio-item" href="#!">
            <div class="caption">
              <div class="caption-content">
                <div class="h2">Ice Cream</div>
                <p class="mb-0">A dark blue background with a colored pencil, a clip, and a tiny ice cream cone!</p>
              </div>
            </div>
            <img class="img-fluid" src={pic2} alt=""/>
          </a>
        </div>
        <div class="col-lg-6">
          <a class="portfolio-item" href="#!">
            <div class="caption">
              <div class="caption-content">
                <div class="h2">Strawberries</div>
                <p class="mb-0">Strawberries are such a tasty snack, especially with a little sugar on top!</p>
              </div>
            </div>
            <img class="img-fluid" src={pic3} alt=""/>
          </a>
        </div>
        <div class="col-lg-6">
          <a class="portfolio-item" href="#!">
            <div class="caption">
              <div class="caption-content">
                <div class="h2">Workspace</div>
                <p class="mb-0">A yellow workspace with some scissors, pencils, and other objects.</p>
              </div>
            </div>
            <img class="img-fluid" src={pic4} alt=""/>
          </a>
        </div>
      </div>
    </div>
  </section>

        </div>
    )
}

export default Projects;
