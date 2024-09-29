var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var imageDiv = document.querySelector("#image") 

main.addEventListener('mousemove', function(details){
    gsap.to(cursor, {
        x: details.x,
        y: details.y,
        duration: 0.4,
        ease: "back.out"
    })
})

imageDiv.addEventListener('mouseenter', () => {
    cursor.innerHTML = "View More";
    gsap.to(cursor, {
        scale: 2,
        duration: 0.4,
        ease: "elastic.out",
        backgroundColor: "#ffffff62",
        color: "#000",
        fontWeight: 1000
    })
})

imageDiv.addEventListener('mouseleave', () => {
    cursor.innerHTML = "";
    gsap.to(cursor, {
        scale: 1,
        duration: 0.4,
        ease: "elastic.out",
        backgroundColor: "#fff"
    })
})
