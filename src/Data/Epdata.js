import got from '../assests/hero/ep/ep1.jpeg';
import season2 from '../assests/hero/ep/ep3.jpeg';
import season4 from '../assests/hero/ep/ep4.jpeg';
import season5 from '../assests/hero/ep/ep5.jpeg';
import season6 from '../assests/hero/ep/ep6.jpeg';
import season7 from '../assests/hero/ep/ep7.jpeg';



import OnlyOnMovie1 from '../assests/OnlyOn/MovieOne.jpeg';
import OnlyOnMovie2 from '../assests/OnlyOn/THE CROODS.jpeg';
import OnlyOnMovie3 from '../assests/OnlyOn/The Mask.jpeg';
import OnlyOnMovie4 from '../assests/OnlyOn/Ver Mi amigo el dragón _ Disney+.jpeg';
import OnlyOnMovie5 from '../assests/OnlyOn/Watch Mary Poppins Returns _ Disney+.jpeg';
import OnlyOnMovie6 from '../assests/OnlyOn/Watch Mrs_ Doubtfire _ Disney+.jpeg';
import OnlyOnMovie7 from '../assests/OnlyOn/Watch Mufasa_ The Lion King _ Disney+.jpeg';
import OnlyOnMovie8 from '../assests/OnlyOn/Honey, I Shrunk the Kids (1989).jpeg';
import OnlyOnMovie9 from '../assests/OnlyOn/down1.jpeg';
import OnlyOnMovie0 from '../assests/OnlyOn/down2.jpeg';
import OnlyOnMovie11 from '../assests/OnlyOn/down3.jpeg';
import OnlyOnMovie12 from '../assests/OnlyOn/down4.jpeg';
import OnlyOnMovie13 from '../assests/OnlyOn/down5.jpeg';




