import React from 'react';
import './mailtemplate.css';
import {useHistory} from 'react-router-dom'
import {useSpring, animated, config } from 'react-spring'

function MailTemplate({name,data,loadTheTemplate,handelDict}) {
  const [loadStyle, setloadStyle]=useSpring(() => ({transform:" translate(0%,0%) scale(1)"}))
  const [sendStyle, setsendStyle]=useSpring(() => ({transform:" translate(0%,0%) scale(1)"}))
  const {push} = useHistory()
  
  console.log(data)
    return (
    <div className="template">
      <svg className="templateSVG"
      viewBox="0 0 750.149 29.482"
      height={111.429}
      width={1871.428}
    >
      <defs>
        <path id="prefix__a" d="M33.262 78.619H67.28V99.03H33.262z" />
      </defs>
      <g transform="translate(38.554 -95.25)">
        <rect
          width={497.726}
          height={29.482}
          x={-39.014}
          y={96.838}
          ry={13.607}
          rx={12.158}
          fill="#ccc"
        />
        <rect
          rx={12.095}
          ry={13.607}
          y={95.25}
          x={-38.554}
          height={29.482}
          width={495.149}
          fill="#fff"
        />
        <text
          transform="matrix(.76546 0 0 .71133 -28.879 48.636)"
          fontWeight={700}
          fontSize={14.111}
          fontFamily="Times New Roman"
          fill="red"
        >
          <tspan x={33.262} y={91.084}>
            <tspan>{name}</tspan>
          </tspan>
        </text>
      </g>
    </svg>
      <animated.div className="load" 
        style={loadStyle}
          onMouseEnter={() => {
            setloadStyle({transform:" translate(0%,0%) scale(1.1)"})
          }}
          onMouseLeave={() => {
            setloadStyle({transform:" translate(0%,0%) scale(1)"})
          }}
          onClick={() => {
            push("/mailEditor")
            handelDict()
            setTimeout(() => {
              loadTheTemplate(data)
            },500)
            
          }}
        >
        <svg className="loadSVG"
              xmlns="http://www.w3.org/2000/svg"
              width="220.829"
              height="85.142"
              version="1.1"
              viewBox="0 0 58.428 22.527"
            >
              <defs>
                <path id="rect839" d="M33.262 78.619H67.28V99.03H33.262z"></path>
                <path d="M33.262 78.619H67.28V99.03H33.262z"></path>
                <path d="M33.262 78.619H67.28V99.03H33.262z"></path>
                <path d="M33.262 78.619H67.28V99.03H33.262z"></path>
              </defs>
              <g stroke="none" transform="translate(-114.296 -85.277)">
                <rect
                  width="57.719"
                  height="21.875"
                  x="115.005"
                  y="85.929"
                  fill="#666"
                  fillOpacity="0.569"
                  strokeOpacity="1"
                  strokeWidth="0.281"
                  ry="10.937"
                ></rect>
                <rect
                  width="57.719"
                  height="21.875"
                  x="114.296"
                  y="85.277"
                  fill="#ff0e0e"
                  fillOpacity="1"
                  strokeOpacity="1"
                  strokeWidth="0.281"
                  ry="10.937"
                ></rect>
                <g fillOpacity="1" transform="translate(-190.094 -14.741)">
                  <path
                    fill="#fff"
                    strokeWidth="0.031"
                    d="M312.378 104.982c-.676 0-1.22.525-1.22 1.176v8.963c0 .651.544 1.175 1.22 1.175h9.355c.676 0 1.22-.524 1.22-1.175v-6.842a2.29 2.29 0 00-.23-.64l-2.522-2.45a2.642 2.642 0 00-.417-.207zm.853 1.609h5.924c.204 0 .368.212.368.476v2.32c0 .263-.164.475-.368.475h-5.924c-.204 0-.368-.212-.368-.476v-2.319c0-.264.164-.476.368-.476zm3.801 4.88a1.697 1.608 0 01.01 0 1.697 1.608 0 011.697 1.608 1.697 1.608 0 01-1.697 1.609 1.697 1.608 0 01-1.697-1.609 1.697 1.608 0 011.688-1.608z"
                  ></path>
                  <path
                    fill="red"
                    strokeOpacity="1"
                    strokeWidth="0.023"
                    d="M320.756 112.038c-.044.001-1.075 1.88-1.052 1.917.009.015.497-.011.718.012v1.32a.336.336 0 10.673 0v-1.334s.768.009.776-.007c.021-.039-1.071-1.909-1.115-1.908z"
                  ></path>
                </g>
                <text
                  transform="matrix(.76546 0 0 .71133 114.769 35.184)"
                  style={{
                    lineHeight: "1.25",
                    InkscapeFontSpecification: "'Times New Roman, Bold'",
                    fontVariantLigatures: "normal",
                    fontVariantCaps: "normal",
                    fontVariantNumeric: "normal",
                    fontVariantEastAsian: "normal",
                    whiteSpace: "pre",
                  }}
                  fill="#fff"
                  fillOpacity="1"
                  fontFamily="Times New Roman"
                  fontSize="14.111"
                  fontStretch="normal"
                  fontStyle="normal"
                  fontVariant="normal"
                  fontWeight="bold"
                  xmlSpace="preserve"
                >
                  <tspan x="33.262" y="91.084">
                    <tspan>Load</tspan>
                  </tspan>
                </text>
              </g>
          </svg>
      </animated.div>
      <animated.div className="send" 
         onMouseEnter={() => {
          setsendStyle({transform:" translate(0%,0%) scale(1.1)"})
        }}
        onMouseLeave={() => {
          setsendStyle({transform:" translate(0%,0%) scale(1)"})
        }}
        onClick={() => {
          alert("Mails has been sent to contacts")
        }}
        style ={sendStyle}>
          <svg className="sendSVG"
              xmlns="http://www.w3.org/2000/svg"
              width="219.377"
              height="84.973"
              version="1.1"
              viewBox="0 0 58.043 22.482"
            >
              <defs>
                <path id="rect953" d="M33.262 78.619H67.28V99.03H33.262z"></path>
                <path d="M33.262 78.619H67.28V99.03H33.262z"></path>
              </defs>
              <g stroke="none" transform="translate(-114.016 -137.985)">
                <rect
                  width="57.719"
                  height="21.875"
                  x="114.341"
                  y="138.593"
                  fill="#666"
                  fillOpacity="0.569"
                  strokeOpacity="1"
                  strokeWidth="0.281"
                  ry="10.937"
                ></rect>
                <rect
                  width="57.719"
                  height="21.875"
                  x="114.016"
                  y="137.985"
                  fill="#ff0e0e"
                  fillOpacity="1"
                  strokeOpacity="1"
                  strokeWidth="0.281"
                  ry="10.937"
                ></rect>
                <path
                  fill="#fff"
                  fillOpacity="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeOpacity="1"
                  strokeWidth="0.07"
                  d="M123.39 148.079l8.43-4.866c.167-.023.334-.045.47-.003.137.042.256.16.318.29.062.132.075.281-.187 1.914a372.65 372.65 0 01-1.09 6.342c-.293 1.595-.343 1.67-.424 1.744a.688.688 0 01-.318.175c-.124.025-.261 0-.76-.212-.498-.212-1.358-.61-1.794-.81-.436-.2-.448-.2-.685.1-.237.299-.698.897-.972 1.22-.274.325-.362.375-.467.393a.77.77 0 01-.318-.018.396.396 0 01-.187-.112c-.05-.05-.1-.112-.119-.48-.018-.368-.006-1.065 0-1.414.006-.35.006-.362.885-1.42.879-1.06 2.636-3.166 3.514-4.244.879-1.078.879-1.127.841-1.134-.037-.006-.112.031-1.196.966-1.084.935-3.178 2.766-4.237 3.67-1.059.903-1.084.878-1.501.685-.418-.193-1.228-.555-1.664-.816-.436-.262-.498-.424-.51-.535-.01-.111.05-.2.105-.269.056-.068.119-.13.15-.162.03-.031.031-.031 1.717-1.004z"
                ></path>
                <text
                  transform="matrix(.76546 0 0 .71133 114.008 87.73)"
                  style={{
                    lineHeight: "1.25",
                    InkscapeFontSpecification: "'Times New Roman, Bold'",
                    fontVariantLigatures: "normal",
                    fontVariantCaps: "normal",
                    fontVariantNumeric: "normal",
                    fontVariantEastAsian: "normal",
                    whiteSpace: "pre",
                  }}
                  fill="#fff"
                  fillOpacity="1"
                  fontFamily="Times New Roman"
                  fontSize="14.111"
                  fontStretch="normal"
                  fontStyle="normal"
                  fontVariant="normal"
                  fontWeight="bold"
                  xmlSpace="preserve"
                >
                  <tspan x="33.262" y="91.084">
                    <tspan>Send</tspan>
                  </tspan>
                </text>
              </g>
            </svg>
      </animated.div>
    </div>
    );
  }
export default MailTemplate ;