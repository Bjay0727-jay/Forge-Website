const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

// Ensure public/downloads directory exists
const downloadsDir = path.join(__dirname, '..', 'public', 'downloads');
if (!fs.existsSync(downloadsDir)) {
  fs.mkdirSync(downloadsDir, { recursive: true });
}

// Brand colors
const COLORS = {
  primary: '#0D9488',      // Teal
  secondary: '#1E293B',    // Dark slate
  accent: '#10B981',       // Emerald
  text: '#334155',         // Slate gray
  lightGray: '#F1F5F9',
  white: '#FFFFFF'
};

// Helper function to add header
function addHeader(doc, title, subtitle) {
  // Header background
  doc.rect(0, 0, doc.page.width, 120).fill(COLORS.secondary);

  // Logo placeholder (shield icon simulation)
  doc.rect(50, 30, 40, 45).fill(COLORS.primary);
  doc.fontSize(20).fillColor(COLORS.white).text('F', 62, 42);

  // Company name
  doc.fontSize(24).fillColor(COLORS.white).text('FORGE', 100, 35);
  doc.fontSize(10).fillColor(COLORS.primary).text('CYBER DEFENSE', 100, 62);

  // Title
  doc.fontSize(18).fillColor(COLORS.white).text(title, 50, 85);

  // Subtitle line
  doc.moveTo(50, 115).lineTo(doc.page.width - 50, 115).strokeColor(COLORS.primary).lineWidth(2).stroke();

  doc.y = 140;
  doc.fillColor(COLORS.text);
}

// Helper function to add footer
function addFooter(doc, pageNum) {
  const footerY = doc.page.height - 50;
  doc.fontSize(9).fillColor(COLORS.text);
  doc.text('www.forgecyberdefense.com', 50, footerY);
  doc.text(`Page ${pageNum}`, doc.page.width - 100, footerY);
  doc.text('© 2025 Forge Cyber Defense. All rights reserved.', 50, footerY + 15);
}

// Helper function to add section header
function addSectionHeader(doc, title) {
  doc.moveDown(0.5);
  doc.rect(50, doc.y, doc.page.width - 100, 25).fill(COLORS.lightGray);
  doc.fontSize(12).fillColor(COLORS.secondary).text(title, 60, doc.y + 7);
  doc.moveDown(1.5);
  doc.fillColor(COLORS.text);
}

// Helper function to add checklist item
function addChecklistItem(doc, text, indent = 0) {
  const x = 60 + (indent * 20);
  doc.rect(x, doc.y + 3, 10, 10).lineWidth(1).strokeColor(COLORS.primary).stroke();
  doc.fontSize(10).fillColor(COLORS.text).text(text, x + 18, doc.y, { width: doc.page.width - x - 80 });
  doc.moveDown(0.3);
}