export const series = [
  {
    id: 1,
    name: "Game of throne",
    image: got,
    description: "The popular TV series.",
    year: "2021",
    Duration: "8 Seasons",
    rate: "9.4",
    genres: ["Action", "Adventure", "Sss"],
    trailer: "https://www.youtube.com/embed/KPLWWIOCOOQ?si=DRE27fdrNEZ1MCrd", // ✅ Only the URL

    seasons: [
      {
        id: 1,
        name: "Season 1",
        image: season2,
        description: "The beginning of the battle for the Iron Throne Season 1 .",
        episodes: [
          { id: 1, name: "Episode 1", description: "The beginning of the battle for the Iron Throne." },
          { id: 2, name: "Episode 2", description: "The beginning of the battle for the Iron Throne." },
          { id: 3, name: "Episode 3", description: "The beginning of the battle for the Iron Throne." },
        ]
      },
      // ... other seasons
    ],
  },
  {
    id: 2,
    name: "Loki",
    image: season2,
    description: "The popular TV series.",
    year: "2021",
    Duration: "8 Seasons",
    rate: "9.4",
    genres: ["Action", "Adventure", "Sss"],
    trailer: "https://www.youtube.com/embed/KPLWWIOCOOQ?si=DRE27fdrNEZ1MCrd", // ✅ Only the URL

    seasons: [
      {
        id: 2,
        name: "Season 1",
        image: season2,
        description: "The beginning of the battle for the Iron Throne Season 1 .",
        episodes: [
          { id: 1, name: "Episode 1", description: "The beginning of the battle for the Iron Throne." },
          { id: 2, name: "Episode 2", description: "The beginning of the battle for the Iron Throne." },
          { id: 3, name: "Episode 3", description: "The beginning of the battle for the Iron Throne." },
        ]
      },
      
    ],
  },
  
];
export const OnlyOnMovieSite = [
  {
    id: 1,
    image: OnlyOnMovie1,
    name: "Saiyaara",
    description: "A romantic drama about heartbreak and hope.",
    year: "2025",
    Duration: "–", 
    rate: "–",
    Cast: ["Ahaan Panday", "Aneet Padda", "Geeta Agarwal Sharma", "Varun Badola"],
    genres: ["Drama", "Romance"],
  },
  {
    id: 2,
    image: OnlyOnMovie2,
    name: "The Croods",
    description: "A prehistoric family's journey in a changing world.",
    year: "2013",
    Duration: "98 minutes",
    rate: "PG",
    Cast: ["Nicolas Cage","Emma Stone","Ryan Reynolds","Catherine Keener","Cloris Leachman"],
    genres: ["Animation","Adventure","Comedy"],
  },
  {
    id: 3,
    image: OnlyOnMovie3,
    name: "The Mask",
    description: "A timid bank clerk transforms into a green‑faced hero.",
    year: "1994",
    Duration: "101 minutes",
    rate: "PG‑13",
    Cast: ["Jim Carrey","Cameron Diaz"],
    genres: ["Action","Comedy","Fantasy"],
  },
  {
    id: 4,
    image: OnlyOnMovie4,
    name: "Pete’s Dragon",
    description: "An orphan boy befriends a magical dragon.",
    year: "1977 / Remake 2016",
    Duration: "118 minutes (2016)",
    rate: "G",
    Cast: ["Helen Reddy","Jim Dale","Bryce Dallas Howard","Oakes Fegley"],
    genres: ["Family","Fantasy","Adventure"],
  },
  {
    id: 5,
    image: OnlyOnMovie5,
    name: "Mary Poppins",
    description: "A magical nanny transforms a family in London.",
    year: "1964",
    Duration: "139 minutes",
    rate: "U / PG",
    Cast: ["Julie Andrews","Dick Van Dyke"],
    genres: ["Musical","Fantasy","Comedy"],
  },
  {
    id: 6,
    image: OnlyOnMovie6,
    name: "Mrs. Doubtfire",
    description: "A father disguises himself as a nanny to be near his kids.",
    year: "1993",
    Duration: "125 minutes",
    rate: "PG‑13",
    Cast: ["Robin Williams","Sally Field","Pierce Brosnan"],
    genres: ["Comedy","Drama","Family"],
  },
  {
    id: 7,
    image: OnlyOnMovie7,
    name: "Honey, I Blew Up the Kid",
    description: "A scientist's toddler son grows gigantic by accident.",
    year: "1992",
    Duration: "–",
    rate: "PG",
    Cast: ["Rick Moranis","Marcia Strassman"],
    genres: ["Comedy","Family","Sci‑Fi"],
  },
  {
    id: 9,
    image: OnlyOnMovie9,
    name: "Wendy",
    description: "A modern, melancholic reimagining of Peter Pan.",
    year: "2020",
    Duration: "100 minutes (approx)",
    rate: "PG‑13",
    Cast: ["Devin France","Yashua Mack"],
    genres: ["Adventure","Fantasy","Drama"],
  },
  {
    id: 10,
    image: OnlyOnMovie11,
    name: "Peter Pan & Wendy",
    description: "The live‑action adaptation of the classic Peter Pan tale.",
    year: "2023",
    Duration: "–",
    rate: "PG",
    Cast: ["Alexander Molony","Ever Anderson"],
    genres: ["Family","Fantasy","Adventure"],
  },
  {
    id: 11,
    image: OnlyOnMovie12,
    name: "Honey, I Blew Up the Kid",
    description: "Same as above (duplicate entry).",
    year: "1992",
    Duration: "PG",
    rate: "Family Comedy",
    Cast: ["Rick Moranis"],
    genres: ["Comedy","Family","Sci‑Fi"],
  },
  {
    id: 12,
    image: OnlyOnMovie13,
    name: "The Love Ring",
    description: "Details unavailable (might be an indie or lesser-known title).",
    year: "N/A",
    Duration: "N/A",
    rate: "N/A",
    Cast: [],
    genres: [],
  },
];


