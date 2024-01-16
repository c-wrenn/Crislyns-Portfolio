export default function Resume() {
    return (
        <>
        {/* link resume */}
        <div className="d-flex flex-column justify-content-center align-items-center" >
        <h1>View the technlogies </h1>

        {/* insert the badges of the programs i know here */}
        <a href="https://docs.google.com/document/d/1Zejbq0y3nHQTj_1GLKOh7817FKWN4tOxk3YAKI-nyU8/edit?usp=sharing" target="blank">Link To resume</a>
        </div>

<div>
  <p></p>
</div>

{/* inserts the experience component */}
< Experience />


        <section>
            <div>
            </div>
{/* add styles */}
            <div>
            <h3>Front-End Knowledge</h3>
              <ol className="list-group mb-3">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Responsive Design</li>
                <li>REACT</li>
                <li>Bootstrap</li>
              </ol>

              <h3>Back-End Knowledge</h3>
              <ol className="list-group">
                <li>APIs</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MySQL Sequelize</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
              </ol>
            </div>
        </section>
        </>
    
    )
}
