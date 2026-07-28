import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;
const SALUDO = process.env.SALUDO || 'Hola, Docker!';

app.get('/', (req, res) => {
    console.log('[GET] /');

    res.json({
        mensaje: SALUDO,
        hostname: process.env.HOSTNAME,
        timestamp: new Date().toISOString()
    })
});

app.get('/health', (req, res) => {
    console.log('[GET] /health');
    res.status(200).json({ status: 'UP' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});