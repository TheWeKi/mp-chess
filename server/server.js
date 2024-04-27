import { app } from './app.js';
import { connectDB } from './src/database/db.js';

import { PORT } from './constants.js';

app.get('/', (_req, res) => {
    res.json({ status: 'RUNING' });
});

try {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`Server -> http://localhost:${PORT}`);
    });
} catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
}