// ============================================================
// PDF 1: FedRAMP Readiness Checklist
// ============================================================
function generateFedRAMPChecklist() {
  const doc = new PDFDocument({ size: 'LETTER', margin: 50 });
  const stream = fs.createWriteStream(path.join(downloadsDir, 'FedRAMP-Readiness-Checklist-Forge.pdf'));
  doc.pipe(stream);

  addHeader(doc, 'FedRAMP Readiness Checklist', 'Your Path to Federal Cloud Authorization');

  doc.fontSize(11).fillColor(COLORS.text);
  doc.text('This checklist will help you assess your organization\'s readiness for FedRAMP authorization. Use this as a guide to identify gaps and prioritize remediation efforts.', { width: doc.page.width - 100 });
  doc.moveDown();

  // Section 1
  addSectionHeader(doc, '1. ORGANIZATIONAL READINESS');
  addChecklistItem(doc, 'Executive sponsorship identified and committed');
  addChecklistItem(doc, 'Dedicated FedRAMP project manager assigned');
  addChecklistItem(doc, 'Budget allocated for authorization process ($250K-$750K typical)');
  addChecklistItem(doc, 'Timeline established (12-18 months for initial authorization)');
  addChecklistItem(doc, 'Internal security team identified or ISSO consultant engaged');

  // Section 2
  addSectionHeader(doc, '2. TECHNICAL INFRASTRUCTURE');
  addChecklistItem(doc, 'Cloud environment deployed in FedRAMP-authorized infrastructure');
  addChecklistItem(doc, 'System boundary clearly defined and documented');
  addChecklistItem(doc, 'Data flow diagrams created');
  addChecklistItem(doc, 'Network architecture documented');
  addChecklistItem(doc, 'Encryption at rest implemented (FIPS 140-2 validated)');
  addChecklistItem(doc, 'Encryption in transit implemented (TLS 1.2+)');
  addChecklistItem(doc, 'Multi-factor authentication deployed');

  // Section 3
  addSectionHeader(doc, '3. SECURITY CONTROLS (NIST 800-53)');
  addChecklistItem(doc, 'Access Control (AC) family implemented');
  addChecklistItem(doc, 'Audit and Accountability (AU) family implemented');
  addChecklistItem(doc, 'Security Assessment (CA) family implemented');
  addChecklistItem(doc, 'Configuration Management (CM) family implemented');
  addChecklistItem(doc, 'Contingency Planning (CP) family implemented');
  addChecklistItem(doc, 'Identification and Authentication (IA) family implemented');
  addChecklistItem(doc, 'Incident Response (IR) family implemented');
  addChecklistItem(doc, 'System and Communications Protection (SC) family implemented');

  // New page
  doc.addPage();
  addHeader(doc, 'FedRAMP Readiness Checklist', 'Continued');

  // Section 4
  addSectionHeader(doc, '4. DOCUMENTATION REQUIREMENTS');
  addChecklistItem(doc, 'System Security Plan (SSP) drafted');
  addChecklistItem(doc, 'Security Assessment Plan (SAP) template ready');
  addChecklistItem(doc, 'Plan of Action and Milestones (POA&M) process established');
  addChecklistItem(doc, 'Incident Response Plan documented');
  addChecklistItem(doc, 'Configuration Management Plan documented');
  addChecklistItem(doc, 'Contingency Plan documented and tested');
  addChecklistItem(doc, 'Privacy Impact Assessment completed (if applicable)');

  // Section 5
  addSectionHeader(doc, '5. CONTINUOUS MONITORING');
  addChecklistItem(doc, 'Vulnerability scanning tools deployed (monthly scans required)');
  addChecklistItem(doc, 'SIEM or log management solution implemented');
  addChecklistItem(doc, 'Penetration testing scheduled (annual requirement)');
  addChecklistItem(doc, 'POA&M tracking process established');
  addChecklistItem(doc, 'Significant change process documented');

  // Section 6
  addSectionHeader(doc, '6. 3PAO ENGAGEMENT');
  addChecklistItem(doc, 'FedRAMP-recognized 3PAO identified');
  addChecklistItem(doc, '3PAO engagement timeline established');
  addChecklistItem(doc, 'Readiness Assessment scheduled (recommended)');
  addChecklistItem(doc, 'Security Assessment scheduled');

  doc.moveDown(2);
  doc.fontSize(10).fillColor(COLORS.primary);
  doc.text('Need help with your FedRAMP journey?', { align: 'center' });
  doc.fontSize(12).fillColor(COLORS.secondary);
  doc.text('Contact Forge Cyber Defense for a free consultation', { align: 'center' });
  doc.fontSize(10).fillColor(COLORS.text);
  doc.text('info@forgecyberdefense.com | www.forgecyberdefense.com', { align: 'center' });

  addFooter(doc, 2);
  doc.end();
  console.log('✓ Generated: FedRAMP-Readiness-Checklist-Forge.pdf');
}

