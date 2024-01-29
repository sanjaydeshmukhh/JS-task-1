function toggleTheme() {
    if (document.body.classList.contains("dark"))
        document.body.classList.remove("dark");
    else document.body.classList.add("dark");
}

let again = () => {
  const end = Date.now() + 2 * 1000;

  // go Buckeyes!
  const colors = ["#bb0000", "#ffffff"];

  (function frame() {
      confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors,
      });

      confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors,
      });

      if (Date.now() < end) {
          requestAnimationFrame(frame);
      }
  })();
};

let valentine = () =>{
  const defaults = {
      spread: 360,
      ticks: 100,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      shapes: ["heart"],
      colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
  };

  confetti({
      ...defaults,
      particleCount: 50,
      scalar: 2,
  });

  confetti({
      ...defaults,
      particleCount: 25,
      scalar: 3,
  });

  confetti({
      ...defaults,
      particleCount: 10,
      scalar: 4,
  });
}

let real = () => {
  const count = 200,
      defaults = {
          origin: { y: 0.7 },
      };

  function fire(particleRatio, opts) {
      confetti(
          Object.assign({}, defaults, opts, {
              particleCount: Math.floor(count * particleRatio),
          })
      );
  }

  fire(0.25, {
      spread: 26,
      startVelocity: 55,
  });

  fire(0.2, {
      spread: 60,
  });

  fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
  });

  fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
  });

  fire(0.1, {
      spread: 120,
      startVelocity: 45,
  });
}

let istatus = document.querySelector("h1")
let flag = 0;
let btn = document.querySelector(".confetti-button");

let con = document.getElementsByClassName("confetti-button")[0].addEventListener("click", () =>{
        
        
        let a = Math.floor(Math.random() * 8000);
        if(flag === 0){
          real();
          istatus.innerHTML = "REQUEST SENDING";
          btn.innerHTML = "requested";

           setTimeout(() => {
               valentine();
               istatus.innerHTML = "FOLLOWING";
               btn.innerHTML = "unfollow";
           }, a);
           flag = 1;
        } else {
          istatus.innerHTML = "FOLLOW";
          btn.innerHTML = "Send Request"
        }

        btn.addEventListener("dblclick", () =>{
          setTimeout(() => {
              istatus.innerHTML = "FOLLOW";
              btn.innerHTML = "Send Request again";
              again();
              flag = 0;
          },);
        })

        

       
});