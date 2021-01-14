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
        criticsTopData: [
            {
                text: 'What The Critics Say',
                class: 'critics_title',
            },
            {
                text: 'TESTIMONIALS FROM AROUND THE WORLD',
                class: 'critics_subtitle',
            },
            {   
                btn: [
                    {
                        text: 'Read All Testimonials',
                        class: 'critics_btn',
                    },
                ]
                
            },
        ],
        criticsBottomDataMainCard: [
            {
                text: 'Best Author Of His Generation',
                class: 'critics_main_card_title',
            },
            {
                class: 'divisor',
            },
            {
                text: 'This book will change your perspective on life',
                class: 'critics_main_card_subtitle',
            },
            {
                text: 'Donec fringilla nunc eu turpis dignissim, at euismod sapien tincidunt, Maecenas eleifend congue cursus. In vitae enim quis sem pharetra. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.',
                class: 'critics_main_card_content',
            },
            {
                text: 'Donec rutrum congue leo eget malesuada. Vivamus scuscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut liber. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec rutrum congue leo eget malesuada.',
                class: 'critics_main_card_content',
            },
            {   
                author: [
                    {   
                        logo: 'nytimes-logo',
                        name: 'Justine Kilpatrick,',
                        class: 'critics_author',
                        company: [
                            {
                                text: ' The New York Times',
                                class: 'critics_company',
                            },
                        ], 
                        
                    }
                ]
            },
        ],
        criticsBottomDataCard: [
            {
                text: 'What The Critics Say',
                class: 'critics_title',
            },
            {
                text: 'TESTIMONIALS FROM AROUND THE WORLD',
                class: 'critics_subtitle',
            },
            {
                text: 'TESTIMONIALS FROM AROUND THE WORLD',
                class: 'critics_btn',
            },
        ],
    },
    methods: {
        clickContact: function (index) {
            //mi creao la funzione per quando clicco su un link della navbar e gestistco l'active
            this.selectedIndex = index;
        },
    },
})