// ============================================================
// PDF 2: CMMC 2.0 Self-Assessment Template
// ============================================================
function generateCMMCTemplate() {
  const doc = new PDFDocument({ size: 'LETTER', margin: 50 });
  const stream = fs.createWriteStream(path.join(downloadsDir, 'CMMC-2-Self-Assessment-Template-Forge.pdf'));
  doc.pipe(stream);

  addHeader(doc, 'CMMC 2.0 Self-Assessment Template', 'Defense Industrial Base Compliance Guide');

  doc.fontSize(11).fillColor(COLORS.text);
  doc.text('Use this template to assess your organization\'s compliance with CMMC 2.0 Level 2 requirements (110 NIST SP 800-171 controls). Document your implementation status and identify gaps.', { width: doc.page.width - 100 });
  doc.moveDown();

  // Assessment Info
  addSectionHeader(doc, 'ASSESSMENT INFORMATION');
  doc.fontSize(10);
  doc.text('Organization Name: _______________________________________');
  doc.moveDown(0.5);
  doc.text('Assessment Date: _________________________________________');
  doc.moveDown(0.5);
  doc.text('Assessor Name: __________________________________________');
  doc.moveDown(0.5);
  doc.text('Target CMMC Level:  ☐ Level 1 (17 controls)   ☐ Level 2 (110 controls)   ☐ Level 3 (110+ controls)');
  doc.moveDown();

  // Domain 1
  addSectionHeader(doc, 'ACCESS CONTROL (AC) - 22 Requirements');
  const acControls = [
    'AC.L1-3.1.1 - Limit system access to authorized users',
    'AC.L1-3.1.2 - Limit system access to authorized functions',
    'AC.L2-3.1.3 - Control CUI flow in accordance with approved authorizations',
    'AC.L2-3.1.4 - Separate duties of individuals to reduce risk',
    'AC.L2-3.1.5 - Employ least privilege principle',
    'AC.L2-3.1.6 - Use non-privileged accounts for non-security functions',
    'AC.L2-3.1.7 - Prevent non-privileged users from executing privileged functions'
  ];
  acControls.forEach(control => addChecklistItem(doc, control));
  doc.fontSize(9).fillColor(COLORS.primary).text('... and 15 additional AC controls (see full NIST 800-171)', 60);
  doc.fillColor(COLORS.text);

  // Domain 2
  addSectionHeader(doc, 'AWARENESS AND TRAINING (AT) - 3 Requirements');
  addChecklistItem(doc, 'AT.L2-3.2.1 - Security awareness training for all users');
  addChecklistItem(doc, 'AT.L2-3.2.2 - Role-based security training for personnel with security responsibilities');
  addChecklistItem(doc, 'AT.L2-3.2.3 - Insider threat awareness training');

  // Domain 3
  addSectionHeader(doc, 'AUDIT AND ACCOUNTABILITY (AU) - 9 Requirements');
  addChecklistItem(doc, 'AU.L2-3.3.1 - Create and retain system audit logs');
  addChecklistItem(doc, 'AU.L2-3.3.2 - Ensure actions can be traced to individual users');
  addChecklistItem(doc, 'AU.L2-3.3.3 - Review and update audit events');
  addChecklistItem(doc, 'AU.L2-3.3.4 - Alert on audit logging process failure');

  // New page
  doc.addPage();
  addHeader(doc, 'CMMC 2.0 Self-Assessment Template', 'Continued');

  // Scoring table
  addSectionHeader(doc, 'COMPLIANCE SCORING SUMMARY');

  doc.fontSize(10);
  const tableTop = doc.y;
  const col1 = 60, col2 = 250, col3 = 350, col4 = 450;

  // Table header
  doc.font('Helvetica-Bold');
  doc.text('Domain', col1, tableTop);
  doc.text('Total Controls', col2, tableTop);
  doc.text('Implemented', col3, tableTop);
  doc.text('Score %', col4, tableTop);
  doc.font('Helvetica');

  doc.moveDown();
  const domains = [
    ['Access Control (AC)', '22', '___', '___'],
    ['Awareness & Training (AT)', '3', '___', '___'],
    ['Audit & Accountability (AU)', '9', '___', '___'],
    ['Configuration Management (CM)', '9', '___', '___'],
    ['Identification & Authentication (IA)', '11', '___', '___'],
    ['Incident Response (IR)', '3', '___', '___'],
    ['Maintenance (MA)', '6', '___', '___'],
    ['Media Protection (MP)', '9', '___', '___'],
    ['Personnel Security (PS)', '2', '___', '___'],
    ['Physical Protection (PE)', '6', '___', '___'],
    ['Risk Assessment (RA)', '3', '___', '___'],
    ['Security Assessment (CA)', '4', '___', '___'],
    ['System & Comm Protection (SC)', '16', '___', '___'],
    ['System & Info Integrity (SI)', '7', '___', '___']
  ];

  domains.forEach(row => {
    doc.text(row[0], col1, doc.y);
    doc.text(row[1], col2, doc.y - 12);
    doc.text(row[2], col3, doc.y - 12);
    doc.text(row[3], col4, doc.y - 12);
    doc.moveDown(0.3);
  });

  doc.moveDown();
  doc.font('Helvetica-Bold');
  doc.text('TOTAL', col1, doc.y);
  doc.text('110', col2, doc.y - 12);
  doc.text('___', col3, doc.y - 12);
  doc.text('___', col4, doc.y - 12);
  doc.font('Helvetica');

  doc.moveDown(2);
  addSectionHeader(doc, 'NEXT STEPS');
  doc.fontSize(10);
  doc.text('1. Complete assessment of all 110 controls against your environment');
  doc.moveDown(0.3);
  doc.text('2. Document evidence for each implemented control');
  doc.moveDown(0.3);
  doc.text('3. Create POA&M for controls not yet implemented');
  doc.moveDown(0.3);
  doc.text('4. Engage C3PAO for formal assessment (Level 2)');
  doc.moveDown(0.3);
  doc.text('5. Submit results to SPRS (Supplier Performance Risk System)');

  doc.moveDown(2);
  doc.fontSize(10).fillColor(COLORS.primary);
  doc.text('Need CMMC compliance assistance?', { align: 'center' });
  doc.fontSize(12).fillColor(COLORS.secondary);
  doc.text('Forge Cyber Defense specializes in DIB compliance', { align: 'center' });
  doc.fontSize(10).fillColor(COLORS.text);
  doc.text('info@forgecyberdefense.com | www.forgecyberdefense.com', { align: 'center' });

  addFooter(doc, 2);
  doc.end();
  console.log('✓ Generated: CMMC-2-Self-Assessment-Template-Forge.pdf');
}

