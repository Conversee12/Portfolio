import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import javascript from "../assets/img/javascript.jpg"
import colorSharp from "../assets/img/color-sharp.png"
import css from "../assets/img/css.jpg"
import html from "../assets/img/html.jpg"
import react from "../assets/img/react.png"
import bootstrap from "../assets/img/bootstrap.png"
import sass from "../assets/img/sass.png"
import stdComponents from "../assets/img/styled-components.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>I am ready to learn MORE</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img className="img-skill" src={javascript} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img className="img-skill" src={css} alt="Image" />
                  <h5>CSS3</h5>
                </div>
                <div className="item">
                  <img className="img-skill" src={html} alt="Image" />
                  <h5>HTML5</h5>
                </div>
                <div className="item">
                  <img className="img-skill" src={react} alt="Image" />
                  <h5>React JS</h5>
                </div>
                <div className="item">
                  <img className="img-skill" src={bootstrap} alt="Image" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img className="img-skill" src={sass} alt="Image" />
                  <h5>SASS/SCSS</h5>
                </div>
                <div className="item">
                  <img className="img-skill" src={stdComponents} alt="Image" />
                  <h5>Styled Components</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
