// Main JavaScript for Multi-Tools Website
// Standalone theme toggle logic
function setupThemeToggle() {
    function getTheme() {
        try {
            const t = localStorage.getItem('theme');
            if (t === 'dark' || t === 'light') return t;
        } catch(e) {}
        // Always default to light mode on first load
        return 'light';
    }
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        try { localStorage.setItem('theme', theme); } catch(e) {}
        const icon = document.querySelector('#themeToggle i');
        if (icon) {
            icon.classList.remove('fa-sun', 'fa-moon');
            icon.classList.add(theme === 'dark' ? 'fa-moon' : 'fa-sun');
        }
    }
    function toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        setTheme(next);
    }
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        setTheme(getTheme());
        themeToggle.onclick = toggleTheme;
    }
}
    // Robust theme toggle implementation
    function getPreferredTheme() {
        // Try localStorage
        try {
            const saved = localStorage.getItem('theme');
            if (saved === 'dark' || saved === 'light') return saved;
        } catch (e) {}
        // System preference
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
        return 'light';
    } // <-- Add this closing brace to end getPreferredTheme

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        try { localStorage.setItem('theme', theme); } catch (e) {}
        const themeIcon = document.querySelector('#themeToggle i');
        if (themeIcon) updateThemeIcon(themeIcon, theme);
    // (Removed unmatched closing brace to fix syntax error)

    function updateToggleAria(themeToggle, theme) {
        themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
        themeToggle.setAttribute('aria-pressed', theme === 'dark');
    }

    function handleThemeToggle() {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        setTheme(next);
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) updateToggleAria(themeToggle, next);
        // Announce for screen readers
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'polite');
        announcement.className = 'sr-only';
        announcement.textContent = `Theme changed to ${next} mode`;
        document.body.appendChild(announcement);
        setTimeout(() => announcement.remove(), 1000);
    }

    function setupThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;
        // Simple, reliable theme toggle
        function getTheme() {
            try {
                const t = localStorage.getItem('theme');
                if (t === 'dark' || t === 'light') return t;
            } catch(e) {}
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }

        function setTheme(theme) {
            document.documentElement.setAttribute('data-theme', theme);
            try { localStorage.setItem('theme', theme); } catch(e) {}
            const icon = document.querySelector('#themeToggle i');
            if (icon) {
                icon.classList.remove('fa-sun', 'fa-moon');
                icon.classList.add(theme === 'dark' ? 'fa-moon' : 'fa-sun');
        }

        function toggleTheme() {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            setTheme(next);
        }

        function setupToggle() {
            const themeToggle = document.getElementById('themeToggle');
            if (themeToggle) {
                setTheme(getTheme());
                themeToggle.onclick = toggleTheme;
            }
        }

        // Try to setup immediately
        setupToggle();

        // Observe header for dynamic loading
        const headerPlaceholder = document.getElementById('header-placeholder');
        if (headerPlaceholder) {
            const observer = new MutationObserver(setupToggle);
            observer.observe(headerPlaceholder, { childList: true, subtree: true });
        }
    }
    
    function handleThemeToggle() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        const themeIcon = document.querySelector('#themeToggle i');
        
        // Add animation class
        document.documentElement.classList.add('theme-transition');
                
        // Set new theme
        document.documentElement.setAttribute('data-theme', newTheme);
        
        // Try to save preference
        try {
            localStorage.setItem('theme', newTheme);
        } catch (e) {
            console.warn('Could not save theme preference:', e);
        }
        
        // Update icon with animation
        if (themeIcon) {
            themeIcon.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                updateThemeIcon(themeIcon, newTheme);
                themeIcon.style.transform = '';
            }, 200);
        }
        
        // Remove animation class
        setTimeout(() => {
            document.documentElement.classList.remove('theme-transition');
        }, 300);
        
        // Announce theme change for screen readers
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'polite');
        announcement.className = 'sr-only';
        announcement.textContent = `Theme changed to ${newTheme} mode`;
        document.body.appendChild(announcement);
        setTimeout(() => announcement.remove(), 1000);
    }

    // Try to setup immediately
    setupThemeToggle();
    
    // Also setup when header is loaded
    const headerPlaceholder2 = document.getElementById('header-placeholder');
    if (headerPlaceholder2) {
        // Create a new MutationObserver
        const observer = new MutationObserver((mutations) => {
            // Check if header has been loaded
            if (headerPlaceholder2.children.length > 0) {
                setupThemeToggle();
                // Disconnect once we've set up the toggle
                observer.disconnect();
            }
        });
        
        // Start observing
        observer.observe(headerPlaceholder2, {
            childList: true
        });

            // Add click event listener
            themeToggle.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                
                document.documentElement.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
                updateThemeIcon(themeIcon, newTheme);
            });
            
            // Disconnect observer once theme toggle is initialized
            if (observer) {
                observer.disconnect();
            }
        }
    }

    // Try to setup immediately in case header is already loaded
    setupThemeToggle();

    // Setup observer to watch for header changes
    const observer2 = new MutationObserver((mutations, obs) => {
        setupThemeToggle();
    });

    // Start observing header placeholder for changes
    const headerPlaceholder3 = document.getElementById('header-placeholder');
    if (headerPlaceholder3) {
        observer2.observe(headerPlaceholder3, {
            childList: true,
            subtree: true
        });
    }
}

