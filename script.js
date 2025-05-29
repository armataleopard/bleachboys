document.addEventListener('DOMContentLoaded', function() {
    // Custom cursor
    const cursor = document.querySelector('.cursor');
    const cursorTrail = document.querySelector('.cursor-trail');
    
    // Only initialize cursor on non-touch devices
    if (!('ontouchstart' in window)) {
        document.addEventListener('mousemove', function(e) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            createBubble(e.clientX, e.clientY, cursorTrail, 'small');
        });
    }
    
    // Bubble creation function
    function createBubble(x, y, parent, size = 'normal') {
        // Limit the number of bubbles to prevent performance issues
        const bubbles = document.querySelectorAll('.bubble');
        if (bubbles.length > 20) {
            bubbles[0].remove();
        }
        
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        
        // Random size based on the size parameter
        let bubbleSize;
        if (size === 'small') {
            bubbleSize = Math.random() * 10 + 5;
        } else {
            bubbleSize = Math.random() * 20 + 10;
        }
        
        bubble.style.width = bubbleSize + 'px';
        bubble.style.height = bubbleSize + 'px';
        
        // Position with slight randomness
        bubble.style.left = (x - bubbleSize/2 + (Math.random() * 20 - 10)) + 'px';
        bubble.style.top = (y - bubbleSize/2 + (Math.random() * 20 - 10)) + 'px';
        
        // Random animation duration
        const duration = Math.random() * 2 + 2;
        bubble.style.animationDuration = duration + 's';
        
        parent.appendChild(bubble);
        
        // Remove bubble after animation
        setTimeout(() => {
            bubble.remove();
        }, duration * 1000);
    }
    
    // Create spirits randomly
    function createSpirit() {
        const spiritAnimation = document.querySelector('.spirit-animation');
        
        const spirit = document.createElement('div');
        spirit.classList.add('spirit');
        
        // Random position
        const startX = Math.random() * window.innerWidth;
        spirit.style.left = startX + 'px';
        spirit.style.bottom = '-50px';
        
        // Random animation duration
        const duration = Math.random() * 10 + 5;
        spirit.style.animationDuration = duration + 's';
        
        spiritAnimation.appendChild(spirit);
        
        // Remove spirit after animation
        setTimeout(() => {
            spirit.remove();
        }, duration * 1000);
    }
    
    // Create spirits periodically
    setInterval(createSpirit, 3000);
    
    // Hero Twitter button effect
    const twitterHeroBtn = document.querySelector('.twitter-hero');
    if (twitterHeroBtn) {
        twitterHeroBtn.addEventListener('mouseenter', function() {
            const btnRect = this.getBoundingClientRect();
            const centerX = btnRect.left + btnRect.width/2;
            const centerY = btnRect.top + btnRect.height/2;
            
            // Create bubble effect on hover
            for (let i = 0; i < 10; i++) {
                const x = centerX + (Math.random() * btnRect.width - btnRect.width/2);
                const y = centerY + (Math.random() * btnRect.height - btnRect.height/2);
                createBubble(x, y, document.body);
            }
        });
        
        twitterHeroBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create bubble explosion
            const btnRect = this.getBoundingClientRect();
            const centerX = btnRect.left + btnRect.width/2;
            const centerY = btnRect.top + btnRect.height/2;
            
            for (let i = 0; i < 20; i++) {
                createBubble(centerX, centerY, document.body);
            }
            
            // Create multiple spirits
            for (let i = 0; i < 3; i++) {
                createSpirit();
            }
            
            // Open Twitter share dialog (can be customized with actual share URL)
            const shareText = "Check out BLEACH BOYS ($SZN) - The spiritual meme coin! 🧼✨";
            const shareUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(shareText);
            window.open(shareUrl, "_blank");
        });
    }
    
    // Add hover effects to file cards
    const fileCards = document.querySelectorAll('.file-card');
    fileCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const cardRect = this.getBoundingClientRect();
            const bubbleContainer = this.querySelector('.card-bubbles');
            
            // Create multiple bubbles on hover
            for (let i = 0; i < 5; i++) {
                const x = Math.random() * cardRect.width;
                const y = Math.random() * cardRect.height;
                createBubble(x, y, bubbleContainer);
            }
        });
    });
    
    // Bleach bottle click event
    const bleachBottle = document.getElementById('bleachBottle');
    const memeMessage = document.getElementById('memeMessage');
    const messageText = document.getElementById('messageText');
    
    const memeMessages = [
        "Your wallet is now blessed with $SZN energy. Pump imminent.",
        "The spirits predict: 100x or instant noodles. No in-between.",
        "Congratulations! You've been cleansed of FUD.",
        "BLEACH BOYS have entered your meme chakras. Bullish.",
        "You now see charts in your dreams. This is the way.",
        "The soap prophecy has chosen you. Share or get rekt.",
        "Your spiritual wallet is now connected to the meme realm.",
        "Congrats! You've unlocked the secret BLEACH level.",
        "The mop of destiny points to green candles in your future.",
        "You've been spiritually rugged... in a good way."
    ];
    
    bleachBottle.addEventListener('click', function() {
        // Show random meme message
        const randomMessage = memeMessages[Math.floor(Math.random() * memeMessages.length)];
        messageText.textContent = randomMessage;
        
        memeMessage.classList.add('active');
        
        // Hide message after 3 seconds
        setTimeout(() => {
            memeMessage.classList.remove('active');
        }, 3000);
        
        // Create bubble explosion
        for (let i = 0; i < 20; i++) {
            const rect = this.getBoundingClientRect();
            const x = rect.left + rect.width/2;
            const y = rect.top + rect.height/2;
            createBubble(x, y, document.body);
        }
    });
    
    // Close meme message when clicked
    memeMessage.addEventListener('click', function() {
        this.classList.remove('active');
    });
    
    // Scroll event for creating spirits
    window.addEventListener('scroll', function() {
        // Create spirit with 10% chance on scroll
        if (Math.random() < 0.1) {
            createSpirit();
        }
    });
    
    // Initial spirits
    for (let i = 0; i < 5; i++) {
        createSpirit();
    }
    
    // Make file cards interactive
    fileCards.forEach(card => {
        card.addEventListener('click', function() {
            // Highlight the clicked card
            fileCards.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            
            // Create spirit effect
            const rect = this.getBoundingClientRect();
            const x = rect.left + rect.width/2;
            const y = rect.top + rect.height/2;
            
            for (let i = 0; i < 10; i++) {
                createBubble(x, y, document.body);
            }
            
            createSpirit();
        });
    });
}); 