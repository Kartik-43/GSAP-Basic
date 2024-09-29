var tl = gsap.timeline();

tl.from("h2" , {
    y: -20,
    opacity: 0,
    duration: 0.6,
    delay: 0.5,
})

tl.from("h4" , {
    y: -20,
    opacity: 0,
    duration: 0.6,
    stagger: 0.3
})

tl.from("h1", {
    x: -500,
    y: -400,
    opacity: 0,
    duration: 0.5,
    delay: 0.4
})
