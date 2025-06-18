import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import compression from 'compression';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createProductionServer() {
  const app = express();
  
  // Enable compression
  app.use(compression());
  
  // Serve static files
  app.use(express.static(path.resolve(__dirname, 'dist'), {
    index: false
  }));

  // Import the built server entry
  const { render } = await import('./dist-server/entry-server.js');

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      // Read index.html
      let template = fs.readFileSync(
        path.resolve(__dirname, 'dist/index.html'),
        'utf-8'
      );

      // Render app HTML
      const { html: appHtml } = await render(url);

      // Inject app HTML into template
      const html = template.replace(`<div id="root"></div>`, `<div id="root">${appHtml}</div>`);

      // Send rendered HTML
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      console.error(e);
      next(e);
    }
  });

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Production server running at http://localhost:${port}`);
  });
}

createProductionServer(); 