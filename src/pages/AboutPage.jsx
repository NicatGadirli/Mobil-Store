// Img
import Frame from "../assets/images/sectionImgs/Frame 427318297.png"

//Components
import Header from "../components/Header"

const AboutPage = () => {
  return (
    <>
      <Header />
      <section className="aboutPage">
        <div className="container">
          <div className="row">
            <div className="top">
              <div className="topImg">
                <img src={Frame} alt="Frame" />
              </div>
              <div className="topInfo">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Vitae est urna hendrerit nisl ut ac ornare dui convallis. Malesuada nibh ut non lacus maecenas cras purus.
                  Facilisi ultricies sit massa ultricies risus diam varius enim. In enim nunc non non praesent donec vel sit. Viverra purus lorem tristique rhoncus enim diam.
                  Bibendum curabitur porttitor commodo id enim. Iaculis viverra non ut risus parturient semper ut. Mi ut porttitor quam est.
                  Blandit vitae egestas commodo duis id fringilla vitae. Nisl nisi quis quisque pulvinar pellentesque dictum nam. Malesuada pulvinar id nunc tincidunt
                  non interdum imperdiet congue faucibus. Aliquet libero massa id sit sed. Volutpat imperdiet aliquam eget ipsum nisl sagittis urna. Vitae massa mauris blandit.
                  Viverra purus lorem tristique rhoncus enim diam. Bibendum curabitur porttitor commodo id enim. Iaculis viverra non ut risus parturient semper ut. Mi ut porttitor quam est.
                  pulvinar id nunc tincidunt naucibus. Aliquet libero massa id sit sed.
                </p>
              </div>
            </div>
            <div className="bottom">
              <p>Lorem ipsum dolor sit amet consectetur. Vitae est urna hendrerit nisl ut ac ornare dui convallis. Malesuada nibh ut non lacus maecenas cras purus. Facilisi ultricies sit massa ultricies risus diam varius enim.
                In enim nunc non non praesent donec vel sit.
                Viverra purus lorem tristique rhoncus enim diam. Bibendum curabitur porttitor commodo id enim. Iaculis viverra non ut risus parturient semper ut. Mi ut porttitor quam est. Blandit vitae egestas commodo duis id fringilla vitae.
                Nisl nisi quis quisque pulvinar pellentesque dictum nam. Malesuada pulvinar id nunc tincidunt naucibus. Aliquet libero massa id sit sed. Volutpat Lorem ipsum dolor sit amet consectetur.
                Vitae est urna hendrerit nisl ut ac ornare dui convallis. Malesuada nibh ut non lacus maecenas cras purus. Facilisi ultricies sit massa ultricies risus diam varius enim.
                In enim nunc non non praesent donec vel sit.
                Viverra purus lorem tristique rhoncus enim diam. Bibendum curabitur porttitor commodo id enim. Iaculis viverra non ut risus parturient semper ut. Mi ut porttitor quam est. Blandit vitae egestas commodo duis id fringilla vitae.
                Nisl nisi quis quisque pulvinar pellentesque dictum nam. Malesuada pulvinar id nunc tincidunt naucibus. Aliquet libero massa id sit sed. Volutpat </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage