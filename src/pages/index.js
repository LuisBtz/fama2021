import React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"


const IndexPage = () => (
  <Layout>
    <Seo title="F-A-M-A 2021 4ta edición" />
    <Texto>
      <h1>FAMA 2021 4ta edición</h1>
      <a href="/FAMA_2021_CONVOCATORIA.pdf" download >Descargar aplicación</a>
      <h2>FAMA es la primera feria de arte accesible del norte de México, cuenta con tres ediciones. Es una plataforma para artistas emergentes, en donde pueden vender sus obras de arte con un costo máximo de $60,000 MXN.</h2>
      <p>FAMA es un espacio en donde existe el diálogo y el intercambio de ideas. Somos una feria amigable, en donde la audiencia puede conocer una amplia oferta de obras de artistas de todo el país, que ya fueron revisadas y seleccionadas por un comité de expertos.</p>
      <h3>Es un espacio para todos: coleccionistas, galeristas, académicos, artistas, estudiantes, jóvenes, niños, adultos. </h3>
      <h3>Todos podemos comprar arte!</h3>
      <h3>CÓMO FUNCIONA FAMA</h3>
      <p>FAMA es por convocatoria abierta, la aplicación no tiene costo y la feria proveerá un booth de 4.88 x 2.44 m para cada artista seleccionado.</p>
      <p>Una vez concluida la feria, FAMA abrirá una plataforma digital en donde se seguirán vendiendo una selección de obra de cada artista.</p>
      <p>Un comité de selección conformado por personas establecidas en el ámbito artístico revisará las propuestas enviadas y seleccionará a los artistas que formarán parte y los resultados se publicarán durante la primera semana de septiembre.</p>
      <strong>FECHA LÍMITE PARA ENVIAR TU PROPUESTA</strong>
      <em>10 AGOSTO 2021 11:59 PM</em>
      <p>No se aceptarán prórrogas bajo ninguna ciscunstancia. Para cualquier duda y/o comentario mandar un mail a:</p>
      <a href='mailto:convocatoria@f-a-m-a.com'>convocatoria@f-a-m-a.com</a>
    </Texto>
    <Duo>
      <div className='element-duo'>
        <img
          src="./FAMA_WEB_1.jpg"
          // formats={["AUTO", "WEBP", "AVIF"]}
          alt="FAMA 2021 4-7 de noviembre"
          // style={{ marginBottom: `1.45rem` }}
        />
      </div>
      <div className='element-duo'>
        <a href="/FAMA_2021_CONVOCATORIA.pdf" download >
          <img
            src="./FAMA_WEB_2.jpg"
            // layout="fullWidth"
            // quality={95}
            // formats={["AUTO", "WEBP", "AVIF"]}
            alt="Descargar aplicación"
            // style={{ marginBottom: `1.45rem` }}
          />
        </a>
      </div>
      
    </Duo>
    <Duo>
      <div className='element-duo'>
        <img
          src="./FAMA_WEB_3.jpg"
          // layout="fullWidth"
          // quality={95}
          // formats={["AUTO", "WEBP", "AVIF"]}
          alt="FAMA es la primera feria de arte accesible del norte de México"
          // style={{ marginBottom: `1.45rem` }}
        />
      </div>
      <div className='element-duo'>
        <img
          src="./FAMA_WEB_4.jpg"
          // layout="fullWidth"
          // quality={95}
          // formats={["AUTO", "WEBP", "AVIF"]}
          alt="FAMA Feria de arte accesible del norte de México"
          // style={{ marginBottom: `1.45rem` }}
        />
      </div>
      
    </Duo>
    <Duo>
      <div className='element-duo'>
        <img
          src="./FAMA_WEB_5.jpg"
          // layout="fullWidth"
          // quality={95}
          // formats={["AUTO", "WEBP", "AVIF"]}
          alt="FAMA Feria de arte accesible del norte de México"
          // style={{ marginBottom: `1.45rem` }}
        />
      </div>
      <div className='element-duo'>
        <img
          src="./FAMA_WEB_6.jpg"
          // layout="fullWidth"
          // quality={95}
          // formats={["AUTO", "WEBP", "AVIF"]}
          alt="Cómo funciona"
          // style={{ marginBottom: `1.45rem` }}
        />
      </div>
      
    </Duo>
    <Duo>
      <div className='element-duo'>
        <a href='mailto:convocatoria@f-a-m-a.com'>
          <img
            src="./FAMA_WEB_7.jpg"
            // layout="fullWidth"
            // quality={95}
            // formats={["AUTO", "WEBP", "AVIF"]}
            alt="mail"
            // style={{ marginBottom: `1.45rem` }}
          />
        </a>
      </div>
      <div className='element-duo'>
        <img
          src="./FAMA_WEB_8.jpg"
          // layout="fullWidth"
          // quality={95}
          // formats={["AUTO", "WEBP", "AVIF"]}
          alt="Fecha límite 10 de agosto"
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
    display: flex;
    a {
      display: flex;
    }
  }

  @media (max-width: 650px) {
    flex-direction: column;
    .element-duo {
      width: 100% !important;
    }
  }
`
const Texto = styled.section`
  position: absolute;
  z-index: -1;
`

export default IndexPage
