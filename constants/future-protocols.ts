import {ref} from "vue";

interface FutureProtocol {
    date: string
    image: string
    description: string
    downloadLink: string
    moreLink: string
}



export const futureProtocols = [
    {
        image: '/static/img/protocols/thumb/soft-engineering.jpg',
        category: 'Toolkit',
        date: 'November 2025',
        title: 'THE MINDSHIFT ISSUE',
        description: 'This edition brings together the core methodology we’ve been developing inside our six-month Mindshift program: how we think about change, adaptability, and the cognitive mechanics behind flexibility',
        downloadLink: '/static/pdf/Mindshift-Issue.pdf',
        moreLink: null,
    },
    {
        image: '/static/img/protocols/thumb/protocol3.jpg',
        category: 'Toolkit',
        date: 'October 2025',
        title: 'The End of Art — or Art Without End?',
        description: 'When machines can effortlessly generate what we once called art, what remains for the human imagination? This edition explores how authorship, art and meaning evolve in an era of shared creativity between humans and AI.',
        downloadLink: '/static/pdf/end-of-art-or-art-without-end.pdf',
        moreLink: null,
    },
    {
        image: '/static/img/protocols/thumb/protocol2.jpg',
        category: 'Toolkit',
        date: 'September 2025',
        title: 'The Coming Age of Wisdom Work',
        description: 'As AI takes over execution, human work becomes about awareness, intuition, and presence. This edition redefines productivity through emotional intelligence, flow, and depth.',
        downloadLink: '/static/pdf/the-coming-age-of-wisdom-work.pdf',
        moreLink: null,
    },
    {
        image: '/static/img/protocols/thumb/protocol1.jpg',
        category: 'Toolkit',
        date: 'August 2025',
        title: 'AI as a New Entity',
        description: 'Developed in parallel with EXHIBIZZ, this first edition explored AI not as a tool, but as an emerging form of intelligence — evolving its own logic and ecology.',
        downloadLink: '/static/pdf/Toolkit.pdf',
        moreLink: null,
    },
]