// ============================================================
// PDF 3: Compliance Cost Calculator
// ============================================================
function generateCostCalculator() {
  const doc = new PDFDocument({ size: 'LETTER', margin: 50 });
  const stream = fs.createWriteStream(path.join(downloadsDir, 'Compliance-Cost-Calculator-Forge.pdf'));
  doc.pipe(stream);

  addHeader(doc, 'Compliance Cost Calculator', 'Estimate Your Security Compliance Investment');

  doc.fontSize(11).fillColor(COLORS.text);
  doc.text('Use this worksheet to estimate the total cost of your compliance initiative. Costs vary significantly based on organization size, complexity, and current security posture.', { width: doc.page.width - 100 });
  doc.moveDown();

  // FedRAMP Section
  addSectionHeader(doc, 'FEDRAMP AUTHORIZATION COSTS');

  doc.fontSize(10);
  const tableX = 60;

  doc.font('Helvetica-Bold');
  doc.text('Cost Category', tableX);
  doc.text('Low Estimate', 300, doc.y - 12);
  doc.text('High Estimate', 420, doc.y - 12);
  doc.text('Your Estimate', 520, doc.y - 12);
  doc.font('Helvetica');
  doc.moveDown(0.5);

  const fedRampCosts = [
    ['3PAO Assessment', '$150,000', '$350,000', '$_______'],
    ['Documentation (SSP, etc.)', '$50,000', '$150,000', '$_______'],
    ['Technical Remediation', '$100,000', '$500,000', '$_______'],
    ['Continuous Monitoring (Year 1)', '$75,000', '$200,000', '$_______'],
    ['Internal Staff/Consultants', '$100,000', '$300,000', '$_______'],
    ['Tools & Infrastructure', '$25,000', '$100,000', '$_______'],
  ];

  fedRampCosts.forEach(row => {
    doc.text(row[0], tableX);
    doc.text(row[1], 300, doc.y - 12);
    doc.text(row[2], 420, doc.y - 12);
    doc.text(row[3], 520, doc.y - 12);
    doc.moveDown(0.5);
  });

  doc.font('Helvetica-Bold').fillColor(COLORS.primary);
  doc.text('FedRAMP Total:', tableX);
  doc.text('$500,000', 300, doc.y - 12);
  doc.text('$1,600,000', 420, doc.y - 12);
  doc.text('$_______', 520, doc.y - 12);
  doc.font('Helvetica').fillColor(COLORS.text);
  doc.moveDown();

  // CMMC Section
  addSectionHeader(doc, 'CMMC 2.0 CERTIFICATION COSTS');

  doc.font('Helvetica-Bold');
  doc.text('Cost Category', tableX);
  doc.text('Level 1', 300, doc.y - 12);
  doc.text('Level 2', 400, doc.y - 12);
  doc.text('Your Estimate', 520, doc.y - 12);
  doc.font('Helvetica');
  doc.moveDown(0.5);

  const cmmcCosts = [
    ['C3PAO Assessment', 'Self-Attest', '$50,000-$150,000', '$_______'],
    ['Gap Assessment', '$5,000', '$15,000-$50,000', '$_______'],
    ['Technical Remediation', '$10,000', '$50,000-$200,000', '$_______'],
    ['Documentation', '$5,000', '$20,000-$75,000', '$_______'],
    ['Training', '$2,000', '$10,000-$25,000', '$_______'],
  ];

  cmmcCosts.forEach(row => {
    doc.text(row[0], tableX);
    doc.text(row[1], 300, doc.y - 12);
    doc.text(row[2], 400, doc.y - 12);
    doc.text(row[3], 520, doc.y - 12);
    doc.moveDown(0.5);
  });

  doc.font('Helvetica-Bold').fillColor(COLORS.primary);
  doc.text('CMMC Total:', tableX);
  doc.text('~$22,000', 300, doc.y - 12);
  doc.text('$145K-$500K', 400, doc.y - 12);
  doc.text('$_______', 520, doc.y - 12);
  doc.font('Helvetica').fillColor(COLORS.text);

  // New page
  doc.addPage();
  addHeader(doc, 'Compliance Cost Calculator', 'Continued');

  // Other frameworks
  addSectionHeader(doc, 'OTHER COMPLIANCE FRAMEWORKS');

  doc.fontSize(10);
  doc.font('Helvetica-Bold');
  doc.text('Framework', tableX);
  doc.text('Typical Range', 320, doc.y - 12);
  doc.text('Your Estimate', 480, doc.y - 12);
  doc.font('Helvetica');
  doc.moveDown(0.5);

  const otherCosts = [
    ['SOC 2 Type II', '$50,000 - $200,000', '$_______'],
    ['HIPAA Compliance', '$50,000 - $300,000', '$_______'],
    ['ISO 27001 Certification', '$40,000 - $150,000', '$_______'],
    ['FISMA/RMF (per system)', '$150,000 - $500,000', '$_______'],
    ['StateRAMP', '$100,000 - $400,000', '$_______'],
    ['PCI DSS', '$50,000 - $200,000', '$_______'],
  ];

  otherCosts.forEach(row => {
    doc.text(row[0], tableX);
    doc.text(row[1], 320, doc.y - 12);
    doc.text(row[2], 480, doc.y - 12);
    doc.moveDown(0.5);
  });

  doc.moveDown();

  // ROI Section
  addSectionHeader(doc, 'ROI CONSIDERATIONS');
  doc.fontSize(10);
  doc.text('• Federal contracts often require compliance - no certification = no contract');
  doc.moveDown(0.3);
  doc.text('• Average federal contract value: $500K - $50M+');
  doc.moveDown(0.3);
  doc.text('• Compliance reduces breach risk (average breach cost: $4.45M in 2023)');
  doc.moveDown(0.3);
  doc.text('• Competitive advantage in regulated markets');
  doc.moveDown(0.3);
  doc.text('• Insurance premium reductions possible');

  doc.moveDown(2);

  // Summary box
  doc.rect(50, doc.y, doc.page.width - 100, 80).fill(COLORS.lightGray);
  doc.fontSize(12).fillColor(COLORS.secondary);
  doc.text('YOUR TOTAL ESTIMATED COMPLIANCE INVESTMENT', 60, doc.y + 15, { align: 'center' });
  doc.moveDown();
  doc.fontSize(14).fillColor(COLORS.primary);
  doc.text('$________________________', { align: 'center' });

  doc.moveDown(4);
  doc.fontSize(10).fillColor(COLORS.primary);
  doc.text('Want a detailed cost estimate for your organization?', { align: 'center' });
  doc.fontSize(12).fillColor(COLORS.secondary);
  doc.text('Schedule a free consultation with Forge Cyber Defense', { align: 'center' });
  doc.fontSize(10).fillColor(COLORS.text);
  doc.text('info@forgecyberdefense.com | www.forgecyberdefense.com', { align: 'center' });

  addFooter(doc, 2);
  doc.end();
  console.log('✓ Generated: Compliance-Cost-Calculator-Forge.pdf');
}

