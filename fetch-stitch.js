import fs from "fs";
import dotenv from "dotenv";

// تحميل المتغيرات البيئية
dotenv.config();

const API_KEY = process.env.VITE_GOOGLE_API_KEY;
const PROJECT_ID = process.env.VITE_PROJECT_ID;
const SCREEN_ID = process.env.VITE_SCREEN_ID;

// التحقق من وجود المتغيرات
if (!API_KEY || !PROJECT_ID || !SCREEN_ID) {
  console.error(
    "❌ Missing environment variables. Please check your .env file",
  );
  process.exit(1);
}

async function fetchStitchData() {
  try {
    // Fetch screen data
    console.log("Fetching screen data...");
    const response = await fetch(
      `https://stitch.googleapis.com/v1/projects/${PROJECT_ID}/screens/${SCREEN_ID}`,
      {
        headers: {
          "X-Goog-Api-Key": API_KEY,
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Save full response to file
    fs.writeFileSync("stitch_screen_data.json", JSON.stringify(data, null, 2));
    console.log("✅ Screen data saved to stitch_screen_data.json");

    // Extract and display image URLs if any
    if (data.imageUrl) {
      console.log("\n📸 Image URL found:", data.imageUrl);

      // Download image
      const imgResponse = await fetch(data.imageUrl);
      const imgBuffer = await imgResponse.arrayBuffer();
      fs.writeFileSync("stitch_screen_image.png", Buffer.from(imgBuffer));
      console.log("✅ Image downloaded to stitch_screen_image.png");
    }

    // Check for any asset URLs in the data
    const findUrls = (obj, path = "") => {
      const urls = [];
      for (const key in obj) {
        const currentPath = path ? `${path}.${key}` : key;
        if (
          typeof obj[key] === "string" &&
          (obj[key].startsWith("http://") || obj[key].startsWith("https://"))
        ) {
          urls.push({ path: currentPath, url: obj[key] });
        } else if (typeof obj[key] === "object" && obj[key] !== null) {
          urls.push(...findUrls(obj[key], currentPath));
        }
      }
      return urls;
    };

    const allUrls = findUrls(data);
    if (allUrls.length > 0) {
      console.log("\n🔗 Found URLs in data:");
      allUrls.forEach(({ path, url }) => {
        console.log(`  - ${path}: ${url}`);
      });

      // Save URLs to file
      fs.writeFileSync("stitch_urls.json", JSON.stringify(allUrls, null, 2));
      console.log("\n✅ URLs saved to stitch_urls.json");
    }

    console.log("\n📋 Data structure:");
    console.log(JSON.stringify(Object.keys(data), null, 2));
  } catch (error) {
    console.error("❌ Error:", error.message);
  }
}

fetchStitchData();
