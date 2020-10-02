
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { render, unmountComponentAtNode } from 'react-dom'
import { HashRouter, Route, Switch, withRouter } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import EmailEditor from 'react-email-editor';
import { useSpring, animated, config } from 'react-spring'

import './App.css';
// import TopNav from './topNav';
// import LowNav from './lowNav';
// import FirstBody from './firstBody.txt';
// import MailEditor from './mailEditor';
// import LowButtons from './lowButtons';
// import SendPage from './sendPage';
import SignMain from './signInPage/signMain';
import DashBoard from './Dashboard/dashBoard';
import ButtonPopRightLite from '../buttons';

function App() {
  const [activeDic, setActiveDic] = useState({ activeSend: false, activeMail: false })
  const [contract, setContract] = useState(true)
  const [inputSaveButton, setinputSaveButton] = useSpring(() => ({ transform: " rotateY(0deg) translate(0%,0%) scale(1)" }))
  const [inputBox, setinputBox] = useSpring(() => ({ width: "0%" }))
  const [button, setButton] = useSpring(() => ({ width: "5%", height: "10%" }))
  const [round, setRound] = useSpring(() => ({ round1: "50%", round2: "50%", widthfont: "90%", xfront: "5%" }))
  const [rest, setRest] = useSpring(() => ({ widthfont: "90%", xfront: "5%" }))
  const { push } = useHistory()

  const emailEditorRef = useRef(null);
  const inputRef = useRef(null);

  const loadTheTemplate = (data) => {
    emailEditorRef.current.editor.loadDesign(data)
  }
  console.log("working")
  return (
    <div className="primaryWindow">
      <Switch>
        <Route path="/dashboard" render={() => <DashBoard></DashBoard>}></Route>
        <Route path="/" render={() => <SignMain></SignMain>}></Route>
      </Switch>
      {/* <div className="top">
                <TopNav activeDic={activeDic}></TopNav>
              </div>
              <div className="low">
                <LowNav></LowNav>
              </div>
          <div className="midBodies">
              <div className="MailEditor">
              </div>
              <div className="midButtons">
                <Switch>
                  <Route path="/mailEditor" render={()=><div className="editorWindow"><EmailEditor ref={emailEditorRef}></EmailEditor></div>}></Route>
                  <Route path="/sendPage" render={()=><SendPage handelDic={setActiveDic} loadTheTemplate={loadTheTemplate}></SendPage>}></Route>
                  <Route exact path="/" render={()=><FirstBody  handelDic={setActiveDic} ></FirstBody>}></Route>
                </Switch>
              </div>
          </div>
          <div className="mailEditorButtons">
              <LowButtons  setinputBox={setinputBox} activeDic={activeDic} handelDic={setActiveDic}></LowButtons>
              <animated.div className="templateNameInput" style={inputBox}>
                <div className="Inputbox">
                    <input ref={inputRef} className="Input" placeholder="New Template"></input>
                    <svg className="InputboxSVG"
                        viewBox="0 0 171.601 73.327"
                        height={277.143}
                        width={648.571}

                        >
                        <defs>
                            <path id="prefix__a" d="M33.262 78.619h148.511v21.652H33.262z" />
                        </defs>
                        <g transform="translate(-19.655 -100.542)">
                            <rect
                            width={168.577}
                            height={70.304}
                            x={22.679}
                            y={103.565}
                            ry={8.137}
                            fill="#989898"
                            fillOpacity={0.437}
                            />
                            <rect
                            ry={8.137}
                            y={100.542}
                            x={19.655}
                            height={70.304}
                            width={168.577}
                            fill="#fff"
                            />
                            <rect
                            width={92.982}
                            height={20.411}
                            x={85.137}
                            y={125.485}
                            ry={2.362}
                            fill="#ff2723"
                            />
                            <text
                            transform="matrix(.46059 0 0 .4885 12.368 92.446)"
                            fontWeight={700}
                            fontSize={14.111}
                            fontFamily="Times New Roman"
                            fill="red"
                            >
                            <tspan x={33.262} y={91.084}>
                                <tspan>{"Template Name"}</tspan>
                            </tspan>
                            </text>
                        </g>
                    </svg>
                    <animated.div className="InputSaveButton"
                        style={inputSaveButton}
                        onMouseEnter={() => {
                            setinputSaveButton({transform:"rotateY(0deg) translate(0%,0%) scale(1.2)"})
                        }}
                        onMouseLeave={() => {
                            setinputSaveButton({transform:"rotateY(0deg) translate(0%,0%) scale(1)"})
                        }}
                        onClick={() => {
                            emailEditorRef.current.editor.exportHtml(({design,html})=>{
                              newTempalte({key:1, name:inputRef.current.value, data:design})
                              setActiveDic({activeSend:true, activeMail:false})
                              push("/sendPage")
                              setinputBox({width:"0%"})
                              })
                          }}
                    >
                        <svg  className="InputSaveButtonSVG"
                            viewBox="0 0 37.476 13.39" height={50.609} width={141.642}>
                            <defs>
                                <path id="prefix__a" d="M33.262 78.619H67.28V99.03H33.262z" />
                            </defs>
                            <g transform="translate(-129.429 -176.245)">
                                <rect
                                width={35.868}
                                height={12.372}
                                x={131.037}
                                y={177.264}
                                ry={2.683}
                                fillOpacity={0.319}
                                />
                                <rect
                                ry={2.683}
                                y={176.245}
                                x={129.429}
                                height={12.372}
                                width={35.868}
                                fill="#ff2723"
                                />
                                <text
                                transform="matrix(.43155 0 0 .43155 128.54 145.384)"
                                fontWeight={700}
                                fontSize={14.111}
                                fontFamily="Times New Roman"
                                fill="#fff"
                                >
                                <tspan x={33.262} y={91.084}>
                                    <tspan>{"Save"}</tspan>
                                </tspan>
                                </text>
                                <path
                                d="M137.034 180.145a.554.554 0 00-.555.556v4.235c0 .308.248.555.555.555h4.261a.554.554 0 00.556-.555v-3.233a1.133 1.133 0 00-.105-.302l-1.149-1.158-.035-.022a1.175 1.175 0 00-.155-.076zm.389.76h2.698c.093 0 .167.1.167.225v1.096c0 .125-.074.225-.167.225h-2.698c-.093 0-.168-.1-.168-.225v-1.096c0-.124.075-.225.168-.225zm1.731 2.306a.773.76 0 01.004 0 .773.76 0 01.773.76.773.76 0 01-.773.76.773.76 0 01-.773-.76.773.76 0 01.769-.76z"
                                fill="#fff"
                                />
                            </g>
                            </svg>
                    </animated.div>
                </div>
              </animated.div>
          </div> */}
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return state
// }
// export default connect(mapStateToProps, { loadTempalteAct, newTempalte })(App);

export default App