var initialPath = "M 10 100 Q 500 100 990 100";

var Path = "M 10 100 Q 500 100 990 100";

var string = document.querySelector("#string")

string.addEventListener("mousemove", function (dets) {
    var svgElement = string.querySelector("svg");

    var boundingBox = svgElement.getBoundingClientRect();
    
    var relativeX = dets.clientX - boundingBox.left;
    var relativeY = dets.clientY - boundingBox.top;
    
    initialPath = `M 10 100 Q ${relativeX} ${relativeY} 990 100`;
    
    gsap.to("svg path", {
        attr: { d: initialPath },
        duration: 0.2,
        ease: "power3.out",
    });
});

string.addEventListener("mouseleave", function () {
    gsap.to("svg path", {
        attr: { d: Path },
        duration: 1.3,
        ease: "elastic.out(1, 0.3)",
    });
});