// Update theme icon
function updateThemeIcon(icon, theme) {
    if (theme === 'dark') {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon'); // Dark theme shows moon icon
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');  // Light theme shows sun icon
    }
}

// Tool data structure
const toolsData = {
    'image-tools': [
        { id: 'image-to-png', name: 'Image to PNG Converter', description: 'Convert images to PNG format with transparency support', icon: 'fas fa-image', url: 'tools/image-to-png.html' },
        { id: 'color-picker', name: 'Color Picker', description: 'Select colors, view hex/RGB values, and generate color palettes', icon: 'fas fa-palette', url: 'tools/color-picker.html' },
        { id: 'qr-code-generator', name: 'QR Code Generator', description: 'Generate QR codes for URLs, text, or contact information', icon: 'fas fa-qrcode', url: 'tools/qr-code-generator.html' },
        { id: 'image-to-jpg', name: 'Image to JPG Converter', description: 'Convert images to JPG format with quality control', icon: 'fas fa-file-image', url: 'tools/image-to-jpg.html' },
        { id: 'image-resizer', name: 'Image Resizer', description: 'Resize images to any dimension while maintaining quality', icon: 'fas fa-expand-arrows-alt', url: 'tools/image-resizer.html' },
        { id: 'image-compressor', name: 'Image Compressor', description: 'Compress images to reduce file size without losing quality', icon: 'fas fa-compress-alt', url: 'tools/image-compressor.html' },
        { id: 'image-cropper', name: 'Image Cropper', description: 'Crop images to remove unwanted areas', icon: 'fas fa-crop-alt', url: 'tools/image-cropper.html' },
        { id: 'image-to-base64', name: 'Convert Image to Base64', description: 'Convert images to Base64 string format', icon: 'fas fa-code', url: 'tools/image-to-base64.html' },
        { id: 'webp-to-png', name: 'Convert WebP to PNG', description: 'Convert WebP images to PNG format', icon: 'fas fa-exchange-alt', url: 'tools/webp-to-png.html' },
        { id: 'gif-maker', name: 'GIF Maker', description: 'Create animated GIFs from images or videos', icon: 'fas fa-film', url: 'tools/gif-maker.html' },
        { id: 'screenshot-to-pdf', name: 'Screenshot to PDF Converter', description: 'Convert screenshots to PDF documents', icon: 'fas fa-file-pdf', url: 'tools/screenshot-to-pdf.html' }
    ],
    'seo-tools': [
        { id: 'meta-tag-generator', name: 'Meta Tag Generator', description: 'Generate optimized meta tags for better SEO', icon: 'fas fa-tags', url: 'tools/meta-tag-generator.html' },
        { id: 'keyword-density-checker', name: 'Keyword Density Checker', description: 'Analyze keyword density in your content', icon: 'fas fa-percentage', url: 'tools/keyword-density-checker.html' },
        { id: 'sitemap-generator', name: 'Sitemap Generator', description: 'Generate XML sitemaps for your website', icon: 'fas fa-sitemap', url: 'tools/sitemap-generator.html' },
        { id: 'robots-txt-generator', name: 'Robots.txt Generator', description: 'Create robots.txt files for search engine crawling', icon: 'fas fa-robot', url: 'tools/robots-txt-generator.html' },
        { id: 'google-index-checker', name: 'Google Index Checker', description: 'Check if your pages are indexed by Google', icon: 'fab fa-google', url: 'tools/google-index-checker.html' },
        { id: 'domain-authority-checker', name: 'Domain Authority Checker', description: 'Check domain authority and page authority', icon: 'fas fa-chart-line', url: 'tools/domain-authority-checker.html' },
        { id: 'backlink-checker', name: 'Backlink Checker', description: 'Analyze backlinks to your website', icon: 'fas fa-link', url: 'tools/backlink-checker.html' },
        { id: 'page-speed-checker', name: 'Page Speed Checker', description: 'Test your website loading speed', icon: 'fas fa-tachometer-alt', url: 'tools/page-speed-checker.html' },
        { id: 'xml-sitemap-validator', name: 'XML Sitemap Validator', description: 'Validate your XML sitemap format', icon: 'fas fa-check-circle', url: 'tools/xml-sitemap-validator.html' },
        { id: 'mobile-friendly-test', name: 'Mobile-Friendly Test', description: 'Test if your website is mobile-friendly', icon: 'fas fa-mobile-alt', url: 'tools/mobile-friendly-test.html' }
    ],
    'text-tools': [
        { id: 'word-counter', name: 'Word Counter', description: 'Count words, characters, and paragraphs in text', icon: 'fas fa-calculator', url: 'tools/word-counter.html' },
        { id: 'text-case-converter', name: 'Text Case Converter', description: 'Convert text between different cases and formats', icon: 'fas fa-font', url: 'tools/text-case-converter.html' },
        { id: 'character-counter', name: 'Character Counter', description: 'Count characters with and without spaces', icon: 'fas fa-text-width', url: 'tools/character-counter.html' },
        { id: 'case-converter', name: 'Case Converter', description: 'Convert text case (uppercase, lowercase, title case)', icon: 'fas fa-font', url: 'tools/case-converter.html' },
        { id: 'plagiarism-checker', name: 'Plagiarism Checker', description: 'Check text for plagiarism and duplicate content', icon: 'fas fa-copy', url: 'tools/plagiarism-checker.html' },
        { id: 'grammar-checker', name: 'Grammar Checker', description: 'Check grammar and spelling in your text', icon: 'fas fa-spell-check', url: 'tools/grammar-checker.html' },
        { id: 'text-to-speech', name: 'Text-to-Speech', description: 'Convert text to speech with natural voice', icon: 'fas fa-volume-up', url: 'tools/text-to-speech.html' },
        { id: 'speech-to-text', name: 'Speech-to-Text', description: 'Convert speech to text using voice recognition', icon: 'fas fa-microphone', url: 'tools/speech-to-text.html' },
        { id: 'url-encoder-decoder', name: 'URL Encoder & Decoder', description: 'Encode and decode URLs for web compatibility', icon: 'fas fa-link', url: 'tools/url-encoder-decoder.html' },
        { id: 'fancy-text-generator', name: 'Fancy Text Generator', description: 'Generate fancy text with special characters', icon: 'fas fa-magic', url: 'tools/fancy-text-generator.html' },
        { id: 'lorem-ipsum-generator', name: 'Lorem Ipsum Generator', description: 'Generate Lorem Ipsum placeholder text', icon: 'fas fa-file-text', url: 'tools/lorem-ipsum-generator.html' }
    ],
    'developer-tools': [
        { id: 'json-formatter', name: 'JSON Formatter', description: 'Format and validate JSON data', icon: 'fas fa-code', url: 'tools/json-formatter.html' },
        { id: 'hash-generator', name: 'Hash Generator', description: 'Generate MD5, SHA1, SHA256, and other hashes', icon: 'fas fa-hashtag', url: 'tools/hash-generator.html' },
        { id: 'html-to-markdown', name: 'HTML to Markdown Converter', description: 'Convert HTML to Markdown format', icon: 'fas fa-exchange-alt', url: 'tools/html-to-markdown.html' },
        { id: 'css-minifier', name: 'CSS Minifier', description: 'Minify CSS code to reduce file size', icon: 'fas fa-compress-alt', url: 'tools/css-minifier.html' },
        { id: 'javascript-minifier', name: 'JavaScript Minifier', description: 'Minify JavaScript code for production', icon: 'fab fa-js-square', url: 'tools/javascript-minifier.html' },
        { id: 'sql-formatter', name: 'SQL Formatter', description: 'Format and beautify SQL queries', icon: 'fas fa-database', url: 'tools/sql-formatter.html' },
        { id: 'htaccess-redirect-generator', name: 'HTACCESS Redirect Generator', description: 'Generate .htaccess redirect rules', icon: 'fas fa-route', url: 'tools/htaccess-redirect-generator.html' },
        { id: 'markdown-to-html', name: 'Markdown to HTML Converter', description: 'Convert Markdown to HTML format', icon: 'fas fa-file-code', url: 'tools/markdown-to-html.html' },
        { id: 'color-code-picker', name: 'Color Code Picker', description: 'Pick and convert color codes (HEX, RGB, HSL)', icon: 'fas fa-palette', url: 'tools/color-code-picker.html' },
        { id: 'base64-encoder-decoder', name: 'Base64 Encoder & Decoder', description: 'Encode and decode Base64 strings', icon: 'fas fa-key', url: 'tools/base64-encoder-decoder.html' },
        { id: 'ip-address-lookup', name: 'IP Address Lookup', description: 'Lookup IP address information and location', icon: 'fas fa-map-marker-alt', url: 'tools/ip-address-lookup.html' }
    ],
    'math-tools': [
        { id: 'percentage-calculator', name: 'Percentage Calculator', description: 'Calculate percentages, discounts, and markups', icon: 'fas fa-percentage', url: 'tools/percentage-calculator.html' },
        { id: 'age-calculator', name: 'Age Calculator', description: 'Calculate age from birth date to current date', icon: 'fas fa-birthday-cake', url: 'tools/age-calculator.html' },
        { id: 'bmi-calculator', name: 'BMI Calculator', description: 'Calculate Body Mass Index (BMI)', icon: 'fas fa-weight', url: 'tools/bmi-calculator.html' },
        { id: 'loan-emi-calculator', name: 'Loan EMI Calculator', description: 'Calculate loan EMI and interest payments', icon: 'fas fa-calculator', url: 'tools/loan-emi-calculator.html' },
        { id: 'scientific-calculator', name: 'Scientific Calculator', description: 'Advanced scientific calculator with functions', icon: 'fas fa-square-root-alt', url: 'tools/scientific-calculator.html' },
        { id: 'discount-calculator', name: 'Discount Calculator', description: 'Calculate discounts and final prices', icon: 'fas fa-tags', url: 'tools/discount-calculator.html' },
        { id: 'currency-converter', name: 'Currency Converter', description: 'Convert between different currencies', icon: 'fas fa-money-bill-wave', url: 'tools/currency-converter.html' },
        { id: 'time-zone-converter', name: 'Time Zone Converter', description: 'Convert time between different time zones', icon: 'fas fa-clock', url: 'tools/time-zone-converter.html' },
        { id: 'binary-to-decimal', name: 'Binary to Decimal Converter', description: 'Convert between binary and decimal numbers', icon: 'fas fa-exchange-alt', url: 'tools/binary-to-decimal.html' },
        { id: 'tip-calculator', name: 'Tip Calculator', description: 'Calculate tips and split bills', icon: 'fas fa-receipt', url: 'tools/tip-calculator.html' }
    ],
    'unit-tools': [
        { id: 'unit-converter', name: 'Unit Converter', description: 'Convert between different units of measurement', icon: 'fas fa-ruler-combined', url: 'tools/unit-converter.html' },
        { id: 'temperature-converter', name: 'Temperature Converter', description: 'Convert between temperature scales', icon: 'fas fa-thermometer-half', url: 'tools/temperature-converter.html' },
        { id: 'length-converter', name: 'Length Converter', description: 'Convert between different length units', icon: 'fas fa-ruler', url: 'tools/length-converter.html' },
        { id: 'weight-converter', name: 'Weight Converter', description: 'Convert between different weight units', icon: 'fas fa-weight-hanging', url: 'tools/weight-converter.html' },
        { id: 'speed-converter', name: 'Speed Converter', description: 'Convert between different speed units', icon: 'fas fa-tachometer-alt', url: 'tools/speed-converter.html' },
        { id: 'volume-converter', name: 'Volume Converter', description: 'Convert between different volume units', icon: 'fas fa-cube', url: 'tools/volume-converter.html' },
        { id: 'data-storage-converter', name: 'Data Storage Converter', description: 'Convert between data storage units', icon: 'fas fa-hdd', url: 'tools/data-storage-converter.html' },
        { id: 'energy-converter', name: 'Energy Converter', description: 'Convert between energy units', icon: 'fas fa-bolt', url: 'tools/energy-converter.html' },
        { id: 'pressure-converter', name: 'Pressure Converter', description: 'Convert between pressure units', icon: 'fas fa-compress-arrows-alt', url: 'tools/pressure-converter.html' },
        { id: 'fuel-efficiency-converter', name: 'Fuel Efficiency Converter', description: 'Convert fuel efficiency units', icon: 'fas fa-gas-pump', url: 'tools/fuel-efficiency-converter.html' },
        { id: 'angle-converter', name: 'Angle Converter', description: 'Convert between angle units', icon: 'fas fa-compass', url: 'tools/angle-converter.html' },
        { id: 'area-converter', name: 'Area Converter', description: 'Convert between different area units', icon: 'fas fa-vector-square', url: 'tools/area-converter.html' },
        { id: 'time-converter', name: 'Time Converter', description: 'Convert between different time units', icon: 'fas fa-clock', url: 'tools/time-converter.html' },
        { id: 'date-calculator', name: 'Date Calculator', description: 'Calculate date differences and perform date operations', icon: 'fas fa-calendar-alt', url: 'tools/date-calculator.html' }
    ],
    'security-tools': [
        { id: 'password-generator', name: 'Password Generator', description: 'Generate strong random passwords', icon: 'fas fa-key', url: 'tools/password-generator.html' },
        { id: 'hash-generator', name: 'Hash Generator', description: 'Generate MD5, SHA1, SHA256, and other hashes', icon: 'fas fa-hashtag', url: 'tools/hash-generator.html' },
        { id: 'md5-hash-generator', name: 'MD5 Hash Generator', description: 'Generate MD5 hash for text or files', icon: 'fas fa-hashtag', url: 'tools/md5-hash-generator.html' },
        { id: 'sha256-hash-generator', name: 'SHA256 Hash Generator', description: 'Generate SHA256 hash for security', icon: 'fas fa-shield-alt', url: 'tools/sha256-hash-generator.html' },
        { id: 'random-string-generator', name: 'Random String Generator', description: 'Generate random strings for various purposes', icon: 'fas fa-random', url: 'tools/random-string-generator.html' },
        { id: 'url-shortener', name: 'URL Shortener', description: 'Shorten long URLs to manageable links', icon: 'fas fa-cut', url: 'tools/url-shortener.html' },
        { id: 'ip-geolocation-finder', name: 'IP Geolocation Finder', description: 'Find location information from IP address', icon: 'fas fa-map-marker-alt', url: 'tools/ip-geolocation-finder.html' },
        { id: 'ssl-certificate-checker', name: 'SSL Certificate Checker', description: 'Check SSL certificate validity', icon: 'fas fa-lock', url: 'tools/ssl-certificate-checker.html' },
        { id: 'whois-lookup', name: 'Whois Lookup', description: 'Lookup domain registration information', icon: 'fas fa-search', url: 'tools/whois-lookup.html' },
        { id: 'http-headers-checker', name: 'HTTP Headers Checker', description: 'Check HTTP headers of websites', icon: 'fas fa-list', url: 'tools/http-headers-checker.html' },
        { id: 'privacy-policy-generator', name: 'Privacy Policy Generator', description: 'Generate privacy policy for websites', icon: 'fas fa-file-contract', url: 'tools/privacy-policy-generator.html' }
    ],
    'social-tools': [
        { id: 'youtube-thumbnail-downloader', name: 'YouTube Thumbnail Downloader', description: 'Download YouTube video thumbnails', icon: 'fab fa-youtube', url: 'tools/youtube-thumbnail-downloader.html' },
        { id: 'instagram-photo-downloader', name: 'Instagram Photo Downloader', description: 'Download Instagram photos and stories', icon: 'fab fa-instagram', url: 'tools/instagram-photo-downloader.html' },
        { id: 'twitter-video-downloader', name: 'Twitter Video Downloader', description: 'Download videos from Twitter', icon: 'fab fa-twitter', url: 'tools/twitter-video-downloader.html' },
        { id: 'facebook-video-downloader', name: 'Facebook Video Downloader', description: 'Download videos from Facebook', icon: 'fab fa-facebook', url: 'tools/facebook-video-downloader.html' },
        { id: 'tiktok-video-downloader', name: 'TikTok Video Downloader', description: 'Download TikTok videos without watermark', icon: 'fab fa-tiktok', url: 'tools/tiktok-video-downloader.html' },
        { id: 'youtube-tags-extractor', name: 'YouTube Tags Extractor', description: 'Extract tags from YouTube videos', icon: 'fas fa-tags', url: 'tools/youtube-tags-extractor.html' },
        { id: 'hashtag-generator', name: 'Hashtag Generator', description: 'Generate relevant hashtags for social media', icon: 'fas fa-hashtag', url: 'tools/hashtag-generator.html' },
        { id: 'social-media-post-generator', name: 'Social Media Post Generator', description: 'Generate engaging social media posts', icon: 'fas fa-edit', url: 'tools/social-media-post-generator.html' },
        { id: 'emoji-keyboard', name: 'Emoji Keyboard', description: 'Copy and paste emojis easily', icon: 'far fa-smile', url: 'tools/emoji-keyboard.html' },
        { id: 'twitter-character-counter', name: 'Twitter Character Counter', description: 'Count characters for Twitter posts', icon: 'fas fa-text-width', url: 'tools/twitter-character-counter.html' }
    ],
    'financial-tools': [
        { id: 'percentage-calculator', name: 'Percentage Calculator', description: 'Calculate percentages, discounts, markups, and more', icon: 'fas fa-percentage', url: 'tools/percentage-calculator.html' },
        { id: 'discount-calculator', name: 'Discount Calculator', description: 'Calculate final price and savings with discounts', icon: 'fas fa-tags', url: 'tools/discount-calculator.html' },
        { id: 'markup-calculator', name: 'Markup Calculator', description: 'Calculate markup, selling price, and profit margin', icon: 'fas fa-chart-line', url: 'tools/markup-calculator.html' },
        { id: 'compound-interest-calculator', name: 'Compound Interest Calculator', description: 'Calculate future value of investments with compound interest', icon: 'fas fa-chart-area', url: 'tools/compound-interest-calculator.html' },
        { id: 'loan-calculator', name: 'Loan Calculator', description: 'Calculate loan payments, interest, and amortization schedules', icon: 'fas fa-calculator', url: 'tools/loan-calculator.html' },
        { id: 'retirement-calculator', name: 'Retirement Calculator', description: 'Plan retirement savings, income, and withdrawal strategies', icon: 'fas fa-piggy-bank', url: 'tools/retirement-calculator.html' },
        { id: 'mortgage-calculator', name: 'Mortgage Calculator', description: 'Calculate mortgage payments, affordability, and refinancing', icon: 'fas fa-home', url: 'tools/mortgage-calculator.html' }
    ],
    'misc-tools': [
        { id: 'misc-barcode-generator', name: 'Barcode Generator', description: 'Generate barcodes in various formats', icon: 'fas fa-barcode', url: 'tools/barcode-generator.html' },
        { id: 'misc-password-checker', name: 'Password Strength Checker', description: 'Analyze password security and get improvement suggestions', icon: 'fas fa-shield-alt', url: 'tools/password-strength-checker.html' },
        { id: 'misc-color-palette', name: 'Color Palette Generator', description: 'Generate beautiful color palettes for designs', icon: 'fas fa-palette', url: 'tools/color-palette-generator.html' },
        { id: 'misc-meme-generator', name: 'Meme Generator', description: 'Create memes with custom text and images', icon: 'fas fa-laugh-squint', url: 'tools/meme-generator.html' },
        { id: 'misc-resume-builder', name: 'Resume Builder', description: 'Create professional resumes online', icon: 'fas fa-file-alt', url: 'tools/resume-builder.html' },
        { id: 'misc-url-encoder', name: 'URL Encoder/Decoder', description: 'Encode and decode URLs and special characters', icon: 'fas fa-link', url: 'tools/url-encoder.html' },
        { id: 'misc-base64-converter', name: 'Base64 Converter', description: 'Convert text to and from Base64 encoding', icon: 'fas fa-exchange-alt', url: 'tools/base64-converter.html' },
        { id: 'text-analyzer', name: 'Text Analyzer', description: 'Analyze text with detailed statistics and metrics', icon: 'fas fa-chart-bar', url: 'tools/text-analyzer.html' },
        { id: 'business-name-generator', name: 'Business Name Generator', description: 'Generate creative business names based on keywords and industry', icon: 'fas fa-building', url: 'tools/business-name-generator.html' },
        { id: 'invoice-generator', name: 'Invoice Generator', description: 'Generate professional invoices', icon: 'fas fa-receipt', url: 'tools/invoice-generator.html' },
        { id: 'lottery-number-generator', name: 'Lottery Number Generator', description: 'Generate random lottery numbers for various games', icon: 'fas fa-ticket-alt', url: 'tools/lottery-number-generator.html' },
        { id: 'flip-coin-simulator', name: 'Flip a Coin Simulator', description: 'Simulate coin flips for decision making with statistics', icon: 'fas fa-circle', url: 'tools/flip-coin-simulator.html' },
        { id: 'dice-roller-simulator', name: 'Dice Roller Simulator', description: 'Roll virtual dice for games and simulations', icon: 'fas fa-dice-d6', url: 'tools/dice-roller-simulator.html' },
        { id: 'random-number-generator', name: 'Random Number Generator', description: 'Generate random numbers within a range', icon: 'fas fa-dice', url: 'tools/random-number-generator.html' },
        { id: 'internet-speed-test', name: 'Internet Speed Test', description: 'Test your internet connection speed', icon: 'fas fa-tachometer-alt', url: 'tools/internet-speed-test.html' },
        { id: 'daily-planner-creator', name: 'Daily Planner Creator', description: 'Create organized daily schedules and planners', icon: 'fas fa-calendar-day', url: 'tools/daily-planner-creator.html' },
        { id: 'wedding-invitation-generator', name: 'Wedding Invitation Generator', description: 'Create beautiful wedding invitations online', icon: 'fas fa-heart', url: 'tools/wedding-invitation-generator.html' },

        { id: 'story-plot-generator', name: 'Story Plot Generator', description: 'Generate creative story plots and ideas', icon: 'fas fa-book-open', url: 'tools/story-plot-generator.html' },
        { id: 'ebook-creator', name: 'E-book Creator', description: 'Create and format e-books online', icon: 'fas fa-book', url: 'tools/ebook-creator.html' },
        { id: 'ai-chatbot-demo', name: 'AI Chatbot Demo', description: 'Interactive AI chatbot demonstration', icon: 'fas fa-robot', url: 'tools/ai-chatbot-demo.html' },
        { id: 'ip-address-tracker', name: 'IP Address Tracker', description: 'Track and analyze IP addresses', icon: 'fas fa-map-marker-alt', url: 'tools/ip-address-tracker.html' },
        { id: 'fake-address-generator', name: 'Fake Address Generator', description: 'Generate fake addresses for testing', icon: 'fas fa-home', url: 'tools/fake-address-generator.html' },
        { id: 'electric-bills-calculator', name: 'Calculator for Electric Bills', description: 'Calculate electricity consumption and bills', icon: 'fas fa-bolt', url: 'tools/electric-bills-calculator.html' },
        { id: 'leap-year-checker', name: 'Leap Year Checker', description: 'Check if a year is a leap year', icon: 'fas fa-calendar-check', url: 'tools/leap-year-checker.html' },
    ]
};

