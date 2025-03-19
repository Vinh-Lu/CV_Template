import fs from 'fs';
import path from 'path';

export async function GET(request: any) {
  const directory = request.url.split('=')[1]; // Extract folder name from the URL (e.g., WEB_FUTA_LAND)
  const imageDirectory = path.join(process.cwd(),`public/image/${directory}`);

  // Check if the directory exists
  if (!fs.existsSync(imageDirectory)) {
    return new Response('Directory not found',{ status: 404 });
  }

  const files = fs.readdirSync(imageDirectory);

  const images = files
    .filter(file => /\.(png|jpe?g|svg)$/.test(file)) // Filter by image file extensions
    .map(file => ({
      src: `/image/${directory}/${file}`, // Dynamic image path
      width: 3,
      height: 2,
    }));

  return new Response(JSON.stringify(images),{
    headers: { 'Content-Type': 'application/json' },
  });
}
