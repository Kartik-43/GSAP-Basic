gsap.from("#page1 #ball", {
    duration: 3,
    x: 500,
    y: -500,
    scale: 5,
    ease: "elastic.out(1, 0.3)",
    delay: 1,
    opacity: 0
})

gsap.from("#page2 #box", {
    duration: 1,
    x: 50,
    y: 50,
    scale: 0,
    opacity: 0,
    scrollTrigger: {
        trigger: "#page2 #box",
        scroller: "body",
        start: "top 70%",
        end: "top 30%",
        scrub: 2,
    }
})

gsap.from("#page3 h2", {
    duration: 1,
    x: 100,
    y: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: "#page3 h2",
        scroller: "body",
        start: "top 70%",
        end: "top 30%",
        scrub: 2,
    }
})

gsap.from("#page3 h3", {
    duration: 1,
    x: -100,
    y: -100,
    opacity: 0,
    scrollTrigger: {
        trigger: "#page3 h3",
        scroller: "body",
        start: "top 70%",
        end: "top 30%",
        scrub: 2,
    }
})

gsap.to("#page4 h1", {
    transform: "translateX(-210%)",

    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        start: "top 0",
        end: "top -100%",
        scrub: 2,
        pin: true
    }
})
