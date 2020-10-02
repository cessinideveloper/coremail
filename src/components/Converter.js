
                    <p className="signInText">Log In</p>
                    <p className="emailText">Email</p>
                    <p className="passText">Password</p>
                    <svg className="signInBoxSVG"
                        xmlns="http://www.w3.org/2000/svg"
                        width="603.868"
                        height="643.203"
                        version="1.1"
                        viewBox="0 0 159.773 170.181"
                    >
                        <defs>
                            <path d="M23.435 201.083H155.727V271.387H23.435z"></path>
                            <path d="M137.583 180.673H219.226V228.298H137.583z"></path>
                            <path d="M133.804 176.893H199.572V219.226H133.804z"></path>
                            <filter
                                id="filter2371"
                                width="1.162"
                                height="1.15"
                                x="-0.081"
                                y="-0.075"
                                colorInterpolationFilters="sRGB"
                            >
                                <feGaussianBlur stdDeviation="4.713"></feGaussianBlur>
                            </filter>
                            <path d="M137.583 180.673H219.226V228.298H137.583z"></path>
                            <path d="M137.583 180.673H219.226V228.298H137.583z"></path>
                            <filter
                                id="filter2821"
                                width="1.053"
                                height="1.309"
                                x="-0.026"
                                y="-0.155"
                                colorInterpolationFilters="sRGB"
                            >
                                <feGaussianBlur stdDeviation="1.188"></feGaussianBlur>
                            </filter>
                            <filter
                                id="filter3213"
                                width="1.103"
                                height="1.604"
                                x="-0.051"
                                y="-0.302"
                                colorInterpolationFilters="sRGB"
                            >
                                <feGaussianBlur stdDeviation="2.319"></feGaussianBlur>
                            </filter>
                        </defs>
                        <g transform="translate(-103.432 -69.502)">
                            <rect className="mainBackHalo"
                                width="139.851"
                                height="150.435"
                                x="113.393"
                                y="79.375"
                                fill="#4d4d4d"
                                strokeWidth="0.265"
                                filter="url(#filter2371)"
                                opacity="1"
                                rx="15.875"
                                ry="14.458"
                                transform="translate(3.047 2.57) scale(.98338)"
                            ></rect>
                            <rect className="mainBack"
                                width="139.851"
                                height="150.435"
                                x="114.499"
                                y="78.357"
                                fill="#fff"
                                strokeWidth="0.265"
                                rx="15.875"
                                ry="14.458"
                            ></rect>
                            <g className="passInput" fillOpacity="1" transform="translate(1 .087)">
                                <g className="passInputBack"
                                    strokeWidth="0.029" >
                                    <rect className="passInputBackHalo"
                                        width="108.464"
                                        height="18.432"
                                        x="129.583"
                                        y="158.819"
                                        fill="#4d4d4d"
                                        filter="url(#filter2821)"
                                        opacity="0.764"
                                        rx="7.311"
                                        ry="6.172"
                                    ></rect>
                                    <rect className="passInputBackMain"
                                        width="108.464"
                                        height="18.432"
                                        x="129.583"
                                        y="158.819"
                                        fill="#1ca7d1"
                                        rx="7.311"
                                        ry="6.172"
                                    ></rect>
                                </g>
                                <g className="passInputText">
                                    <rect className="passInputTextHalo"
                                        width="92%"
                                        height="20.432"
                                        x="240.786"
                                        y="245.151"
                                        fill="#4d4d4d"
                                        strokeWidth="0.029"
                                        filter="url(#filter3213)"
                                        opacity="0.799"
                                        rx="46.536"
                                        ry="9.216"
                                        transform="matrix(.20752 0 0 .58624 82.095 18.327)"
                                    ></rect>
                                    <rect className="passInputTextMain"
                                        width="18.5%"
                                        height="11.331"
                                        x="132.43"
                                        y="162.116"
                                        fill="#fff"
                                        strokeWidth="0.01"
                                        rx="2.2%"
                                        ry="2%"
                                    ></rect>
                                </g>
                            </g>
                            <g className="emailInput" fillOpacity="1" transform="translate(1 -34.309)">
                                <g className="emailInputBack" strokeWidth="0.029">
                                    <rect className="emailInputBackHalo"
                                        width="108.464"
                                        height="18.432"
                                        x="129.583"
                                        y="158.819"
                                        fill="#4d4d4d"
                                        filter="url(#filter2821)"
                                        opacity="0.764"
                                        rx="7.311"
                                        ry="6.172"
                                    ></rect>
                                    <rect className="emailInputBackMain"
                                        width="108.464"
                                        height="18.432"
                                        x="129.583"
                                        y="158.819"
                                        fill="#1ca7d1"
                                        rx="7.311"
                                        ry="6.172"
                                    ></rect>
                                </g>
                                <g className="emailInputText">
                                    <rect className="emailInputTextHalo"
                                        width="108.464"
                                        height="18.432"
                                        x="240.786"
                                        y="246.151"
                                        fill="#4d4d4d"
                                        strokeWidth="0.029"
                                        filter="url(#filter3213)"
                                        opacity="0.799"
                                        rx="46.536"
                                        ry="9.216"
                                        transform="matrix(.20752 0 0 .58624 82.095 18.327)"
                                    ></rect>
                                    <rect className="emailInputTextMain"
                                        width="21.893"
                                        height="11.331"
                                        x="132.43"
                                        y="162.116"
                                        fill="#fff"
                                        strokeWidth="0.01"
                                        rx="4.257"
                                        ry="3.538"
                                    ></rect>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <div className="signupButtons">

                        <ButtonPopRight contract={contract3}
                            ref={emailRef}
                            grow={{
                                radius: 3.5, grow: 12, transRect: 12,
                                SVG: 210, textWidth: 8.5, fontSize: .83, front: 48, text: "Sign up with Email", min: "30px"
                            }} >

                        </ButtonPopRight>
                        <ButtonPopRight contract={contract2}
                            ref={guestRef}
                            grow={{
                                radius: 3.5, grow: 12, transRect: 12,
                                SVG: 210, textWidth: 8.5, fontSize: .83, front: 48, text: "Explore as Guest", min: "30px"
                            }} >

                        </ButtonPopRight>
                        <ButtonPopRight contract={contract1}
                            ref={googleRef}
                            grow={{
                                radius: 3.5, grow: 12, transRect: 12,
                                SVG: 210, textWidth: 8.5, fontSize: .83, front: 48, text: "Sign up with Google", min: "30px"
                            }} >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40%"
                                height="40%"
                                version="1.1"
                                viewBox="0 0 33.883 34.604"
                            >
                                <g transform="translate(-113.082 -182.27)">
                                    <g fillOpacity="1">
                                        <path
                                            fill="#e94235"
                                            strokeWidth="0.218"
                                            d="M130.352 182.27c-9.463 0-17.134 7.73-17.134 17.266 0 9.536 7.671 17.266 17.134 17.266 8.601 0 15.132-5.804 16.357-14.124 0 0 .024-.178.035-.273l.04-.323c.075-.645.122-1.303.132-1.975.005-.362-.054-.9-.131-1.468v-1.787a.477.477 0 00-.478-.478H130.9a.477.477 0 00-.478.478v5.568c0 .265.213.478.478.478h8.9c-1.147 4.291-4.463 7.082-9.234 7.082-5.665 0-10.257-4.628-10.257-10.336 0-5.68 4.547-10.296 10.183-10.337h.074c2.407 0 4.737.854 6.582 2.41l4.82-4.873a17.062 17.062 0 00-11.617-4.574z"
                                        ></path>
                                        <path
                                            fill="#4285f4"
                                            strokeWidth="0.218"
                                            d="M130.9 196.374a.477.477 0 00-.477.478v5.568c0 .265.213.478.478.478h8.9c-.614 2.298-1.851 4.165-3.6 5.404l5.344 4.336a16.658 16.658 0 005.164-9.96c.114-.899.235-1.579.256-2.571.003-1.319-.055-2.029-.18-3.255-.027-.264-.213-.478-.478-.478z"
                                        ></path>
                                        <path
                                            fill="#34a853"
                                            strokeWidth="0.218"
                                            d="M120.817 202.818l-5.878 4.53c2.817 5.647 8.615 9.525 15.315 9.525 4.47 0 8.394-1.56 11.291-4.235l-5.344-4.336c-1.604 1.062-3.468 1.699-5.732 1.677-4.5-.043-8.183-2.999-9.652-7.16z"
                                        ></path>
                                        <path
                                            fill="#fabb05"
                                            stroke="none"
                                            strokeLinecap="butt"
                                            strokeLinejoin="miter"
                                            strokeOpacity="1"
                                            strokeWidth="0.265"
                                            d="M115.008 191.838c-1.144 2.315-1.926 4.895-1.926 7.656 0 2.834.682 5.505 1.882 7.865l5.853-4.54a9.967 9.967 0 01-.511-3.207c0-1.172.247-2.166.533-3.287z"
                                        ></path>
                                    </g>
                                </g>
                            </svg>
                        </ButtonPopRight>
                    </div>

