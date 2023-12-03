import { Event, EventType } from '../entities/event_entity';

export const EVENTS: Event[] = [
  {
    ID: '',
    Name: "Bob's fundraiser",
    EventType: EventType.funding,
    Date: new Date(),
    Location: 'Minneapolis, MN',
    Description: 'need a lot of money, please',
  },
  {
    ID: '',
    Name: "John's fundraiser",
    EventType: EventType.funding,
    Date: new Date(),
    Location: 'Minneapolis, MN',
    Description:
      "Hey everyone, it's me, Bob! I'm here today to tell you all about this great fundraiser we got goin' on. Now, I ain't no fancy talker or nothin', but I do know that this cause is real important. So, if you got a few bucks lyin' around, I'd sure appreciate it if you could toss 'em our way. Every little bit helps, ya know? Thanks for listenin', y'all!",
  },
  {
    ID: '',
    Name: "Bob's campaign",
    EventType: EventType.campaigns,
    Date: new Date(),
    Location: 'Minneapolis, MN',
    Description: 'give me your votes',
  },
  {
    ID: '',
    Name: "John's campaign",
    EventType: EventType.campaigns,
    Date: new Date(),
    Location: 'Minneapolis, MN',
    Description: 'need some votes',
  },
  {
    ID: '',
    Name: "Joan's fundraiser",
    EventType: EventType.funding,
    Date: new Date(),
    Location: 'Minneapolis, MN',
    Description: 'need some money',
  },
];

export const CURRENTEVENTS: Event[] = [
  {
    ID: '',
    Name: "Harry's new bridge",
    EventType: EventType.infrastructure,
    Date: new Date(),
    Location: 'Minneapolis, MN',
    Description: 'need a lot of money, please',
  },
  {
    ID: '',
    Name: "Liam's fundraiser",
    EventType: EventType.funding,
    Date: new Date(),
    Location: 'Minneapolis, MN',
    Description:
      "Hey everyone, it's me, Bob! I'm here today to tell you all about this great fundraiser we got goin' on. Now, I ain't no fancy talker or nothin', but I do know that this cause is real important. So, if you got a few bucks lyin' around, I'd sure appreciate it if you could toss 'em our way. Every little bit helps, ya know? Thanks for listenin', y'all!",
  },
  {
    ID: '',
    Name: "Rob's project",
    EventType: EventType.campaigns,
    Date: new Date(),
    Location: 'Minneapolis, MN',
    Description: 'give me your votes',
  },
  {
    ID: '',
    Name: "Sam's campaign",
    EventType: EventType.education,
    Date: new Date(),
    Location: 'Minneapolis, MN',
    Description: 'need some votes',
  },
  {
    ID: '',
    Name: "Lisa's fundraiser",
    EventType: EventType.funding,
    Date: new Date(),
    Location: 'Minneapolis, MN',
    Description: 'need some money',
  },
];
