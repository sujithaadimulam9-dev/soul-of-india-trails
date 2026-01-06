export interface Place {
  id: string;
  name: string;
  state: string;
  category: 'temple' | 'fort' | 'heritage' | 'festival' | 'city';
  shortDescription: string;
  description: string;
  history: string;
  significance: string;
  image: string;
  gallery: string[];
  bestTime: string;
  entryFee: string;
  timings: string;
  rating: number;
  reviews: number;
  nearbyAttractions: string[];
  coordinates: { lat: number; lng: number };
}

export const places: Place[] = [
  {
    id: 'taj-mahal',
    name: 'Taj Mahal',
    state: 'Uttar Pradesh',
    category: 'heritage',
    shortDescription: 'A symbol of eternal love, the Taj Mahal is one of the Seven Wonders of the World.',
    description: 'The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, India. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal.',
    history: 'Construction began in 1632 and was completed around 1653. It is believed that over 20,000 artisans worked on the structure. The principal designer is thought to have been Ustad Ahmad Lahori, an Indian of Persian descent.',
    significance: 'The Taj Mahal is considered the finest example of Mughal architecture, a style that combines Indian, Persian, and Islamic elements. In 1983, it became a UNESCO World Heritage Site.',
    image: '/src/assets/hero-taj-mahal.jpg',
    gallery: ['/src/assets/hero-taj-mahal.jpg'],
    bestTime: 'October to March',
    entryFee: '₹50 for Indians, ₹1,100 for foreigners',
    timings: '6:00 AM to 6:30 PM (Closed on Fridays)',
    rating: 4.9,
    reviews: 45230,
    nearbyAttractions: ['Agra Fort', 'Fatehpur Sikri', 'Mehtab Bagh', 'Itmad-ud-Daulah'],
    coordinates: { lat: 27.1751, lng: 78.0421 }
  },
  {
    id: 'hampi',
    name: 'Hampi',
    state: 'Karnataka',
    category: 'heritage',
    shortDescription: 'Ancient ruins of the Vijayanagara Empire scattered across boulder-strewn landscapes.',
    description: 'Hampi is an ancient village in the south Indian state of Karnataka. It is the site of the former capital of the Vijayanagara Empire, set amid the ruins of ancient temples and palace structures.',
    history: 'Founded in the 14th century, Hampi was the capital of the prosperous Vijayanagara Empire. At its peak, it was the second-largest medieval city in the world after Beijing.',
    significance: 'Hampi is a UNESCO World Heritage Site, recognized for its outstanding collection of temple ruins and ancient monuments. The site showcases the grandeur of the Vijayanagara Empire.',
    image: '/src/assets/hampi.jpg',
    gallery: ['/src/assets/hampi.jpg'],
    bestTime: 'October to February',
    entryFee: '₹40 for Indians, ₹600 for foreigners',
    timings: '6:00 AM to 6:00 PM',
    rating: 4.7,
    reviews: 18450,
    nearbyAttractions: ['Virupaksha Temple', 'Vittala Temple', 'Elephant Stables', 'Lotus Mahal'],
    coordinates: { lat: 15.3350, lng: 76.4600 }
  },
  {
    id: 'amber-fort',
    name: 'Amber Fort',
    state: 'Rajasthan',
    category: 'fort',
    shortDescription: 'A majestic hilltop fortress combining Rajput and Mughal architecture.',
    description: 'Amber Fort is a fort located in Amber, Rajasthan, India. Known for its artistic Hindu style elements, the fort stands overlooking Maota Lake and is the principal tourist attraction in Jaipur.',
    history: 'Built by Raja Man Singh I in 1592, the fort was later expanded by his descendants over a period of 150 years. It served as the capital of the Kachwaha Rajputs.',
    significance: 'The fort is known for its artistic Hindu elements with large ramparts, series of gates and cobbled paths. It is part of the Hill Forts of Rajasthan UNESCO World Heritage Site.',
    image: '/src/assets/amber-fort.jpg',
    gallery: ['/src/assets/amber-fort.jpg'],
    bestTime: 'October to March',
    entryFee: '₹100 for Indians, ₹500 for foreigners',
    timings: '8:00 AM to 5:30 PM',
    rating: 4.6,
    reviews: 28120,
    nearbyAttractions: ['Jaigarh Fort', 'Nahargarh Fort', 'Hawa Mahal', 'City Palace'],
    coordinates: { lat: 26.9855, lng: 75.8513 }
  },
  {
    id: 'konark-sun-temple',
    name: 'Konark Sun Temple',
    state: 'Odisha',
    category: 'temple',
    shortDescription: 'A 13th-century temple designed as a giant chariot with ornate stone wheels.',
    description: 'The Konark Sun Temple is a 13th-century CE Sun temple at Konark, about 35 km from Puri. It is shaped like a giant chariot with elaborately carved stone wheels, pillars, and walls.',
    history: 'Built by King Narasimhadeva I of the Eastern Ganga Dynasty around 1250 CE, the temple was designed as a massive chariot of the Sun God Surya, with twelve pairs of wheels.',
    significance: "The temple is a UNESCO World Heritage Site and is considered a masterpiece of Kalinga architecture. The temple's most iconic features are its 24 intricately carved stone wheels.",
    image: '/src/assets/konark-sun-temple.jpg',
    gallery: ['/src/assets/konark-sun-temple.jpg'],
    bestTime: 'October to March',
    entryFee: '₹40 for Indians, ₹600 for foreigners',
    timings: '6:00 AM to 8:00 PM',
    rating: 4.8,
    reviews: 12340,
    nearbyAttractions: ['Puri Jagannath Temple', 'Chandrabhaga Beach', 'Archaeological Museum'],
    coordinates: { lat: 19.8876, lng: 86.0945 }
  },
  {
    id: 'meenakshi-temple',
    name: 'Meenakshi Amman Temple',
    state: 'Tamil Nadu',
    category: 'temple',
    shortDescription: 'A historic Hindu temple with towering gopurams covered in colorful sculptures.',
    description: 'Meenakshi Temple is a historic Hindu temple located on the southern bank of the Vaigai River in Madurai, Tamil Nadu. It is dedicated to Goddess Meenakshi and Lord Sundareswarar.',
    history: 'The original temple was built by Kulasekara Pandya, but the present structure was built between 1623-1655 CE. The temple has been continuously maintained and expanded over centuries.',
    significance: 'The temple is one of the most important pilgrimage centers in South India. Its 14 gateway towers, called gopurams, are adorned with thousands of mythological figures.',
    image: '/src/assets/meenakshi-temple.jpg',
    gallery: ['/src/assets/meenakshi-temple.jpg'],
    bestTime: 'October to March',
    entryFee: 'Free (Camera fee: ₹50)',
    timings: '5:00 AM to 12:30 PM, 4:00 PM to 10:00 PM',
    rating: 4.7,
    reviews: 21560,
    nearbyAttractions: ['Thirumalai Nayakkar Palace', 'Gandhi Museum', 'Alagar Kovil'],
    coordinates: { lat: 9.9195, lng: 78.1193 }
  },
  {
    id: 'mysore-palace',
    name: 'Mysore Palace',
    state: 'Karnataka',
    category: 'fort',
    shortDescription: 'A spectacular royal residence illuminated with 97,000 lights on special occasions.',
    description: 'Mysore Palace is a historical palace and royal residence located within the Old Fort in Mysuru. It is the official residence of the Wadiyar dynasty and the seat of the Kingdom of Mysore.',
    history: 'The current palace was constructed between 1897 and 1912, after the old wooden palace was destroyed by fire. It was designed by British architect Henry Irwin.',
    significance: 'The palace is one of the most visited tourist attractions in India. During the Dasara festival, the palace is illuminated with nearly 100,000 light bulbs.',
    image: '/src/assets/mysore-palace.jpg',
    gallery: ['/src/assets/mysore-palace.jpg'],
    bestTime: 'September to February',
    entryFee: '₹70 for Indians, ₹200 for foreigners',
    timings: '10:00 AM to 5:30 PM',
    rating: 4.5,
    reviews: 32100,
    nearbyAttractions: ['Chamundi Hills', 'Brindavan Gardens', 'St. Philomena Church', 'Mysore Zoo'],
    coordinates: { lat: 12.3052, lng: 76.6552 }
  },
  {
    id: 'khajuraho',
    name: 'Khajuraho Temples',
    state: 'Madhya Pradesh',
    category: 'temple',
    shortDescription: 'Medieval Hindu and Jain temples famous for their intricate sculptures.',
    description: 'The Khajuraho Group of Monuments is a group of Hindu and Jain temples famous for their nagara-style architectural symbolism and erotic sculptures.',
    history: 'Built between 950 and 1050 CE by the Chandela dynasty, there were originally 85 temples, of which only about 25 temples remain today, spread over 6 square kilometers.',
    significance: 'The temples are a UNESCO World Heritage Site and represent one of the most outstanding examples of medieval art and architecture in India.',
    image: '/src/assets/khajuraho.jpg',
    gallery: ['/src/assets/khajuraho.jpg'],
    bestTime: 'October to March',
    entryFee: '₹40 for Indians, ₹600 for foreigners',
    timings: 'Sunrise to Sunset',
    rating: 4.6,
    reviews: 15780,
    nearbyAttractions: ['Raneh Falls', 'Panna National Park', 'Ajaigarh Fort'],
    coordinates: { lat: 24.8318, lng: 79.9199 }
  },
  {
    id: 'varanasi',
    name: 'Varanasi Ghats',
    state: 'Uttar Pradesh',
    category: 'city',
    shortDescription: 'The spiritual capital of India with ancient ghats along the sacred Ganges.',
    description: 'Varanasi is one of the oldest continuously inhabited cities in the world. The ghats of Varanasi are embankments along the Ganges River where pilgrims bathe and perform rituals.',
    history: 'Varanasi has been a cultural and religious center since at least the 11th century BCE. It was known to the Greeks as Benaras and to the Chinese pilgrims as Polonisi.',
    significance: 'Varanasi is considered one of the holiest cities in Hinduism, Buddhism, and Jainism. The Ganga Aarti performed at Dashashwamedh Ghat is a major spiritual experience.',
    image: '/src/assets/heritage-cities-category.jpg',
    gallery: ['/src/assets/heritage-cities-category.jpg'],
    bestTime: 'October to March',
    entryFee: 'Free',
    timings: 'Open 24 hours',
    rating: 4.8,
    reviews: 38900,
    nearbyAttractions: ['Kashi Vishwanath Temple', 'Sarnath', 'Ramnagar Fort', 'Banaras Hindu University'],
    coordinates: { lat: 25.3176, lng: 83.0081 }
  }
];

export const categories = [
  { id: 'temple', name: 'Temples', icon: '🛕', color: 'saffron' },
  { id: 'fort', name: 'Forts & Palaces', icon: '🏰', color: 'terracotta' },
  { id: 'heritage', name: 'UNESCO Heritage Sites', icon: '🏛️', color: 'deep-green' },
  { id: 'festival', name: 'Festivals & Traditions', icon: '🎉', color: 'gold' },
  { id: 'city', name: 'Cultural Cities', icon: '🌆', color: 'maroon' }
];

export const states = [
  'Uttar Pradesh',
  'Karnataka',
  'Rajasthan',
  'Odisha',
  'Tamil Nadu',
  'Madhya Pradesh'
];
