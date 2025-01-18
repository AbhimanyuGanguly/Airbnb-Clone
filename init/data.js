const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    geometry: { type: "Point", coordinates: [ -118.7798, 34.0259] },
    category: "trending",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    geometry: { type: "Point", coordinates: [-74.0060, 40.7128] },
    category: "iconic_cities",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    geometry: { type: "Point", coordinates: [-106.8175, 39.1911] },
    category: "mountains",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    geometry: { type: "Point", coordinates: [11.2558, 43.7696] },
    category: "castles",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    geometry: { type: "Point", coordinates: [-122.676483,45.523064] },
    category: "camping",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    geometry: { type: "Point", coordinates: [-86.8466, 21.1743] },
    category: "amazing_pools",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    geometry: { type: "Point", coordinates: [-120.0324, 39.0968] },
    category: "mountains",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    geometry: { type: "Point", coordinates: [-118.2437, 34.0522] },
    category: "iconic_cities",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    geometry: { type: "Point", coordinates: [7.2337, 46.0948] },
    category: "arctic",
  },
  {
    title: "Farmhouse in the Countryside",
    description:
      "Enjoy a peaceful retreat in this charming farmhouse. Explore the countryside and enjoy homegrown meals.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg",
    },
    price: 1200,
    location: "Kentucky",
    country: "United States",
    geometry: { type: "Point", coordinates: [-84.2700, 37.8393] },
    category: "farm",
  },
  {
    title: "Luxury Yacht for Rent",
    price: 5000,
    category: "boats",  // Category is set to 'boats'
    image: { 
      filename: "listingimage",
      url: "https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?cs=srgb&dl=pexels-pixabay-163236.jpg&fm=jpg"  // Add your image URL here
    },
    description: "Experience luxury on the water with our fully equipped yacht.",
    location: "Goa",
    country: "India",
    geometry:{
      type: "Point", 
      coordinates: [74.1240, 15.2993]  // Example coordinates for a location, replace with actual ones
    }
  },
  {
    title: "Private Yacht Charter in the Maldives",
    price: 5000,
    description: "Enjoy a private yacht charter with stunning views of the Maldives.",
    category: "boats",
    image: {
      url: "https://img.freepik.com/free-photo/beautiful-shot-sailing-boat-travelling-across-sea-surrounded-by-mountains_181624-20836.jpg?t=st=1736854948~exp=1736858548~hmac=09dfcc6a539b9e75e52da667c357ed218577263e88690296bc92a1ef148733c8&w=996"
    },
    location:"Maldives",
    country:"Maldives",
    geometry: {
      type: "Point",
      coordinates: [73.5079, 4.1796]
    }
  },
  {
    title: "Stunning Geodesic Dome in the Hills",
    description: "A beautiful dome-shaped home with breathtaking views, perfect for a getaway in the mountains.",
    price: 1500,
    category: "domes",
    location:"Saana Hills",
    country:"Finland",
    geometry: {
      type: "Point",
      coordinates: [20.7994, 69.0461] // Example coordinates for Goa
    },
    image: {
      url: "https://images.unsplash.com/photo-1669414011876-15fdae79cc09?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  },
  {
    title: "Stay in a Cozy Ice Hotel in the Arctic Circle",
    description: "Experience the magic of the Arctic with a stay in this unique ice hotel, complete with ice sculptures and cold nights.",
    price: 3000,
    category: "arctic",
    geometry: {
      type: "Point",
      coordinates: [129.6755, 62.0355] 
    },
    location: "Yakutsk",
    country:"Russia",
    image: {
      url: "https://st3.depositphotos.com/9643694/13351/i/450/depositphotos_133513448-stock-photo-artic-winter-landscape.jpg"
    }
  }
  
];
module.exports = { data: sampleListings };
