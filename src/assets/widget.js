(() => {
        const root = document.getElementById('ica-flow-preview');
        const descriptionMeta = document.querySelector('meta[name="description"]');
        const viewMeta = {
            home: {
                title: 'Ideal Client Alliance | Practical AI Training & Tool Lab',
                description: 'Practical AI training, community support, and the ICA Tool Lab to help you build an online business with clarity.'
            },
            method: {
                title: 'What Is Ideal Client Alliance? | Practical AI Support',
                description: 'Learn how Ideal Client Alliance combines practical AI training, community support, and clear next steps for online business.'
            },
            training: {
                title: 'Free ChatGPT Voice Training | Ideal Client Alliance',
                description: 'Learn how to use ChatGPT Voice as a thinking partner for clearer decisions and practical action.'
            },
            hub: {
                title: 'ICA Pro Hub | Community and Practical AI Support',
                description: 'Compare ICA Community and ICA Pro Blueprint for practical training, support, tools, and clearer online-business direction.'
            },
            stories: {
                title: 'ICA Member Stories | Ideal Client Alliance',
                description: 'Read real experiences from Ideal Client Alliance members building practical AI skills and online-business momentum.'
            },
            people: {
                title: 'ICA Pioneers | Ideal Client Alliance',
                description: 'Meet some of the people who helped turn Ideal Client Alliance from an idea into a supportive learning community.'
            },
            projects: {
                title: 'ICA Member Projects | Practical AI Work',
                description: 'See real projects created by Ideal Client Alliance members as they learn, build, and apply practical AI skills.'
            },
            tools: {
                title: 'ICA Tool Lab | Try the TikTok Strategist Machine',
                description: 'Try the ICA TikTok Strategist for clearer content direction, practical scripts, calls to action, and next steps.'
            },
            trustlens: {
                title: 'Trust Lens | ICA Tool Lab',
                description: 'Use ICA Trust Lens to check AI answers and identify what deserves a second look before you trust or act on it.'
            }
        };
        const applyViewMeta = (view) => {
            const meta = viewMeta[view] || viewMeta.home;
            document.title = meta.title;
            if (descriptionMeta)
                descriptionMeta.setAttribute('content', meta.description);
        };
        const buttons = root.querySelectorAll('button[data-view]:not([data-home])');
        const homeButtons = root.querySelectorAll('[data-home]');
        const pages = root.querySelectorAll('[data-page]');
        buttons.forEach((button) => button.addEventListener('click', () => {
            const view = button.dataset.view;
            pages.forEach((page) => {
                page.hidden = page.dataset.page !== view;
            });
            buttons.forEach((item) => {
                if (item.hasAttribute('data-home'))
                    return;
                const active = item.dataset.view === view;
                item.style.borderLeftColor = active ? '#ed5b2d' : 'transparent';
                item.style.background = active ? 'rgba(255,255,255,.08)' : 'transparent';
                item.style.color = active ? '#fff' : '#c5ced4';
                if (active)
                    item.setAttribute('aria-current', 'page');
                else
                    item.removeAttribute('aria-current');
            });
            if (view === 'trustlens') {
                const trustLensFrame = root.querySelector('[data-trustlens-frame]');
                if (trustLensFrame && !trustLensFrame.src)
                    trustLensFrame.src = trustLensFrame.dataset.src;
            }
            applyViewMeta(view);
        }));
        homeButtons.forEach((homeButton) => homeButton.addEventListener('click', () => {
            pages.forEach((page) => {
                page.hidden = page.dataset.page !== 'home';
            });
            buttons.forEach((item) => {
                item.style.borderLeftColor = 'transparent';
                item.style.background = 'transparent';
                item.style.color = '#c5ced4';
                item.removeAttribute('aria-current');
            });
            applyViewMeta('home');
        }));

        applyViewMeta('home');

        const strategistLaunch = root.querySelector('[data-strategist-launch]');
        const strategistOverview = root.querySelector('[data-strategist-overview]');
        const strategistEmbed = root.querySelector('[data-strategist-embed]');
        const strategistFrame = root.querySelector('[data-strategist-frame]');
        if (strategistLaunch && strategistOverview && strategistEmbed && strategistFrame) {
            strategistLaunch.addEventListener('click', () => {
                if (!strategistFrame.src)
                    strategistFrame.src = strategistFrame.dataset.src;
                strategistOverview.style.display = 'none';
                strategistEmbed.classList.add('is-open');
                strategistEmbed.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        }
    })();
