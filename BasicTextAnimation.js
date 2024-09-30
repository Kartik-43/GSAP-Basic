function breakTheText(){
    var h1 = document.querySelector("h1");
    var h1Text = h1.textContent;
    var splittedText = h1Text.split("");
    var halfValue = splittedText.length/2;
    var newSpace = "&nbps;";
    var clutter = '';

    splittedText.forEach(function(elem, idx) {
        if (halfValue > idx) {
            if (elem == " "){
                clutter += `<span class="a">&nbsp;</span>`;
            }

            else{
                clutter += `<span class = "a">${elem}</span>`;
            }
        }
        else{
            if (elem == " "){
                clutter += `<span class="b">&nbsp;</span>`;
            }

            else{
                clutter += `<span class = "b">${elem}</span>`;
            }
        }
    })

    h1.innerHTML = clutter;
}

breakTheText();

gsap.from("h1 .a", {
    y: 100,
    duration: 0.6,
    opacity: 0,
    stagger: 0.2
})

gsap.from("h1 .b", {
    y: 100,
    duration: 0.6,
    opacity: 0,
    stagger: -0.2
})