// Load header and footer
async function loadHeader() {
    try {
        const response = await fetch('components/header.html');
        const headerHtml = await response.text();
        document.getElementById('header-placeholder').innerHTML = headerHtml;
    } catch (error) {
        console.error('Error loading header:', error);
        // Fallback header
        document.getElementById('header-placeholder').innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <a class="navbar-brand" href="index.html">Multi-Tools</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="index.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        `;
    }
}

async function loadFooter() {
    try {
        const response = await fetch('components/footer.html');
        const footerHtml = await response.text();
        document.getElementById('footer-placeholder').innerHTML = footerHtml;
    } catch (error) {
        console.error('Error loading footer:', error);
        // Fallback footer
        document.getElementById('footer-placeholder').innerHTML = `
            <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <h5>Multi-Tools Website</h5>
                            <p>Free online tools for developers, designers, and professionals.</p>
                        </div>
                        <div class="col-md-6 text-md-end">
                            <p>&copy; 2024 Multi-Tools. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}

// Render tools by category
function renderTools() {
    Object.keys(toolsData).forEach(category => {
        const container = document.getElementById(category);
        if (container) {
            container.textContent = '';
            const fragment = document.createDocumentFragment();
            toolsData[category].forEach(tool => {
                const col = document.createElement('div');
                col.className = 'col-lg-4 col-md-6 mb-4';
                const card = document.createElement('div');
                card.className = 'card tool-card h-100';
                const cardBody = document.createElement('div');
                cardBody.className = 'card-body';
                const header = document.createElement('div');
                header.className = 'd-flex align-items-center mb-3';
                const icon = document.createElement('i');
                icon.className = `${tool.icon} fa-2x text-primary me-3`;
                const title = document.createElement('h5');
                title.className = 'card-title mb-0';
                title.textContent = tool.name;
                header.append(icon, title);
                const description = document.createElement('p');
                description.className = 'card-text';
                description.textContent = tool.description;
                const button = document.createElement('a');
                button.href = tool.url;
                button.className = 'btn btn-primary';
                button.textContent = 'Use Tool';
                cardBody.append(header, description, button);
                card.appendChild(cardBody);
                col.appendChild(card);
                fragment.appendChild(col);
            });
            container.appendChild(fragment);
        }
    });
}
// Search functionality
function initializeSearch() {
    const searchBox = document.getElementById('searchBox');
    const searchResults = document.getElementById('searchResults');
    const resultsContainer = document.getElementById('resultsContainer');
    const noResults = document.getElementById('noResults');
    
    if (searchBox) {
        searchBox.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();
            
            if (searchTerm === '') {
                // Hide search results when search is empty
                searchResults.classList.add('d-none');
                // Show all tools in their original categories
                Object.keys(toolsData).forEach(category => {
                    renderTools(category, toolsData[category]);
                });
                return;
            }

            // Show search results container
            searchResults.classList.remove('d-none');
            
            // Search across all categories
            let matchFound = false;
            let resultsHtml = '';

            Object.keys(toolsData).forEach(category => {
                const tools = toolsData[category];
                const matches = tools.filter(tool => 
                    tool.name.toLowerCase().includes(searchTerm) || 
                    tool.description.toLowerCase().includes(searchTerm)
                );

                if (matches.length > 0) {
                    matchFound = true;
                    resultsHtml += `
                        <div class="category-results mb-4">
                            <h6 class="text-primary">${category.replace('-', ' ').toUpperCase()}</h6>
                            <div class="row g-3">
                                ${matches.map(tool => `
                                    <div class="col-md-6">
                                        <div class="tool-card card h-100">
                                            <div class="card-body">
                                                <div class="d-flex align-items-center mb-2">
                                                    <i class="${tool.icon} text-primary me-2"></i>
                                                    <h6 class="card-title mb-0">${tool.name}</h6>
                                                </div>
                                                <p class="card-text small">${tool.description}</p>
                                                <a href="${tool.url}" class="btn btn-sm btn-primary">Use Tool</a>
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `;
                }
            });

            // Update results
            if (matchFound) {
                resultsContainer.innerHTML = resultsHtml;
                noResults.classList.add('d-none');
            } else {
                resultsContainer.innerHTML = '';
                noResults.classList.remove('d-none');
            }
        });
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadFooter();
    renderTools();
    initializeSearch();
    // Setup theme toggle after header loads
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        const observer = new MutationObserver(() => {
            setupThemeToggle();
        });
        observer.observe(headerPlaceholder, { childList: true, subtree: true });
    } else {
        setupThemeToggle();
    }
});

