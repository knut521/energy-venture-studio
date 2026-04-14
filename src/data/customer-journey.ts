import { CustomerJourneyStage } from '@/types';

export const customerJourneyStages: CustomerJourneyStage[] = [
  {
    id: '1',
    title: 'Awareness & Consideration',
    description: 'Customer discovers energy solutions and evaluates options before purchase',
    touchpoints: [
      'EV manufacturer websites',
      'Car dealership education',
      'Online forums (Reddit, Tesla Club)',
      'Charging apps (PlugShare, ChargePoint)',
      'Social media communities'
    ],
    emotions: [
      'Anxiety about charging availability',
      'Excitement about technology',
      'Confusion about standards',
      'Concern about costs'
    ],
    behaviors: [
      'Researching charging locations',
      'Calculating total ownership costs',
      'Testing different apps',
      'Consulting current owners'
    ]
  },
  {
    id: '2',
    title: 'Acquisition & Setup',
    description: 'Customer establishes reliable charging routine and understands ecosystem',
    touchpoints: [
      'Home charging installation',
      'App downloads and setup',
      'Account creation',
      'Payment configuration',
      'Support interactions'
    ],
    emotions: [
      'Frustration with setup complexity',
      'Overwhelm from multiple apps',
      'Anxiety about reliability',
      'Satisfaction when working'
    ],
    behaviors: [
      'Installing home charger',
      'Downloading required apps',
      'Setting up payment methods',
      'Testing charging process'
    ]
  },
  {
    id: '3',
    title: 'Routine Usage',
    description: 'Regular charging and energy management becomes part of daily life',
    touchpoints: [
      'Station visits',
      'App usage for availability',
      'Payment processing',
      'Support resolution',
      'Community ratings'
    ],
    emotions: [
      'Annoyance at reliability issues',
      'Frustration with payment complexity',
      'Satisfaction with convenience',
      'Trust in reliable networks'
    ],
    behaviors: [
      'Regular charging routine',
      'Monitoring energy usage',
      'Reporting issues',
      'Sharing experiences'
    ]
  }
];