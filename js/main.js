var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        sliderData: [
            {
                authorName: 'Damon Vaughn',
                review: 'Best-selling author and the most influential public intellectual in the western world right now.',
                reviewAuthor: '- The new York Times',
            }
        ] ,
        navbarData: [
            {
                home: 'Home',
                about: 'About Me',
                testmonials: 'Testimonials',
                blog: 'My Blog',
                meet: 'Meetups',
                shop: 'Shop',
                contact: 'Contact me',
                logo: 'logo.png',
            },
        ],
    },
    methods: {

    },
})

