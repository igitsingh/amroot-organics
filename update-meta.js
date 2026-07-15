const fs = require('fs');

const files = [
  "src/app/contact/page.tsx",
  "src/app/learn/research/page.tsx",
  "src/app/learn/single-origin/page.tsx",
  "src/app/learn/knowledge-hub/page.tsx",
  "src/app/learn/faqs/page.tsx",
  "src/app/learn/import-guide/page.tsx",
  "src/app/learn/applications/page.tsx",
  "src/app/learn/curcumin-guide/page.tsx",
  "src/app/learn/certifications/page.tsx",
  "src/app/products/page.tsx",
  "src/app/trace/page.tsx",
  "src/app/privacy/page.tsx",
  "src/app/quality/page.tsx",
  "src/app/terms/page.tsx",
  "src/app/industries/page.tsx",
  "src/app/about/page.tsx",
  "src/app/origin/page.tsx",
  "src/app/community/page.tsx",
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  
  const metadataRegex = /export const metadata:\s*Metadata\s*=\s*{[\s\S]*?};\n?/g;
  const metadataExportRegex = /export const metadata\s*=\s*constructMetadata\({[\s\S]*?}\);\n?/g;
  
  const pageName = file.split('/')[2];
  let intelligenceNode = "home";
  let title = "Organic Spices Supplier";
  let desc = "Premium organic spices exporter from India.";
  
  if (pageName === "contact") { title = "Contact AMROOT Organics"; intelligenceNode = "contact"; desc = "Contact AMROOT Organics for bulk organic spices, wholesale pricing, and export inquiries."; }
  if (pageName === "about") { title = "About AMROOT Organics"; intelligenceNode = "about"; desc = "Learn about AMROOT Organics, our ethical sourcing, and our mission to export premium Indian spices."; }
  if (pageName === "quality") { title = "Organic Quality & Certifications"; intelligenceNode = "quality"; desc = "Explore our rigorous quality control, lab testing, and global organic certifications for export."; }
  if (pageName === "origin") { title = "Single Origin Spices from India"; intelligenceNode = "origin"; desc = "Discover the single-origin sources of our Lakadong Turmeric and Jaintia Hills Ginger in Meghalaya."; }
  if (pageName === "trace") { title = "Spice Supply Chain Traceability"; intelligenceNode = "trace"; desc = "Farm-to-fork traceability ensuring the highest quality organic spices for your brand."; }
  if (pageName === "community") { title = "Fair Trade Spice Farming"; intelligenceNode = "community"; desc = "Our commitment to ethical farming and empowering spice farmers in Meghalaya, India."; }
  if (pageName === "industries") { title = "Organic Spices for Industries"; intelligenceNode = "industries"; desc = "Premium bulk organic spices tailored for food manufacturers, distributors, and retail brands."; }
  if (pageName === "products") { title = "Premium Organic Spices & Extracts"; intelligenceNode = "turmeric"; desc = "Explore our catalog of premium organic turmeric, ginger, and natural extracts for wholesale."; }
  
  if (file.includes('learn/')) {
     const sub = file.split('/')[3].replace(/-/g, ' ');
     title = `Knowledge Hub: ${sub.charAt(0).toUpperCase() + sub.slice(1)}`;
     intelligenceNode = "home"; 
  }
  
  if (file.includes('terms') || file.includes('privacy')) {
     title = file.includes('terms') ? "Terms of Service" : "Privacy Policy";
  }

  if (content.match(metadataRegex)) {
      content = content.replace(metadataRegex, '');
  }
  if (content.match(metadataExportRegex)) {
      content = content.replace(metadataExportRegex, '');
  }
  
  content = content.replace(/import\s+type\s*{\s*Metadata\s*}\s*from\s*['"]next['"];?\n?/g, '');
  content = content.replace(/import\s+{\s*constructMetadata\s*}\s*from\s*['"]@\/lib\/seo\/utils['"];?\n?/g, '');
  content = content.replace(/import\s+{\s*pageIntelligence,?\s*productIntelligence?\s*}\s*from\s*['"]@\/lib\/seo\/intelligence['"];?\n?/g, '');

  const importStr = `import { constructMetadata } from "@/lib/seo/utils";\nimport { pageIntelligence, productIntelligence } from "@/lib/seo/intelligence";\n`;
  
  let keywordStr = `pageIntelligence.${intelligenceNode}?.secondaryKeywords || []`;
  if (intelligenceNode === "turmeric" || intelligenceNode === "ginger") {
      keywordStr = `productIntelligence.${intelligenceNode}?.secondaryKeywords || []`;
  }
  
  const pathPart = file.replace('src/app/', '').replace('/page.tsx', '');
  const urlPart = pathPart === 'page.tsx' ? '' : pathPart; // for home page it should be empty
  const metadataStr = `\nexport const metadata = constructMetadata({\n  title: "${title}",\n  description: "${desc}",\n  keywords: ${keywordStr},\n  canonicalUrl: "https://amrootorganics.com/${urlPart}",\n});\n`;

  const lastImportIndex = content.lastIndexOf("import ");
  if (lastImportIndex !== -1) {
    const endOfImport = content.indexOf('\n', lastImportIndex);
    content = content.slice(0, endOfImport + 1) + '\n' + importStr + metadataStr + content.slice(endOfImport + 1);
  } else {
    content = importStr + metadataStr + '\n' + content;
  }
  
  // clean up multiple newlines
  content = content.replace(/\n{3,}/g, '\n\n');
  
  fs.writeFileSync(file, content);
});
console.log("Done");
