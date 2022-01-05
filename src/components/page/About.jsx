import React from 'react';
function About(props) {
  return (
    <>
      <section className="text my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1>About</h1>
              <br />
              <h5>Project Details: </h5>
              <p>
                This page is about Animals from all over the world. In this
                assignment, I tried to build a webpage which is includes Home,
                About, Posts and Contact pages. And i used an free Api for
                creating my post; Animals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
