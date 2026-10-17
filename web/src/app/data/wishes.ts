export type WishKey = 'gatoya' | 'gakuru' | 'both';

export interface PhotoCard {
  src: string;
  caption: string;
  alt: string;
}

export interface VideoCard {
  src: string;
  caption: string;
}

export interface WishExperience {
  key: WishKey;
  name: string;
  kicker: string;
  headline: string;
  greeting: string;
  letter: string[];
  closing: string;
  palette: 'rose' | 'gold' | 'twin';
  hero: string;
  photos: PhotoCard[];
  videos?: VideoCard[];
}

export const experiences: Record<WishKey, WishExperience> = {
  gatoya: {
    key: 'gatoya',
    name: 'Gatoya',
    kicker: 'For the girl who turns rooms into sunlight',
    headline: 'Happy Birthday, Gatoya',
    greeting: 'Isabukuru nziza, our shining girl',
    letter: [
      'There is a particular kind of joy that only you carry — the kind that arrives before you even speak, in the tilt of your smile and the way you make ordinary evenings feel like a celebration.',
      'From the little one in school blues to the woman in pink satin who lights up every frame, you have grown into someone brave, stylish, and impossibly dear.',
      'May this year spoil you with laughter that lasts too long, doors that open kindly, and a heart that never forgets how loved you are at home.',
      'Blow the candle. Make the wish. We are already cheering.'
    ],
    closing: 'With all our love, from home.',
    palette: 'rose',
    hero: '/media/Gatoya/Snapchat-390143016.jpg',
    photos: [
      { src: '/media/Gatoya/Snapchat-390143016.jpg', caption: 'Soft light, loud heart.', alt: 'Gatoya portrait' },
      { src: '/media/Gatoya/Snapchat-2020056819.jpg', caption: 'Ciao, queen of the clock.', alt: 'Gatoya selfie' },
      { src: '/media/Gatoya/IMG-20251019-WA0015.jpg', caption: 'Cake first. Wishes second.', alt: 'Gatoya with birthday cake' },
      { src: '/media/Gatoya/IMG-20260328-WA0078.jpg', caption: 'Rwanda on her back, sunshine on her face.', alt: 'Gatoya in Rwanda jersey' },
      { src: '/media/Gatoya/g.a.e.t.a.n_20211227_p_2737848748787251136_1_2737848744760586406.jpg', caption: 'Main character energy, even on a dusty road.', alt: 'Gatoya posing outdoors' },
      { src: '/media/Gatoya/IMG_20230813_195555_136.jpg', caption: 'Home couch, remote in hand, joy on tap.', alt: 'Gatoya relaxing at home' },
      { src: '/media/Gatoya/IMG-20251019-WA0021.jpg', caption: 'Three generations of sweetness.', alt: 'Gatoya with family and cake' },
      { src: '/media/Gatoya/Snapchat-1803664950.jpg', caption: 'A glance that starts the party.', alt: 'Gatoya snap' },
      { src: '/media/Gatoya/IMG_20231119_152152_915~2.jpg', caption: 'Collected moments, still glowing.', alt: 'Gatoya memory' },
      { src: '/media/Gatoya/IMG-20260328-WA0011.jpg', caption: 'Another plot twist in her highlight reel.', alt: 'Gatoya outdoors' },
      { src: '/media/Gatoya/Screenshot_20240706-192030.jpg', caption: 'Proof that happiness photographs well.', alt: 'Gatoya screenshot portrait' },
      { src: '/media/Gatoya/IMG_20211120_205830_229.jpg', caption: 'Then, now, always Gatoya.', alt: 'Younger Gatoya' },
      { src: '/media/Gatoya/IMG_20231018_140000_807.jpg', caption: 'A quiet frame, still full of her.', alt: 'Gatoya candid' }
    ],
    videos: [
      { src: '/media/Gatoya/VID-20240203-WA0008.mp4', caption: 'A little moving magic, just for you.' },
      { src: '/media/Gatoya/Snapchat-940151793.mp4', caption: 'Pressed play on a memory.' },
      { src: '/media/Gatoya/VID_119921111_131559_159.mp4', caption: 'Another clip of her glow.' }
    ]
  },
  gakuru: {
    key: 'gakuru',
    name: 'Gakuru',
    kicker: 'For the one who frames the world — and fills it',
    headline: 'Happy Birthday, Gakuru',
    greeting: 'Isabukuru nziza, our steady star',
    letter: [
      'You have a way of standing in a room as if you already know the next beautiful thing that will happen. Camera in hand or cake in hand, you show up fully.',
      'May this year give you frames worth keeping: work that proud, friends who stay, and a path as sharp as your style in that three-piece suit.',
      'You are the twin with the calm smile and the bright plan. Keep capturing life — and let life capture you back, generously.',
      'This page is a standing ovation that does not need a lens. We see you.'
    ],
    closing: 'With pride and a mountain of love, from home.',
    palette: 'gold',
    hero: '/media/Gakuru/IMG-20241017-WA0013.jpg',
    photos: [
      { src: '/media/Gakuru/IMG-20241017-WA0013.jpg', caption: 'The man behind the lens, and in front of it.', alt: 'Gakuru with camera' },
      { src: '/media/Gakuru/Snapchat-171097016.jpg', caption: 'That smile could light a whole street.', alt: 'Gakuru smiling' },
      { src: '/media/Gakuru/IMG-20251019-WA0029.jpg', caption: 'Cake, mama, and a year worth celebrating.', alt: 'Gakuru and mum with cake' },
      { src: '/media/Gakuru/IMG-20251019-WA0010.jpg', caption: 'Shared knife, shared joy, shared forever.', alt: 'Twins cutting cake' },
      { src: '/media/Gakuru/IMG_108.jpg', caption: 'Dressed like the night was written for you.', alt: 'Gakuru in a suit' },
      { src: '/media/Gakuru/IMG-20241017-WA0001.jpg', caption: 'Gold chain of a moment: brother and sister, glowing.', alt: 'Gakuru and Gatoya formal' },
      { src: '/media/Gakuru/g.a.e.t.a.n_20211227_p_2737848748787251136_2_2737848744752337535.jpg', caption: 'Young, cool, already legendary.', alt: 'Gakuru younger outdoor photo' },
      { src: '/media/Gakuru/IMG_20231008_151643_710.jpg', caption: 'A still from the movie of your life.', alt: 'Gakuru portrait' },
      { src: '/media/Gakuru/FileNameLost(1646).jpg', caption: 'Some files lose names. This face never does.', alt: 'Gakuru photo' },
      { src: '/media/Gakuru/IMG_20231018_140153_530.jpg', caption: 'Golden hour looks good on you.', alt: 'Gakuru daytime' },
      { src: '/media/Gakuru/Screenshot_20240609-193608.jpg', caption: 'A saved screenshot of a feeling.', alt: 'Gakuru snapshot' },
      { src: '/media/Gakuru/IMG-20251019-WA0020.jpg', caption: 'Family hands, one cake, infinite blessing.', alt: 'Family cutting cake' },
      { src: '/media/Gakuru/IMG_20231018_135948_724.jpg', caption: 'Another still from a good day.', alt: 'Gakuru extra portrait' }
    ]
  },
  both: {
    key: 'both',
    name: 'Gatoya & Gakuru',
    kicker: 'Two heartbeats. One birthday. Double the fireworks.',
    headline: 'Happy Birthday, Twins',
    greeting: 'Isabukuru nziza, amapasa — twice the joy',
    letter: [
      'Once upon a home, two stars arrived on the same sky. Different light, same constellation. Gatoya with the laugh that rearranges the furniture. Gakuru with the gaze that finds the good angle.',
      'You have grown side by side — schoolyards, living rooms, ballrooms, cakes with too much icing and exactly enough love. The world got lucky twice.',
      'May this shared year be generous: health that stays, dreams that land, and a bond that keeps winning every ordinary Tuesday.',
      'This gift is a house of memories with the lights left on for both of you. Walk in. Stay as long as you want. You are the party.'
    ],
    closing: 'Forever your people, forever your home.',
    palette: 'twin',
    hero: '/media/Gakuru/IMG-20241017-WA0001.jpg',
    photos: [
      { src: '/media/Gakuru/IMG-20241017-WA0001.jpg', caption: 'The original duo. Still unbeatable.', alt: 'Gatoya and Gakuru dressed up' },
      { src: '/media/Gatoya/IMG-20241017-WA0001.jpg', caption: 'Same night, her frame of the story.', alt: 'Gatoya at the celebration' },
      { src: '/media/Gakuru/IMG_108.jpg', caption: 'When the night asked for elegance, you both answered.', alt: 'Twins at a celebration' },
      { src: '/media/Gakuru/IMG-20251019-WA0010.jpg', caption: 'One cake. Two wishes. Infinite frosting.', alt: 'Twins cutting cake' },
      { src: '/media/Gakuru/IMG-20251019-WA0020.jpg', caption: 'Family hands stacked on a blessing.', alt: 'Family cake cutting' },
      { src: '/media/Gatoya/IMG-20251019-WA0021.jpg', caption: 'The living room that raised two legends.', alt: 'Twins with mum and cake' },
      { src: '/media/Gatoya/IMG_20240520_181154_787.jpg', caption: 'Before the world knew. We always did.', alt: 'Childhood family photograph' },
      { src: '/media/Gatoya/IMG-20251019-WA0015.jpg', caption: 'Her slice of the sky.', alt: 'Gatoya with cake' },
      { src: '/media/Gakuru/IMG-20251019-WA0029.jpg', caption: 'His slice of the sky.', alt: 'Gakuru with mum and cake' },
      { src: '/media/Gakuru/IMG-20241017-WA0013.jpg', caption: 'He keeps the memories in focus.', alt: 'Gakuru photographer' },
      { src: '/media/Gatoya/Snapchat-390143016.jpg', caption: 'She keeps the memories in colour.', alt: 'Gatoya portrait' },
      { src: '/media/Gakuru/Snapchat-171097016.jpg', caption: 'That smile could light a whole street.', alt: 'Gakuru smiling' },
      { src: '/media/Gatoya/Snapchat-2020056819.jpg', caption: 'Ciao, queen of the clock.', alt: 'Gatoya selfie' },
      { src: '/media/Gatoya/Snapchat-1803664950.jpg', caption: 'A glance that starts the party.', alt: 'Gatoya snap' },
      { src: '/media/Gatoya/IMG-20260328-WA0078.jpg', caption: 'Rwanda on her back, sunshine on her face.', alt: 'Gatoya in Rwanda jersey' },
      { src: '/media/Gatoya/IMG-20260328-WA0011.jpg', caption: 'Another plot twist in her highlight reel.', alt: 'Gatoya outdoors' },
      { src: '/media/Gatoya/g.a.e.t.a.n_20211227_p_2737848748787251136_1_2737848744760586406.jpg', caption: 'Chapter: becoming.', alt: 'Gatoya younger' },
      { src: '/media/Gakuru/g.a.e.t.a.n_20211227_p_2737848748787251136_2_2737848744752337535.jpg', caption: 'Chapter: becoming, take two.', alt: 'Gakuru younger' },
      { src: '/media/Gatoya/IMG_20230813_195555_136.jpg', caption: 'Home couch, remote in hand, joy on tap.', alt: 'Gatoya relaxing at home' },
      { src: '/media/Gatoya/IMG_20231119_152152_915~2.jpg', caption: 'Collected moments, still glowing.', alt: 'Gatoya memory' },
      { src: '/media/Gatoya/IMG_20231018_140000_807.jpg', caption: 'A quiet frame, still full of her.', alt: 'Gatoya candid' },
      { src: '/media/Gakuru/IMG_20231008_151643_710.jpg', caption: 'A still from the movie of your life.', alt: 'Gakuru portrait' },
      { src: '/media/Gakuru/IMG_20231018_140153_530.jpg', caption: 'Golden hour looks good on you.', alt: 'Gakuru daytime' },
      { src: '/media/Gakuru/IMG_20231018_135948_724.jpg', caption: 'Another still from a good day.', alt: 'Gakuru extra portrait' },
      { src: '/media/Gakuru/IMG_20231018_135924_926.jpg', caption: 'A frame that almost got away.', alt: 'Gakuru outdoor still' },
      { src: '/media/Gakuru/IMG_20231018_135902_907~2.jpg', caption: 'Side by side in the sun.', alt: 'Gakuru companion frame' },
      { src: '/media/Gakuru/FileNameLost(1646).jpg', caption: 'Some files lose names. This face never does.', alt: 'Gakuru photo' },
      { src: '/media/Gakuru/Screenshot_20240609-193608.jpg', caption: 'A saved screenshot of a feeling.', alt: 'Gakuru snapshot' },
      { src: '/media/Gatoya/Screenshot_20240706-192030.jpg', caption: 'Proof that happiness photographs well.', alt: 'Gatoya screenshot portrait' },
      { src: '/media/Gatoya/Screenshot_20240706-191941~2.jpg', caption: 'Saved because it mattered.', alt: 'Gatoya extra snapshot' },
      { src: '/media/Gatoya/IMG_20211120_205830_229.jpg', caption: 'Then, now, always Gatoya.', alt: 'Younger Gatoya' },
      { src: '/media/Gatoya/IMG_20211120_205830_229~2.jpg', caption: 'Same smile, another keep.', alt: 'Younger Gatoya extra' }
    ],
    videos: [
      { src: '/media/Gatoya/VID-20240203-WA0008.mp4', caption: 'A moving page from the family album.' },
      { src: '/media/Gatoya/Snapchat-199322191.mp4', caption: 'Press play. Smile back.' },
      { src: '/media/Gatoya/Snapchat-940151793.mp4', caption: 'A clip from her highlight reel.' },
      { src: '/media/Gatoya/VID_119921111_131559_159.mp4', caption: 'And one more for the twins.' }
    ]
  }
};

export const chooser = [
  {
    key: 'gatoya' as WishKey,
    title: 'Gatoya',
    subtitle: 'Rose-gold wishes',
    line: 'Open the letter written just for her.',
    image: '/media/Gatoya/Snapchat-390143016.jpg'
  },
  {
    key: 'both' as WishKey,
    title: 'Both',
    subtitle: 'Double celebration',
    line: 'Because some birthdays come in pairs.',
    image: '/media/Gakuru/IMG-20241017-WA0001.jpg'
  },
  {
    key: 'gakuru' as WishKey,
    title: 'Gakuru',
    subtitle: 'Gold-hour wishes',
    line: 'Open the letter written just for him.',
    image: '/media/Gakuru/IMG-20241017-WA0013.jpg'
  }
];
