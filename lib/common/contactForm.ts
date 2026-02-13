interface FormOption {
    id: string,
    label: string
}


export const contactPurposes: FormOption[] = [
    {id: 'mindshift', label: 'Program Inquiry MINDSHIFT'},
    {id: 'collaboration', label: 'Collaboration Proposal'},
    {id: 'participation', label: 'Research Participation Interest'},
    {id: 'feedback', label: 'Feedback on Existing Work'},
    {id: 'other', label: 'Other'},
];
export const contactPurposeIds = contactPurposes.map(x => x.id);

export const contactDisciplines: FormOption[] = [
    {id: 'art', label: 'Art & Design'},
    {id: 'cs', label: 'Computer Science & Engineering'},
    {id: 'cognitive-sciences', label: 'Cognitive Sciences'},
    {id: 'business', label: 'Business & Organizational'},
    {id: 'humanities-philosophy', label: 'Humanities & Philosophy'},
    {id: 'media', label: 'Media & Communication'},
    {id: 'social-sciences', label: 'Social Sciences'},
    {id: 'studies', label: 'Interdisciplinary Studies'},
    {id: 'other', label: 'Other'},
];
export const contactDisciplineIds = contactDisciplines.map(x => x.id);


export const contactConnections: FormOption[] = [
    {id: 'ai-professional', label: 'AI/ML Professional'},
    {id: 'researcher', label: 'Researcher'},
    {id: 'creative', label: 'Creative Practitioner'},
    {id: 'executive', label: 'Executive/Decision Maker'},
    {id: 'educator', label: 'Educator'},
    {id: 'student', label: 'Student'},
    {id: 'entrepreneur', label: 'Entrepreneur'},
    {id: 'philosophy', label: 'Philosophical Interest'},
    {id: 'personal', label: 'Personal/Exploratory Interest'},
    {id: 'other', label: 'Other'},
];
export const contactConnectionIds = contactConnections.map(x => x.id);


export const contactPersons: FormOption[] = [
    {id: 'practitioner', label: 'Practitioner'},
    {id: 'researcher', label: 'Researcher'},
    {id: 'creator', label: 'Creator'},
    {id: 'business', label: 'Business'},
    {id: 'student', label: 'Student'},
    {id: 'enthusiast', label: 'Enthusiast'},
    {id: 'other', label: 'Other'},
];
export const contactPersonIds = contactPersons.map(x => x.id);

export const contactEngagement: FormOption[] = [
    {id: 'digital', label: 'Digital communication only'},
    {id: 'workshops', label: 'Virtual meetings/workshops'},
    {id: 'in-person', label: 'In-person collaboration when possible'},
    {id: 'joining', label: 'Joining research network'},
];
export const contactEngagementIds = contactEngagement.map(x => x.id);

export const contactDiscovery: FormOption[] = [
    {id: 'social', label: 'Social Media'},
    {id: 'search', label: 'Online Search'},
    {id: 'event', label: 'Industry Conference/Event'},
    {id: 'recommendation', label: 'Recommendation'},
    {id: 'swc', label: 'SORRYWECAN Visual Projects'},
    {id: 'media', label: 'News/Media Coverage'},
    {id: 'partner', label: 'Partner Organization'},
    {id: 'collaboration', label: 'Previous Collaboration'},
    {id: 'protocols', label: 'One of our Protocols'},
    {id: 'workshop', label: 'Workshop/Presentation'},
    {id: 'other', label: 'Other'},
];
export const contactDiscoveryIds = contactDiscovery.map(x => x.id);
