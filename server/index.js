const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mock Data
const VILLAS = [
    {
        id: 1,
        title: "Azure Horizon Estate",
        location: "Mykonos, Greece",
        price: 3500,
        image: "/images/villa-exterior-1.png",
    },
    {
        id: 2,
        title: "Serenity Cove Villa",
        location: "Phuket, Thailand",
        price: 2800,
        image: "/images/villa-interior-1.png",
    },
    {
        id: 3,
        title: "Oasis Palm Retreat",
        location: "Palm Springs, USA",
        price: 4200,
        image: "/images/villa-exterior-1.png",
    }
];

// Routes
app.get('/api/villas', (req, res) => {
    res.json(VILLAS);
    console.log('GET /api/villas triggered');
});

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Contact form submission:', { name, email, message });
    res.status(200).json({ success: true, message: 'Inquiry received' });
});

app.get('/', (req, res) => {
    res.send('Clean Luxury API is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
