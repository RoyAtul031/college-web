// Gallery Data Structure for Xavathon 2026 & 2027
// 6 Photo Categories x 7 Images = 42 Curated Photographs + 2027 Teaser

export const galleryCategories = {
  raceDay: {
    id: 'race-day',
    num: '01',
    navLabel: 'RACE DAY',
    title: 'XAVATHON 2026 — RACE DAY',
    subtitle: 'RACE DAY',
    counter: '01 / 06',
    year: 'XAVATHON 2026',
    theme: 'flagoff-surge',
    gridVariant: 'variant-a',
    featuredIndex: 0,
    featuredCaption: {
      title: 'THE STARTING LINE',
      subtitle: 'XAVATHON 2026',
      desc: 'The dawn silence breaks as 3,000 runners surge forward under the historic Mother Teresa Sarani arches at 5:45 AM.'
    },
    images: [
      {
        id: 'rd-01',
        src: '/images/gallery/race-day/race-day-01.webp',
        title: 'The Starting Line',
        caption: 'Dawn flag-off at St. Xavier’s Main Gate under amber floodlights',
        tag: '01 / 07 &bull; FLAG-OFF',
        aspect: 'panoramic',
        alt: 'Thousands of runners at the starting line of Xavathon 2026'
      },
      {
        id: 'rd-02',
        src: '/images/gallery/race-day/race-day-02.webp',
        title: 'Park Street Surge',
        caption: 'Thousands of runners streaming through the historic Mother Teresa Sarani boulevard',
        tag: '02 / 07 &bull; THE COURSE',
        aspect: 'portrait',
        alt: 'Runners streaming down Park Street Kolkata'
      },
      {
        id: 'rd-03',
        src: '/images/gallery/race-day/race-day-03.webp',
        title: '10K Elite Pacemakers',
        caption: 'Lead athletes setting an intense 3:30 min/km pace through the opening straight',
        tag: '03 / 07 &bull; PACE LINE',
        aspect: 'square',
        alt: '10K pacemakers leading the front pack'
      },
      {
        id: 'rd-04',
        src: '/images/gallery/race-day/race-day-04.webp',
        title: 'Hydration Station 1.5K',
        caption: 'Volunteers distributing compostable electrolyte cups to keep runners refreshed',
        tag: '04 / 07 &bull; RECOVERY',
        aspect: 'landscape-wide',
        alt: 'Volunteers handing water cups at hydration station'
      },
      {
        id: 'rd-05',
        src: '/images/gallery/race-day/race-day-05.webp',
        title: 'Midway Turnaround Mat',
        caption: 'High-energy competitors crossing the 5K electronic timing sensor with momentum',
        tag: '05 / 07 &bull; TIMING SPLIT',
        aspect: 'landscape-compact',
        alt: 'Runners crossing the 5K electronic timing split'
      },
      {
        id: 'rd-06',
        src: '/images/gallery/race-day/race-day-06.webp',
        title: 'The Final 400M Sprint',
        caption: 'Exhilarating last strides toward the SXC campus arch under roaring cheers',
        tag: '06 / 07 &bull; HOME STRETCH',
        aspect: 'portrait',
        alt: 'Athletes sprinting the final 400 meters'
      },
      {
        id: 'rd-07',
        src: '/images/gallery/race-day/race-day-07.webp',
        title: 'Finish Line Euphoria',
        caption: 'A celebratory finish breaking the timing beam with hands held high in victory',
        tag: '07 / 07 &bull; TRIUMPH',
        aspect: 'landscape-wide',
        alt: 'Runner celebrating at the finish line'
      }
    ]
  },

  runners: {
    id: 'runners',
    num: '02',
    navLabel: 'RUNNERS',
    title: 'XAVATHON 2026 — RUNNERS',
    subtitle: 'RUNNERS',
    counter: '02 / 06',
    year: 'XAVATHON 2026',
    theme: 'stride-grit',
    gridVariant: 'variant-b',
    featuredIndex: 0,
    featuredCaption: {
      title: 'THE FINAL STRETCH',
      subtitle: 'XAVATHON 2026',
      desc: 'Determination etched on every face. Collegiate athletes and seasoned marathoners pushing beyond perceived limits.'
    },
    images: [
      {
        id: 'rn-01',
        src: '/images/gallery/runners/runners-01.webp',
        title: 'Rhythm & Determination',
        caption: 'Collegiate runner maintaining a steady, powerful stride along the course',
        tag: '01 / 07 &bull; ENDURANCE',
        aspect: 'landscape-wide',
        alt: 'Collegiate athlete running with focused determination'
      },
      {
        id: 'rn-02',
        src: '/images/gallery/runners/runners-02.webp',
        title: 'Alumni Reunion Stride',
        caption: 'Class of 2019 alumni team completing the 10K together in solidarity',
        tag: '02 / 07 &bull; SOLIDARITY',
        aspect: 'portrait',
        alt: 'SXC Alumni runners holding pace together'
      },
      {
        id: 'rn-03',
        src: '/images/gallery/runners/runners-03.webp',
        title: 'Breakaway Focus',
        caption: 'Category frontrunner focused entirely on clocking a personal record',
        tag: '03 / 07 &bull; INTENSITY',
        aspect: 'landscape-compact',
        alt: 'Frontrunner breaking away from the pack'
      },
      {
        id: 'rn-04',
        src: '/images/gallery/runners/runners-04.webp',
        title: 'First-Time 5K Joy',
        caption: 'Freshman students crossing their first official marathon timing strip',
        tag: '04 / 07 &bull; CELEBRATION',
        aspect: 'landscape-wide',
        alt: 'First time student runners celebrating'
      },
      {
        id: 'rn-05',
        src: '/images/gallery/runners/runners-05.webp',
        title: 'Masters Division Pacer',
        caption: 'Inspiring veteran competitor demonstrating remarkable endurance and form',
        tag: '05 / 07 &bull; MASTERS',
        aspect: 'portrait',
        alt: 'Veteran runner pacing with disciplined form'
      },
      {
        id: 'rn-06',
        src: '/images/gallery/runners/runners-06.webp',
        title: 'Youth Energy',
        caption: 'Energetic group of undergraduate racers powering through kilometre 7',
        tag: '06 / 07 &bull; TEAMWORK',
        aspect: 'landscape-compact',
        alt: 'Youth runners running together with high spirits'
      },
      {
        id: 'rn-07',
        src: '/images/gallery/runners/runners-07.webp',
        title: 'Finisher Pride',
        caption: 'Athletes proudly posing with their official commemorative medals',
        tag: '07 / 07 &bull; MEDALISTS',
        aspect: 'landscape-wide',
        alt: 'Proud marathon finishers showing off medals'
      }
    ]
  },

  volunteers: {
    id: 'volunteers',
    num: '03',
    navLabel: 'VOLUNTEERS',
    title: 'XAVATHON 2026 — VOLUNTEERS',
    subtitle: 'VOLUNTEERS',
    counter: '03 / 06',
    year: 'XAVATHON 2026',
    theme: 'selfless-spirit',
    gridVariant: 'variant-c',
    featuredIndex: 0,
    featuredCaption: {
      title: 'BEHIND EVERY MOMENT',
      subtitle: 'XAVATHON 2026',
      desc: 'Over 100 student marshals, medical squads, and hydration teams working tirelessly from 4:00 AM.'
    },
    images: [
      {
        id: 'vl-01',
        src: '/images/gallery/volunteers/volunteers-01.webp',
        title: 'Dawn Marshal Briefing',
        caption: 'Student council volunteers assembling at 4:30 AM for sector assignments',
        tag: '01 / 07 &bull; BRIEFING',
        aspect: 'panoramic',
        alt: 'Volunteer marshals meeting before dawn'
      },
      {
        id: 'vl-02',
        src: '/images/gallery/volunteers/volunteers-02.webp',
        title: 'Zero-Waste Water Squad',
        caption: 'Volunteer marshals serving fresh water in 100% biodegradable bagasse cups',
        tag: '02 / 07 &bull; ECO-ACTION',
        aspect: 'landscape-compact',
        alt: 'Eco volunteers serving water in compostable cups'
      },
      {
        id: 'vl-03',
        src: '/images/gallery/volunteers/volunteers-03.webp',
        title: 'Medical Support Crew',
        caption: 'Certified first-aid volunteers on standby with cold towels and glucose',
        tag: '03 / 07 &bull; MEDICAL',
        aspect: 'portrait',
        alt: 'First aid medical squad on standby'
      },
      {
        id: 'vl-04',
        src: '/images/gallery/volunteers/volunteers-04.webp',
        title: 'Route Cheering Squad',
        caption: 'Lively student music and cheering teams keeping runner adrenaline high',
        tag: '04 / 07 &bull; SPIRIT',
        aspect: 'landscape-wide',
        alt: 'Student cheering crew with musical instruments'
      },
      {
        id: 'vl-05',
        src: '/images/gallery/volunteers/volunteers-05.webp',
        title: 'Bib & Timing Verification',
        caption: 'Desk volunteers ensuring electronic RFID bib verifications with precision',
        tag: '05 / 07 &bull; TELEMETRY',
        aspect: 'landscape-compact',
        alt: 'Volunteers scanning runner RFID chips'
      },
      {
        id: 'vl-06',
        src: '/images/gallery/volunteers/volunteers-06.webp',
        title: 'Finish Chute Guidance',
        caption: 'Assisting tired finishers safely into the hydration and stretching zones',
        tag: '06 / 07 &bull; STEWARDSHIP',
        aspect: 'portrait',
        alt: 'Finish chute volunteer team guiding runners'
      },
      {
        id: 'vl-07',
        src: '/images/gallery/volunteers/volunteers-07.webp',
        title: 'The 100+ Volunteer Force',
        caption: 'The passionate student and faculty volunteer squad behind the event’s success',
        tag: '07 / 07 &bull; FAMILY',
        aspect: 'landscape-wide',
        alt: 'Full group photo of the Xavathon volunteer force'
      }
    ]
  },

  behindScenes: {
    id: 'behind-scenes',
    num: '04',
    navLabel: 'BEHIND THE SCENES',
    title: 'XAVATHON 2026 — BEHIND THE SCENES',
    subtitle: 'BEHIND THE SCENES',
    counter: '04 / 06',
    year: 'XAVATHON 2026',
    theme: 'precision-prep',
    gridVariant: 'variant-a',
    featuredIndex: 0,
    featuredCaption: {
      title: 'THE SILENT PREPARATION',
      subtitle: 'XAVATHON 2026',
      desc: 'Midnight course marking, RFID calibration, and Kolkata traffic coordination that brings the marathon alive.'
    },
    images: [
      {
        id: 'bts-01',
        src: '/images/gallery/behind-scenes/behind-scenes-01.webp',
        title: 'Midnight Course Marking',
        caption: 'Laying down neon distance milestones and directional barriers before dawn',
        tag: '01 / 07 &bull; NIGHT DRIFT',
        aspect: 'panoramic',
        alt: 'Organizers setting road barriers at midnight'
      },
      {
        id: 'bts-02',
        src: '/images/gallery/behind-scenes/behind-scenes-02.webp',
        title: 'RFID Timing Mat Setup',
        caption: 'Testing telemetry sensors and live server sync before runners arrive',
        tag: '02 / 07 &bull; CALIBRATION',
        aspect: 'portrait',
        alt: 'Engineers syncing the RFID timing mats'
      },
      {
        id: 'bts-03',
        src: '/images/gallery/behind-scenes/behind-scenes-03.webp',
        title: 'Sound & Stage Production',
        caption: 'Setting up audio arrays, LED displays, and sustainable canvas banners',
        tag: '03 / 07 &bull; PRODUCTION',
        aspect: 'square',
        alt: 'Audio engineers setting up stage sound'
      },
      {
        id: 'bts-04',
        src: '/images/gallery/behind-scenes/behind-scenes-04.webp',
        title: 'Pre-Race Warm-up Drills',
        caption: 'Professional fitness instructors leading 1,500 runners in sync',
        tag: '04 / 07 &bull; AEROBICS',
        aspect: 'landscape-wide',
        alt: 'Warmup instructors on stage leading stretching'
      },
      {
        id: 'bts-05',
        src: '/images/gallery/behind-scenes/behind-scenes-05.webp',
        title: 'Police & Traffic Liaison',
        caption: 'Coordinating green corridor clearances with Kolkata Traffic Police',
        tag: '05 / 07 &bull; LOGISTICS',
        aspect: 'landscape-compact',
        alt: 'Coordination between police and college marshals'
      },
      {
        id: 'bts-06',
        src: '/images/gallery/behind-scenes/behind-scenes-06.webp',
        title: 'Baggage Sorting Hub',
        caption: 'Over 2,000 bags systematically catalogued for instant post-race retrieval',
        tag: '06 / 07 &bull; SECURITY',
        aspect: 'portrait',
        alt: 'Organized baggage counters inside college halls'
      },
      {
        id: 'bts-07',
        src: '/images/gallery/behind-scenes/behind-scenes-07.webp',
        title: 'Race Control Command Desk',
        caption: 'Monitoring marshals, ambulances, and water levels in real time',
        tag: '07 / 07 &bull; COMMAND',
        aspect: 'landscape-wide',
        alt: 'Command center monitoring event screens'
      }
    ]
  },

  awards: {
    id: 'awards',
    num: '05',
    navLabel: 'AWARDS',
    title: 'XAVATHON 2026 — AWARDS',
    subtitle: 'AWARDS',
    counter: '05 / 06',
    year: 'XAVATHON 2026',
    theme: 'podium-glory',
    gridVariant: 'variant-b',
    featuredIndex: 0,
    featuredCaption: {
      title: 'THE PODIUM OF HONOR',
      subtitle: 'XAVATHON 2026',
      desc: 'Father Principal felicitating champions with the coveted Nihil Ultra rolling trophies and plantable seed medals.'
    },
    images: [
      {
        id: 'aw-01',
        src: '/images/gallery/awards/awards-01.webp',
        title: '10K Men’s Gold Champion',
        caption: 'Father Principal presenting the championship cup and cash prize to the winner',
        tag: '01 / 07 &bull; 10K CHAMPION',
        aspect: 'landscape-wide',
        alt: 'Men champion receiving gold trophy on podium'
      },
      {
        id: 'aw-02',
        src: '/images/gallery/awards/awards-02.webp',
        title: '10K Women’s Gold Champion',
        caption: 'Celebrating a record-shattering performance with the Nihil Ultra trophy',
        tag: '02 / 07 &bull; WOMEN GOLD',
        aspect: 'portrait',
        alt: 'Women 10K champion lifting the gold cup'
      },
      {
        id: 'aw-03',
        src: '/images/gallery/awards/awards-03.webp',
        title: '5K Collegiate Cup Winner',
        caption: 'Undergraduate student athlete receiving top honors on the main stage',
        tag: '03 / 07 &bull; COLLEGIATE CUP',
        aspect: 'landscape-compact',
        alt: 'College runner awarded 5K medal'
      },
      {
        id: 'aw-04',
        src: '/images/gallery/awards/awards-04.webp',
        title: 'Alumni Pioneer Honor',
        caption: 'Distinguished alumnus recognized for active marathon mentorship',
        tag: '04 / 07 &bull; ALUMNI HONOR',
        aspect: 'landscape-wide',
        alt: 'Alumni runner receiving special recognition'
      },
      {
        id: 'aw-05',
        src: '/images/gallery/awards/awards-05.webp',
        title: 'Sustainability Trophy',
        caption: 'Department planting the maximum saplings awarded the Greener Footprints cup',
        tag: '05 / 07 &bull; ECO-SHIELD',
        aspect: 'portrait',
        alt: 'Eco shield awarded to department team'
      },
      {
        id: 'aw-06',
        src: '/images/gallery/awards/awards-06.webp',
        title: 'Official Finisher Medal',
        caption: 'A close-up look at the bespoke plantable seed medal awarded to finishers',
        tag: '06 / 07 &bull; CRAFTSMANSHIP',
        aspect: 'landscape-compact',
        alt: 'Plantable seed marathon medal detail'
      },
      {
        id: 'aw-07',
        src: '/images/gallery/awards/awards-07.webp',
        title: 'Grand Confetti Finale',
        caption: 'Celebratory prize distribution ceremony concluding with the college anthem',
        tag: '07 / 07 &bull; GRAND FINALE',
        aspect: 'landscape-wide',
        alt: 'Confetti falling on the winners on stage'
      }
    ]
  },

  campus: {
    id: 'campus',
    num: '06',
    navLabel: 'CAMPUS',
    title: 'XAVATHON 2026 — CAMPUS',
    subtitle: 'CAMPUS',
    counter: '06 / 06',
    year: 'XAVATHON 2026',
    theme: 'heritage-greens',
    gridVariant: 'variant-c',
    featuredIndex: 0,
    featuredCaption: {
      title: 'THE HERITAGE OF PARK STREET',
      subtitle: 'XAVATHON 2026',
      desc: '160 years of collegiate excellence. Colonial arches, serene quadrangle lawns, and the storied gates of St. Xavier’s.'
    },
    images: [
      {
        id: 'cp-01',
        src: '/images/gallery/campus/campus-01.webp',
        title: 'Historic SXC Quadrangle',
        caption: 'The century-old St. Xavier’s building overlooking the sunlit assembly ground',
        tag: '01 / 07 &bull; QUADRANGLE',
        aspect: 'panoramic',
        alt: 'Historic St Xavier college quadrangle'
      },
      {
        id: 'cp-02',
        src: '/images/gallery/campus/campus-02.webp',
        title: 'The Principal’s Hall',
        caption: 'Rev. Fr. Dominic Savio’s communique room and Jesuit administrative heritage wing',
        tag: '02 / 07 &bull; HERITAGE',
        aspect: 'landscape-compact',
        alt: 'Collegiate heritage administration corridor'
      },
      {
        id: 'cp-03',
        src: '/images/gallery/campus/campus-03.webp',
        title: 'Mother Teresa Sarani Gate',
        caption: 'The storied main college entrance welcoming runners from across India',
        tag: '03 / 07 &bull; ENTRANCE',
        aspect: 'portrait',
        alt: 'Main collegiate entrance gate on Park Street'
      },
      {
        id: 'cp-04',
        src: '/images/gallery/campus/campus-04.webp',
        title: 'Chapel Garden Walkway',
        caption: 'Lush greenery and serene historic pathways where athletes stretch at dawn',
        tag: '04 / 07 &bull; CHAPEL WALK',
        aspect: 'landscape-wide',
        alt: 'Chapel garden walkway lined with palm trees'
      },
      {
        id: 'cp-05',
        src: '/images/gallery/campus/campus-05.webp',
        title: 'Colonial Arches & Corridors',
        caption: 'Sunlight filtering through the heritage collegiate corridors during event day',
        tag: '05 / 07 &bull; CORRIDORS',
        aspect: 'landscape-compact',
        alt: 'Sunlight shining through gothic arched hallways'
      },
      {
        id: 'cp-06',
        src: '/images/gallery/campus/campus-06.webp',
        title: 'College Auditorium Expo',
        caption: 'The vibrant venue hosting the pre-race expo and runner bib distributions',
        tag: '06 / 07 &bull; AUDITORIUM',
        aspect: 'portrait',
        alt: 'College auditorium during runner registration expo'
      },
      {
        id: 'cp-07',
        src: '/images/gallery/campus/campus-07.webp',
        title: 'Celebration Arena by Night',
        caption: 'Campus grounds illuminated for the post-race cultural performances',
        tag: '07 / 07 &bull; TWILIGHT',
        aspect: 'landscape-wide',
        alt: 'Campus illuminated for post-race festivities'
      }
    ]
  },

  comingSoon: {
    id: 'coming-soon',
    num: '07',
    navLabel: 'COMING SOON',
    title: 'XAVATHON 2027 — COMING SOON',
    subtitle: 'NEXT CHAPTER',
    counter: 'TEASER',
    year: 'XAVATHON 2027',
    theme: 'teaser-future',
    isSpecialTeaser: true
  }
};

