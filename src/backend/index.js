import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

// Настройка CORS
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(bodyParser.json());

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    console.log('Received form submission:', { name, email, message });

    res.json({
        message: `Thank you for your interest, ${name}. We have received your message.`
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});