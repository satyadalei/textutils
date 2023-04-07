import React, { useEffect, useState } from "react";

export default function About(props) {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
//const [modeText,setModeText] = useState("Enable Dark mood");
//   function changeMode() {
//     if (props.mode === "light") {
//       setMyStyle({
//         color: "black",
//         backgroundColor: "white",
//       });
//       // setModeText("Enable dark mode");
//       document.body.style.backgroundColor = "black";
//     } else {
//       setMyStyle({
//         color: "white",
//         backgroundColor: "black",
//       });
//       //setModeText("Enable Light mode");
//       document.body.style.backgroundColor = "white";
//     }
//   }
 //in use effect it only renders once --> if you change state  
  useEffect(() => {
        if (props.mode === "light") {
            setMyStyle({
                color: "black",
                backgroundColor: "white",
            });
        }else{
            setMyStyle({
                color: "white",
                backgroundColor: "black",
            });
        }
  },[props.mode]); 
  // here you should give [props.mode] because this is what it depends on for which it will call it self.
  // if you do not give dependencies it will only fired once and then when state changes there will be no firring
  //directly manipulate properties - not working : says --> Too many re-renders
//   if (props.mode === "light") {
//       setMyStyle({
//           color: "black",
//           backgroundColor: "white",
//       });
//   } else {
//       setMyStyle({
//           color: "white",
//           backgroundColor: "black",
//       });
//   }
  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About </h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <div className="container my-2 ">
        <button
          //  onClick={changeMode}
          type="button"
          className="btn btn-primary"
        >
          {/* {modeText} */}
        </button>
      </div>
    </div>
  );
}
