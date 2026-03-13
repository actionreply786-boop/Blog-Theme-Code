(function() { 
    // 1. CSS Design (Isme se iframe ki styling nikaal di hai)
    const style = document.createElement('style');
    style.innerHTML = `
        #p-container { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); backdrop-filter: blur(8px); justify-content: center; align-items: center; z-index: 999999; cursor: pointer; }
        .p-box { background: #ffffff; border-radius: 20px; padding: 30px; width: 400px; max-width: 90%; position: relative; box-shadow: 0 20px 50px rgba(0,0,0,0.5); text-align: center; border: 2px solid #3498db; }
        #p-counter { background: #e67e22; color: #fff; padding: 8px 20px; border-radius: 50px; font-size: 16px; font-weight: bold; display: inline-block; margin-bottom: 20px; }
        .p-title { font-size: 20px; font-weight: bold; color: #333; margin-bottom: 15px; font-family: sans-serif; }
        .p-btn { background: #3498db; color: white; padding: 12px 25px; border-radius: 8px; font-weight: bold; font-size: 18px; display: inline-block; margin-top: 15px; border: none; }
    `;
    document.head.appendChild(style);

    // 2. HTML Structure (Ab ye attractive button wala box hai)
    const htmlMarkup = `
        <div id='p-container'>
          <div class='p-box'>
            <div id='p-counter'>Verifying in 8s</div>
            <div class='p-title'>Please Verify You Are Human</div>
            <div class='p-btn'>CLICK TO VERIFY</div>
            <p style='font-size: 12px; color: #666; margin-top: 15px; font-family: sans-serif;'>
              System will automatically redirect after countdown.
            </p>
          </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', htmlMarkup);

    const adLinks = [
        "https://monstroustouchy.com/bzx7biqa?key=1be2fc2f6fb71d057c094d72346a5d39",
        "https://monstroustouchy.com/m80mq0qyys?key=030b0691e4c23dd44daab1d83bed3add",
        "https://omg10.com/4/9452527",
        "https://rectangulartelevision.com/yE6ZrX",
        "https://monstroustouchy.com/a1avhnxv?key=35be8ef3b0864ef8baa58c0678a29ec1"
    ];

    let index = Math.floor(Math.random() * adLinks.length);
    const container = document.getElementById('p-container');
    const counterDisp = document.getElementById('p-counter');

    // Function jo ad naye tab mein kholay ga
    window.openAdDirect = function() {
        window.open(adLinks[index], '_blank');
        container.style.display = 'none';
    };

    container.onclick = window.openAdDirect;

    function startAdCycle() {
        let timeLeft = 8;
        container.style.display = 'flex';
        
        let timer = setInterval(() => {
            timeLeft--;
            if(counterDisp) counterDisp.innerText = "Verifying in " + timeLeft + "s";
            
            if (timeLeft <= 0) {
                clearInterval(timer);
                // Countdown khatam honay par popup band aur agla index
                container.style.display = 'none';
                index = (index + 1) % adLinks.length;
            }
        }, 1000);
    }

    // Har 35 second baad ad cycle shuru ho ga
    setTimeout(startAdCycle, 4000);
    setInterval(startAdCycle, 35000); 
})();