// ============================================================
// PDF 4: FISMA Readiness Checklist
// ============================================================
function generateFISMAChecklist() {
  const doc = new PDFDocument({ size: 'LETTER', margin: 50 });
  const stream = fs.createWriteStream(path.join(downloadsDir, 'FISMA-Readiness-Checklist-Forge.pdf'));
  doc.pipe(stream);

  addHeader(doc, 'FISMA Readiness Checklist', 'Federal Information Security Modernization Act Compliance');

  doc.fontSize(11).fillColor(COLORS.text);
  doc.text('This checklist covers the key requirements for FISMA compliance using the NIST Risk Management Framework (RMF). Use this to assess your federal information system\'s security posture.', { width: doc.page.width - 100 });
  doc.moveDown();

  // System Info
  addSectionHeader(doc, 'SYSTEM INFORMATION');
  doc.fontSize(10);
  doc.text('System Name: ____________________________________________');
  doc.moveDown(0.5);
  doc.text('System Owner: ___________________________________________');
  doc.moveDown(0.5);
  doc.text('ISSO: __________________________________________________');
  doc.moveDown(0.5);
  doc.text('FIPS 199 Impact Level:  ☐ Low   ☐ Moderate   ☐ High');
  doc.moveDown();

  // RMF Step 1
  addSectionHeader(doc, 'STEP 1: CATEGORIZE INFORMATION SYSTEM');
  addChecklistItem(doc, 'Identify information types processed, stored, or transmitted');
  addChecklistItem(doc, 'Determine impact levels (confidentiality, integrity, availability)');
  addChecklistItem(doc, 'Complete FIPS 199 Security Categorization');
  addChecklistItem(doc, 'Document system boundary');
  addChecklistItem(doc, 'Obtain AO approval of categorization');

  // RMF Step 2
  addSectionHeader(doc, 'STEP 2: SELECT SECURITY CONTROLS');
  addChecklistItem(doc, 'Identify baseline controls from NIST 800-53 (based on impact level)');
  addChecklistItem(doc, 'Apply tailoring guidance');
  addChecklistItem(doc, 'Document control selection rationale');
  addChecklistItem(doc, 'Identify common controls (inherited from organization)');
  addChecklistItem(doc, 'Develop continuous monitoring strategy');

  // RMF Step 3
  addSectionHeader(doc, 'STEP 3: IMPLEMENT SECURITY CONTROLS');
  addChecklistItem(doc, 'Implement selected security controls');
  addChecklistItem(doc, 'Document implementation in System Security Plan (SSP)');
  addChecklistItem(doc, 'Update system architecture documentation');
  addChecklistItem(doc, 'Configure systems according to security requirements');

  // New page
  doc.addPage();
  addHeader(doc, 'FISMA Readiness Checklist', 'Continued');

  // RMF Step 4
  addSectionHeader(doc, 'STEP 4: ASSESS SECURITY CONTROLS');
  addChecklistItem(doc, 'Develop Security Assessment Plan (SAP)');
  addChecklistItem(doc, 'Select or engage independent assessor');
  addChecklistItem(doc, 'Conduct security control assessment');
  addChecklistItem(doc, 'Document findings in Security Assessment Report (SAR)');
  addChecklistItem(doc, 'Conduct vulnerability scanning');
  addChecklistItem(doc, 'Perform penetration testing (as required)');

  // RMF Step 5
  addSectionHeader(doc, 'STEP 5: AUTHORIZE INFORMATION SYSTEM');
  addChecklistItem(doc, 'Prepare authorization package (SSP, SAR, POA&M)');
  addChecklistItem(doc, 'Conduct risk determination');
  addChecklistItem(doc, 'Submit package to Authorizing Official (AO)');
  addChecklistItem(doc, 'Obtain Authorization to Operate (ATO)');
  addChecklistItem(doc, 'Document authorization decision');

  // RMF Step 6
  addSectionHeader(doc, 'STEP 6: MONITOR SECURITY CONTROLS');
  addChecklistItem(doc, 'Implement continuous monitoring program');
  addChecklistItem(doc, 'Conduct ongoing security control assessments');
  addChecklistItem(doc, 'Perform monthly vulnerability scanning');
  addChecklistItem(doc, 'Maintain and update POA&M');
  addChecklistItem(doc, 'Report security status to AO');
  addChecklistItem(doc, 'Manage configuration changes');
  addChecklistItem(doc, 'Conduct annual security reviews');

  // Key Documents
  addSectionHeader(doc, 'REQUIRED DOCUMENTATION');
  addChecklistItem(doc, 'System Security Plan (SSP)');
  addChecklistItem(doc, 'Security Assessment Plan (SAP)');
  addChecklistItem(doc, 'Security Assessment Report (SAR)');
  addChecklistItem(doc, 'Plan of Action and Milestones (POA&M)');
  addChecklistItem(doc, 'Authorization Decision Letter');
  addChecklistItem(doc, 'Contingency Plan');
  addChecklistItem(doc, 'Incident Response Plan');
  addChecklistItem(doc, 'Configuration Management Plan');

  doc.moveDown(2);
  doc.fontSize(10).fillColor(COLORS.primary);
  doc.text('Need FISMA/RMF compliance support?', { align: 'center' });
  doc.fontSize(12).fillColor(COLORS.secondary);
  doc.text('Forge Cyber Defense provides full lifecycle RMF services', { align: 'center' });
  doc.fontSize(10).fillColor(COLORS.text);
  doc.text('info@forgecyberdefense.com | www.forgecyberdefense.com', { align: 'center' });

  addFooter(doc, 2);
  doc.end();
  console.log('✓ Generated: FISMA-Readiness-Checklist-Forge.pdf');
}

// Generate all PDFs
console.log('\nGenerating PDF lead magnets for Forge Cyber Defense...\n');
generateFedRAMPChecklist();
generateCMMCTemplate();
generateCostCalculator();
generateFISMAChecklist();
console.log('\n✅ All PDFs generated in public/downloads/\n');
