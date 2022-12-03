var sphereEl = document.querySelector(".sphere-animation");
var spherePathEls = sphereEl.querySelectorAll(".sphere path");
var pathLength = spherePathEls.length;
var targets = gsap.utils.toArray(spherePathEls);
targets = targets.reverse();

var nameArr = [];
var animationsArr = [];
for (var i = 0; i < pathLength; i++) {
    nameArr.push("name" + i);
    animationsArr.push("animation" + i);
}
var masterTimeline = gsap.timeline({repeat: -1});

function checkPaths() {
    nameArr.forEach(function (item, i) {
        let functionName = item.toString();
        let thisAnimation = animationsArr[i].toString();
        let finalName = function functionName() {
            var thisAnimation = gsap.timeline({repeat: 0, delay: (i * .1)});
            thisAnimation.to(targets[i], {x: 4, y: 4, ease: "power2.inOut", duration: 1});
            thisAnimation.to(targets[i], {
                stroke: "rgba(37, 211, 102, .9)",
                strokeWidth: 1,
                ease: "power1.in",
                duration: 1
            }, "<");
            thisAnimation.to(targets[i], {
                x: 0,
                y: 0,
                attr: {stdDeviation: "100 0"},
                ease: "power1.inOut",
                duration: 1
            }, ">");
            thisAnimation.to(targets[i], {
                stroke: "rgba(85, 85, 85, .3)",
                strokeWidth: 1,
                ease: "power3.inOut",
                duration: 1
            }, "<");
        };
        masterTimeline.add(finalName());
    });
}

checkPaths();
setInterval(checkPaths, 3200);

// Use this colour to get the original look
// stroke: "rgba(0, 50, 205, .9)",