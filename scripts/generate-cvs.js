import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import developers from '../src/data/developers.js';

// ensure public directory exists
const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// helper to sanitize file name
function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

console.log('Generating CVs for', developers.length, 'developers...');

developers.forEach(dev => {
  const filename = `cv-${slugify(dev.name)}.pdf`;
  const filePath = path.join(publicDir, filename);
  const doc = new PDFDocument({ size: 'A4', margin: 50 });
  const stream = fs.createWriteStream(filePath);
  doc.pipe(stream);

  // header
  doc.fontSize(22).text(dev.name, { underline: true });
  doc.moveDown(0.5);
  doc.fontSize(16).text(dev.role);
  doc.moveDown();

  // basic info
  doc.fontSize(12).text(dev.bio, { align: 'justify' });
  doc.moveDown();

  // technologies
  doc.fontSize(14).text('Tecnologías:');
  dev.tech.forEach(t => {
    doc.fontSize(12).text(`• ${t.name} (${t.level}%)`);
  });
  doc.moveDown();

  // metrics
  doc.fontSize(14).text('Métricas:');
  Object.entries(dev.metrics).forEach(([key, value]) => {
    const label = key.replace(/_/g, ' ');
    doc.fontSize(12).text(`• ${label}: ${value}`);
  });

  doc.end();
  console.log('  created', filename);
});
