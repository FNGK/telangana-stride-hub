export interface Article {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  read: string;
  accent: string;
  author: string;
  date: string;
  body: string[];
}

export const articles: Article[] = [
  {
    slug: "2026-aiff-roadmap",
    tag: "Strategy",
    title: "The 2026 AIFF Roadmap",
    excerpt:
      "How Hyderabad Globe FC is aligning its grassroots pathway with the AIFF's Vision 2047 — building India's next generation from Telangana soil up.",
    read: "8 min read",
    accent: "hsl(43 65% 52%)",
    author: "Coaching Staff",
    date: "March 14, 2026",
    body: [
      "The AIFF's Vision 2047 framework reshapes what an Indian club must look like by the end of this decade. For Hyderabad Globe FC — a club founded in 1968 — this is not a pivot, it is a continuation.",
      "Our pathway begins at U-13. Every academy session is mapped against AFC technical benchmarks: first-touch under pressure, scanning frequency, and decision speed in the final third.",
      "The goal is simple. By 2030, every senior squad starter should have come through the Globe pathway. By 2035, two of them should be wearing the national shirt.",
      "This article unpacks the four-pillar model — Technical, Tactical, Physical, Psychological — and shows how a 14-year-old from Secunderabad becomes an I-League starter at 21.",
    ],
  },
  {
    slug: "tfa-revolution",
    tag: "Scouting",
    title: "The TFA Revolution",
    excerpt:
      "Inside the Telangana Football Association Summer Camps. Who's the next Sai Kumar? Our scouts file their reports from the maidans.",
    read: "6 min read",
    accent: "hsl(358 75% 52%)",
    author: "Scouting Department",
    date: "March 8, 2026",
    body: [
      "Three weeks. Eleven districts. Four hundred trialists. The 2026 TFA Summer Camp was the largest open scouting window Telangana has ever run.",
      "We sent six scouts. They came back with thirty-two names. Of those, eleven received invitations to a closed Globe trial in April.",
      "What we look for isn't always what wins matches at fourteen. It's what holds up at twenty-two — game intelligence, two-footedness, and the willingness to defend in the 89th minute of a 4-0 win.",
    ],
  },
  {
    slug: "nutrition-for-champions",
    tag: "Performance",
    title: "Nutrition for Champions",
    excerpt:
      "Modern diet trends for youth players surviving — and thriving — in Hyderabad's 42°C summers. What our U-21s actually eat.",
    read: "5 min read",
    accent: "hsl(222 47% 11%)",
    author: "Sports Science Team",
    date: "February 27, 2026",
    body: [
      "Hyderabad summers are brutal. Pitch-side temperatures regularly cross 42°C, and a 90-minute match can cost a player up to 4 litres of sweat.",
      "Our U-21 nutrition protocol is built around three principles: hydrate early, fuel slow, recover fast. That means electrolytes from breakfast, complex carbs three hours before kickoff, and protein within the 45-minute window after the final whistle.",
      "Local matters. Ragi, jowar, and curd-based recovery drinks outperform imported supplements at half the cost — and our players actually enjoy them.",
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);