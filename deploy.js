// deploy.js - Auto-sync and UI fix for GreyzzzzWolf Tilda integration
(function() {
    console.log('GreyzzzzWolf UI Sync: Applying CSS fixes...');

    // Function to ensure mobile responsiveness
    function fixCasesResponsiveness() {
        const style = document.createElement('style');
        style.innerHTML = `
            /* Fix for cases layout */
            .gzw-cases-section {
                width: 100% !important;
                padding-left: 15px !important;
                padding-right: 15px !important;
                box-sizing: border-box !important;
            }
            
            /* Ensure responsive grid */
            .gzw-cases-carousel-wrapper {
                width: 100% !important;
                max-width: 1000px !important;
                margin: 0 auto !important;
            }

            @media (max-width: 768px) {
                .gzw-case-card-grid {
                    grid-template-columns: 1fr !important;
                    gap: 15px !important;
                }
                .gzw-cmetrics-grid {
                    grid-template-columns: 1fr 1fr !important;
                }
                .gzw-cases-stats-ribbon {
                    grid-template-columns: 1fr 1fr !important;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Apply fixes
    if (document.readyState === 'complete') {
        fixCasesResponsiveness();
    } else {
        window.addEventListener('load', fixCasesResponsiveness);
    }
    
    console.log('GreyzzzzWolf UI Sync: Applied.');
})();
