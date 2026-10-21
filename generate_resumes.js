const fs = require('fs');

function createSimplePDF(title, filename) {
  const streamContent = `BT
/F1 20 Tf
50 730 Td
(NISHANTH R - ${title}) Tj
/F1 11 Tf
0 -26 Td
(Email: r.nishanth2004@gmail.com | Phone: +91 8220607076 | Location: Coimbatore, TN) Tj
0 -24 Td
(Education: B.E. in Computer Science & Engineering, Ambal Professional Group of Institutions | CGPA: 7.76/10 | 2017-2021) Tj
0 -24 Td
(Primary Skills: Native PHP, Laravel 10, CodeIgniter 3/4, MySQL, REST APIs, React, JavaScript, AI Vibe-Coding) Tj
0 -24 Td
(Commercial Experience: Icore Software Technologies, Rk Creators, Mexerv, Freelance) Tj
ET`;

  const pdf = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>
endobj
4 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>
endobj
5 0 obj
<< /Length ${streamContent.length} >>
stream
${streamContent}
endstream
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000229 00000 n 
0000000305 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
570
%%EOF`;

  fs.writeFileSync(filename, pdf);
}

createSimplePDF("Resume", "Nishanth_R_Resume.pdf");
createSimplePDF("Full-Stack Developer Resume", "Nishanth_R_Full_Stack_Developer_Resume.pdf");
createSimplePDF("Software Developer Resume", "Nishanth_R_Software_Developer_Resume.pdf");
createSimplePDF("Application Developer Resume", "Nishanth_R_Application_Developer_Resume_2026.pdf");
console.log("Created resume PDFs successfully!");
