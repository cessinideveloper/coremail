import React, {useRef, useEffect} from 'react';
import {useSpring, animated, config } from 'react-spring'
import "./firstWindow.css"
import {useHistory} from 'react-router-dom'
import {newTempalte,madeSelect} from '../actions'
import {connect} from 'react-redux'


const trans = (x,y,z) => `scaleX(${x}) scaleY(${y}) rotateY(${z}deg)`
const disp = (x) => `${x}` 


function FirstBody({handelDic}) {
    const { push } = useHistory()
    // let activeDic = {sendActive:false, mailActive:false}

    // function activechecker (sendAct, mailAct) {
    //     if(sendAct){
    //     activeDic.sendActive = true
    //     }
    //     if(mailAct){
    //     activeDic.mailActive = true
    //     }
    // }

 const [propsFirst, setFirst] = useSpring(() => ({ x: [1,1,0], config: { mass: 5, tension: 350, friction: 40 } }))
 const [propsSecond, setSecond] = useSpring(() => ({ x: [1,1,0], config: { mass: 5, tension: 350, friction: 40 } }))
 const [firsttextPop, setFirstText] =useSpring(() => ({ x: "0%" }))
 const [secondtextPop, setSecondText] =useSpring(() => ({ x: "0%" }))
 const [firstFlip, setFirstFlip] =useSpring(() => ({ opacity: 1 , config:{ mass: 5, tension: 150, friction: 40} }))
 const [shrinkRight, setRight] = useSpring(() => ({ x: [1,1,0], config: { mass: 5, tension: 350, friction: 40 }}))
 const [shrinkLeft, setLeft] = useSpring(() => ({ x: [1,1,0], config: { mass: 5, tension: 350, friction: 40 }}))
 const [secondFlip, setSecondFlip] =useSpring(() => ({ opacity: 1 , config:{ mass: 5, tension: 150, friction: 40} }))
 const [dumpThridWindow, setThird]=useSpring(() => ({display:"flex"}))
 const [planeFly, planeSush]=useSpring(() => ({transform:"translate(0%,0%) scale(1)", bg1:"#f10300"}))
 const [mailFly, mailSush]=useSpring(() => ({transform:"translate(0%,0%) scale(1)", bg1:"#f40300", bg2:"#f40200"}))
 const [planeGone, planeVanish]=useSpring(() => ({opacity:1}))
 const [mailGone, mailVanish]=useSpring(() => ({opacity:1}))
  return (
    <div className="midNavigator" >
        <div className="secondWindow">
            <div className="secondWindowfirst  Back">
                <animated.svg style={{ transform: propsFirst.x.interpolate(trans), opacity: firstFlip.opacity }}
                    className="sendBack"
                    xmlns="http://www.w3.org/2000/svg"
                    width="794.286"
                    height="962.857"
                    version="1.1"
                    viewBox="0 0 210.155 254.756"
                    >
                    <g strokeWidth="0.273" transform="translate(-43.09 86.935)">
                        <rect
                        width="204.863"
                        height="249.464"
                        x="48.381"
                        y="-81.643"
                        fill="#000"
                        fillOpacity="0.173"
                        ry="54.091"
                        ></rect>
                        <rect
                        width="204.863"
                        height="249.464"
                        x="43.089"
                        y="-86.935"
                        fill="#fff"
                        fillOpacity="1"
                        ry="54.091"
                        ></rect>
                    </g>
                </animated.svg>            
            </div>
            <div className="secondWindowSecond Back">
                <animated.svg
                    className="mailBack"
                    style={{ transform: propsSecond.x.interpolate(trans), opacity: secondFlip.opacity }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="794.286"
                    height="962.857"
                    version="1.1"
                    viewBox="0 0 210.155 254.756"
                    >
                    <g strokeWidth="0.273" transform="translate(-43.09 86.935)">
                        <rect
                        width="204.863"
                        height="249.464"
                        x="48.381"
                        y="-81.643"
                        fill="#000"
                        fillOpacity="0.173"
                        ry="54.091"
                        ></rect>
                        <rect
                        width="204.863"
                        height="249.464"
                        x="43.089"
                        y="-86.935"
                        fill="#fff"
                        fillOpacity="1"
                        ry="54.091"
                        ></rect>
                    </g>
                </animated.svg>            
            </div>
        </div>
        <div className="firstWindow">
            <animated.div className="firstWindowfirst  Icon"
                 style={{ transform: shrinkLeft.x.interpolate(trans) }}
            >
                <animated.div className="paperPlaneDiv subIcon"
                    style={{ transform: planeFly.transform, opacity:planeGone.opacity }}
                >
                    <svg className="paperPlaneSVG"  width={161.094} height={160.553} viewBox="0 0 42.623 42.48">
                        <path
                            d="M33.256 9.45c-4.967 2.837-14.665 9.318-19.467 12.961-4.801 3.643-4.707 4.447-4.28 5.038.425.592 1.182.97 1.797 1.23s1.088.402 1.697 1.729c.608 1.327 1.378 3.925 1.756 5.77.379 1.844.379 2.98.757 3.713a1.94 1.94 0 001.774 1.04c.639-.023 1.159-.402 4.707-5.913S32.12 18.863 35.29 13.14s2.933-6.528-2.034-3.69z"
                            fill="#f40300"
                            fillOpacity={0.57}
                        />
                        <animated.path
                            d="M7.37 18.692C13.886 14.88 26.686 7.49 39.485.1c.636-.085 1.271-.17 1.79-.01.519.158.968.608 1.205 1.105.236.496.283 1.064-.71 7.261a1415.342 1415.342 0 01-4.14 24.079c-1.111 6.055-1.3 6.339-1.608 6.622-.307.284-.733.568-1.206.663-.473.094-.993 0-2.885-.804-1.893-.805-5.157-2.318-6.813-3.075-1.655-.757-1.703-.757-2.602.378-.899 1.136-2.649 3.406-3.69 4.636-1.04 1.23-1.371 1.42-1.771 1.49a2.91 2.91 0 01-1.209-.07 1.503 1.503 0 01-.71-.426c-.188-.19-.378-.426-.45-1.822-.07-1.395-.023-4.044.001-5.369.024-1.324.024-1.372 3.359-5.393s10.005-12.016 13.34-16.108c3.335-4.091 3.335-4.28 3.193-4.304-.141-.024-.425.118-4.541 3.666-4.116 3.548-12.063 10.502-16.084 13.931-4.02 3.43-4.115 3.336-5.7 2.602-1.585-.733-4.66-2.105-6.316-3.098C.284 25.06.047 24.446.005 24.024c-.042-.423.184-.761.397-1.022.213-.26.45-.496 6.967-4.31z"
                            fill={planeFly.bg1}
                        />
                    </svg>  
                </animated.div>
                <animated.svg
                    style={{ height: firsttextPop.x.interpolate(disp)}}
                    className="sendText iconText" 
                    viewBox="0 0 21.575 7.333" >
                        <defs>
                            <path id="prefix__a" d="M14.363 102.81h182.185v59.72H14.363z" />
                        </defs>
                        <text
                            transform="translate(-14.911 -104.99)"
                            fontWeight={700}
                            fontSize={10.583}
                            fontFamily="Times New Roman"
                            fill="#f40200"
                        >
                            <tspan x={14.363} y={112.157}>
                            <tspan
                                style={{
                                InkscapeFontSpecification: "'Times New Roman, Bold'",
                                fontVariantLigatures: "normal",
                                fontVariantCaps: "normal",
                                fontVariantNumeric: "normal",
                                fontVariantEastAsian: "normal",
                                }}
                            >
                                {"Send"}
                            </tspan>
                            </tspan>
                        </text>
                    </animated.svg>

            </animated.div>
            <animated.div className="firstWindowSecond Icon"
                style={{ transform: shrinkRight.x.interpolate(trans) }}
            >
                <animated.div className="createMailDiv subIcon"
                    style={{ transform: mailFly.transform, opacity:mailGone.opacity }}
                >
                    <svg 
                        className="createMailSVG"  
                        height={137.926} width={179.201} viewBox="-2 -20 180.623 170.48" >
                        <defs>
                            <radialGradient
                            r={39.789}
                            fy={4.737}
                            fx={238.498}
                            cy={4.737}
                            cx={238.498}
                            gradientTransform="matrix(-2.54073 -1.33148 -2.63943 1.28558 879.141 591.48)"
                            gradientUnits="userSpaceOnUse"
                            id="prefix__b"
                            xlinkHref="#prefix__a"
                            />
                            <linearGradient id="prefix__a">
                            <stop offset={0} stopColor="#f80300" />
                            <stop offset={1} stopColor="#cb0200" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M-346.141-7.032c-18.774 10.727-55.427 35.222-73.574 48.99-18.148 13.768-17.79 16.807-16.18 19.042 1.609 2.235 4.47 3.665 6.794 4.648 2.324.984 4.112 1.52 6.412 6.534 2.3 5.014 5.209 14.833 6.639 21.806 1.43 6.973 1.43 11.264 2.861 14.035 1.431 2.771 4.292 4.023 6.705 3.933 2.413-.09 4.38-1.52 17.79-22.35 13.41-20.83 38.261-61.058 50.241-82.692 11.98-21.633 11.086-24.673-7.688-13.946z"
                            fill="#f40300"
                            fillOpacity={0.57}
                        />
                        <path
                            d="M-443.98 27.903c24.635-14.412 73.01-42.342 121.387-70.272 2.401-.32 4.804-.64 6.765-.039 1.96.601 3.659 2.3 4.552 4.177.894 1.877 1.073 4.023-2.682 27.445-3.755 23.423-11.443 68.12-15.645 91.006-4.202 22.886-4.917 23.958-6.079 25.031-1.162 1.073-2.77 2.145-4.558 2.503-1.788.358-3.755 0-10.907-3.04-7.151-3.038-19.488-8.76-25.746-11.62-6.258-2.862-6.437-2.862-9.834 1.43-3.398 4.29-10.013 12.873-13.947 17.521-3.933 4.649-5.185 5.364-6.695 5.633-1.51.27-3.316.089-4.568-.268-1.251-.358-1.967-.894-2.682-1.61-.715-.714-1.43-1.608-1.7-6.883-.27-5.274-.089-15.287 0-20.293.09-5.006.09-5.185 12.695-20.383 12.606-15.199 37.815-45.414 50.42-60.88 12.605-15.465 12.605-16.18 12.07-16.27-.537-.09-1.61.446-17.165 13.856-15.556 13.41-45.593 39.692-60.79 52.656-15.197 12.963-15.555 12.605-21.545 9.834-5.99-2.772-17.61-7.957-23.869-11.711-6.258-3.755-7.152-6.08-7.31-7.675-.159-1.596.694-2.875 1.498-3.858.805-.984 1.7-1.878 26.334-16.29z"
                            fill="#f10300"
                        />
                        <path
                            d="M261.112 290.744c-8.4 0-16.728-.057-22.84-.167H197.87v-5.988a.69.69 0 00.016-.144v-5.803c2.514-2.006 26.295-10.435 31.499-11.054 5.495-.655 57.961-.655 63.456 0 5.496.654 31.729 10.024 31.729 11.332v11.657h-40.616c-6.113.11-14.44.167-22.84.167z"
                            fill="url(#prefix__b)"
                            transform="translate(-441.975 -150.605)"
                        />
                        <g transform="translate(-441.975 -150.605)">
                            <animated.path
                            d="M458.972 150.605c-9.415 0-16.997 7.232-16.997 16.217v7.525c24.496 19.084 48.992 38.17 73.487 57.252 2.97 2.013 4.5 2.295 8.045 3.153 3.582-.64 6.657-1.28 9.119-4.227 11.98-9.118 23.96-18.236 35.937-27.356 11.444-8.793 22.886-17.587 34.328-26.38v-9.967c0-8.985-7.579-16.217-16.994-16.217zm-16.997 35.521v68.948c0 8.984 7.582 16.216 16.997 16.216h126.925c9.415 0 16.994-7.232 16.994-16.216V188.49c-23.324 17.967-46.65 35.973-69.98 53.505-3.439 2.554-6.157 3.522-9.453 3.336-2.78.124-5.848-.473-8.342-2.224l-73.14-56.98z"
                            fill={ mailFly.bg1 }
                            />
                            <animated.path
                            d="M459.537 163.601c-9.509-.013-17.173 7.177-17.185 16.122l-.002 1.629c-.01 7.421 5.258 13.634 12.481 15.547-.977 4.254-1.517 8.833-1.524 13.616l-.005 4.095c-.03 22.51 11.653 40.645 26.193 40.664l82.86.11c14.54.02 26.269-18.085 26.299-40.594l.005-4.096a62.673 62.673 0 00-.668-9.218c8.231-1.19 14.507-7.826 14.518-15.914l.002-1.627c.012-8.945-7.634-16.157-17.143-16.17l-54.191-.07c-1.836-.003-3.6.268-5.257.764-3.103-2.951-7.41-4.78-12.191-4.786z"
                            fill={ mailFly.bg1 }
                            fillOpacity={0.569}
                            />
                            <circle cx={590.245} cy={257.598} r={30.932} fill="#ff4544" />
                            <path
                            d="M590.752 233.51c-2.252 0-4.066 1.44-4.066 3.226v16.543h-16.543c-1.786 0-3.225 1.813-3.225 4.066 0 2.252 1.439 4.065 3.225 4.065h16.543v16.543c0 1.786 1.814 3.225 4.066 3.225 2.253 0 4.065-1.439 4.065-3.225V261.41h16.543c1.787 0 3.225-1.813 3.225-4.065 0-2.253-1.438-4.066-3.225-4.066h-16.543v-16.543c0-1.787-1.812-3.225-4.065-3.225z"
                            fill="#fff"
                            />
                        </g>
                    </svg>   
                </animated.div>
                <animated.svg 
                        style={{ height: secondtextPop.x.interpolate(disp)}}
                        className="createText iconText" 
                        viewBox="0 0 29.704 7.328">
                        <defs>
                            <path id="prefix__a" d="M9.827 135.315h68.036v28.726H9.827z" />
                        </defs>
                        <text
                            transform="translate(-10.247 -137.804)"
                            fontWeight={400}
                            fontSize={10.583}
                            fontFamily="sans-serif"
                            fill="#f40200"
                        >
                            <tspan x={9.828} y={144.972}>
                            <tspan
                                style={{
                                InkscapeFontSpecification: "'Times New Roman, Bold'",
                                fontVariantLigatures: "normal",
                                fontVariantCaps: "normal",
                                fontVariantNumeric: "normal",
                                fontVariantEastAsian: "normal",
                                }}
                                fontWeight={700}
                                fontFamily="Times New Roman"
                            >
                                {"Create"}
                            </tspan>
                            </tspan>
                        </text>
                        </animated.svg>
            </animated.div>
        </div>
        <animated.div className="thirdWindow"
            style={{ display:dumpThridWindow.display}}
        >
            <div className="thirdWindowfirst  cover"
            onMouseEnter={() => {
                setFirstText({x: "22%"});
                setFirst({ x: [1.1,1.1,0]})}
            }
            onMouseLeave={() => {
                setFirstText({ x: "0%" });
                setFirst({ x: [1,1,0] })  
            }}
            onClick={() => {
                setFirstText({ x: "0%" });
                setFirst({ x: [15,1.5,0] });
                setFirstFlip({opacity:0});
                setRight({ x: [0,0,0], delay:200 });
                setSecondText({ x: "0%" });
                setSecond({ x: [0,0,0], delay:200});
                setThird({display:"None"});
                planeSush({transform:"translate(87%,-135%) scale(0.12)",bg1:"#ffffff", delay:200});
                planeVanish({opacity:0, delay:800});
                handelDic({activeSend:true, activeMail:false})
                setTimeout(() => {
                    push('/sendPage')
                },780)
                
            }}
            
        >
        </div>
            <div className="thirdWindowSecond cover"
                onMouseEnter={() => {
                    setSecondText({x: "22%"});
                    setSecond({ x: [1.1,1.1,0]})}
                }
                onMouseLeave={() => {
                    setSecondText({ x: "0%" });
                    setSecond({ x: [1,1,0] })  
                }}
                onClick={() => {
                    setSecondText({ x: "0%" });
                    setSecond({ x: [15,1.5,0] });
                    setSecondFlip({opacity:0});
                    setLeft({ x: [0,0,0], delay:200 });
                    setFirstText({ x: "0%" });
                    setFirst({ x: [0,0,0], delay:200});
                    setThird({display:"None"});
                    mailSush({transform:"translate(-84%,-135%) scale(0.12)",bg2:"#ffffff",bg1:"#ffffff", delay:200});
                    mailVanish({opacity:0, delay:800});
                    handelDic({activeSend:false, activeMail:true})
                    setTimeout(() => {
                        push('/mailEditor')
                    },780)
                   
                }}
            >
            </div>
        
        </animated.div>

    </div>
  );
}

const mapStateToProps = (state) =>{
    return state
  }
export default connect(mapStateToProps,{newTempalte,madeSelect})(FirstBody);