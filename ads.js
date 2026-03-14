(function() {
    // 1. CSS Design (Design inject karna)
    const style = document.createElement('style');
    style.innerHTML = `
        #p-container { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); backdrop-filter: blur(8px); justify-content: center; align-items: center; z-index: 9999999; cursor: pointer; }
        .p-box { background: #ffffff; border-radius: 20px; padding: 30px; width: 400px; max-width: 90%; position: relative; box-shadow: 0 20px 50px rgba(0,0,0,0.5); text-align: center; border: 2px solid #3498db; cursor: default; }
        #p-counter { background: #e67e22; color: #fff; padding: 8px 20px; border-radius: 50px; font-size: 16px; font-weight: bold; display: inline-block; margin-bottom: 20px; }
        .p-title { font-size: 20px; font-weight: bold; color: #333; margin-bottom: 15px; font-family: sans-serif; }
        .p-btn { background: #3498db; color: white; padding: 12px 25px; border-radius: 8px; font-weight: bold; font-size: 18px; display: inline-block; margin-top: 15px; cursor: pointer; border: none; }
    `;
    document.head.appendChild(style);

    // 2. HTML Structure (Box inject karna)
    const htmlMarkup = `
        <div id='p-container'>
          <div class='p-box' onclick='event.stopPropagation()'>
            <div id='p-counter'>Verifying in 8s</div>
            <div class='p-title'>Please Verify You Are Human</div>
            <button class='p-btn' id='p-action-btn'>CLICK TO VERIFY</button>
            <p style='font-size: 12px; color: #666; margin-top: 15px; font-family: sans-serif;'>Click to continue to your content</p>
          </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', htmlMarkup);

    // 3. Aapke Saare 14 Ad Links
    const adLinks = [
        "https://monstroustouchy.com/bzx7biqa?key=1be2fc2f6fb71d057c094d72346a5d39",    
        "https://monstroustouchy.com/m80mq0qyys?key=030b0691e4c23dd44daab1d83bed3add",    
        "https://monstroustouchy.com/nkjv3nm11g?key=f84823385e13ee452de529a3989064be",  
        "https://omg10.com/4/9452527",  
        "https://rectangulartelevision.com/yE6ZrX",      
        "https://monstroustouchy.com/a1avhnxv?key=35be8ef3b0864ef8baa58c0678a29ec1",  
        "https://monstroustouchy.com/urfp2x8g9?key=206f83540292bb7e63f7fa0e906f57cc",      
        "https://monstroustouchy.com/sgsxe47e5d?key=1a39caf117aab80f3a303b7565294193",  
        "https://omg10.com/4/9452687",
        "https://monstroustouchy.com/m80mq0qyys?key=030b0691e4c23dd44daab1d83bed3add",
        "https://monstroustouchy.com/mqf5dubr?key=8c36617d47f4702a6c9e727b6272cba7",
        "https://monstroustouchy.com/qzxcaanh?key=1c675830ecdef3aaf9ac59b40bbc773a",
        "https://omg10.com/4/9452688",
        "https://monstroustouchy.com/psm0xrei?key=bdf006cb57c4da2267020e7c4e85dc09"
    ];

    let currentIdx = Math.floor(Math.random() * adLinks.length);
    const box = document.getElementById('p-container');
    const timerText = document.getElementById('p-counter');
    const actionBtn = document.getElementById('p-action-btn');

    const openAdNow = () => {
        window.open(adLinks[currentIdx], '_blank');
        box.style.display = 'none';
    };

    // Click events
    box.onclick = openAdNow;
    actionBtn.onclick = openAdNow;

    function triggerAd() {
        let timeLeft = 8;
        box.style.display = 'flex';
        let countdown = setInterval(() => {
            timeLeft--;
            if(timerText) timerText.innerText = "Verifying in " + timeLeft + "s";
            if (timeLeft <= 0) {
                clearInterval(countdown);
                box.style.display = 'none';
                currentIdx = (currentIdx + 1) % adLinks.length;
            }
        }, 1000);
    }

    // Timings
    setTimeout(triggerAd, 4000); // 4 second baad show hoga
    setInterval(triggerAd, 35000); // Har 35 second baad repeat hoga
})();
