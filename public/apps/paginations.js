
    const paginations = {

        links: () =>  d.querySelectorAll('[page]'),
        sections: () => d.querySelectorAll('section'),

        removeActive: () => {
            const elements = paginations.links();
            elements.forEach((e) => {
                if (e.classList.contains('active'))
                    e.classList.remove('active');
            })

            paginations.sections().forEach((e) => {
                e.classList.add('hide');
            })


        },


        load: (page) => {
            history.pushState({}, "", `/?page=${page}`);
            paginations.removeActive();
            d.querySelectorAll(`[page="${page}"]`).forEach((e) => {
                e.classList.add('active');
            })
            d.querySelector(`section.${page}`).classList.remove('hide');

        },

        
        init: () => {

            const elements = paginations.links()
            elements.forEach(e => {
                e.addEventListener('click', () => paginations.load(e.getAttribute('page')))
            });

            const params = new URLSearchParams(window.location.search);
            if (params.get('page'))
                return paginations.load(params.get('page'))

            paginations.load("committers")   

        }

    }