// Continuous Film Strip items
export const filmstripPhotos = [
  { src: '/images/gallery/race-day/race-day-01.webp', title: 'Flag-Off Dawn', cat: 'RACE DAY' },
  { src: '/images/gallery/runners/runners-01.webp', title: 'Endurance Lead', cat: 'RUNNERS' },
  { src: '/images/gallery/volunteers/volunteers-02.webp', title: 'Zero-Waste Cup', cat: 'VOLUNTEERS' },
  { src: '/images/gallery/behind-scenes/behind-scenes-04.webp', title: 'Aerobic Warm-Up', cat: 'BTS' },
  { src: '/images/gallery/awards/awards-01.webp', title: '10K Champion Cup', cat: 'AWARDS' },
  { src: '/images/gallery/campus/campus-01.webp', title: 'Heritage Arches', cat: 'CAMPUS' },
  { src: '/images/gallery/race-day/race-day-07.webp', title: 'Finish Ribbon', cat: 'RACE DAY' },
  { src: '/images/gallery/runners/runners-07.webp', title: 'Finisher Medals', cat: 'RUNNERS' },
  { src: '/images/gallery/awards/awards-06.webp', title: 'Plantable Medals', cat: 'AWARDS' },
  { src: '/images/gallery/behind-scenes/behind-scenes-01.webp', title: 'Midnight Setup', cat: 'BTS' },
  { src: '/images/gallery/campus/campus-04.webp', title: 'Chapel Garden', cat: 'CAMPUS' },
  { src: '/images/gallery/volunteers/volunteers-07.webp', title: 'Marshal Squad', cat: 'VOLUNTEERS' }
];