// Utility functions for tool pages
window.MultiTools = {
    // Show result in a formatted container
    showResult: function(result, containerId) {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = `
                <div class="result-container">
                    <h5><i class="fas fa-check-circle text-success"></i> Result</h5>
                    <div class="mt-3">
                        ${result}
                    </div>
                </div>
            `;
        }
    },
    
    // Show error message
    showError: function(message, containerId) {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = `
                <div class="alert alert-danger">
                    <i class="fas fa-exclamation-triangle"></i> ${message}
                </div>
            `;
        }
    },
    
    // Copy text to clipboard
    copyToClipboard: function(text) {
        navigator.clipboard.writeText(text).then(() => {
            // Show success message
            const toast = document.createElement('div');
            toast.className = 'alert alert-success position-fixed';
            toast.style.cssText = 'top: 20px; right: 20px; z-index: 9999;';
            toast.innerHTML = '<i class="fas fa-check"></i> Copied to clipboard!';
            document.body.appendChild(toast);
            
            setTimeout(() => {
                toast.remove();
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    },
    
    // Download file
    downloadFile: function(content, filename, mimeType = 'text/plain') {
        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    },
    
    // Format file size
    formatFileSize: function(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
};
function getRelativePathToComponents() {
  const currentPath = window.location.pathname;
  const depth = currentPath.split('/').length - 2; // -2 to ignore leading and filename
  let prefix = '';
  for (let i = 0; i < depth; i++) {
    prefix += '../';
  }
  return prefix + 'components/';
}

// Setup relative paths for components
function setupRelativePaths() {
    const basePath = getRelativePathToComponents();
    window.componentsPath = basePath; // Store for later use if needed
}
function updateThemeIcon(iconElement, theme) {
    if (theme === 'dark') {
        iconElement.classList.remove('fa-sun');
        iconElement.classList.add('fa-moon');
    } else {
        iconElement.classList.remove('fa-moon');
        iconElement.classList.add('fa-sun');
    }
}
