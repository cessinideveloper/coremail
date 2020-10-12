import React, { useState, useRef } from 'react';
import { Route, Switch } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import './dashboard.css'
import NavButtons from './navbuttons'
import NewCam from './campaignHolder/newCampaign/newCam'
import LoadedCamp from './campaignHolder/newCampaign/loadedCampaign'
import EmailListUploader from './emailListHolder/emailListUploader'
import { useSpring, animated } from 'react-spring'

const DashBoard = () => {

    const { push } = useHistory(null)

    const emailEditorRef = useRef(null);

    const [emailButtonStyle, setEmailButtonStyle] = useSpring(() => ({ transform: "translateY(0%)", backgroundColor: "#3a4782ff" }))
    const [campButtonStyle, setCampButtonStyle] = useSpring(() => ({ transform: "translateY(0%)", backgroundColor: "#3a4782ff" }))

    return (
        <div className="dashWrapper">
            <div className="sideNavHolder subWrapper">
                <div className="cessiniHolder  subWrapper">
                    <svg className="cessiniSVG"
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        version="1.1"
                        viewBox="0 0 23.841 8.546"
                    >
                        <g stroke="none" transform="translate(9.772 -94)">
                            <path
                                fill="#c1c1c1"
                                fillOpacity="0.812"
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                strokeOpacity="1"
                                strokeWidth="1.15"
                                d="M39.72 0c-5.275 0-10.506.078-14.345.229H0v8.18c.006.064.01.128.01.195v7.927c1.578 2.74 16.517 14.252 19.785 15.098 3.452.894 36.404.894 39.855 0 2.125-.55 9.17-5.605 14.284-9.832 2.938-2.134 5.855-4.39 8.586-7.652 3.133-3.744 6.079-8.9 7.105-11.415C90.651.216 89.784.297 89.35.338l-.434.04-9.338.874V.229h-25.51C50.23.079 44.998 0 39.723 0z"
                                transform="matrix(.26458 0 0 .26458 -9.772 94)"
                            ></path>
                            <path
                                fill="#3f4e8eff"
                                fillOpacity="1"
                                strokeWidth="0.473"
                                d="M39.72.02c-5.275 0-10.506.072-14.345.209H0v7.443c.006.059.01.12.01.18v7.214c1.578 2.493 16.517 12.97 19.785 13.74 3.452.814 36.404.814 39.855 0 3.276-.771 18.273-11.296 19.793-13.757a34.531 34.531 0 001.598-1.477c3.468-3.435 6.883-8.295 8.139-10.703 1.256-2.407.385-2.408-.051-2.408h-9.55V.229h-25.51c-3.84-.137-9.07-.21-14.346-.21z"
                                transform="matrix(.26458 0 0 .26458 -9.772 94)"
                            ></path>
                            <g
                                fill="#fff"
                                fillOpacity="1"
                                transform="matrix(.05103 0 0 .05103 -5.304 98.105)"
                            >
                                <path
                                    strokeLinecap="butt"
                                    strokeLinejoin="miter"
                                    strokeOpacity="1"
                                    strokeWidth="1"
                                    d="M44.398 23.85c1.234.04 4.474-4.127 4.474-4.127l-13.193-.463c-1.466.232-2.931.463-4.282 1.428-1.35.964-2.585 2.662-3.086 4.552-.501 1.891-.27 3.974.364 5.46.634 1.485 1.759 2.449 3.147 3.22 1.39.771 3.087 1.389 5.248 1.718 2.162.33 5.064.376 7.828.42l3.442-4.299-10.873-.596c-1.136-.418-2.271-.837-2.997-1.596-.725-.759-1.028-1.819-.778-2.764.251-.946 1.138-1.833 2.025-2.342.886-.508 1.66-.649 3.319-.687 1.659-.039 4.128.038 5.362.077z"
                                ></path>
                                <path
                                    strokeLinecap="butt"
                                    strokeLinejoin="miter"
                                    strokeOpacity="1"
                                    strokeWidth="1"
                                    d="M64.615 35.033c.708-.687 1.816-2.105 2.26-2.903.444-.797.222-.974-1.839-.997-2.06-.022-5.96.11-8.021.133-2.06.022-2.282-.066-2.327-.376-.045-.31.088-.842.154-1.152.067-.31.067-.4 1.463-.4 1.397-.001 4.277.089 5.777.078 1.5-.01 1.602-.078 2.156-.831a60.04 60.04 0 001.981-2.898c.453-.727.346-.78.17-.825-.178-.044-.444-.089-2.35-.044-1.906.044-5.45.177-7.246.222-1.795.044-1.839 0-1.861-.31-.023-.31-.023-.886.04-1.206.061-.32.115-.346 1.667-.324 1.552.022 4.564.11 6.092.111 1.529 0 1.573-.088 2.06-.687.488-.598 1.419-1.706 1.862-2.326.443-.62.4-.753-2.393-.798-2.791-.045-8.42 0-11.234 0s-2.858-.044-2.925-.022c-.067.022-.156.11-.2 2.792a419.496 419.496 0 000 10.592c.045 2.636.045 2.636.245 2.703.2.066.554.2 2.77.221 2.215.022 6.293-.066 8.486-.089 2.194-.022 2.504.023 3.213-.664z"
                                ></path>
                                <path
                                    strokeLinecap="butt"
                                    strokeLinejoin="miter"
                                    strokeOpacity="1"
                                    strokeWidth="1"
                                    d="M68.648 34.745c.354-.754 1.417-2.26 1.994-2.991.577-.731.665-.687 2.77-.665 2.105.022 6.227.022 8.354.022 2.127 0 2.26 0 2.432-.19.171-.19.403-.608.47-.94.067-.332-.022-.598-.775-.798-.753-.2-2.171-.332-4.188-.399-2.016-.067-4.63-.067-6.116-.067-1.484 0-1.839 0-2.285-.103a5.357 5.357 0 01-1.636-.716c-.577-.376-1.153-.908-1.486-1.75-.332-.842-.421-1.994-.2-2.925.222-.931.754-1.64 1.286-2.172.532-.532 1.063-.887 1.418-1.153.354-.266.532-.443 3.501-.51 2.97-.066 8.731-.021 11.611.09 2.88.111 2.88.2 2.46.864-.422.665-1.264 1.861-1.64 2.46-.376.597-.376.597-2.304.575l-7.888-.088c-2.061-.023-2.283-.023-2.483.11-.2.134-.377.4-.465.644-.089.244-.089.465.155.62.245.155.732.243 2.726.288 1.995.044 5.496.044 7.512.133 2.017.088 2.548.266 3.102.62.554.355 1.13.887 1.573 1.53a5.43 5.43 0 01.886 2.216c.133.82.088 1.706-.111 2.348-.2.642-.554 1.041-1.02 1.462-.464.42-1.04.864-1.727 1.285-.687.421-1.485.82-2.15 1.02-.664.199-1.196.199-2.769.199-1.573 0-4.188 0-6.47-.044-2.282-.045-4.232-.133-5.385-.178-1.152-.044-1.506-.044-1.152-.797z"
                                ></path>
                                <path
                                    strokeLinecap="butt"
                                    strokeLinejoin="miter"
                                    strokeOpacity="1"
                                    strokeWidth="1"
                                    d="M91.116 35.01c.354-.753 1.418-2.26 1.995-2.99.576-.732.665-.687 2.77-.665 2.105.021 6.227.021 8.354.021 2.127 0 2.26 0 2.431-.19.172-.19.404-.607.47-.939.067-.332-.021-.598-.774-.798-.753-.2-2.171-.333-4.188-.4-2.016-.066-4.631-.066-6.116-.066-1.484 0-1.839 0-2.285-.103a5.357 5.357 0 01-1.637-.716c-.576-.376-1.152-.908-1.485-1.75-.333-.842-.421-1.994-.2-2.925.222-.931.753-1.64 1.285-2.172.532-.532 1.064-.887 1.419-1.153.354-.266.531-.443 3.501-.51 2.97-.066 8.731-.022 11.611.09 2.88.111 2.88.2 2.46.864-.422.664-1.264 1.86-1.64 2.46-.376.597-.376.597-2.304.575l-7.888-.088c-2.061-.023-2.283-.023-2.483.11-.2.133-.377.4-.466.644-.088.244-.088.465.156.62.244.155.732.243 2.726.288 1.994.044 5.495.044 7.512.133 2.016.088 2.548.266 3.102.62.554.355 1.13.887 1.573 1.53a5.43 5.43 0 01.886 2.216c.133.82.088 1.706-.111 2.348-.2.642-.554 1.04-1.02 1.462-.465.42-1.04.864-1.728 1.285-.686.42-1.484.82-2.149 1.02-.664.199-1.196.199-2.77.199-1.572 0-4.187 0-6.47-.045-2.282-.044-4.232-.132-5.384-.177-1.152-.044-1.507-.044-1.153-.797z"
                                ></path>
                                <path d="M114.87 19.145h3.457c.589 0 1.063.474 1.063 1.064V34.7c0 .59-.474 1.064-1.063 1.064h-3.457c-.59 0-1.064-.474-1.064-1.064V20.21c0-.59.475-1.064 1.064-1.064z"></path>
                                <path d="M143.986 19.41h3.457c.59 0 1.063.475 1.063 1.064v14.492c0 .59-.474 1.064-1.063 1.064h-3.457c-.59 0-1.063-.475-1.063-1.064V20.474c0-.589.474-1.063 1.063-1.063z"></path>
                                <path
                                    strokeLinecap="butt"
                                    strokeLinejoin="miter"
                                    strokeOpacity="1"
                                    strokeWidth="1"
                                    d="M135.477 19.229c0 2.969 0 5.937-.067 7.466-.066 1.53-.199 1.619-.332 1.707-1.462-1.462-2.926-2.925-3.635-3.656l-.22-.225v-.058c-1.684-1.507-3.366-3.013-4.496-3.856-1.13-.842-1.707-1.019-2.438-1.086-.731-.066-1.62-.022-2.174.245-.554.266-.774.752-.996 1.24v14.758h5.319c0-2.97 0-5.938.066-7.467.067-1.53.199-1.619.332-1.707 1.462 1.462 2.926 2.925 3.635 3.656l.22.225v.058c1.684 1.507 3.366 3.013 4.496 3.856 1.13.842 1.707 1.019 2.438 1.086.731.066 1.617.022 2.172-.244.554-.267.776-.753.998-1.24V19.228z"
                                ></path>
                                <path d="M149.713 35.484c-.295 0-.531.11-.531.246 0 .137.236.245.53.245h.872c-.009.063-.031.11-.031.181v2.3c0 .337.11.61.246.61s.244-.273.244-.61v-2.3c0-.07-.02-.118-.03-.181h.706c.295 0 .531-.108.531-.245 0-.136-.236-.246-.531-.246z"></path>
                                <path
                                    strokeWidth="1.071"
                                    d="M152.998 35.545c-.008 0-.014.01-.021.012-.008.002-.02-.003-.028.002-.005.003-.005.012-.01.015-.107.067-.187.296-.187.582v2.3c0 .337.11.61.246.61s.244-.273.244-.61V36.58l1.078 1.844c.114.195.25.335.37.402.007.01.01.025.019.031.013.008.031.002.047.004.013.005.024.003.037.004.013-.001.024.001.039-.004.015-.002.034.004.047-.004.01-.006.012-.022.02-.03.118-.068.254-.208.368-.403l1.036-1.77v1.883c0 .338.108.61.244.61s.246-.272.246-.61v-2.299a1.08 1.08 0 00-.094-.466c.006-.1-.008-.181-.06-.213-.124-.077-.374.116-.56.433l-1.259 2.156c-.014.025-.015.045-.027.069-.013-.024-.011-.044-.026-.069l-1.26-2.156c-.158-.272-.36-.442-.493-.44-.005 0-.01-.007-.016-.007z"
                                ></path>
                            </g>
                            <g
                                style={{
                                    lineHeight: "1.25",
                                    InkscapeFontSpecification: "'Cambria, Bold Italic'",
                                    fontVariantLigatures: "normal",
                                    fontVariantCaps: "normal",
                                    fontVariantNumeric: "normal",
                                    fontVariantEastAsian: "normal",
                                    whiteSpace: "pre",
                                }}
                                fill="#fff"
                                fillOpacity="1"
                                ariaLabel="Mail"
                                fontFamily="Cambria"
                                fontSize="40"
                                fontStretch="normal"
                                fontStyle="italic"
                                fontVariant="normal"
                                fontWeight="bold"
                                transform="matrix(.02748 0 0 .03243 -5.018 99.294)"
                            >
                                <path
                                    style={{
                                        InkscapeFontSpecification: "'Cambria, Bold Italic'",
                                        fontVariantLigatures: "normal",
                                        fontVariantCaps: "normal",
                                        fontVariantNumeric: "normal",
                                        fontVariantEastAsian: "normal",
                                    }}
                                    d="M303.54-6.295l1.522 16.309 9.258-16.309h9.082l-.273 1.29q-.82.234-1.27.644-.43.41-.742 1.172-.312.742-.625 2.168l-3.555 16.113q-.117.508-.156.8-.039.294-.078.645-.02.332-.02.84 0 .82.372 1.21.39.372 1.25.49l-.274 1.288h-9.824l.274-1.289q.82-.234 1.25-.644.449-.41.761-1.153.313-.761.625-2.187l1.797-8.203q.293-1.328.84-3.535.547-2.227 1.27-4.649h-.391q-.918 1.68-1.973 3.496l-8.789 15.215h-3.164l-1.289-11.738q-.254-2.227-.39-3.887-.118-1.66-.196-3.281h-.312q-.274 1.797-.704 4.12-.43 2.306-.78 3.888l-1.895 8.574q-.118.508-.157.8-.039.294-.078.645-.02.332-.02.84 0 .82.372 1.21.39.372 1.25.49l-.274 1.288h-7.168l.274-1.289q.82-.234 1.25-.644.45-.41.762-1.153.312-.761.625-2.187l3.554-16.113q.254-1.153.254-2.286 0-.82-.39-1.191-.372-.39-1.23-.508l.273-1.289z"
                                ></path>
                                <path
                                    style={{
                                        InkscapeFontSpecification: "'Cambria, Bold Italic'",
                                        fontVariantLigatures: "normal",
                                        fontVariantCaps: "normal",
                                        fontVariantNumeric: "normal",
                                        fontVariantEastAsian: "normal",
                                    }}
                                    d="M339.574 2.084l1.758-1.406 2.188.312-3.008 13.614q-.235 1.035-.352 1.66-.098.625-.098 1.054 0 .88.43 1.27t1.524.488l-.215 1.29h-7.5l1.054-4.005-.253-.078q-1.329 1.719-2.48 2.676-1.134.937-2.247 1.328-1.094.39-2.54.39-1.366 0-2.401-.644-1.036-.644-1.641-2.031-.606-1.406-.606-3.555 0-2.05.47-4.14.487-2.09 1.425-3.887.937-1.816 2.363-3.106 1.426-1.289 3.223-1.953 1.816-.683 3.945-.683 2.91 0 4.961 1.406zm-2.949 6.133q.137-.625.215-1.387.098-.781.098-1.504 0-1.289-.489-1.953-.488-.664-1.601-.664-1.817 0-3.223 1.836-1.406 1.816-2.266 4.902-.859 3.086-.859 5.528 0 1.425.41 2.129.43.703 1.309.703 1.289 0 2.617-1.25 1.348-1.27 2.168-2.97.82-1.698 1.465-4.648z"
                                ></path>
                                <path
                                    style={{
                                        InkscapeFontSpecification: "'Cambria, Bold Italic'",
                                        fontVariantLigatures: "normal",
                                        fontVariantCaps: "normal",
                                        fontVariantNumeric: "normal",
                                        fontVariantEastAsian: "normal",
                                    }}
                                    d="M357.035-6.803l-1.015 4.785h-5.06l1.075-4.785zm-4.512 21.953q-.214.977-.273 1.446-.059.468-.059.781 0 .84.43 1.21.45.372 1.524.49l-.215 1.288h-8.125l3.047-13.633q.253-1.171.351-1.816.098-.664.098-1.113 0-.762-.371-1.074-.352-.333-1.504-.45l.293-1.289 5.722-.215h2.227z"
                                ></path>
                                <path
                                    style={{
                                        InkscapeFontSpecification: "'Cambria, Bold Italic'",
                                        fontVariantLigatures: "normal",
                                        fontVariantCaps: "normal",
                                        fontVariantNumeric: "normal",
                                        fontVariantEastAsian: "normal",
                                    }}
                                    d="M367.23-7.604h2.208l-5.04 22.754q-.195.899-.273 1.387-.059.488-.059.84 0 .84.43 1.21.45.372 1.524.49l-.215 1.288h-8.125l4.941-22.07q.43-1.914.43-2.793 0-.43-.098-.664-.078-.254-.254-.41-.176-.157-.469-.235-.293-.097-1.152-.214l.313-1.27z"
                                ></path>
                            </g>
                        </g>
                    </svg>
                </div>
                <div className="contentHolder  subWrapper">
                    <animated.div className="MyEmailList sideButtons"
                        style={emailButtonStyle}
                        onClick={() => {
                            setEmailButtonStyle({ transform: "translateY(0%)", backgroundColor: "#41a56eff" })
                            setCampButtonStyle({ transform: "translateY(0%)", backgroundColor: "#3a4782ff" })
                            push("/dashboard/newemaillist")
                        }}
                    >Add Email Lists</animated.div>
                    <animated.div className="MyCampaign  sideButtons"
                        style={campButtonStyle}
                        onClick={() => {
                            setEmailButtonStyle({ transform: "translateY(200%)", backgroundColor: "#3a4782ff" })
                            setCampButtonStyle({ transform: "translateY(-200%)", backgroundColor: "#41a56eff" })
                            push("/dashboard/newcamp")
                        }}
                    > Create Campaign</animated.div>
                </div>
            </div>
            <div className="dashBody      subWrapper">
                <Switch>
                    <Route path="/dashboard/newcamp" render={() =>
                        <NewCam></NewCam>
                    }>
                    </Route>
                    <Route path="/dashboard/loadedcamp" render={() =>
                        <LoadedCamp></LoadedCamp>
                    }>
                    </Route>
                    <Route path="/dashboard/newemaillist" render={() => <EmailListUploader></EmailListUploader>}></Route>
                    <Route path="/dashboard" render={() => <NavButtons></NavButtons>}></Route>
                </Switch>
            </div>
        </div>
    );
}

export default DashBoard;