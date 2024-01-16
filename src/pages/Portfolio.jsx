// Import project component
import Project from "../components/Project";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Portfolio() {
  const projects = [
    {
      title: "Roam Ready - Travel blog",
      description: "MERN Stack",
      imageUrl: "./assets/images/roam-ready.png",
      githubLink: "https://github.com/c-wrenn/roam-ready",
      deployedLink: "https://roam-ready-79c746e8ffc3.herokuapp.com/",
    },
    {
      title: "Key Generator",
      description: "NoSQL/GraphQL/Express/React/Node",
      imageUrl: "./img/key.png",
      githubLink: "https://github.com/c-wrenn/Key-Generator-03",
      deployedLink:
        "",
    },
    {
      title: "Text Editor - JATE",
      description: "IndexedDB/SWA/Webpack",
      imageUrl: "./img/jate.png",
      githubLink: "https://github.com/c-wrenn/JATE-PWA",
      deployedLink:
        "",
    },
    {
      title: "SocialNetWorkAPI",
      description: "NoSQL, Express.js, MongoDB, Mongoose",
      imageUrl: "./img/socialnetwork.png",
      githubLink: "https://github.com/c-wrenn/NoSQL-SocialNetworkAPI",
      deployedLink: "https://build-link-10beabbadf73.herokuapp.com",
    },
    {
      title: "Note Taker Application",
      description: "Express.js, Heroku",
      imageUrl: "./img/notetaker.png",
      githubLink: "https://github.com/SKhai77/mvc-tech-blog",
      deployedLink: "https://sk77-mvctechblog-e599ac753156.herokuapp.com",
    },
    {
      title: "Cyber-Mart",
      description: "Express.js, Node.js, Sequalize",
      imageUrl: "./img/cybermart.png",
      githubLink: "https://github.com/c-wrenn/CyberMart",
      deployedLink: "https://cybermart1-76e7c43ac326.herokuapp.com/",
    },
  ];

  return (
    <main>
 <Container>
      <Row xs={4} md={4} lg={6}>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row xs={1} md={2}>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
      <Row xs="auto">
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>


      <section>
        <div className="container-fluid">
          <h2>Portfolio</h2>
          <div className="row mt-4">
            {projects.map((project, index) => (
              <div
                className="col-sm-6 col-md-4 col-lg-4 col-xxl-3 g-4"
                key={index}
              >
                <Project
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  githubLink={project.githubLink}
                  deployedLink={project.deployedLink}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Portfolio;



// export default function Portfolio() {
//     const containerStyle = {
//       border: '1px solid #ccc',
//       padding: '10px',
//       textAlign: 'center',
//     };
  
//     const imageStyle = {
//       maxWidth: '100%',
//       transition: 'opacity 0.3s',
//     };
  
//     return (
//       <div style={containerStyle}>
//         <h1>Projects</h1>
//           <div className="container">
//            <div className="row">
  
  
//             <div className="col-md-6 col-lg-4">
//               <div>
//                 <a href='https://cybermart1-76e7c43ac326.herokuapp.com/' target="blank">
//                   <img
//                     src={cybermart}
//                     alt="Ecomerce website"
//                     style={imageStyle}
//                     // e is for event so the event passes when it is over the target and then the style is applied
//                     onMouseOver={(e) => (e.currentTarget.style.opacity = 0.8)}
//                     onMouseOut={(e) => (e.currentTarget.style.opacity = 1)} />
//                 </a>
//                 <h3>CyberMart: HTML, CSS, Express</h3>
//                 <a href='https://github.com/c-wrenn/CyberMart' target='blank'>Github</a>
//               </div>
//             </div>
  
  
//             <div className="col-md-6  col-lg-4">
//               <div style={containerStyle}>
//                 <a href='https://immense-coast-03124-7ccec52b997b.herokuapp.com/notes' target="blank">
//                   <img
//                     src={weatherApp}
//                     alt="Note Taker App"
//                     style={imageStyle}
//                     onMouseOver={(e) => (e.currentTarget.style.opacity = 0.8)}
//                     onMouseOut={(e) => (e.currentTarget.style.opacity = 1)} />
//                 </a>
//                 <h3>Note Taker: Express.js, Node.js</h3>
//                 <a href='https://github.com/c-wrenn/Create-Notes' target='blank'>Github</a>
//               </div>
//             </div>
  
  
  
  
//             <div className="col-md-6  col-lg-4">
//               <div style={containerStyle}>
//                 <a href='https://roam-ready-79c746e8ffc3.herokuapp.com/' target="blank">
//                   <img src={roam}
//                     alt="travel blog"
//                     style={imageStyle}
//                     onMouseOver={(e) => (e.currentTarget.style.opacity = 0.8)}
//                     onMouseOut={(e) => (e.currentTarget.style.opacity = 1)} />
//                 </a>
//                 <h3>Roam Ready: MERN</h3>
//                 <a href='https://github.com/c-wrenn/roam-ready' target='blank'>Github</a>
//               </div>
//             </div>
  
  
  
  //           <div className="col-md-6  col-lg-4">
  //             <div style={containerStyle}>
  //               <a href='https://easyblogs1-0a58a50a4e3a.herokuapp.com/' target="blank">
  //                 <img src={keygenerator}
  //                   alt="key generator app"
  //                   style={imageStyle}
  //                   onMouseOver={(e) => (e.currentTarget.style.opacity = 0.8)}
  //                   onMouseOut={(e) => (e.currentTarget.style.opacity = 1)} />
  //               </a>
  //               <h3>Key Generator</h3>
  //               <a href='https://github.com/c-wrenn/Key-Generator-03' target='blank'>Github</a>
  //             </div>
  //           </div>
  
  
  //           <div className="col-md-6  col-lg-4">
  //             <div style={containerStyle}>
  //               <a href='https://github.com/c-wrenn/NoSQL-SocialNetworkAPI' target="blank">
  //                 <img src={socialAPI}
  //                   alt="markdown"
  //                   style={imageStyle}
  //                   onMouseOver={(e) => (e.currentTarget.style.opacity = 0.8)}
  //                   onMouseOut={(e) => (e.currentTarget.style.opacity = 1)} />
  //               </a>
  //               <h3>SocialNetWorkAPI: NoSQL, Express.js, MongoDB, Mongoose </h3>
  //             </div>
  //           </div>
  
  //           <div className="col-md-6  col-lg-4">
  //             <div style={containerStyle}>
  //               <a href='https://github.com/c-wrenn/README-Generator-usingNode.js' target="blank">
  //                 <img src={readmeGen}
  //                   alt="markdown"
  //                   style={imageStyle}
  //                   onMouseOver={(e) => (e.currentTarget.style.opacity = 0.8)}
  //                   onMouseOut={(e) => (e.currentTarget.style.opacity = 1)} />
  //               </a>
  //               <h3>Readme generator: Node.js</h3>
  //             </div>
  //           </div>
  
  
  //       </div>
  //     </div>
  //     </div>
  //   );
  // }