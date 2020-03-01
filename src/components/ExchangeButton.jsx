import React from "react";

const ExchangeButton = () => (
  <button id="exchange-button">
    <svg x="0px" y="0px" viewBox="0 0 470.72 470.72" width="35px" height="35px">
      <g>
        <g>
          <g>
            <path
              d="M193.76,337.6l-48,48c-9.937,9.903-17.583,21.864-22.4,35.04V43.36h-32v376.96c-4.79-13.105-12.38-25.008-22.24-34.88    l-48-48L0,358.72l107.36,107.2l107.36-107.36L193.76,337.6z"
              data-original="#000000"
              className="active-path"
              data-old_color="#000000"
              fill="#FFFFFF"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M363.36,4.8L256,112l20.96,20.96l49.92-49.92c8.951-9.056,15.782-19.985,20-32v376.32h32V50.72    c4.311,12.044,11.253,22.976,20.32,32l49.92,49.92l21.6-20.64L363.36,4.8z"
              data-original="#000000"
              className="active-path"
              data-old_color="#000000"
              fill="#FFFFFF"
            />
          </g>
        </g>
      </g>{" "}
    </svg>
    <span className="sr-only">Click the Swap Currencies</span>
  </button>
);

export default ExchangeButton;
