window.addEventListener("wheel", function (det) {
    if (det.deltaY > 0) {
        gsap.to(".marque", {
            transform: "translateX(0%)",
            duration: 2.5,
            repeat: -1,
            ease: "none"
        })

        gsap.to(".marque img", {
            rotate: 0,
            duration: 0.5
        })
    }

    else{
        gsap.to(".marque", {
            transform: "translateX(-200%)",
            duration: 2.5,
            repeat: -1,
            ease: "none"
        })
        
        gsap.to(".marque img", {
            rotate: 180,
            duration: 0.5
        })
    }
})
