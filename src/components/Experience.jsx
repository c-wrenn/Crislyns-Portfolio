import anime from "animejs";

const animation = () => {
anime({
    targets: '.staggering-grid-demo .el',
    scale: [
      {value: .1, easing: 'easeOutSine', duration: 500},
      {value: 1, easing: 'easeInOutQuad', duration: 1200}
    ],
    delay: anime.stagger(200, {grid: [4, 2], from: e.target})
  });
};


function Experience() {
    return(
        <body>
<div>

</div>

            <section className="exp-ed-section">
                <div className="experience-container">

                    <div className="exp-div">
            <h1 className="underline" id="exp-title">Experience</h1>
                    </div>
                <div className="badges" >
                    <img id="img" src="src/img/HTMLGraphic.png" alt="" />
                    <img id="img" src="src/img/CSSGraphic.png" alt="" />
                    <img id="img" src="src/img/REACTGraphic.png" alt="" />
                    <img id="img" src="src/img/MongoDBGraphic.png" alt="" />
                    <img id="img" src="src/img/JSGraphic.png" alt="" />
                    <img id="img" src="src/img/FigmaGraphic.png" alt="" />
                    <img id="img" src="src/img/GraphQLGraphic.png" alt="" />
                </div>
                </div>


                <div className="education-container">
                    <div className="edu-div">
            <h1 className="underline" id="edu-title">Education</h1>
                    </div>
                <div className="SMU-section">
                    <h2>Southern Methodist University</h2>
                    <ol>
                        <li>Worked on ...</li>
                        <li>Collaborated with others...</li>
                    </ol>
                </div>
                <div className="TTU-section">
                    <h2>Texas Tech University</h2>
                     <ol>
                        <li> expected Graduation date:</li>
                    </ol>
                </div>

            </div>


            </section>





         
        </body>
    )
}
export default Experience;