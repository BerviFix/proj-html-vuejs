var app = new Vue({
    el: '#app',
    data: {
        selectedIndex: 0,
        webSiteLogo: 'logo.png',
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
    },
    methods: {
        clickContact: function (index) {
            //mi creao la funzione per quando clicco su un link della navbar e gestistco l'active
            this.selectedIndex = index;
        },
    },
})

