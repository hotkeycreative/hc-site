import discovery from '../media/labor.png';
import design from '../media/design.png';
import construction from '../media/wooden-house.png';
import inspection from '../media/inspection.png';
import finishing from '../media/paint-roller.png';
import support from '../media/video-conference.png';

import { faWordpress, faShopify, faWix, faJs, faSass, faReact, faNodeJs, faBootstrap, faPython, faCss3Alt, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faBookBookmark, faBookOpenReader, faLaptopCode, faAnchor, faLeaf, faPeopleRoof, faMagnifyingGlassChart, faMagnifyingGlassDollar, faPenNib, faServer, faGlobe, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

import sacredsouls from '../media/ssslogo.png';
import bio365 from '../media/bio365.webp';

export const process = [
    {
        title: (
            <h3>01.<br />DISCOVERY</h3>
        ),
        content: (
            <p><span className='accent-two'>I learn about you</span> — your business or idea, your goals, and your vision for the project. You'll also learn about me, my process, and what you can expect if you choose to work with me. If things are looking promising, we'll dive into the specifics of pricing and draw up a preliminary timeline.</p>
        ),
        image: discovery,
        imageAlt: 'A design icon featuring a contract document and two hands shaking in agreement.'
    },
    {
        title: (
            <h3>02.<br />DESIGN</h3>
        ),
        content: (
            <p><span className='accent-two'>I design the bones</span> of the project. Also called wireframing, this allows you to visualize the expected layout of your website or app before the real work begins. Here, and at every stage in the process, you'll have the opportunity to make adjustments and provide feedback.</p>
        ),
        image: design,
        imageAlt: 'A design icon featuring a schematic document, a pencil, and a protractor.'
    },
    {
        title: (
            <h3>03.<br />CONSTRUCTION</h3>
        ),
        content: (
            <p><span className='accent-two'>I write the code</span> that brings your project from concept to reality. Using industry best practices for web and mobile development, I'll develop your website or app to be dynamic, responsive, accessible, and engaging, no matter the device or user.</p>
        ),
        image: construction,
        imageAlt: 'A design icon featuring the wooden frame of a house under construction.'
    },
    {
        title: (
            <h3>04.<br />FINISHING</h3>
        ),
        content: (
            <p><span className='accent-two'>I incorporate the content</span> — the written copy, visual style, photos, and digital assets that define your business or idea. Your brand is how you connect with customers and set yourself apart from the competition. I'll ensure your website or app is truly one of a kind.</p>
        ),
        image: finishing,
        imageAlt: 'A design icon featuring a paint roller.'
    },
    {
        title: (
            <h3>05.<br />INSPECTION</h3>
        ),
        content: (
            <p><span className='accent-two'>I take you on a walkthrough</span> of every page, button, icon, and paragraph. If anything isn't to your liking, we'll pull it down and give it another go. And if you're happy with the final product, then it's time to launch!</p>
        ),
        image: inspection,
        imageAlt: 'A design icon featuring a completed house and a checklist document.'
    },
    {
        title: (
            <h3>06.<br />SUPPORT</h3>
        ),
        content: (
            <p><span className='accent-two'>I provide the support you need</span> to move forward with confidence. Running your website on top of the daily demands of ownership can be daunting. If you'd rather focus on what matters most — growing your business — you can keep me around on a flexible, monthly basis to handle the upkeep.</p>
        ),
        image: support,
        imageAlt: 'A design icon featuring an instructor teaching via video conference.'
    },
];

export const about = [
    {
        title: 'A Developer',
        icon: faLaptopCode,
        content: "As an honors graduate of Nucamp's full-stack software engineering program, you can trust in my expertise. I focus on making clean, dynamic, and memorable websites and apps that look great and work well. It's that simple!"
    },
    {
        title: 'A Veteran',
        icon: faAnchor,
        content: "I wrote my first lines of code while serving in the Navy more than a decade ago. I'm guided by the core values of my service - honor, commitment, and integrity. That's what you can count on when you work with me."
    },
    {
        title: 'An Environmentalist',
        icon: faLeaf,
        content: "I hold a bachelor's degree in environmental science and run a non-profit education platform for biodiversity conservation. Taking care of our planet and our community has never been more important."
    },
    {
        title: 'An Ally',
        icon: faPeopleRoof,
        content: "As the father of an autistic child, I see firsthand the power of diversity to elevate a community — in business or our own backyard. I strive to make the world a more inclusive place."
    },
];

export const skills = [
    {
        title: 'JavaScript',
        icon: faJs
    },
    {
        title: 'HTML',
        icon: faHtml5
    },
    {
        title: 'CSS',
        icon: faCss3Alt
    },
    {
        title: 'React',
        icon: faReact
    },
    {
        title: 'Node.js',
        icon: faNodeJs
    },
    {
        title: 'Sass',
        icon: faSass
    },
    {
        title: 'Bootstrap',
        icon: faBootstrap
    },
    {
        title: 'SQL',
        icon: faDatabase
    },
    {
        title: 'MongoDB',
        icon: faDatabase
    },
    {
        title: 'Wordpress',
        icon: faWordpress
    },
    {
        title: 'Shopify',
        icon: faShopify
    },
    {
        title: 'Wix',
        icon: faWix
    },
    {
        title: 'Python',
        icon: faPython
    },
];

export const services = [
    {
        name: (<span>01.<br />CMS WEBSITES</span>),
        tech: [
            {
                title: 'WP',
                icon: faWordpress
            },
            {
                title: 'Shopify',
                icon: faShopify
            },
            {
                title: 'Wix',
                icon: faWix
            }
        ],
        products: 'Landing Pages, Small Businesses, Blogs, eCommerce',
        description: (
            <p className='service-description'>A professional website custom-tailored to meet your needs. Content management systems are a great approach if you need to <span className='accent'>get up and running quickly</span>, at a lower up-front cost, and without the need for a lot of technical expertise.</p>
        ),
        price: 'Starting at $300',
        pros: ['Lower initial cost', 'Faster development', 'Ease of use'],
        cons: ['Higher monthly cost', 'Limited customization',  'Platform dependency']
    },
    {
        name: (<span>02.<br />CUSTOM CODE</span>),
        tech: [
            {
                title: 'JavaScript',
                icon: faJs
            },
            {
                title: 'React',
                icon: faReact
            },
            {
                title: 'Node.js',
                icon: faNodeJs
            },
            {
                title: 'Data',
                icon: faDatabase
            },
            {
                title: 'Sass',
                icon: faSass
            },
            {
                title: 'Bootstrap',
                icon: faBootstrap
            }
        ],
        products: 'Mobile Apps, Data-Driven Platforms, Complex Projects',
        description: (
            <p className='service-description'>The sky's the limit! <span className='accent'>Stand out from the competition</span> with a bespoke, full-stack website that's truly one of a kind. Every detail is designed from scratch to optimize performance, security, and scalability.</p>
        ),
        price: 'Free consultation',
        pros: ['Lower monthly cost', 'Full customization', 'Increased security'],
        cons: ['Higher initial cost', 'Slower development', 'Higher learning curve']
    },
    {
        name: (<span>03.<br />MANAGED HOSTING</span>),
        tech: [
            {
                title: 'Domain',
                icon: faGlobe
            },
            {
                title: 'Hosting',
                icon: faServer
            },
            {
                title: 'Upkeep',
                icon: faScrewdriverWrench
            }
        ],
        products: 'Busy small business owners and solo professionals.',
        description: (
            <p className='service-description'><span className='accent'>Experience the convenience</span> and peace of mind that come with a managed hosting solution. I'll cover the domain, hosting, and maintenance at a fixed, monthly cost while you focus on what really matters: growing your business.</p>
        ),
        price: 'Starting at $50/month'
    },
    {
        name: (<span>04.<br />BRAND DEVELOPMENT</span>),
        tech: [
            {
                title: 'SEO',
                icon: faMagnifyingGlassChart
            },
            {
                title: 'Research',
                icon: faMagnifyingGlassDollar
            },
            {
                title: 'Copy',
                icon: faPenNib
            }
        ],
        products: 'Busy small business owners and solo professionals.',
        description: (
            <p className='service-description'>Effective copy is the bridge you build between your business and your clientele. I'll help to <span className='accent'>craft a memorable brand</span> that's easy to find online and cultivates trust, credibility, and loyalty.</p>
        ),
        price: 'Free consultation'
    },
    {
        name: (<span>05.<br />AUTHOR SERVICES</span>),
        tech: [
            {
                title: 'Shopify',
                icon: faShopify
            },
            {
                title: 'Bookvault',
                icon: faBookBookmark
            },
            {
                title: 'BookFunnel',
                icon: faBookOpenReader
            }
        ],
        products: 'Self-published authors looking to increase sales and grow their following.',
        description: (
            <p className='service-description'>As a lifelong creative and freelance writer, I know the ins and outs of a self-publishing journey. From crafting your author profile and storefront to growing readership, <span className='accent'>trust that your online presence is in good hands.</span></p>
        ),
        price: 'Free consultation'
    }
];

export const projects = [
    {
        name: 'SACRED SOULS STUDIO',
        url: 'https://sacredsoulsstudios.com/',
        month: 'March',
        year: '2024',
        category: 'Small Business',
        image: sacredsouls,
        tech: [
            { name: 'Wordpress', icon: faWordpress },
            { name: 'CSS', icon: faCss3Alt },
            { name: 'JavaScript', icon: faJs },
        ],
        testimonialLong: (                        
            <blockquote>
                <p>"I cannot say enough great things about working with <span>Doug</span>! He created a website for me beyond my wildest dreams! It <span>is</span> eye-catching, informative, and, most importantly, easy to navigate. And the best part is, he continues to be <span>an asset</span> to me and my business. He even stopped by on opening day and brought me flowers. I cannot recommend him enough."</p>
                <figcaption>— Gina T., <em>Sacred Souls Studio</em></figcaption>
            </blockquote>
        ),
        testimonialShort: (
            <blockquote>
                <p>"I cannot say enough great things about working with <span>Doug</span>! He created a website that <span>is</span> eye-catching, informative, and easy to navigate, and he continues to be <span>an asset</span> to me and my business."</p>
                <figcaption>— Gina T., <em>Sacred Souls Studio</em></figcaption>
            </blockquote>
        )
    },
    {
        name: 'BIODIVERSITY365',
        url: 'https://biodiversity365.com/',
        month: 'January',
        year: '2024',
        category: 'Learning Platform',
        image: bio365,
        tech: [
            { name: 'React', icon: faReact },
            { name: 'Node.js', icon: faNodeJs },
            { name: 'Bootstrap', icon: faBootstrap },
        ],
    }
];