import React,{useState,useRef} from 'react';
import {useSpring, animated, config } from 'react-spring'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {newTempalte,madeSelect} from '../actions'
import './lowbutton.css';




function LowButtons({setinputBox,activeDic,handelDic}) {
    const inputRef = useRef(null)
    const {push} = useHistory()
    const [spinEntrySave, setspinEntrySave]=useSpring(() => ({transform:" rotateY(0deg) translate(0%,110%) scale(1)", display:"flex"}))
    const [spinEntrySend, setspinEntrySend]=useSpring(() => ({transform:" rotateY(0deg) translate(0%,110%) scale(1)", display:"flex"}))
    const [spinEntryBack, setspinEntryBack]=useSpring(() => ({transform:" rotateY(0deg) translate(0%,110%) scale(1)", display:"flex"}))
    const [spinEntryCreate, setspinEntryCreate]=useSpring(() => ({transform:" rotateY(0deg) translate(0%,110%) scale(1)", display:"None"}))
    

    setspinEntrySave({transform:" rotateY(0deg) translate(0%,0%) scale(1)",display:"flex",config:config.slow,delay:100})
    setspinEntrySend({transform:" rotateY(0deg) translate(0%,0%) scale(1)",display:"flex",config:config.slow,delay:100})
    setspinEntryBack({transform:" rotateY(0deg) translate(0%,0%) scale(1)",display:"flex",config:config.slow,delay:100})
    setspinEntryCreate({transform:" rotateY(0deg) translate(0%,0%) scale(1)",display:"None",config:config.slow,delay:100})
    
    
    if(activeDic.activeSend){
        setTimeout(() => {
        setspinEntrySave({transform:" rotateY(0deg) translate(0%,50%) scale(0)",display:"flex"})
        setspinEntrySend({transform:" rotateY(0deg) translate(0%,50%) scale(0)",display:"flex"})
        setspinEntryBack({transform:" rotateY(0deg) translate(0%,50%) scale(0)",display:"flex"})
        
        },200)
        setTimeout(() => {
        setspinEntrySave({transform:" rotateY(0deg) translate(0%,120%) scale(1)",display:"None"})
        setspinEntrySend({transform:" rotateY(0deg) translate(0%,120%) scale(1)",display:"None"})
        setspinEntryBack({transform:" rotateY(0deg) translate(0%,0%) scale(1)",display:"flex"})
        setspinEntryCreate({display:"flex"})
        },1100)
    }
    if(!activeDic.activeMail||activeDic.activeSend){
        setTimeout(() => {
        setspinEntrySave({transform:" rotateY(0deg) translate(0%,50%) scale(0)",display:"flex"})
        setspinEntrySend({transform:" rotateY(0deg) translate(0%,50%) scale(0)",display:"flex"})
        setspinEntryBack({transform:" rotateY(0deg) translate(0%,50%) scale(0)",display:"flex"})
        },200)
    }

    return (
        <React.Fragment>  
            <div className="lowButtonWrapper">
                <animated.div className="saveButton buttons"
                    onMouseEnter={() => {
                        setspinEntrySave({transform:"rotateY(0deg) translate(0%,-20%) scale(1.2)"})
                    }}
                    onMouseLeave={() => {
                        setspinEntrySave({transform:"rotateY(0deg) translate(0%,0%) scale(1)"})
                    }}
                    onClick={() => {
                        setinputBox({width:"100%"})
                    }}
                    style={spinEntrySave}
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="263.061"
                        height="157.143"
                        version="1.1"
                        viewBox="0 0 69.601 41.577"
                        >
                        <defs>
                            <path id="rect839" d="M33.262 78.619H67.28V99.03H33.262z"></path>
                        </defs>
                        <g transform="translate(-29.34 -71.815)">
                            <rect
                            width="65.638"
                            height="37.753"
                            x="33.303"
                            y="75.64"
                            fill="#000"
                            fillOpacity="0.319"
                            strokeWidth="0.06"
                            ry="8.186"
                            ></rect>
                            <rect
                            width="65.638"
                            height="37.753"
                            x="29.34"
                            y="71.815"
                            fill="#fff"
                            fillOpacity="1"
                            strokeWidth="0.06"
                            ry="8.186"
                            ></rect>
                            <text
                            transform="translate(22.684 5.234)"
                            style={{
                                lineHeight: "1.25",
                                InkscapeFontSpecification: "'Times New Roman, Bold'",
                                fontVariantLigatures: "normal",
                                fontVariantCaps: "normal",
                                fontVariantNumeric: "normal",
                                fontVariantEastAsian: "normal",
                                whiteSpace: "pre",
                            }}
                            fill="#c10300"
                            fillOpacity="1"
                            stroke="none"
                            fontFamily="Times New Roman"
                            fontSize="14.111"
                            fontStretch="normal"
                            fontStyle="normal"
                            fontVariant="normal"
                            fontWeight="bold"
                            xmlSpace="preserve"
                            >
                            <tspan x="33.262" y="91.084">
                                <tspan>Save</tspan>
                            </tspan>
                            </text>
                            <path
                            fill="#c10300"
                            fillOpacity="1"
                            stroke="none"
                            strokeWidth="0.034"
                            d="M42.366 85.783c-.713 0-1.288.574-1.288 1.288v9.813c0 .713.575 1.287 1.288 1.287h9.873c.713 0 1.287-.574 1.287-1.287v-7.491a2.57 2.57 0 00-.243-.7l-2.662-2.683a2.35 2.35 0 00-.44-.227zm.9 1.762h6.252c.215 0 .388.232.388.521v2.54c0 .288-.173.52-.388.52h-6.252c-.215 0-.388-.232-.388-.52v-2.54c0-.289.173-.521.388-.521zm4.011 5.343a1.791 1.761 0 01.01 0 1.791 1.761 0 011.791 1.76 1.791 1.761 0 01-1.79 1.762 1.791 1.761 0 01-1.792-1.761 1.791 1.761 0 011.781-1.761z"
                            ></path>
                        </g>
                    </svg>
                </animated.div>
                <animated.div className="sendButton buttons"
                    onMouseEnter={() => {
                        setspinEntrySend({transform:"rotateY(0deg) translate(0%,-20%) scale(1.2)"})
                    }}
                    onMouseLeave={() => {
                        setspinEntrySend({transform:"rotateY(0deg) translate(0%,0%) scale(1)"})
                    }}
                    onClick={() => {
                        setspinEntrySend({transform:"rotateY(0deg) translate(0%,0%) scale(1)"})
                        handelDic({activeSend:true, activeMail:false})
                    }}
                    style={spinEntrySend}
                    
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="263.061"
                            height="157.143"
                            version="1.1"
                            viewBox="0 0 69.601 41.577"
                            >
                            <defs>
                                <path id="rect839" d="M33.262 78.619H67.28V99.03H33.262z"></path>
                            </defs>
                            <g transform="translate(-29.34 -71.815)">
                                <rect
                                width="65.638"
                                height="37.753"
                                x="33.303"
                                y="75.64"
                                fill="#000"
                                fillOpacity="0.319"
                                strokeWidth="0.06"
                                ry="8.186"
                                ></rect>
                                <rect
                                width="65.638"
                                height="37.753"
                                x="29.34"
                                y="71.815"
                                fill="#fff"
                                fillOpacity="1"
                                strokeWidth="0.06"
                                ry="8.186"
                                ></rect>
                                <text
                                transform="translate(22.684 5.234)"
                                style={{
                                    lineHeight: "1.25",
                                    InkscapeFontSpecification: "'Times New Roman, Bold'",
                                    fontVariantLigatures: "normal",
                                    fontVariantCaps: "normal",
                                    fontVariantNumeric: "normal",
                                    fontVariantEastAsian: "normal",
                                    whiteSpace: "pre",
                                }}
                                fill="#c10300"
                                fillOpacity="1"
                                stroke="none"
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
                                <path
                                fill="#c10300"
                                fillOpacity="1"
                                stroke="none"
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                strokeOpacity="1"
                                strokeWidth="0.091"
                                d="M41.945 91.077l10.999-6.35c.218-.03.437-.059.615-.004.178.055.333.209.414.38.081.17.098.366-.244 2.496a486.43 486.43 0 01-1.423 8.276c-.382 2.082-.447 2.18-.553 2.277a.899.899 0 01-.414.228c-.163.032-.342 0-.992-.277-.65-.276-1.772-.797-2.342-1.057-.569-.26-.585-.26-.894.13-.309.39-.91 1.171-1.268 1.594-.358.423-.472.488-.61.512a1 1 0 01-.415-.024.517.517 0 01-.244-.147c-.065-.065-.13-.146-.154-.626-.025-.48-.008-1.39 0-1.845.008-.456.008-.472 1.154-1.854 1.147-1.382 3.44-4.13 4.586-5.537 1.146-1.406 1.146-1.471 1.097-1.48-.048-.008-.146.041-1.56 1.26-1.415 1.22-4.147 3.61-5.53 4.79-1.381 1.178-1.414 1.146-1.959.894-.544-.252-1.601-.724-2.17-1.065-.57-.342-.65-.553-.665-.698-.015-.145.063-.262.136-.351.073-.09.155-.171.195-.212.04-.04.04-.04 2.24-1.31z"
                                ></path>
                            </g>
                        </svg>          
                </animated.div>
                <animated.div className="backButton buttons"
                    
                    onMouseEnter={() => {
                        setspinEntryBack({transform:"rotateY(0deg) translate(0%,-20%) scale(1.2)"})
                    }}
                    onMouseLeave={() => {
                        setspinEntryBack({transform:"rotateY(0deg) translate(0%,0%) scale(1)"})
                    }} 
                    style={spinEntryBack}
                    
                    onMouseEnter={() => {
                        setspinEntryBack({transform:"rotateY(0deg) translate(0%,-20%) scale(1.2)"})
                    }}
                    onMouseLeave={() => {
                        setspinEntryBack({transform:"rotateY(0deg) translate(0%,0%) scale(1)"})
                    }}
                    onClick={() => {
                        setspinEntrySave({transform:" rotateY(0deg) translate(0%,110%) scale(1)"})
                        setspinEntrySend({transform:" rotateY(0deg) translate(0%,110%) scale(1)"})
                        setspinEntryBack({transform:" rotateY(0deg) translate(0%,110%) scale(1)",duration:2000})
                        setTimeout(() => {
                            handelDic({activeSend:false, activeMail:false})
                            push("/")
                        },500)
                    
                    
                    }}
                    >
                    <svg
                        viewBox="0 0 69.601 41.577"
                        height={157.143}
                        width={263.061}
                        >
                        <defs>
                            <path id="prefix__a" d="M33.262 78.619H67.28V99.03H33.262z" />
                        </defs>
                        <g transform="translate(-29.34 -71.815)">
                            <rect
                            ry={8.186}
                            y={75.64}
                            x={33.303}
                            height={37.753}
                            width={65.638}
                            fillOpacity={0.319}
                            />
                            <rect
                            width={65.638}
                            height={37.753}
                            x={29.34}
                            y={71.815}
                            ry={8.186}
                            fill="#fff"
                            />
                            <text
                            transform="translate(22.684 5.234)"
                            fontWeight={700}
                            fontSize={14.111}
                            fontFamily="Times New Roman"
                            fill="#c10300"
                            >
                            <tspan x={33.262} y={91.084}>
                                <tspan
                                style={{
                                    InkscapeFontSpecification: "'Times New Roman, Bold'",
                                    fontVariantLigatures: "normal",
                                    fontVariantCaps: "normal",
                                    fontVariantNumeric: "normal",
                                    fontVariantEastAsian: "normal",
                                }}
                                >
                                {"Back"}
                                </tspan>
                            </tspan>
                            </text>
                            <path
                            d="M40.87 82.96a.529.529 0 00-.651.37l-1.168 4.22a.53.53 0 00-.08.166l-.274.99a.528.528 0 00.262.61 7.272 7.387 15.466 00-.01.024l2.013.557a5.207 5.29 15.466 01.007-.012l3.484.964a.529.529 0 00.652-.37l.274-.99a.529.529 0 00-.37-.652l-2.642-.731a5.207 5.29 15.466 014.666-1.018 5.207 5.29 15.466 01.018.005 5.207 5.29 15.466 013.608 6.487 5.207 5.29 15.466 01-6.43 3.71 5.207 5.29 15.466 01-3.083-2.385l-.045-.015a.344.344 0 00-.124-.022.658.658 0 00-.187.042 3.302 3.302 0 00-.133.048l-1.067.605c-.052.046-.08.064-.11.086a.344.344 0 00-.087.09.647.647 0 00-.07.17 7.272 7.387 15.466 004.347 3.401 7.272 7.387 15.466 008.979-5.18 7.272 7.387 15.466 00-5.039-9.058 7.272 7.387 15.466 00-.009-.002 7.272 7.387 15.466 00-5.974.998l.603-2.182a.529.529 0 00-.369-.652zm-2.508 9.117a7.272 7.387 15.466 00-.001.262l.49-.127z"
                            fill="#c10300"
                            />
                        </g>
                    </svg>
                </animated.div>
                <animated.div className="createMailButton buttons"
                    style={spinEntryCreate}
                    
                    onClick={()=>{
                        handelDic({activeSend:false, activeMail:true})
                        setTimeout(() =>{
                            push("/mailEditor")
                        },200)
                    }}
                    >
                        <svg
                            width={522.609}
                            height={157.143}
                            viewBox="0 0 138.274 41.577"
                            
                            >
                            <defs>
                                <path id="prefix__a" d="M24.941 23.183h91.4v36.413h-91.4z" />
                            </defs>
                            <g transform="translate(-26.407 -71.815)">
                                <rect
                                width={134.087}
                                height={37.753}
                                x={30.593}
                                y={75.64}
                                ry={8.186}
                                fillOpacity={0.319}
                                />
                                <rect
                                ry={8.186}
                                y={71.815}
                                x={26.407}
                                height={37.753}
                                width={134.087}
                                fill="#fff"
                                />
                                <text
                                transform="translate(31.526 60.665)"
                                fontWeight={700}
                                fontSize={14.111}
                                fontFamily="Times New Roman"
                                fill="#c10300"
                                >
                                <tspan x={24.941} y={35.648}>
                                    <tspan
                                    style={{
                                        InkscapeFontSpecification: "'Times New Roman, Bold'",
                                        fontVariantLigatures: "normal",
                                        fontVariantCaps: "normal",
                                        fontVariantNumeric: "normal",
                                        fontVariantEastAsian: "normal",
                                    }}
                                    >
                                    {"Create"}
                                    </tspan>
                                </tspan>
                                </text>
                                <text
                                y={96.1}
                                x={98.745}
                                style={{
                                    lineHeight: 1.25,
                                    InkscapeFontSpecification: "'Times New Roman, Bold'",
                                    fontVariantLigatures: "normal",
                                    fontVariantCaps: "normal",
                                    fontVariantNumeric: "normal",
                                    fontVariantEastAsian: "normal",
                                }}
                                fontWeight={700}
                                fontSize={14.111}
                                fontFamily="Times New Roman"
                                fill="#c10300"
                                strokeWidth={0.265}
                                >
                                <tspan
                                    style={{
                                    InkscapeFontSpecification: "'Times New Roman, Bold'",
                                    fontVariantLigatures: "normal",
                                    fontVariantCaps: "normal",
                                    fontVariantNumeric: "normal",
                                    fontVariantEastAsian: "normal",
                                    }}
                                    y={96.1}
                                    x={98.745}
                                >
                                    {"Template"}
                                </tspan>
                                </text>
                                <g transform="translate(-27.616 34.703)">
                                <path
                                    d="M65.275 50.212c-.99 0-1.787.76-1.787 1.705v.791l7.725 6.018c.312.212.473.241.845.332.377-.068.7-.135.959-.445l3.777-2.875 3.609-2.773v-1.048c0-.944-.797-1.705-1.786-1.705zm-1.787 3.734v7.248c0 .944.797 1.704 1.787 1.704h13.342c.99 0 1.786-.76 1.786-1.704v-7c-2.452 1.89-4.904 3.782-7.356 5.625-.362.269-.647.37-.994.35a1.422 1.422 0 01-.877-.233l-7.688-5.99z"
                                    fill="#c10300"
                                />
                                <circle cx={79.074} cy={61.459} r={3.251} fill="#fd0100" />
                                <path
                                    d="M79.127 58.927c-.237 0-.428.151-.428.34v1.738h-1.738c-.188 0-.34.19-.34.428 0 .236.152.427.34.427h1.738v1.739c0 .188.191.339.428.339s.427-.151.427-.34V61.86h1.74c.187 0 .338-.19.338-.427s-.151-.428-.339-.428h-1.739v-1.739c0-.188-.19-.339-.427-.339z"
                                    fill="#fff"
                                />
                                </g>
                            </g>
                        </svg>

                </animated.div>
                
            </div>
            {/* <animated.div className="templateNameInput" style={inputBox}>
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
                            setspinEntrySave({transform:"rotateY(0deg) translate(0%,0%) scale(1)"})

                            exportHtml()
                            handelDic({activeSend:true, activeMail:false})
                            push("/sendPage")
                            alert("You mail layout is saved.");
                            setinputBox({width:"0%"})
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
            </animated.div> */}
        </React.Fragment>
    );
  }

  const mapStateToProps = (state) =>{
    return state
  }
export default connect(mapStateToProps,{newTempalte})(LowButtons);