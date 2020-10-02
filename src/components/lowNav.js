import React from 'react';
import {useSpring, animated, config } from 'react-spring'
import './lownav.css';
function LowNav() {

    const lowPop = useSpring({
        from:{transform:"translate(0%,40%"},
        to:{transform:"translate(0%,0%"},
        config: config.slow
    })

    return (
      <animated.div style={lowPop} className="lowNav">
        <svg className="lowNavSVG" width={369.862} height={25.781} viewBox="0 0 97.859 6.821">
            <defs>
                <radialGradient
                xlinkHref="#prefix__a"
                id="prefix__c"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(-.62739 -.00014 -.00038 .06613 237.083 159.336)"
                cx={76.011}
                cy={66.752}
                fx={76.011}
                fy={66.752}
                r={125}
                />
                <radialGradient
                xlinkHref="#prefix__b"
                id="prefix__d"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(-1.68761 -.34957 -1.75317 .33751 601.437 247.159)"
                cx={238.498}
                cy={4.737}
                fx={238.498}
                fy={4.737}
                r={39.789}
                />
                <linearGradient id="prefix__a">
                <stop offset={0} stopColor="#fff" />
                <stop offset={1} stopOpacity={0.213} />
                </linearGradient>
                <linearGradient id="prefix__b">
                <stop offset={0} stopColor="#f80300" />
                <stop offset={1} stopColor="#cb0200" />
                </linearGradient>
            </defs>
            <path
                d="M190.93 168.208c-5.58 0-11.112-.016-15.172-.048h-26.836v-1.727a.08.08 0 00.01-.042v-1.674c1.67-.578 17.466-3.01 20.923-3.188 3.65-.19 38.499-.19 42.15 0 3.65.188 21.074 2.891 21.074 3.269v3.362H206.1c-4.06.032-9.592.048-15.172.048z"
                fill="url(#prefix__c)"
                transform="matrix(1.16282 0 0 1 -173.169 -161.387)"
            />
            <path
                d="M190.929 168.204c-5.58 0-11.111-.015-15.171-.044h-26.836v-1.572a.068.068 0 00.01-.038v-1.523c1.67-.527 17.466-2.74 20.923-2.902 3.65-.172 38.499-.172 42.149 0 3.65.171 21.075 2.631 21.075 2.975v3.06H206.1c-4.06.029-9.592.044-15.172.044z"
                fill="url(#prefix__d)"
                transform="matrix(1.16282 0 0 1 -173.169 -161.387)"
            />
        </svg>

      </animated.div>
    );
  }

export default LowNav;