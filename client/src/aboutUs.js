import NavBar from "./Nav";

function About() {
  return (
    <div>
      <NavBar />
      <div className="HomeBodyDiv">
        <img src="https://images.pexels.com/photos/2305098/pexels-photo-2305098.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <h2>Message from the Director</h2>
        <p>
          The technological developments of the past century in the fields of
          news, telecommunication and information technology have opened the
          world for us. More importantly, they have brought the world into our
          homes. The sense of deprivation, of lagging behind is now more
          pronounced, as we can see where we are and what others have achieved.
          Consequently, there is a sharpened desire to better ourselves at a
          personal and also at a national level. The proliferation of education
          institutions in Pakistan bears testimony to this. UCL's guiding
          philosophy has been to provide young people in Pakistan the
          opportunity to become internationally competitive. And we seek to do
          so by offering to teach for internationally recognised qualifications.
          The programmes we offer are of assured standards and have worldwide
          acceptability. We believe that along with quality education,
          personality development is crucial. We endeavour to develop
          self-confidence, independent thinking and power of expression through
          a host of co-curricular and extra-curricular activities, such as
          dramatics, debates, college publications and sports. The achievement
          of our goals lies in a mutually beneficial partnership of all
          concerned: parents, students, faculty and administration.
          Consequently, our policies and our activities have, and always will be
          based on active participation of all concerned. This formula has
          served us well so far, and will hopefully continue to do so in the
          future.
        </p>
        <h2>Mission Statement</h2>
        <p>
          Universal College Lahore aims to provide education at par with that
          available on the international horizon, and to ensure academic
          excellence and personality development. To make this possible for
          deserving yet constrained individuals. To create and foster an
          environment of learning, encouraging those with potential. With this
          in mind, the institution's objectives are:
        </p>
        <ul>
          <li>to provide quality education</li>
          <li>
            to allow students access to foreign education while remaining within
            the sociocultural bounds of Pakistan
          </li>
          <li>
            to cater to the academic and professional requirements as well as
            the personal development of students.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
