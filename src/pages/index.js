import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="F-A-M-A 2021 4ta edición" />
    <Duo>
      <div className='element-duo'>
        <StaticImage
          src="../images/FAMA_WEB_1.jpg"
          layout="fullWidth"
          // quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="FAMA 2021 4-7 de noviembre"
          // style={{ marginBottom: `1.45rem` }}
        />
      </div>
      <div className='element-duo'>
        <a href="/FAMA_WEB_1.jpg" download >
          <StaticImage
            src="../images/FAMA_WEB_2.jpg"
            layout="fullWidth"
            // quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
            // style={{ marginBottom: `1.45rem` }}
          />
        </a>
      </div>
      
    </Duo>
    <Duo>
      <div className='element-duo'>
        <StaticImage
          src="../images/FAMA_WEB_3.jpg"
          layout="fullWidth"
          // quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          // style={{ marginBottom: `1.45rem` }}
        />
      </div>
      <div className='element-duo'>
        <StaticImage
          src="../images/FAMA_WEB_4.jpg"
          layout="fullWidth"
          // quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          // style={{ marginBottom: `1.45rem` }}
        />
      </div>
      
    </Duo>
    <Duo>
      <div className='element-duo'>
        <StaticImage
          src="../images/FAMA_WEB_5.jpg"
          layout="fullWidth"
          // quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          // style={{ marginBottom: `1.45rem` }}
        />
      </div>
      <div className='element-duo'>
        <StaticImage
          src="../images/FAMA_WEB_6.jpg"
          layout="fullWidth"
          // quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          // style={{ marginBottom: `1.45rem` }}
        />
      </div>
      
    </Duo>
    <Duo>
      <div className='element-duo'>
        <a href='mailto:convocatoria@f-a-m-a.com'>
          <StaticImage
            src="../images/FAMA_WEB_7.jpg"
            layout="fullWidth"
            // quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
            // style={{ marginBottom: `1.45rem` }}
          />
        </a>
      </div>
      <div className='element-duo'>
        <StaticImage
          src="../images/FAMA_WEB_8.jpg"
          layout="fullWidth"
          // quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          // style={{ marginBottom: `1.45rem` }}
        />
      </div>
      
    </Duo>
    
  </Layout>
)

const Duo = styled.section`
  display: flex;
  .element-duo {
    width: 50%;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    .element-duo {
      width: 100% !important;
    }
  }
`


export default IndexPage
