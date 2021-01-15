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
        asideBox: [
            {
                icon: 'fas fa-images',
                text: "Demos",
            },
            {
                icon: "fas fa-shopping-cart",
                text: "Buy Now",
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
        criticsBottomRight: [
            {
                title: 'Best Author Of His Generation',
                subtitle: 'This book will change your perspective on life',
                text: 'Donec fringilla nunc eu turpis dignissim, at euismod sapien tincidunt, Maecenas eleifend congue cursus. In vitae enim quis sem pharetra. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget malesuada. Vivamus scuscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut liber. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec rutrum congue leo eget malesuada.',
                author: 'Justine Kilpatrick, ',
                journalName: 'The New York Times',
                journalIcon: 'nytimes-logo',
                class: 'big_card'
            },
        ],
        criticsBottomLeft: [
            {
                title: 'A True Masterpiece, Bravo!',
                text: 'Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feug at.',
                author: 'Gerald Hendley, ',
                journalName: 'The Guardian',
                journalIcon: 'theguardian-logo',
                class: 'little_card'
            },
            {
                title: 'A Unique View On The World',
                text: 'Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet.',
                author: 'Mary Maxey, ',
                journalName: 'The Globe And Mail',
                journalIcon: 'globe-logo',
                class: 'little_card'
            }
        ],
        footerAbout: [
            {
                text: 
                'Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat.',
            },
        ],
        footerLinks: [
            {
                text: 'Latest Books',
                url: '',
            },
            {
                text: 'Upcoming Events',
                url: '',
            },
            {
                text: 'Recent Articles',
                url: '',
            },
            {
                text: 'Business Enquiries',
                url: '',
            },
            {
                text: 'Visit My Foundation',
                url: '',
            },
        ],
        footerContact: [
            {
                text: '63 E. Studebaker Street Bolingbrook, IL 60440',
            },
            {
                text: 'Phone: (800) 000-0000',
            },
            {
                text: 'Mobile: (800) 000-0000',
            },
            {
                text: 'Email:',
                email: 'info@your-company.com',
            },
        ],
        social: [
            {
                social: "fa-facebook-f",
                prefix: "fab ",
            },
            {
                social: "fa-twitter",
                prefix: "fab ",
            },
            {
                social: "fa-instagram",
                prefix: "fab ",
            },
            {
                social: "fa-linkedin-in",
                prefix: "fab ",
            },
            {
                social: "fa-youtube",
                prefix: "fab ",
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

