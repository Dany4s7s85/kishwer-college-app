import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./Nav";

function Home() {
  return (
    <div>
      <NavBar />
      <div className="HomeBodyDiv">
        <img src="https://www.ucl.edu.pk/images/img8.png" />
        <h2>
          Universal College Lahore - Teaching for the University of London
          Programmes Since 1994
        </h2>
        <p>
          Universal College Lahore* (UCL) offers a creative and dynamic learning
          environment, a diverse and dedicated faculty and a student body
          belonging to various parts of Pakistan. Universal College Lahore has a
          purpose-built campus with lecture halls, seminar rooms, libraries,
          computer labs, student common rooms and cafeterias. The campus has
          ample ground area for outdoor sport activities, including soccer,
          cricket, volleyball, and badminton. Apart from providing rigorous
          academic training to its scholars, Universal College Lahore also
          offers them an elaborate system of club activities including debate,
          drama, music, poetry recitation, chess etc. A range of events and
          functions are organized by these clubs throughout the year. Universal
          College Lahore has been teaching for the International Programmes
          since 1994. Universal College Lahore is a Recognized Teaching Centre
          for University of London. This is the highest level of recognition and
          means that in the considered view of the University of London it
          demonstrates a sustained commitment to developing excellence in
          respect of teaching, support to students, and administrative
          processes. For 25 years, Universal College Lahore has been preparing
          students for successful careers in academics, law practice, business,
          public service, teaching and more. * Universal College Lahore is not
          affiliated with or connected to University College London.
        </p>
        <h2>UCL wins Outstanding Cambridge Learner Award</h2>
        <p>
          Cambridge International Examinations has announced the winners of the
          Outstanding Cambridge Learner Awards for the GCE A-Level exams held in
          May/June 2016. Our A-Level student Ubaid Ullah Azam has topped at the
          Punjab level in the subject of Accounting. Ubaid, we are proud of you
          and extend hearty congratulations to you, your parents and the
          Accounting teacher on such a high achievement.
        </p>
        <h2>A-Level High Achievers 2014</h2>
        <p>
          Like the past years, this year too, the Universal College Lahore has
          produced excellent results in the Cambridge 2014 A-Level examinations.
          Over 20% of our students scored 3 or more As in their opted subjects.
          The percentage of A*, A, B and C grades achieved by the students is
          over 70 whereas the pass percentage remained over 94. We congratulate
          our students as well as their proud parents and teachers who
          contributed to these fantastic results.
        </p>
      </div>
    </div>
  );
}

export default Home;
