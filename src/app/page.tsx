import fs from 'fs';
import path from 'path';
import { BirthdayPage } from '@/components/BirthdayPage';

export default async function Home() {
  const imageDir = path.join(process.cwd(), 'public', 'images');
  let photoFiles: string[] = [];

  try {
    // Check if directory exists
    if (fs.existsSync(imageDir)) {
      photoFiles = fs.readdirSync(imageDir)
        // Filter for common image file types
        .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
        // Sort files alphabetically
        .sort();
    }
  } catch (error) {
    console.error("Could not read the images directory. Please ensure it exists at `public/images`.", error);
    // Continue with an empty array if reading fails
  }

  const photos = photoFiles.map(file => `/images/${file}`);

  return <BirthdayPage photos={photos} />;
}
