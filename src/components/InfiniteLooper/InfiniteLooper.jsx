import React , {useState, useEffect, useRef, useCallback} from 'react'

import './style.css'
// const { useState, useEffect, useRef, useCallback } = React;

// "use strict";
// const { useState, useEffect, useRef, useCallback } = React;
const InfiniteLooper = function InfiniteLooper({ speed, direction, children, }) {
    const [looperInstances, setLooperInstances] = useState(1);
    const outerRef = useRef(null);
    const innerRef = useRef(null);
    function resetAnimation() {
        if (innerRef === null || innerRef === void 0 ? void 0 : innerRef.current) {
            innerRef.current.setAttribute("data-animate", "false");
            setTimeout(() => {
                if (innerRef === null || innerRef === void 0 ? void 0 : innerRef.current) {
                    innerRef.current.setAttribute("data-animate", "true");
                }
            }, 10);
        }
    }
    const setupInstances = useCallback(() => {
        if (!(innerRef === null || innerRef === void 0 ? void 0 : innerRef.current) || !(outerRef === null || outerRef === void 0 ? void 0 : outerRef.current))
            return;
        const { width } = innerRef.current.getBoundingClientRect();
        const { width: parentWidth } = outerRef.current.getBoundingClientRect();
        const widthDeficit = parentWidth - width;
        const instanceWidth = width / innerRef.current.children.length;
        if (widthDeficit) {
            setLooperInstances(looperInstances + Math.ceil(widthDeficit / instanceWidth) + 1);
        }
        resetAnimation();
    }, [looperInstances]);
    /*
      6 instances, 200 each = 1200
      parent = 1700
    */
    useEffect(() => setupInstances(), [setupInstances]);
    useEffect(() => {
        window.addEventListener("resize", setupInstances);
        return () => {
            window.removeEventListener("resize", setupInstances);
        };
    }, [looperInstances, setupInstances]);
    return (React.createElement("div", { className: "looper", ref: outerRef },
        React.createElement("div", { className: "looper__innerList", ref: innerRef, "data-animate": "true" }, [...Array(looperInstances)].map((_, ind) => (React.createElement("div", { key: ind, className: "looper__listInstance", style: {
                animationDuration: `${speed}s`,
                animationDirection: direction === "right" ? "reverse" : "normal",
            } }, children))))));
};

    //   ******************************************
    
    
  
//     return (
//     <div>InfiniteLooper</div>
//   )



export default InfiniteLooper