import { Property, PropertyType } from './types';

export const MOCK_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Luxury Villa with Garden',
    price: '$850,000',
    location: 'Beverly Hills, CA',
    type: PropertyType.RESIDENTIAL,
    area: '4500 sqft',
    description: 'A stunning modern villa featuring a private garden, pool, and state-of-the-art smart home integration.',
    images: [
      'https://picsum.photos/800/600?random=1',
      'https://picsum.photos/800/600?random=2',
      'https://picsum.photos/800/600?random=3'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dummy1',
    features: ['5 Bedrooms', '4 Bathrooms', 'Pool', 'Garage']
  },
  {
    id: '2',
    title: 'Prime Corner Plot',
    price: '$220,000',
    location: 'Austin, TX',
    type: PropertyType.PLOT,
    area: '5000 sqft',
    description: 'Ready-to-build corner plot in a developing upscale neighborhood. Perfect for a custom home.',
    images: [
      'https://picsum.photos/800/600?random=4',
      'https://picsum.photos/800/600?random=5'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dummy2',
    features: ['Corner Lot', 'Utility Connections', 'Zoned Residential']
  },
  {
    id: '3',
    title: 'Downtown Loft Apartment',
    price: '$450,000',
    location: 'New York, NY',
    type: PropertyType.RESIDENTIAL,
    area: '1200 sqft',
    description: 'Industrial chic loft in the heart of the city. High ceilings and exposed brick walls.',
    images: [
      'https://picsum.photos/800/600?random=6',
      'https://picsum.photos/800/600?random=7'
    ],
    features: ['1 Bedroom', '1.5 Bathrooms', 'City View', 'Gym Access']
  },
  {
    id: '4',
    title: 'Commercial Warehouse Space',
    price: '$1,200,000',
    location: 'Chicago, IL',
    type: PropertyType.OTHER,
    area: '10000 sqft',
    description: 'Expansive warehouse space suitable for logistics or manufacturing. High bay doors.',
    images: [
      'https://picsum.photos/800/600?random=8',
      'https://picsum.photos/800/600?random=9'
    ],
    features: ['Loading Dock', 'Office Space', 'High Ceilings']
  },
  {
    id: '5',
    title: 'Sunset Valley Plot',
    price: '$180,000',
    location: 'Phoenix, AZ',
    type: PropertyType.PLOT,
    area: '7500 sqft',
    description: 'Scenic plot with mountain views. Ideal for a vacation home or retirement villa.',
    images: [
      'https://picsum.photos/800/600?random=10'
    ],
    features: ['Mountain View', 'Flat Terrain']
  },
  {
    id: '6',
    title: 'Modern Office Complex',
    price: '$3,500,000',
    location: 'Seattle, WA',
    type: PropertyType.OTHER,
    area: '15000 sqft',
    description: 'Turnkey office building with conference rooms, break areas, and dedicated parking.',
    images: [
      'https://picsum.photos/800/600?random=11',
      'https://picsum.photos/800/600?random=12'
    ],
    features: ['Conference Rooms', 'Cafeteria', 'Parking Structure']
  }
];

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Residential', path: '/residential' },
  { label: 'Plots', path: '/plot' },
  { label: 'Other', path: '/other' },
];