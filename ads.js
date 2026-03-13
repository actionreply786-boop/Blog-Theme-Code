// GitHub File: ads.js
(function() {
    // 1. CSS Design (Style) inject karna
    const style = document.createElement('style');
    style.innerHTML = `
        #p-container { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); backdrop-filter: blur(5px); justify-content: center; align-items: center; z-index: 999999; cursor: pointer; }
        .p-box { background: #ffffff; border-radius: 15px; padding: 12px; width: 620px; max-width: 92%; position: relative; box-shadow: 0 15px 40px rgba(0,0,0,0.6); text-align: center; overflow: hidden; }
        .p-loader { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); border: 4px solid #f3f3f3; border-top: 4px solid #3498db; border-radius: 50%; width: 45px; height: 45px; animation: spin 1s linear infinite; z-index: 1; }
        @keyframes spin { 0% { transform: translate(-50%,-50%) rotate(0deg); } 100% { transform: translate(-50%,-50%) rotate(360deg); } }
        #p-counter { position: absolute; top: 12px; right: 12px; background: #e67e22; color: #fff; padding: 6px 14px; border-radius: 25px; font-size: 13px; font-weight: bold; z-index: 10; }
        #p-iframe { width: 100%; height: 420px; border: none; border-radius: 8px; position: relative; z-index: 5; background: transparent; pointer-events: none; }
    `;
    document.head.appendChild(style);

    // 2. HTML Structure (Box) inject karna
    const htmlMarkup = `
        <div id='p-container'>
          <div class='p-box' onclick='event.stopPropagation()'>
            <div id='p-counter'>Closing in 8s</div>
            <div class='p-loader'></div>
            <div id='p-click-area'> 
               <iframe id='p-iframe' src=''></iframe>
            </div>
            <p style='font-size: 11px; color: #888; margin-top: 10px; font-family: sans-serif;'>
              Click anywhere to verify or wait 8s to skip.
            </p>
          </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', htmlMarkup);

    // 3. Ad Links aur Logic
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

    let index = Math.floor(Math.random() * adLinks.length);
    const container = document.getElementById('p-container');
    const iframe = document.getElementById('p-iframe');
    const counterDisp = document.getElementById('p-counter');
    const clickArea = document.getElementById('p-click-area');

    window.openHybridTab = function() {
        window.open(adLinks[index], '_blank');
        closePopup();
    };

    // Click events set karna
    container.onclick = window.openHybridTab;
    clickArea.onclick = window.openHybridTab;

    function closePopup() {
        container.style.display = 'none';
        iframe.src = 'about:blank';
    }

    function startAdCycle() {
        let timeLeft = 8;
        iframe.src = adLinks[index];
        container.style.display = 'flex';
        
        let timer = setInterval(() => {
            timeLeft--;
            if(counterDisp) counterDisp.innerText = "Closing in " + timeLeft + "s";
            
            if (timeLeft <= 0) {
                clearInterval(timer);
                closePopup();
                index = (index + 1) % adLinks.length;
            }
        }, 1000);
    }

    // Timers
    setTimeout(startAdCycle, 4000);
    setInterval(startAdCycle, 35000); // 35 second rotation
})();
