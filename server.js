// server.js

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// This is the port Render will use. It's important to use process.env.PORT.
const PORT = process.env.PORT || 3000;

// --- Middleware ---
// Enable CORS for all routes, allowing our front-end to make API calls.
app.use(cors());
// Serve static files (HTML, CSS, JS) from the 'public' directory.
app.use(express.static(path.join(__dirname, 'public')));


// --- API Data ---
// In a real app, this would come from a database. For now, we'll hardcode it.
const linksData = [
    {
        id: 1,
        name: 'Tech Updates Channel',
        description: 'Get the latest news in technology, startups, and AI. Daily updates!',
        linkUrl: 'https://whatsapp.com/channel/your-tech-channel-link',
        imageUrl: 'https://i.pravatar.cc/150?img=1', // Placeholder image
        type: 'Channel'
    },
    {
        id: 2,
        name: 'Gamers United Group',
        description: 'A friendly community for gamers to discuss new releases, tips, and tricks.',
        linkUrl: 'https://chat.whatsapp.com/your-gamers-group-link',
        imageUrl: 'https://i.pravatar.cc/150?img=5', // Placeholder image
        type: 'Group'
    },
    {
        id: 3,
        name: 'Learn to Code Channel',
        description: 'Daily coding challenges, resources, and tutorials for web developers.',
        linkUrl: 'https://whatsapp.com/channel/your-coding-channel-link',
        imageUrl: 'https://i.pravatar.cc/150?img=3', // Placeholder image
        type: 'Channel'
    },
    {
        id: 4,
        name: 'Local Hiking Club',
        description: 'Join us to plan and participate in local hiking and trekking adventures.',
        linkUrl: 'https://chat.whatsapp.com/your-hiking-group-link',
        imageUrl: 'https://i.pravatar.cc/150?img=11', // Placeholder image
        type: 'Group'
    }
];

// --- API Route ---
// This endpoint will be called by our front-end JavaScript.
app.get('/api/links', (req, res) => {
    res.json(linksData);
});

// --- Start the Server ---
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});