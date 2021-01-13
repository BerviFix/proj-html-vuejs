var app = new Vue({
    el: '#app',
    data: {
        selectedIndex: 0,
        webSiteLogo: 'logo.png',
        appScreen: 'audible-app.png',
        navbarData: [
            { 
                text: 'Home',
                url: '',
            },
            { 
                text: 'About Me',
                url: '',
            },
            {
                text: 'Testimonials',
                url: '',
            },
            {
                text: 'My Blog',
                url: '',
            },
            {
                text: 'Meetups',
                url: '',
            },
            {
                text: 'Shop',
                url: '',
            },
            {
                text: 'Contact me',
                url: '',
            },
        ],
        sliderData: [
            {
                authorName: 'Damon Vaughn',
                review: 'Best-selling author and the most influential public intellectual in the western world right now.',
                reviewAuthor: '- The new York Times',
            }
        ] ,
        buyBookData: [
            {
                sectionTitle: 'Latest Book Release',
                bookTitle: 'D. VAUGHN AUTOBIOGRAPHY',
                bookDescription: 'Vestibulum tristique turpis in ipsum egestas lobortis. Duis maximus bibendum volutpat. Lorem ipsum dolor sit amet.',
                ebookImg: 'book-widget.png',
                firstSeller: 'Buy On Amazon',
                secondSeller: 'Buy On AppStore',
            }
        ],
        aboutData: [
            {
                sectionTitle: 'More About Damon Vaughn',
                aboutContent: 'Damon Vaughn is a professor of psychology at the University of Toronto, a clinical psychologist and the author of the multi-million copy bestseller “The story of my life.',
                buttonContent: 'Meet The Author',
            }
        ],
        platformData: [
            {
                name: 'ebay',
            },
            {
                name: 'audible',
            },
            {
                name: 'barnes',
            },
            {
                name: 'kindle-fire',
            },
        ],
        audioBookData: [
                {
                    text: 'New Audiobook',
                    class: 'audio_title',
                },
                {
                    text: 'NO TIME TO READ? NO PROBLEM. LISTEN TO IT',
                    class: 'audio_subtitle',
                },
                {
                    text: 'Donec fringilla nunc eu turpis dignissim, at euismod sapien tincidunt. Maecenas eleifend congue cursus.',
                    class: 'audio_content',
                },
                {   
                    logo: [
                        {
                            name: 'audible',
                        },
                        {
                            name: 'barnes',
                        },
                        {
                            name: 'kindle-fire',
                        },
                    ],
                }
        ],
    },
    methods: {
        clickContact: function (index) {
            //mi creao la funzione per quando clicco su un link della navbar e gestistco l'active
            this.selectedIndex = index;
        },
    },
})

