var tl = gsap.timeline();

tl.from("nav", {
    opacity: 0,
    duration: 1,
    delay: 0.5
})

tl.from(".menu", {
    x: -100,
    duration: 0.5,
})

tl.from("nav>img", {
    y:-50,
    duration: 1,
    opacity: 0,
    scale: 0.5
})

tl.from("li", {
    y: 50,
    duration: 1,
    stagger: 0.2,
    opacity: 0
})

tl.from(".container-1 h1", {
    x:100,
    opacity:0,
    duration: 1
})

tl.from(".container-1>div>p:first-of-type", {
    x:100,
    opacity: 0,
    duration: 1
})

tl.from(".container-1 span", {
    y:-100,
    opacity: 0,
    duration: 1,
    scale: 0.5
})

tl.from(".container-1>div>p:nth-of-type(2)", {
    x:-100,
    opacity: 0,
    duration: 1
})

tl.from(".container-1 img:first-of-type", {
    x: "100%",
    duration: 1,
    display: "none"
})
tl.to(".container-1 img:first-of-type", {
    y: -20,
    duration: 0.5,
})

tl.from(".container-1 img:nth-of-type(2)", {
    y: "100%",
    duration: 1,
    display: "none"
})
tl.to(".container-1 img:nth-of-type(2)", {
    x: -10,
    duration: 0.5,
})


tl.to(".container-1 span", {
    y:-40,
    duration:1,
    repeat:-1,
    yoyo:true
})