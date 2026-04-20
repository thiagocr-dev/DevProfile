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

const COLORS = {
  PRIMARY: '#0f172a',
  SECONDARY: '#0ea5e9',
  TEXT: '#1e293b',
  LIGHT_TEXT: '#64748b',
  BORDER: '#e2e8f0',
  WHITE: '#ffffff'
};

console.log('Generating Professional CVs for', developers.length, 'developers...');

developers.forEach(dev => {
  const filename = `cv-${slugify(dev.name)}.pdf`;
  const filePath = path.join(publicDir, filename);
  
  const doc = new PDFDocument({ 
    size: 'A4', 
    margin: 0, // Manual margins for full-width header
    bufferPages: true 
  });
  
  const stream = fs.createWriteStream(filePath);
  doc.pipe(stream);

  // --- HEADER SECTION ---
  doc.rect(0, 0, 595, 120).fill(COLORS.PRIMARY);
  
  doc.fillColor(COLORS.WHITE)
     .fontSize(28)
     .font('Helvetica-Bold')
     .text(dev.name.toUpperCase(), 50, 40);
  
  doc.fillColor(COLORS.SECONDARY)
     .fontSize(16)
     .font('Helvetica')
     .text(dev.role, 50, 75);

  // --- CONTENT SECTION ---
  let currentY = 150;
  const leftColX = 50;
  const rightColX = 350;

  // Professional Summary
  doc.fillColor(COLORS.PRIMARY)
     .fontSize(14)
     .font('Helvetica-Bold')
     .text('RESUMEN PROFESIONAL', leftColX, currentY);
  
  doc.moveTo(leftColX, currentY + 18)
     .lineTo(leftColX + 500, currentY + 18)
     .strokeColor(COLORS.BORDER)
     .lineWidth(1)
     .stroke();

  currentY += 30;

  doc.fillColor(COLORS.TEXT)
     .fontSize(11)
     .font('Helvetica')
     .text(dev.bio, leftColX, currentY, { width: 500, align: 'justify', lineGap: 4 });

  currentY += doc.heightOfString(dev.bio, { width: 500 }) + 40;

  // Two columns for Skills and Metrics
  const startOfColsY = currentY;

  // Left Column: Skills
  doc.fillColor(COLORS.PRIMARY)
     .fontSize(14)
     .font('Helvetica-Bold')
     .text('HABILIDADES TÉCNICAS', leftColX, currentY);
  
  doc.moveTo(leftColX, currentY + 18)
     .lineTo(leftColX + 250, currentY + 18)
     .strokeColor(COLORS.BORDER)
     .stroke();

  currentY += 30;

  dev.tech.forEach(t => {
    doc.fillColor(COLORS.TEXT)
       .fontSize(10)
       .font('Helvetica-Bold')
       .text(t.name, leftColX, currentY);
    
    // Level bar background
    doc.rect(leftColX, currentY + 15, 230, 8)
       .fill(COLORS.BORDER);
    
    // Level bar fill
    doc.rect(leftColX, currentY + 15, (230 * t.level) / 100, 8)
       .fill(COLORS.SECONDARY);
    
    doc.fillColor(COLORS.LIGHT_TEXT)
       .fontSize(9)
       .text(`${t.level}%`, leftColX + 235, currentY + 15);

    currentY += 35;
  });

  // Right Column: Experience/Metrics
  let rightY = startOfColsY;
  doc.fillColor(COLORS.PRIMARY)
     .fontSize(14)
     .font('Helvetica-Bold')
     .text('DATOS Y MÉTRICAS', rightColX, rightY);
  
  doc.moveTo(rightColX, rightY + 18)
     .lineTo(rightColX + 200, rightY + 18)
     .strokeColor(COLORS.BORDER)
     .stroke();

  rightY += 30;

  const metricsData = [
    { label: 'Años de Experiencia', value: dev.metrics.experience_years },
    { label: 'Proyectos Completados', value: dev.metrics.projects_completed },
    { label: 'Repositorios Públicos', value: dev.metrics.repositories },
    { label: 'Nivel de Inglés', value: dev.metrics.english_level }
  ];

  metricsData.forEach(m => {
    doc.fillColor(COLORS.LIGHT_TEXT)
       .fontSize(9)
       .font('Helvetica')
       .text(m.label.toUpperCase(), rightColX, rightY);
    
    doc.fillColor(COLORS.TEXT)
       .fontSize(12)
       .font('Helvetica-Bold')
       .text(m.value, rightColX, rightY + 12);
    
    rightY += 40;
  });

  // --- FOOTER SECTION ---
  doc.fontSize(9)
     .fillColor(COLORS.LIGHT_TEXT)
     .text('Documento generado por DevProfiles - 2026', 50, 780, { align: 'center', width: 500 });
  
  // Minimal contact bar at bottom
  doc.rect(0, 810, 595, 32).fill(COLORS.PRIMARY);
  doc.fillColor(COLORS.WHITE)
     .fontSize(8)
     .text(`GITHUB: github.com/${slugify(dev.name)}   |   LINKEDIN: linkedin.com/in/${slugify(dev.name)}   |   PORTFOLIO: devprofiles.io/profile/${dev.id}`, 0, 822, { align: 'center', width: 595 });

  doc.end();
  console.log('  created', filename);
});
