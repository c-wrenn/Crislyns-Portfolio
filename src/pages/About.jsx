import Stack from 'react-bootstrap/Stack';
import Experience from "../components/Experience";

const styles = {
  imageStyle: {
    height: '25rem',
    width: "25rem",
    borderRadius: '50%',
    border: '3px solid #000',
  },
  letterStyle: {
    fontStyle: {
      fontWeight: '900',
      fontSize: '4rem',
      fontFamily: 'Trebuchet MS'
      
    },
    paragraphStyle: {
      fontFamily: 'Mulish, sans-serif',
      letterSpacing: '1.2px',
      lineHeight: '1.6rem',
    }
  }

}

function About() {
    return(
<body className="body-styles">
        <main>
          <h1 styles={styles.letterStyle.fontStyle}>About Me</h1>
<section>
    <div>
        <article className='aboutMe-articles'>
          <h2>Frontend Developer</h2>
          <p>I have experience with front end development.</p>
        </article>

        <article className='aboutMe-articles'>
          <h3>Backend Developer</h3>
            <p>I have experience developing fast and 
            optimized back-end systems and APIs
           </p>
        </article>

        <article className='aboutMe-articles'>
          <h4>Web Developer</h4>
          <p>I am a web developer with experience collaborating.</p>
        </article>
    </div>
</section>

        </main>

 <article className='exp-article'>
  < Experience />
 </article>

        </body>
    );
}

export default About;