gsap.to("#page",{
    scrollTrigger:{
        trigger:`.center-image`,
        start:`top 20%`,
        end:`bottom top`,
        // markers:true,
        pin:true,
        scrub:.5
    }
})


var rishit = gsap.timeline({
    scrollTrigger:{
        trigger:`#page1`,
        start:`top 70%`,
        end:`50% 60%`,
        markers:true,
        scrub:.5
    }
})

rishit.from("#page1>h1",{
    opacity:0,
    y:100,
})
.from("#page1>h5",{
    opacity:0,
    y:100,
})