// Curated Instagram Cards
export const instagramPosts = [
  {
    id: 'ig-1',
    img: '/images/gallery/race-day/race-day-01.webp',
    likes: '1,842',
    caption: '3,000 hearts pounding as one under the Mother Teresa Sarani sunrise. This is what community looks like. 🏃‍♂️✨ #Xavathon2026 #SXCKolkata',
    date: '2 DAYS AGO'
  },
  {
    id: 'ig-2',
    img: '/images/gallery/awards/awards-06.webp',
    likes: '2,419',
    caption: 'Every medal planted becomes a tree. 100% compostable, embedded with native marigold and tulsi seeds. 🌿🌱 #GreenerFootprints',
    date: '3 DAYS AGO'
  },
  {
    id: 'ig-3',
    img: '/images/gallery/runners/runners-04.webp',
    likes: '1,593',
    caption: 'First 5K in the books! The cheers at kilometre 4 made all the early morning training worth every second. 🥇🙌 #XavathonRunners',
    date: '4 DAYS AGO'
  },
  {
    id: 'ig-4',
    img: '/images/gallery/volunteers/volunteers-02.webp',
    likes: '1,720',
    caption: 'Zero single-use plastics across 10 kilometres. Meet our student sustainability heroes! 💚🌍 #ZeroWasteMarathon #StXaviers',
    date: '5 DAYS AGO'
  }
];
