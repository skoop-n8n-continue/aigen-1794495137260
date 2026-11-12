document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('background-container');
    const colors = ['#FF4136', '#0074D9', '#FFDC00', '#2ECC40', '#FF851B', '#B10DC9'];

    // Lucide Icons as SVG strings (using current color)
    const icons = [
        // Star
        `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
        // Heart
        `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`,
        // Circle (Ball)
        `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>`,
        // Square (Block)
        `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>`,
        // Triangle (Pyramid)
        `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path></svg>`
    ];

    function createFloatingItem() {
        const item = document.createElement('div');
        item.className = 'floating-item';

        // Randomize properties
        const size = Math.random() * 40 + 20; // 20px to 60px
        const left = Math.random() * 100; // 0% to 100%
        const duration = Math.random() * 10 + 10; // 10s to 20s
        const delay = Math.random() * 5; // 0s to 5s

        const color = colors[Math.floor(Math.random() * colors.length)];
        const icon = icons[Math.floor(Math.random() * icons.length)];

        item.style.width = `${size}px`;
        item.style.height = `${size}px`;
        item.style.left = `${left}%`;
        item.style.animationDuration = `${duration}s`;
        item.style.animationDelay = `-${delay}s`; // Start immediately at random points
        item.style.color = color;

        item.innerHTML = icon;

        container.appendChild(item);

        // Remove item after animation completes to avoid DOM buildup, and spawn a new one
        setTimeout(() => {
            if (container.contains(item)) {
                item.remove();
                createFloatingItem();
            }
        }, (duration) * 1000);
    }

    // Initial spawn based on screen size to prevent cluttering
    const itemCount = window.innerWidth < 768 ? 15 : 30;
    for (let i = 0; i < itemCount; i++) {
        createFloatingItem();
    }
});