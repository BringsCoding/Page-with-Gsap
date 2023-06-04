//Script
gsap.from(".hero-image-wrapper, .content-wrapper, .front-img", 2, {
  delay: 0.25,
  clipPath: "inset(0 100% 0 0)",
  ease: "power4.inOut",
  stragger: {
    amount: 0.5,
  },
});

gsap.from("img", 3, {
  delay: 1.5,
  scale: 2,
  ease: "power4.inOut",
  stagger: {
    amount: 0.25,
  },
});

gsap.to("header h1, header h2, .text-wrapper p", 1, {
  delay: 3,
  top: 0,
  ease: "power3.out",
  stagger: {
    amount: 0.2,
  },
});
