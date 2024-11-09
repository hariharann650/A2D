import React, { useState } from 'react';
import './Form.css';
import { useEffect, useRef } from 'react';
// import SplineViewer from './SplineViewer';

function PCBuildForm() {
  const scriptURL = "https://script.google.com/macros/s/AKfycbxQOt1qQfr4dLhO5skO1lsU0nmsNfrSQRywl86o0SQhnXqnIy-APPvXsMKowLahaPiWYg/exec";
  const [success, setSuccess] = useState(false);
  // const [running,setRunning] = useState(false);

 
    const splineRef = useRef(null);
  
    useEffect(() => {
      // Load the Spline viewer script dynamically
      const script = document.createElement('script');
      script.src = "https://unpkg.com/@splinetool/viewer@1.9.37/build/spline-viewer.js";
      script.type = "module";
      document.body.appendChild(script);
  
      // Cleanup the script when component unmounts
      return () => {
        document.body.removeChild(script);
      };
    }, []);

  const submitForm = (e) => {

    setSuccess(true);
    e.preventDefault();
    const form = e.target;
    
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        form.reset();
        setTimeout(() => setSuccess(false), 3000);
      })
      .catch((error) => console.error("Error!", error.message));
  };



  return (
    <>

<div className="mainform-parent">
         <spline-viewer
        ref={splineRef}
        url="https://prod.spline.design/VpoVxkYMMsnb66bR/scene.splinecode"
        // style={{ width: '100%', height: '100%' }} 
      ></spline-viewer>

    <div className="mainform">
      <form className="row g-3 p-2 forming" name="submit-to-google-sheet" onSubmit={submitForm}>
        <h1 className="title">A2D PC Factory</h1>
        <p className="title-sub">
          Welcome to A2D PC FACTORY, where you'll experience the Infinite Power
          of Performance and discover that every pixel promises limitless
          creativity.
        </p>

        <div className="col-md-15">
          <label htmlFor="validationServer01" className="form-label">
            Hello! What's Your Name?<span className="spaning">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="validationServer01"
            placeholder="Enter Your Name"
            name="Name"
            required
          />
        </div>
        <hr />

        <div className="col-md-15">
          <label htmlFor="validationServer02" className="form-label">
            What's your exact age? <span className="spaning">*</span>
          </label>
          <input
            type="text"
            className="form-control inputing"
            id="validationServer02"
            name="Age"
            placeholder="Enter Your Age"
            required
          />
        </div>
        <hr />

        <div className="col-md-15">
          <label htmlFor="validationServer03" className="form-label">
            Provide your WhatsApp number <span className="spaning">*</span>
          </label>
          <input
            type="text"
            className="form-control inputing"
            id="validationServer03"
            name="Whatsapp"
            placeholder="Enter WhatsApp Number"
            required
          />
        </div>
        <hr />

        <label htmlFor="validationFormCheck87">Provide your Country code (For India +91) <span className="spaning">*</span></label>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="validationFormCheck256"
            value="+91"
            name="Countrycode"
            required
          />
          <label className="form-check-label" htmlFor="validationFormCheck256">+91</label>
        </div>
        <div className="form-check mb-3">
          <input
            type="radio"
            className="form-check-input"
            id="validationFormCheck65"
            name="Countrycode"
            value="others"
            required
          />
          <label className="form-check-label" htmlFor="validationFormCheck65">Others:</label>
          <input type="text" className="form-control" name="OtherCountryCode" />
        </div>
        <hr />

        <div className="col-md-15 position-relative">
          <label htmlFor="validationTooltip90" className="form-label">
            Where are you located at?<span className="spaning">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="validationTooltip90"
            placeholder="Mention the City or Town."
            name="Location"
            required
          />
        </div>
        <hr />

        <div className="col-md-15 position-relative">
          <label htmlFor="validationTooltip91" className="form-label">
            What do you do for a living?<span className="spaning">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="validationTooltip91"
            placeholder="E.g. Developer, Student, Photographer etc."
            name="Living"
            required
          />
        </div>
        <hr />

        <div className="col-md-15 position-relative">
          <label htmlFor="validationTooltip92" className="form-label">
            For what purpose will this PC serve you?<span className="spaning">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="validationTooltip92"
            placeholder="E.g. Video Editing for Film Production, Gaming etc."
            name="Purpose"
            required
          />
        </div>

        <hr />
      <label htmlFor="validationFormCheck94">
        The Best Investment you are planning for this PC?
        <span className="spaning">*</span>
      </label>
      <div className="form-check">
        <input
          type="radio"
          className="form-check-input"
          id="validationFormCheck95"
          name="Investment"
          value="Rs 30,000 - 50,000"
          required
        />
        <label className="form-check-label" htmlFor="validationFormCheck95">
          Rs 30,000 to 50,000
        </label>
      </div>
      <div className="form-check">
        <input
          type="radio"
          className="form-check-input"
          id="validationFormCheck96"
          name="Investment"
          value="50,000 - 75,000"
          required
        />
        <label className="form-check-label" htmlFor="validationFormCheck96">
          Rs 50,000 to 75,000
        </label>
      </div>
      <div className="form-check">
        <input
          type="radio"
          className="form-check-input"
          id="validationFormCheck97"
          name="Investment"
          value="75,000 - 1,00,000"
          required
        />
        <label className="form-check-label" htmlFor="validationFormCheck97">
          Rs 75,000 to 1,00,000
        </label>
      </div>
      <div className="form-check">
        <input
          type="radio"
          className="form-check-input"
          id="validationFormCheck98"
          name="Investment"
          value="more than 1 lakhs"
          required
        />
        <label className="form-check-label" htmlFor="validationFormCheck98">
          More than 1 lakhs
        </label>
      </div>
      <hr />
      <label htmlFor="validationFormCheck100">
        When do you need the PC by?
        <span className="spaning">*</span>
      </label>
      <div className="form-check">
        <input
          type="radio"
          className="form-check-input"
          id="validationFormCheck41"
          name="Time"
          value="Right now"
          required
        />
        <label className="form-check-label" htmlFor="validationFormCheck41">
          Right Now
        </label>
      </div>
      <div className="form-check">
        <input
          type="radio"
          className="form-check-input"
          id="validationFormCheck42"
          name="Time"
          value="In a few days"
          required
        />
        <label className="form-check-label" htmlFor="validationFormCheck42">
          In a Few Days
        </label>
      </div>
      <div className="form-check">
        <input
          type="radio"
          className="form-check-input"
          id="validationFormCheck43"
          name="Time"
          value="in a month"
          required
        />
        <label className="form-check-label" htmlFor="validationFormCheck43">
          In a Month
        </label>
      </div>
      <div className="form-check mb-3">
        <input
          type="radio"
          className="form-check-input"
          id="validationFormCheck14"
          name="Time"
        />
        <label className="form-check-label" htmlFor="validationFormCheck14">
          Others:
        </label>
        <input
          type="text"
          id="validationFormCheck"
          name="Time"
          className="form-control"
        />
        <div className="invalid-feedback">Choose Anyone</div>
      </div>
      <hr />
      <div className="col-md-15 position-relative">
        <label htmlFor="validationTooltip34" className="form-label">
          What is your monthly income?
          <span className="spaning">*</span>
        </label>
        <select
          className="form-select"
          id="validationTooltip34"
          name="Income"
          required
        >
          <option value="" disabled selected>
            Choose
          </option>
          <option value="Student">Student</option>
          <option value="Unemployed">Unemployed</option>
          <option value="10,000 - 25,000">10,000 - 25,000</option>
          <option value="25,000 - 50,000">25,000 - 50,000</option>
          <option value="50,000 - 75,000">50,000 - 75,000</option>
          <option value="75,000 - 1,00,000">75,000 - 1,00,000</option>
          <option value="more than 1 lakh's">More than 1 lakh's</option>
        </select>
        <div className="invalid-tooltip">Please select an Income.</div>
      </div>
      <hr />
      <div className="col-md-15 position-relative">
        <label htmlFor="validationTooltip61" className="form-label">
          If you have any suggestions or recommendations regarding this PC Build, kindly mention it in detail.
        </label>
        <input
          type="text"
          name="Suggestion"
          className="form-control"
          id="validationTooltip61"
          placeholder="Your Message"
        />
        <div className="invalid-tooltip">Please provide a valid Suggestion</div>
      </div>
      <hr />





        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="invalidCheck62"
              name="Agree"
              value="Yes"
              required
            />
            <label className="form-check-label" htmlFor="invalidCheck62">Agree to terms and conditions</label>
          </div>
        </div>

        <div className="col-12 btn2">
          <button className="btn btn-primary" disabled={success} id='submitbtn' type="submit">Submit form</button>
        </div>
        {success && (
          <span id="successMessage" className="success-message">
            Form submitted successfully
          </span>
        )}
      </form>
    </div>
    </div>
    </>
  );
}

export default PCBuildForm;
