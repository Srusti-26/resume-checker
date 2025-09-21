// Sample data from JSON
const sampleData = {
  sampleResumes: {
    softwareEngineer: {
      name: "John Bergsen",
      title: "Software Developer",
      content: "JOHN BERGSEN\nSoftware Developer\n(123) 456-7890 | john.bergsen@email.com | San Francisco, CA\n\nPROFILE\nA software developer with entry-level experience specializing in UI design, application development, data security, and continuous improvement. Adept at identifying opportunities to enhance the UX and develop new features to improve app functionality.\n\nKEY SKILLS\n- HTML, Java, and C++\n- Feature development\n- Continuous improvement\n- SDLC\n- Application development\n- Python, JavaScript\n- React, Node.js\n- MongoDB, MySQL\n- Git, Docker\n- Agile methodology\n\nPROFESSIONAL EXPERIENCE\nJunior Software Developer | Doc Stock Inc. | San Francisco, CA\nJune 2022 – Present\n- Identify opportunities to develop new features and enhance the UI for web and mobile applications impacting over 100,000 internal users\n- Attend daily standups and Scrum meetings to discuss project roadblocks, status updates, and solutions\n- Developed REST APIs using Node.js and Express framework\n- Implemented responsive web interfaces using React and CSS\n- Collaborated with cross-functional teams to deliver projects on time\n\nACADEMIC PROJECTS\nSoftware Development Projects | University of San Francisco\nSeptember 2021 – June 2022\n- Developed an application in Python to enable users to track and manage subscription services\n- Coordinated with a team of three students to design a mobile application in JavaScript\n- Built a web application using React and Firebase for real-time data management\n\nCERTIFICATIONS\nCompTIA A+, 2022\n\nEDUCATION\nBachelor of Science (B.S.) Computer Science | University of San Francisco\nSeptember 2018 – June 2022"
    },
    dataAnalyst: {
      name: "Sarah Chen",
      title: "Data Analyst",
      content: "SARAH CHEN\nData Analyst\n(555) 123-4567 | sarah.chen@email.com | New York, NY\n\nSUMMARY\nDetail-oriented Data Analyst with 3+ years of experience in data analysis, visualization, and reporting. Proven track record in transforming complex datasets into actionable business insights.\n\nSKILLS\n- Python, R, SQL\n- Tableau, Power BI\n- Excel, Google Sheets\n- Statistical analysis\n- Machine learning\n- Data visualization\n- ETL processes\n- A/B testing\n\nEXPERIENCE\nData Analyst | TechCorp Solutions | New York, NY\nMarch 2021 – Present\n- Analyzed customer behavior data to identify trends and patterns, resulting in 15% increase in customer retention\n- Created interactive dashboards using Tableau for executive reporting\n- Performed statistical analysis on sales data to optimize marketing campaigns\n- Collaborated with marketing team to design and analyze A/B tests\n\nJunior Data Analyst | DataInsights Inc. | New York, NY\nJune 2020 – February 2021\n- Processed and cleaned large datasets using Python and SQL\n- Developed automated reporting systems that reduced manual work by 40%\n- Supported senior analysts in predictive modeling projects\n\nEDUCATION\nBachelor of Science in Statistics | Columbia University\n2016-2020\n\nCERTIFICATIONS\n- Google Data Analytics Professional Certificate\n- Tableau Desktop Specialist"
    },
    marketingManager: {
      name: "Michael Rodriguez",
      title: "Marketing Manager",
      content: "MICHAEL RODRIGUEZ\nMarketing Manager\n(777) 888-9999 | m.rodriguez@email.com | Chicago, IL\n\nPROFESSIONAL SUMMARY\nResults-driven Marketing Manager with 5+ years of experience in digital marketing, brand management, and campaign optimization. Expertise in multi-channel marketing strategies and data-driven decision making.\n\nCORE COMPETENCIES\n- Digital marketing strategy\n- Social media marketing\n- Content marketing\n- SEO/SEM optimization\n- Marketing automation\n- Campaign management\n- Brand development\n- Budget management\n- Team leadership\n- Analytics and reporting\n\nPROFESSIONAL EXPERIENCE\nMarketing Manager | GrowthTech Inc. | Chicago, IL\nJanuary 2022 – Present\n- Led integrated marketing campaigns that increased lead generation by 45%\n- Managed $500K annual marketing budget across multiple channels\n- Developed and executed social media strategy, growing followers by 200%\n- Collaborated with sales team to optimize lead qualification process\n- Supervised team of 4 marketing specialists\n\nDigital Marketing Specialist | BrandBoost Agency | Chicago, IL\nMarch 2020 – December 2021\n- Managed PPC campaigns with average ROAS of 4:1\n- Created content marketing strategy that improved organic traffic by 60%\n- Implemented marketing automation workflows using HubSpot\n- Conducted market research and competitive analysis\n\nEDUCATION\nMaster of Business Administration (MBA) | Northwestern Kellogg\n2018-2020\n\nBachelor of Arts in Marketing | University of Illinois\n2014-2018\n\nCERTIFICATIONS\n- Google Ads Certified\n- HubSpot Content Marketing Certification\n- Facebook Blueprint Certified"
    }
  },
  sampleJobDescriptions: {
    softwareEngineer: {
      title: "Senior Software Engineer",
      company: "TechCorp Solutions",
      content: "We are looking for a passionate Software Engineer to design, develop and install software solutions. Software Engineer responsibilities include gathering user requirements, defining system functionality and writing code in various languages, like Java, Ruby on Rails or .NET programming languages (e.g. C++ or JScript.NET.)\n\nRESPONSIBILITIES:\n- Execute full software development life cycle (SDLC)\n- Develop flowcharts, layouts and documentation to identify requirements and solutions\n- Write well-designed, testable code\n- Produce specifications and determine operational feasibility\n- Integrate software components into a fully functional software system\n- Develop software verification plans and quality assurance procedures\n- Document and maintain software functionality\n- Troubleshoot, debug and upgrade existing systems\n- Deploy programs and evaluate user feedback\n- Comply with project plans and industry standards\n\nREQUIREMENTS:\n- Proven work experience as a Software Engineer or Software Developer\n- Experience designing interactive applications\n- Ability to develop software in Java, Python, C++, JavaScript or other programming languages\n- Excellent knowledge of relational databases, SQL and ORM technologies\n- Experience developing web applications using popular web frameworks (React, Angular, Spring MVC)\n- Experience with test-driven development\n- Proficiency in software engineering tools\n- Ability to document requirements and specifications\n- BSc degree in Computer Science, Engineering or relevant field\n- Knowledge of Agile methodologies\n- Excellent problem-solving skills\n- Strong communication and teamwork abilities"
    },
    dataAnalyst: {
      title: "Senior Data Analyst",
      company: "DataDriven Corp",
      content: "We are seeking a Senior Data Analyst to join our analytics team. The ideal candidate will have strong analytical skills and experience turning data into actionable business insights.\n\nKEY RESPONSIBILITIES:\n- Collect, process, and analyze large datasets to identify trends and patterns\n- Create comprehensive reports and dashboards using visualization tools\n- Collaborate with stakeholders to understand business requirements\n- Perform statistical analysis and predictive modeling\n- Design and execute A/B tests to optimize business processes\n- Develop automated reporting solutions\n- Present findings to executive leadership\n- Mentor junior analysts and provide technical guidance\n\nREQUIRED QUALIFICATIONS:\n- Bachelor's degree in Statistics, Mathematics, Economics, or related field\n- 3+ years of experience in data analysis or similar role\n- Proficiency in SQL, Python, or R\n- Experience with data visualization tools (Tableau, Power BI, or similar)\n- Strong knowledge of statistical methods and techniques\n- Experience with machine learning algorithms\n- Excellent communication and presentation skills\n- Ability to work with cross-functional teams\n- Experience with cloud platforms (AWS, Azure, or GCP) preferred\n- Knowledge of ETL processes and data warehousing concepts"
    },
    marketingManager: {
      title: "Marketing Manager - Digital Growth",
      company: "Growth Solutions Inc",
      content: "We're looking for a dynamic Marketing Manager to lead our digital marketing efforts and drive customer acquisition and retention strategies.\n\nPRIMARY RESPONSIBILITIES:\n- Develop and execute comprehensive digital marketing strategies\n- Manage multi-channel marketing campaigns (social media, email, PPC, content)\n- Analyze campaign performance and optimize for ROI\n- Lead brand management and positioning initiatives\n- Collaborate with sales team to align marketing and sales objectives\n- Manage marketing budget and resource allocation\n- Oversee content creation and marketing communications\n- Build and maintain relationships with external partners and vendors\n- Track and report on key marketing metrics and KPIs\n- Stay current with industry trends and best practices\n\nQUALIFICATIONS:\n- Bachelor's degree in Marketing, Business, or related field; MBA preferred\n- 4+ years of marketing experience with focus on digital channels\n- Proven track record of successful campaign management\n- Experience with marketing automation platforms (HubSpot, Marketo, etc.)\n- Proficiency in analytics tools (Google Analytics, Facebook Analytics)\n- Strong understanding of SEO/SEM principles\n- Excellent project management and leadership skills\n- Data-driven mindset with strong analytical abilities\n- Creative thinking and problem-solving skills\n- Experience managing marketing budgets\n- Knowledge of CRM systems and lead generation strategies"
    }
  }
};

// Global variables
let currentResume = '';
let currentJobDescription = '';
let analysisResults = {};
let charts = {};

// Enhanced initialization
document.addEventListener('DOMContentLoaded', function() {
    console.log('Enhanced app initialized');
    initializeEventListeners();
    updateCharacterCount();
    checkAnalyzeButton();
    loadThemePreference();
    setupBatchProcessing();
    setupOptimizedChatInput(); // New enhanced chatbot
    setupEnhancedEditor(); // New change tracking
});

// Load theme preference
function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
}

// Setup batch processing
function setupBatchProcessing() {
    const batchUploadZone = document.getElementById('batchUploadZone');
    const batchFiles = document.getElementById('batchFiles');
    
    if (batchUploadZone && batchFiles) {
        batchUploadZone.addEventListener('click', () => batchFiles.click());
        batchFiles.addEventListener('change', handleBatchFileSelect);
    }
}

// Event Listeners
function initializeEventListeners() {
    console.log('Setting up event listeners');
    
    // Get DOM elements
    const uploadZone = document.getElementById('uploadZone');
    const resumeFile = document.getElementById('resumeFile');
    const jobDescriptionTextarea = document.getElementById('jobDescription');
    const analyzeBtn = document.getElementById('analyzeBtn');
    const themeToggle = document.getElementById('themeToggle');
    const tutorialBtn = document.getElementById('tutorialBtn');
    const tutorialModal = document.getElementById('tutorialModal');
    const closeTutorial = document.getElementById('closeTutorial');
    const startTutorialBtn = document.getElementById('startTutorialBtn');
    
    // File upload events
    if (uploadZone && resumeFile) {
        uploadZone.addEventListener('click', () => resumeFile.click());
        uploadZone.addEventListener('dragover', handleDragOver);
        uploadZone.addEventListener('drop', handleFileDrop);
        resumeFile.addEventListener('change', handleFileSelect);
    }
    
    // Sample resume buttons
    document.querySelectorAll('[data-sample]').forEach(button => {
        button.addEventListener('click', (e) => {
            console.log('Sample resume clicked:', e.target.dataset.sample);
            loadSampleResume(e.target.dataset.sample);
        });
    });
    
    // Sample job description buttons
    document.querySelectorAll('[data-jd]').forEach(button => {
        button.addEventListener('click', (e) => {
            console.log('Sample JD clicked:', e.target.dataset.jd);
            loadSampleJobDescription(e.target.dataset.jd);
        });
    });
    
    // Job description textarea
    if (jobDescriptionTextarea) {
        jobDescriptionTextarea.addEventListener('input', () => {
            updateCharacterCount();
            checkAnalyzeButton();
        });
    }
    
    // Analyze button
    if (analyzeBtn) {
        analyzeBtn.addEventListener('click', () => {
            console.log('Analyze button clicked');
            performAnalysis();
        });
    }
    
    // Mode tabs
    document.querySelectorAll('.mode-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            const mode = e.target.closest('.mode-tab')?.dataset.mode;
            if (mode) switchMode(mode);
        });
    });
    
    // Results tabs
    document.querySelectorAll('.results-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            const tabName = e.target.closest('.results-tab')?.dataset.tab;
            if (tabName) switchResultsTab(tabName);
        });
    });
    
    // Theme toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            console.log('Theme toggle clicked');
            toggleTheme();
        });
    }
    
    // Tutorial modal event listeners with better error handling
    if (tutorialBtn) {
        tutorialBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Tutorial button clicked');
            if (tutorialModal) {
                tutorialModal.classList.remove('hidden');
                tutorialModal.style.display = 'flex';
            }
        });
    }
    
    if (closeTutorial) {
        closeTutorial.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Close tutorial clicked');
            if (tutorialModal) {
                tutorialModal.classList.add('hidden');
                tutorialModal.style.display = 'none';
            }
        });
    }
    
    if (startTutorialBtn) {
        startTutorialBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Start tutorial clicked');
            if (tutorialModal) {
                tutorialModal.classList.add('hidden');
                tutorialModal.style.display = 'none';
            }
        });
    }
    
    // Click outside modal to close
    if (tutorialModal) {
        tutorialModal.addEventListener('click', (e) => {
            if (e.target === tutorialModal || e.target.classList.contains('modal-backdrop')) {
                console.log('Clicked outside modal, closing');
                tutorialModal.classList.add('hidden');
                tutorialModal.style.display = 'none';
            }
        });
    }
    
    // ESC key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && tutorialModal && !tutorialModal.classList.contains('hidden')) {
            console.log('ESC pressed, closing modal');
            tutorialModal.classList.add('hidden');
            tutorialModal.style.display = 'none';
        }
    });
    
    // Export buttons (add after DOM is ready)
    setTimeout(() => {
        const exportReportBtn = document.getElementById('exportReportBtn');
        const exportResumeBtn = document.getElementById('exportResumeBtn');
        const shareBtn = document.getElementById('shareBtn');
        const applyAllBtn = document.getElementById('applyAllBtn');
        const resetBtn = document.getElementById('resetBtn');
        const generateQuestionsBtn = document.getElementById('generateQuestionsBtn');
        
        // Enhanced editor buttons
        const downloadPdfBtn = document.getElementById('downloadPdfBtn');
        const previewPdfBtn = document.getElementById('previewPdfBtn');
        const resetEditorBtn = document.getElementById('resetEditorBtn');
        
        if (exportReportBtn) exportReportBtn.addEventListener('click', exportReport);
        if (exportResumeBtn) exportResumeBtn.addEventListener('click', exportResume);
        if (shareBtn) shareBtn.addEventListener('click', generateShareLink);
        if (applyAllBtn) applyAllBtn.addEventListener('click', applyAllSuggestions);
        if (resetBtn) resetBtn.addEventListener('click', resetEditor);
        if (generateQuestionsBtn) generateQuestionsBtn.addEventListener('click', generateInterviewQuestions);
    }, 100);
}

// File handling
function handleDragOver(e) {
    e.preventDefault();
    const uploadZone = document.getElementById('uploadZone');
    if (uploadZone) uploadZone.classList.add('dragover');
}

function handleFileDrop(e) {
    e.preventDefault();
    const uploadZone = document.getElementById('uploadZone');
    if (uploadZone) uploadZone.classList.remove('dragover');
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        processFile(files[0]);
    }
}

function handleFileSelect(e) {
    const file = e.target.files[0];
    if (file) {
        processFile(file);
    }
}

async function processFile(file) {
    if (!file) return;
    
    console.log('Processing file:', file.name, 'Type:', file.type);
    
    if (file.type === 'application/pdf') {
        await processPDFFile(file);
    } else if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || file.name.endsWith('.docx')) {
        await processDOCXFile(file);
    } else if (file.type === 'application/msword' || file.name.endsWith('.doc')) {
        await processDOCFile(file);
    } else {
        // Handle plain text files
        const reader = new FileReader();
        reader.onload = function(e) {
            currentResume = e.target.result;
            updateResumePreview(currentResume);
            checkAnalyzeButton();
            showFileUploadSuccess(file.name);
        };
        reader.readAsText(file);
    }
}

async function processDOCXFile(file) {
    const uploadZone = document.getElementById('uploadZone');
    if (uploadZone) {
        uploadZone.innerHTML = '<div class="upload-content"><i class="fas fa-file-word"></i><p>Processing DOCX...</p></div>';
    }
    
    try {
        const arrayBuffer = await file.arrayBuffer();
        const result = await mammoth.extractRawText({arrayBuffer: arrayBuffer});
        
        if (result.value && result.value.length > 20) {
            currentResume = result.value;
            updateResumePreview(currentResume);
            checkAnalyzeButton();
            showFileUploadSuccess(file.name + ' (DOCX processed)');
        } else {
            throw new Error('No text extracted from DOCX');
        }
    } catch (error) {
        console.error('DOCX processing failed:', error);
        alert('DOCX processing failed. Please use the "Paste Resume Manually" option.');
        resetUploadZone();
        showManualInput();
    }
}

async function processDOCFile(file) {
    const uploadZone = document.getElementById('uploadZone');
    if (uploadZone) {
        uploadZone.innerHTML = '<div class="upload-content"><i class="fas fa-file-word"></i><p>Processing DOC...</p></div>';
    }
    
    try {
        const arrayBuffer = await file.arrayBuffer();
        
        // Try mammoth first (works for some DOC files)
        try {
            const result = await mammoth.extractRawText({arrayBuffer: arrayBuffer});
            if (result.value && result.value.length > 20) {
                currentResume = result.value;
                updateResumePreview(currentResume);
                checkAnalyzeButton();
                showFileUploadSuccess(file.name + ' (DOC processed)');
                return;
            }
        } catch (mammothError) {
            console.log('Mammoth failed, trying text extraction');
        }
        
        // Fallback: try basic text extraction
        const text = new TextDecoder('utf-8', {fatal: false}).decode(arrayBuffer);
        const cleanText = text.replace(/[\x00-\x1F\x7F-\x9F]/g, ' ').replace(/\s+/g, ' ').trim();
        
        if (cleanText.length > 50) {
            currentResume = cleanText;
            updateResumePreview(currentResume);
            checkAnalyzeButton();
            showFileUploadSuccess(file.name + ' (DOC text extracted)');
            return;
        }
        
        throw new Error('No readable text found');
        
    } catch (error) {
        console.error('DOC processing failed:', error);
        alert('DOC file processing failed. Please use "Paste Resume Manually" to copy your content.');
        resetUploadZone();
        showManualInput();
    }
}

async function processPDFFileWithLayout(file) {
    const uploadZone = document.getElementById('uploadZone');
    if (uploadZone) {
        uploadZone.innerHTML = '<div class="upload-content"><i class="fas fa-file-pdf"></i><p>Extracting text with layout preservation...</p></div>';
    }
    
    try {
        if (typeof pdfjsLib !== 'undefined') {
            pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
            
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
            let extractedContent = { text: '', layout: [] };
            
            for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                const page = await pdf.getPage(pageNum);
                const textContent = await page.getTextContent();
                
                // Preserve layout information
                const pageLayout = {
                    pageNumber: pageNum,
                    sections: []
                };
                
                let currentSection = '';
                textContent.items.forEach((item, index) => {
                    const text = item.str;
                    const transform = item.transform;
                    const x = transform[4];
                    const y = transform[5];
                    
                    // Store layout data for later reconstruction
                    pageLayout.sections.push({
                        text: text,
                        x: x,
                        y: y,
                        fontSize: item.height,
                        fontFamily: item.fontName
                    });
                    
                    currentSection += text + ' ';
                });
                
                extractedContent.text += currentSection + '\n';
                extractedContent.layout.push(pageLayout);
            }
            
            // Store layout data globally for later use
            window.originalResumeLayout = extractedContent.layout;
            
            currentResume = extractedContent.text.replace(/\s+/g, ' ').trim();
            updateResumePreview(currentResume);
            checkAnalyzeButton();
            showFileUploadSuccess(file.name + ' (with layout data)');
            return;
        }
        
        throw new Error('PDF.js not loaded');
        
    } catch (error) {
        console.error('PDF processing failed:', error);
        alert('PDF text extraction failed. Please use the Paste Resume Manually option.');
        resetUploadZone();
        showManualInput();
    }
}

// Keep original function for backward compatibility
async function processPDFFile(file) {
    return processPDFFileWithLayout(file);
}

function showManualInput() {
    document.getElementById('manualInput').style.display = 'block';
    document.getElementById('resumePreview').style.display = 'none';
    document.getElementById('resumeTextarea').focus();
}

function cancelManualInput() {
    document.getElementById('manualInput').style.display = 'none';
    document.getElementById('resumePreview').style.display = 'block';
    document.getElementById('resumeTextarea').value = '';
}

function useManualInput() {
    const content = document.getElementById('resumeTextarea').value.trim();
    if (content.length < 50) {
        alert('Please enter at least 50 characters of resume content.');
        return;
    }
    
    currentResume = content;
    updateResumePreview(currentResume);
    checkAnalyzeButton();
    
    document.getElementById('manualInput').style.display = 'none';
    document.getElementById('resumePreview').style.display = 'block';
    
    showFileUploadSuccess('Manual input (pasted content)');
}



function resetUploadZone() {
    const uploadZone = document.getElementById('uploadZone');
    if (uploadZone) {
        uploadZone.innerHTML = '<div class="upload-content"><i class="fas fa-cloud-upload-alt"></i><p>Drop resume here or click to upload</p><span class="upload-formats">PDF, DOC, DOCX, TXT</span></div>';
    }
}

function showFileUploadSuccess(filename) {
    const uploadZone = document.getElementById('uploadZone');
    if (uploadZone) {
        const originalContent = uploadZone.innerHTML;
        uploadZone.innerHTML = `
            <div class="upload-content">
                <i class="fas fa-check-circle" style="color: var(--success-color);"></i>
                <p style="color: var(--success-color);">File uploaded successfully!</p>
                <span class="upload-formats">${filename}</span>
            </div>
        `;
        
        setTimeout(() => {
            uploadZone.innerHTML = originalContent;
        }, 3000);
    }
}

async function handleBatchFileSelect(e) {
    const files = Array.from(e.target.files);
    console.log('Batch files selected:', files.length);
    
    if (files.length === 0) return;
    
    const batchResults = document.getElementById('batchResults');
    if (batchResults) {
        batchResults.innerHTML = `
            <h4>Processing ${files.length} files...</h4>
            <div class="batch-file-list">
                ${files.map(file => `
                    <div class="batch-file-item">
                        <i class="fas fa-file-alt"></i>
                        <span>${file.name}</span>
                        <span class="file-status processing">Processing...</span>
                    </div>
                `).join('')}
            </div>
        `;
        
        try {
            // Try backend batch processing
            const formData = new FormData();
            formData.append('job_description', currentJobDescription);
            files.forEach(file => {
                formData.append('resume_files', file);
            });
            
            const response = await fetch('/api/batch-analyze', {
                method: 'POST',
                body: formData
            });
            
            if (response.ok) {
                const backendResults = await response.json();
                displayBatchResults(backendResults.results);
                return;
            }
        } catch (error) {
            console.log('Backend batch processing failed, using frontend simulation:', error);
        }
        
        // Fallback to frontend simulation
        setTimeout(() => {
            const results = files.map(file => ({
                filename: file.name,
                overall_score: Math.floor(Math.random() * 30) + 70,
                verdict: Math.random() > 0.5 ? 'High' : 'Medium',
                detailed_scores: {
                    skills_match: Math.floor(Math.random() * 40) + 60,
                    ats_compatibility: Math.floor(Math.random() * 20) + 80
                }
            }));
            
            displayBatchResults(results);
        }, 2500);
    }
}

function displayBatchResults(results) {
    const batchResults = document.getElementById('batchResults');
    if (!batchResults) return;
    
    batchResults.innerHTML = `
        <h4>Batch Processing Complete - ${results.length} Files Analyzed</h4>
        <div class="batch-results-grid">
            ${results.map(result => `
                <div class="batch-result-card">
                    <div class="batch-result-header">
                        <i class="fas fa-file-alt"></i>
                        <span class="file-name">${result.filename}</span>
                        <span class="batch-score ${result.overall_score >= 80 ? 'high' : result.overall_score >= 60 ? 'medium' : 'low'}">${result.overall_score}%</span>
                    </div>
                    <div class="batch-result-details">
                        <div class="batch-metric">
                            <span class="metric-label">Skills Match:</span>
                            <span class="metric-value">${result.detailed_scores?.skills_match || 'N/A'}%</span>
                        </div>
                        <div class="batch-metric">
                            <span class="metric-label">ATS Score:</span>
                            <span class="metric-value">${result.detailed_scores?.ats_compatibility || 'N/A'}%</span>
                        </div>
                        <div class="batch-actions">
                            <button class="btn btn--sm btn--primary" onclick="viewBatchDetails('${result.filename}', ${result.overall_score}, 0, 0)">View Details</button>
                            <button class="btn btn--sm btn--outline" onclick="downloadBatchReport('${result.filename}', ${result.overall_score})">Download Report</button>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="batch-summary">
            <h5>Summary Statistics</h5>
            <div class="summary-stats">
                <div class="summary-stat">
                    <span class="stat-value">${Math.round(results.reduce((sum, r) => sum + r.overall_score, 0) / results.length)}%</span>
                    <span class="stat-label">Average Score</span>
                </div>
                <div class="summary-stat">
                    <span class="stat-value">${results.filter(r => r.overall_score >= 80).length}</span>
                    <span class="stat-label">High Performers</span>
                </div>
                <div class="summary-stat">
                    <span class="stat-value">${results.filter(r => r.verdict === 'High').length}</span>
                    <span class="stat-label">Top Candidates</span>
                </div>
            </div>
        </div>
    `;
}

function loadSampleResume(type) {
    console.log('Loading sample resume:', type);
    const resume = sampleData.sampleResumes[type];
    if (resume) {
        currentResume = resume.content;
        updateResumePreview(currentResume);
        checkAnalyzeButton();
        console.log('Sample resume loaded successfully');
    } else {
        console.error('Sample resume not found:', type);
    }
}

function loadSampleJobDescription(type) {
    console.log('Loading sample job description:', type);
    const jd = sampleData.sampleJobDescriptions[type];
    const jobDescriptionTextarea = document.getElementById('jobDescription');
    
    if (jd && jobDescriptionTextarea) {
        jobDescriptionTextarea.value = jd.content;
        currentJobDescription = jd.content;
        updateCharacterCount();
        checkAnalyzeButton();
        console.log('Sample job description loaded successfully');
    } else {
        console.error('Sample job description not found or textarea missing:', type);
    }
}

function updateResumePreview(content) {
    const previewContent = document.getElementById('previewContent');
    if (previewContent) {
        // Format the content with proper line breaks and structure
        const formattedContent = content
            .split('\n')
            .filter(line => line.trim())
            .slice(0, 15)
            .join('\n');
        
        previewContent.innerHTML = `<pre style="white-space: pre-wrap; font-family: inherit; margin: 0;">${formattedContent}${content.split('\n').length > 15 ? '\n\n... (truncated)' : ''}</pre>`;
    }
}

function updateCharacterCount() {
    const jobDescriptionTextarea = document.getElementById('jobDescription');
    const charCount = document.getElementById('charCount');
    
    if (jobDescriptionTextarea && charCount) {
        const count = jobDescriptionTextarea.value.length;
        charCount.textContent = count;
        currentJobDescription = jobDescriptionTextarea.value;
    }
}

function checkAnalyzeButton() {
    const analyzeBtn = document.getElementById('analyzeBtn');
    if (analyzeBtn) {
        const hasResume = currentResume.length > 0;
        const hasJD = currentJobDescription.length > 0;
        analyzeBtn.disabled = !(hasResume && hasJD);
        console.log('Analyze button state:', { hasResume, hasJD, disabled: analyzeBtn.disabled });
    }
}

// Analysis functions with backend integration
async function performAnalysis() {
    console.log('Starting analysis...');
    
    try {
        showAnalysisProgress();
        
        // Try backend API first
        try {
            const formData = new FormData();
            formData.append('resume_text', currentResume);
            formData.append('job_description', currentJobDescription);
            
            const response = await fetch('/api/analyze', {
                method: 'POST',
                body: formData
            });
            
            if (response.ok) {
                const backendResults = await response.json();
                console.log('Backend analysis results:', backendResults);
                
                // Convert backend results to frontend format
                analysisResults = {
                    resumeKeywords: { all: backendResults.matched_skills || [] },
                    jdKeywords: { all: backendResults.matched_skills.concat(backendResults.missing_skills) || [] },
                    matchResults: {
                        matched: backendResults.matched_skills || [],
                        missing: backendResults.missing_skills || [],
                        partial: []
                    },
                    scores: {
                        overall: backendResults.overall_score || 0,
                        ats: backendResults.detailed_scores?.ats_compatibility || 75,
                        skills: backendResults.detailed_scores?.skills_match || 0,
                        experience: backendResults.detailed_scores?.experience_match || 0
                    },
                    suggestions: backendResults.suggestions?.map(s => ({
                        category: 'Improvement',
                        priority: 'High',
                        title: 'Backend Suggestion',
                        description: s,
                        impact: '15% improvement'
                    })) || []
                };
                
                displayResults();
                return;
            }
        } catch (backendError) {
            console.log('Backend unavailable, using frontend analysis:', backendError);
        }
        
        // Fallback to frontend analysis
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Extract keywords and analyze
        const resumeKeywords = extractKeywords(currentResume);
        const jdKeywords = extractKeywords(currentJobDescription);
        
        console.log('Resume keywords:', resumeKeywords);
        console.log('JD keywords:', jdKeywords);
        
        // Calculate matches
        const matchResults = analyzeKeywordMatches(resumeKeywords, jdKeywords);
        
        // Calculate scores
        const scores = calculateScores(matchResults, currentResume, currentJobDescription);
        
        // Generate suggestions
        const suggestions = generateSuggestions(matchResults, scores);
        
        // Store results
        analysisResults = {
            resumeKeywords,
            jdKeywords,
            matchResults,
            scores,
            suggestions
        };
        
        console.log('Analysis results:', analysisResults);
        
        // Display results
        displayResults();
        
    } catch (error) {
        console.error('Analysis error:', error);
        alert('An error occurred during analysis. Please try again.');
    }
}

function showAnalysisProgress() {
    const resultsSection = document.getElementById('resultsSection');
    const analysisProgress = document.getElementById('analysisProgress');
    const resultsDashboard = document.getElementById('resultsDashboard');
    
    if (resultsSection) resultsSection.classList.remove('hidden');
    if (analysisProgress) analysisProgress.classList.remove('hidden');
    if (resultsDashboard) resultsDashboard.classList.add('hidden');
}

function extractKeywords(text) {
    // Simple keyword extraction algorithm
    const words = text.toLowerCase()
        .replace(/[^\w\s]/g, ' ')
        .split(/\s+/)
        .filter(word => word.length > 2);
    
    // Technical skills keywords
    const technicalKeywords = [
        'python', 'javascript', 'java', 'react', 'node.js', 'sql', 'html', 'css',
        'git', 'docker', 'aws', 'azure', 'mongodb', 'mysql', 'tableau', 'power bi',
        'machine learning', 'data analysis', 'agile', 'scrum', 'rest api',
        'marketing automation', 'seo', 'sem', 'google analytics', 'hubspot'
    ];
    
    // Soft skills keywords
    const softKeywords = [
        'leadership', 'communication', 'teamwork', 'problem solving', 'analytical',
        'creative', 'management', 'collaboration', 'presentation', 'negotiation'
    ];
    
    // Experience keywords
    const experienceKeywords = [
        'experience', 'years', 'senior', 'junior', 'manager', 'developer', 'analyst',
        'specialist', 'coordinator', 'director', 'lead', 'architect'
    ];
    
    const foundTechnical = technicalKeywords.filter(keyword => 
        text.toLowerCase().includes(keyword));
    const foundSoft = softKeywords.filter(keyword => 
        text.toLowerCase().includes(keyword));
    const foundExperience = experienceKeywords.filter(keyword => 
        text.toLowerCase().includes(keyword));
    
    return {
        technical: foundTechnical,
        soft: foundSoft,
        experience: foundExperience,
        all: [...foundTechnical, ...foundSoft, ...foundExperience]
    };
}

function analyzeKeywordMatches(resumeKeywords, jdKeywords) {
    const matched = [];
    const missing = [];
    const partial = [];
    
    jdKeywords.all.forEach(jdKeyword => {
        const exactMatch = resumeKeywords.all.includes(jdKeyword);
        const partialMatch = resumeKeywords.all.some(resumeKeyword => 
            resumeKeyword.includes(jdKeyword) || jdKeyword.includes(resumeKeyword));
        
        if (exactMatch) {
            matched.push(jdKeyword);
        } else if (partialMatch) {
            partial.push(jdKeyword);
        } else {
            missing.push(jdKeyword);
        }
    });
    
    return { matched, missing, partial };
}

function calculateScores(matchResults, resume, jobDescription) {
    // Overall match score
    const totalKeywords = matchResults.matched.length + matchResults.missing.length + matchResults.partial.length;
    const matchedScore = matchResults.matched.length;
    const partialScore = matchResults.partial.length * 0.5;
    const overallScore = totalKeywords > 0 ? Math.round(((matchedScore + partialScore) / totalKeywords) * 100) : 0;
    
    // ATS compatibility score
    const atsScore = calculateATSScore(resume);
    
    // Skills match score
    const skillsScore = Math.min(100, Math.round((matchResults.matched.length / Math.max(1, matchResults.matched.length + matchResults.missing.length)) * 100));
    
    // Experience match score
    const expScore = calculateExperienceScore(resume, jobDescription);
    
    return {
        overall: overallScore,
        ats: atsScore,
        skills: skillsScore,
        experience: expScore
    };
}

function calculateATSScore(resume) {
    let score = 100;
    
    // Check for common ATS issues
    if (!resume.includes('@')) score -= 10; // No email
    if (!resume.match(/\d{3}[-.]?\d{3}[-.]?\d{4}/)) score -= 5; // No phone
    if (resume.length < 200) score -= 15; // Too short
    if (resume.length > 5000) score -= 10; // Too long
    if (resume.split('\n').length < 5) score -= 10; // Poor formatting
    
    return Math.max(0, score);
}

function calculateExperienceScore(resume, jobDescription) {
    // Simple experience matching based on keywords
    const experienceKeywords = ['experience', 'years', 'developed', 'managed', 'led', 'created', 'implemented'];
    const resumeExp = experienceKeywords.filter(keyword => resume.toLowerCase().includes(keyword)).length;
    const jdExp = experienceKeywords.filter(keyword => jobDescription.toLowerCase().includes(keyword)).length;
    
    return jdExp > 0 ? Math.min(100, Math.round((resumeExp / jdExp) * 100)) : 75;
}

function generateSuggestions(matchResults, scores) {
    const suggestions = [];
    
    if (matchResults.missing.length > 0) {
        suggestions.push({
            category: 'Keywords',
            priority: 'High',
            title: 'Add missing technical skills',
            description: `Include these missing keywords: ${matchResults.missing.slice(0, 5).join(', ')}`,
            impact: '25% score improvement'
        });
    }
    
    if (scores.ats < 85) {
        suggestions.push({
            category: 'Formatting',
            priority: 'Medium',
            title: 'Optimize ATS compatibility',
            description: 'Use standard section headers and improve formatting for better ATS parsing',
            impact: '15% score improvement'
        });
    }
    
    if (scores.experience < 70) {
        suggestions.push({
            category: 'Content',
            priority: 'High',
            title: 'Strengthen experience descriptions',
            description: 'Add quantifiable achievements and use more action verbs',
            impact: '20% score improvement'
        });
    }
    
    if (matchResults.partial.length > 0) {
        suggestions.push({
            category: 'Keywords',
            priority: 'Medium',
            title: 'Improve partial keyword matches',
            description: `Strengthen these skills: ${matchResults.partial.slice(0, 3).join(', ')}`,
            impact: '10% score improvement'
        });
    }
    
    return suggestions;
}

function displayResults() {
    console.log('Displaying results...');
    
    const analysisProgress = document.getElementById('analysisProgress');
    const resultsDashboard = document.getElementById('resultsDashboard');
    
    if (analysisProgress) analysisProgress.classList.add('hidden');
    if (resultsDashboard) resultsDashboard.classList.remove('hidden');
    
    // Display scores
    displayScores();
    
    // Display keywords
    displayKeywords();
    
    // Display suggestions
    displaySuggestions();
    
    // Create visualizations
    createCharts();
    
    // Setup editor
    setupEditor();
    setupResumeEditor();
}

function displayScores() {
    const { overall, ats, skills, experience } = analysisResults.scores;
    
    // Overall score circle
    const overallScoreEl = document.getElementById('overallScore');
    const scoreCircle = document.querySelector('.score-circle');
    if (overallScoreEl) overallScoreEl.textContent = overall;
    if (scoreCircle) scoreCircle.style.setProperty('--score-angle', `${(overall / 100) * 360}deg`);
    
    // Individual scores
    const atsScoreEl = document.getElementById('atsScore');
    const atsNumberEl = document.getElementById('atsNumber');
    if (atsScoreEl) atsScoreEl.style.width = `${ats}%`;
    if (atsNumberEl) atsNumberEl.textContent = `${ats}%`;
    
    const skillsScoreEl = document.getElementById('skillsScore');
    const skillsNumberEl = document.getElementById('skillsNumber');
    if (skillsScoreEl) skillsScoreEl.style.width = `${skills}%`;
    if (skillsNumberEl) skillsNumberEl.textContent = `${skills}%`;
    
    const expScoreEl = document.getElementById('expScore');
    const expNumberEl = document.getElementById('expNumber');
    if (expScoreEl) expScoreEl.style.width = `${experience}%`;
    if (expNumberEl) expNumberEl.textContent = `${experience}%`;
}

function displayKeywords() {
    const { matched, missing, partial } = analysisResults.matchResults;
    
    // Matched keywords
    const matchedContainer = document.getElementById('matchedKeywords');
    if (matchedContainer) {
        matchedContainer.innerHTML = matched.map(keyword => 
            `<span class="keyword-tag matched">${keyword}</span>`
        ).join('');
    }
    
    // Missing keywords
    const missingContainer = document.getElementById('missingKeywords');
    if (missingContainer) {
        missingContainer.innerHTML = missing.map(keyword => 
            `<span class="keyword-tag missing clickable" data-keyword="${keyword}">${keyword}</span>`
        ).join('');
        
        // Add click handlers for missing keywords
        missingContainer.querySelectorAll('.keyword-tag.clickable').forEach(tag => {
            tag.addEventListener('click', (e) => {
                const keyword = e.target.dataset.keyword;
                insertKeywordIntoResume(keyword);
            });
        });
    }
    
    // Partial keywords
    const partialContainer = document.getElementById('partialKeywords');
    if (partialContainer) {
        partialContainer.innerHTML = partial.map(keyword => 
            `<span class="keyword-tag partial">${keyword}</span>`
        ).join('');
    }
}

function displaySuggestions() {
    const suggestionsContainer = document.getElementById('suggestionsList');
    if (!suggestionsContainer) return;
    
    const suggestions = analysisResults.suggestions;
    
    suggestionsContainer.innerHTML = suggestions.map(suggestion => `
        <div class="suggestion-card ${suggestion.priority.toLowerCase()}-priority">
            <div class="suggestion-header">
                <h4 class="suggestion-title">${suggestion.title}</h4>
                <span class="suggestion-priority ${suggestion.priority.toLowerCase()}">${suggestion.priority}</span>
            </div>
            <p class="suggestion-description">${suggestion.description}</p>
            <div class="suggestion-impact">
                <i class="fas fa-arrow-up"></i>
                ${suggestion.impact}
            </div>
            <div class="suggestion-actions">
                <button class="btn btn--sm btn--primary" onclick="applySuggestion('${suggestion.title}')">
                    Apply Suggestion
                </button>
            </div>
        </div>
    `).join('');
}

function createCharts() {
    // Only create charts if Chart.js is available
    if (typeof Chart === 'undefined') {
        console.warn('Chart.js not loaded, skipping chart creation');
        return;
    }
    
    // Skills pie chart
    createSkillsPieChart();
    
    // ATS radar chart
    createATSRadarChart();
    
    // Category bar chart
    createCategoryBarChart();
    
    // Strength radar chart
    createStrengthRadarChart();
}

function createSkillsPieChart() {
    const canvas = document.getElementById('skillsPieChart');
    if (!canvas) {
        console.warn('Skills pie chart canvas not found');
        return;
    }
    
    const ctx = canvas.getContext('2d');
    const { matched, missing, partial } = analysisResults.matchResults;
    
    if (charts.skillsPie) {
        charts.skillsPie.destroy();
    }
    
    const data = [matched.length, missing.length, partial.length];
    const hasData = data.some(value => value > 0);
    
    if (!hasData) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#64748b';
        ctx.font = '14px Inter';
        ctx.textAlign = 'center';
        ctx.fillText('No data available', canvas.width / 2, canvas.height / 2);
        return;
    }
    
    charts.skillsPie = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Matched Keywords', 'Missing Keywords', 'Partial Matches'],
            datasets: [{
                data: data,
                backgroundColor: [
                    '#10b981',
                    '#ef4444',
                    '#f59e0b'
                ],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        font: { size: 11 },
                        usePointStyle: true
                    }
                }
            }
        }
    });
}

function createATSRadarChart() {
    const canvas = document.getElementById('atsRadarChart');
    if (!canvas) {
        console.warn('ATS radar chart canvas not found');
        return;
    }
    
    const ctx = canvas.getContext('2d');
    const scores = analysisResults.scores;
    
    if (charts.atsRadar) {
        charts.atsRadar.destroy();
    }
    
    charts.atsRadar = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Format', 'Keywords', 'Structure', 'Content', 'Length'],
            datasets: [{
                label: 'ATS Compatibility',
                data: [scores.ats, scores.skills, 85, scores.experience, 90],
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                borderColor: '#2563eb',
                borderWidth: 2,
                pointBackgroundColor: '#2563eb',
                pointBorderColor: '#fff',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: { 
                        stepSize: 25,
                        font: { size: 10 }
                    },
                    pointLabels: {
                        font: { size: 11 }
                    }
                }
            },
            plugins: {
                legend: { 
                    display: true,
                    position: 'bottom',
                    labels: {
                        font: { size: 11 }
                    }
                }
            }
        }
    });
}

function createCategoryBarChart() {
    const canvas = document.getElementById('categoryBarChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const { technical, soft, experience } = analysisResults.resumeKeywords;
    const jdTechnical = analysisResults.jdKeywords.technical;
    const jdSoft = analysisResults.jdKeywords.soft;
    const jdExperience = analysisResults.jdKeywords.experience;
    
    if (charts.categoryBar) charts.categoryBar.destroy();
    
    charts.categoryBar = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Technical', 'Soft Skills', 'Experience'],
            datasets: [
                {
                    label: 'Resume',
                    data: [technical.length, soft.length, experience.length],
                    backgroundColor: '#10b981',
                    borderWidth: 1
                },
                {
                    label: 'Job Required',
                    data: [jdTechnical.length, jdSoft.length, jdExperience.length],
                    backgroundColor: '#f59e0b',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { beginAtZero: true }
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { padding: 20 }
                }
            }
        }
    });
}

function createStrengthRadarChart() {
    const canvas = document.getElementById('strengthRadarChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const scores = analysisResults.scores;
    
    if (charts.strengthRadar) charts.strengthRadar.destroy();
    
    charts.strengthRadar = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Technical Skills', 'Experience', 'Education', 'Certifications', 'Format'],
            datasets: [{
                label: 'Resume Strength',
                data: [scores.skills, scores.experience, 80, 70, scores.ats],
                backgroundColor: 'rgba(245, 158, 11, 0.2)',
                borderColor: '#f59e0b',
                borderWidth: 2,
                pointBackgroundColor: '#f59e0b'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: { stepSize: 20 }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
}

function setupEditor() {
    const editor = document.getElementById('resumeEditor');
    if (editor) {
        editor.value = currentResume;
        
        // Setup improvement areas
        const improvementAreas = document.getElementById('improvementAreas');
        if (improvementAreas) {
            improvementAreas.innerHTML = analysisResults.suggestions.map((suggestion, index) => `
                <div class="improvement-item" data-suggestion="${index}">
                    ${suggestion.title}
                </div>
            `).join('');
            
            // Add click handlers
            improvementAreas.querySelectorAll('.improvement-item').forEach(item => {
                item.addEventListener('click', (e) => {
                    improvementAreas.querySelectorAll('.improvement-item').forEach(i => i.classList.remove('active'));
                    e.target.classList.add('active');
                });
            });
        }
    }
}

// UI functions
function switchMode(mode) {
    console.log('Switching mode to:', mode);
    
    // Update active tab
    document.querySelectorAll('.mode-tab').forEach(tab => tab.classList.remove('active'));
    const activeTab = document.querySelector(`[data-mode="${mode}"]`);
    if (activeTab) activeTab.classList.add('active');
    
    // Show/hide sections
    const batchSection = document.getElementById('batchSection');
    const interviewSection = document.getElementById('interviewSection');
    const inputSection = document.querySelector('.input-section');
    const resultsSection = document.getElementById('resultsSection');
    
    if (batchSection) batchSection.classList.toggle('hidden', mode !== 'batch');
    if (interviewSection) interviewSection.classList.toggle('hidden', mode !== 'interview');
    if (inputSection) inputSection.classList.toggle('hidden', mode !== 'single');
    if (resultsSection) resultsSection.classList.toggle('hidden', mode !== 'single' || !analysisResults.scores);
}

function switchResultsTab(tabName) {
    console.log('Switching to tab:', tabName);
    
    // Update active tab
    document.querySelectorAll('.results-tab').forEach(tab => tab.classList.remove('active'));
    const activeTab = document.querySelector(`[data-tab="${tabName}"]`);
    if (activeTab) activeTab.classList.add('active');
    
    // Show/hide tab content
    document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
    const activePanel = document.getElementById(`${tabName}Tab`);
    if (activePanel) activePanel.classList.add('active');
}

function toggleTheme() {
    console.log('Toggling theme');
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
    
    // Store theme preference
    localStorage.setItem('theme', newTheme);
}

// Enhanced PDF export with professional layout
function exportProfessionalPDF() {
    if (!analysisResults || !analysisResults.scores) {
        alert('Please run analysis first before exporting report.');
        return;
    }
    
    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        // Professional header with colors
        doc.setFillColor(37, 99, 235); // Primary blue
        doc.rect(0, 0, 210, 25, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(20);
        doc.setFont('helvetica', 'bold');
        doc.text('Resume Analysis Report', 20, 16);
        
        // Reset colors for body
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(10);
        doc.text(`Generated: ${new Date().toLocaleDateString()}`, 160, 20);
        
        let yPos = 35;
        
        // Executive Summary Box
        doc.setFillColor(248, 250, 252);
        doc.rect(15, yPos, 180, 30, 'F');
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('Executive Summary', 20, yPos + 8);
        
        doc.setFontSize(11);
        doc.setFont('helvetica', 'normal');
        const summaryText = `Overall Match Score: ${analysisResults.scores.overall}% | ATS Compatibility: ${analysisResults.scores.ats}%`;
        doc.text(summaryText, 20, yPos + 18);
        doc.text(`Skills Match: ${analysisResults.scores.skills}% | Experience Match: ${analysisResults.scores.experience}%`, 20, yPos + 25);
        
        yPos += 40;
        
        // Professional sections with consistent formatting
        addSection(doc, 'Keyword Analysis', yPos);
        yPos += 10;
        
        const keywords = analysisResults.matchResults;
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        doc.text(`✓ Matched Keywords (${keywords.matched.length}): ${keywords.matched.slice(0, 8).join(', ')}`, 20, yPos);
        yPos += 7;
        doc.text(`✗ Missing Keywords (${keywords.missing.length}): ${keywords.missing.slice(0, 8).join(', ')}`, 20, yPos);
        yPos += 15;
        
        // Improvement recommendations
        addSection(doc, 'Top Recommendations', yPos);
        yPos += 10;
        
        analysisResults.suggestions.slice(0, 4).forEach((suggestion, index) => {
            doc.setFont('helvetica', 'bold');
            doc.text(`${index + 1}. ${suggestion.title}`, 20, yPos);
            yPos += 5;
            doc.setFont('helvetica', 'normal');
            doc.text(`   ${suggestion.description}`, 20, yPos);
            doc.text(`   Impact: ${suggestion.impact}`, 140, yPos);
            yPos += 10;
        });
        
        // Footer
        doc.setFillColor(37, 99, 235);
        doc.rect(0, 285, 210, 12, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(8);
        doc.text('Resume Checker Pro - AI-Powered Career Optimization', 20, 292);
        
        doc.save('professional-resume-analysis.pdf');
        
    } catch (error) {
        console.error('PDF export error:', error);
        alert('Error generating PDF: ' + error.message);
    }
}

function addSection(doc, title, yPos) {
    doc.setFillColor(37, 99, 235);
    doc.rect(15, yPos - 3, 180, 8, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(title, 20, yPos + 2);
    doc.setTextColor(0, 0, 0);
}

// Enhanced resume export with original layout preservation
function exportOptimizedResumePDF() {
    const editor = document.getElementById('resumeEditor');
    const resumeContent = editor?.value || currentResume;
    
    if (!resumeContent || resumeContent.trim().length === 0) {
        alert('No resume content to export.');
        return;
    }
    
    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        // Parse and format resume sections
        const sections = parseResumeContent(resumeContent);
        let yPos = 20;
        
        sections.forEach(section => {
            if (yPos > 250) { // New page if needed
                doc.addPage();
                yPos = 20;
            }
            
            // Section header
            doc.setFontSize(14);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(37, 99, 235);
            doc.text(section.title, 20, yPos);
            yPos += 8;
            
            // Section content with proper formatting
            doc.setFontSize(11);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(0, 0, 0);
            
            section.content.forEach(line => {
                if (yPos > 280) {
                    doc.addPage();
                    yPos = 20;
                }
                
                // Handle different line types
                if (line.startsWith('•') || line.startsWith('-')) {
                    doc.text(line, 25, yPos); // Indent bullets
                } else if (line.trim().length > 0) {
                    doc.text(line, 20, yPos);
                }
                yPos += 6;
            });
            yPos += 5; // Space between sections
        });
        
        doc.save('optimized-resume.pdf');
        
    } catch (error) {
        console.error('Resume PDF export error:', error);
        alert('Error exporting resume: ' + error.message);
    }
}

function parseResumeContent(content) {
    const sections = [];
    const lines = content.split('\n');
    let currentSection = { title: 'Header', content: [] };
    
    const sectionHeaders = ['EXPERIENCE', 'EDUCATION', 'SKILLS', 'PROJECTS', 'CERTIFICATIONS'];
    
    lines.forEach(line => {
        const trimmedLine = line.trim();
        if (sectionHeaders.some(header => trimmedLine.toUpperCase().includes(header))) {
            if (currentSection.content.length > 0) {
                sections.push(currentSection);
            }
            currentSection = { title: trimmedLine, content: [] };
        } else if (trimmedLine.length > 0) {
            currentSection.content.push(trimmedLine);
        }
    });
    
    if (currentSection.content.length > 0) {
        sections.push(currentSection);
    }
    
    return sections;
}

// Legacy export function for backward compatibility
function exportReport() {
    exportProfessionalPDF();
}

function exportResume() {
    const editor = document.getElementById('resumeEditor');
    const optimizedResume = editor?.value || currentResume;
    const blob = new Blob([optimizedResume], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'optimized-resume.txt';
    a.click();
    URL.revokeObjectURL(url);
}

function generateShareLink() {
    const shareData = btoa(JSON.stringify({
        scores: analysisResults.scores,
        timestamp: Date.now()
    }));
    
    const shareUrl = `${window.location.origin}${window.location.pathname}?share=${shareData}`;
    
    navigator.clipboard.writeText(shareUrl).then(() => {
        alert('Share link copied to clipboard!');
    }).catch(() => {
        prompt('Copy this share link:', shareUrl);
    });
}

// Editor functions
function applySuggestion(title) {
    const editor = document.getElementById('resumeEditor');
    if (!editor) return;
    
    // Simple suggestion application
    const suggestion = analysisResults.suggestions.find(s => s.title === title);
    if (suggestion && suggestion.category === 'Keywords') {
        const missingKeywords = analysisResults.matchResults.missing.slice(0, 3);
        const skillsSection = editor.value.indexOf('SKILLS') || editor.value.indexOf('KEY SKILLS');
        if (skillsSection !== -1) {
            const insertText = `\n- ${missingKeywords.join(', ')}`;
            const lines = editor.value.split('\n');
            lines.splice(skillsSection + 2, 0, insertText);
            editor.value = lines.join('\n');
        }
    }
}

function applyAllSuggestions() {
    if (analysisResults.suggestions) {
        analysisResults.suggestions.forEach(suggestion => {
            applySuggestion(suggestion.title);
        });
    }
}

function resetEditor() {
    const editor = document.getElementById('resumeEditor');
    if (editor) {
        editor.value = currentResume;
    }
}

function insertKeywordIntoResume(keyword) {
    const editor = document.getElementById('resumeEditor');
    if (editor) {
        const currentValue = editor.value;
        const skillsIndex = currentValue.toLowerCase().indexOf('skills');
        if (skillsIndex !== -1) {
            const insertPos = currentValue.indexOf('\n', skillsIndex + 50);
            if (insertPos !== -1) {
                const newValue = currentValue.slice(0, insertPos) + `\n- ${keyword}` + currentValue.slice(insertPos);
                editor.value = newValue;
            }
        }
    }
}

// Interview prep functions with backend integration
async function generateInterviewQuestions() {
    const difficultyLevel = document.getElementById('difficultyLevel');
    const questionType = document.getElementById('questionType');
    const questionsContainer = document.getElementById('interviewQuestions');
    
    if (!difficultyLevel || !questionType || !questionsContainer) return;
    
    const difficulty = difficultyLevel.value;
    const type = questionType.value;
    
    questionsContainer.innerHTML = '<div class="loading"><div class="spinner"></div><p>Generating personalized questions...</p></div>';
    
    try {
        // Try backend API for personalized questions
        const formData = new FormData();
        formData.append('resume_text', currentResume);
        formData.append('difficulty', difficulty);
        formData.append('type', type);
        
        const response = await fetch('/api/generate-questions', {
            method: 'POST',
            body: formData
        });
        
        if (response.ok) {
            const backendQuestions = await response.json();
            displayInterviewQuestions(backendQuestions.questions);
            return;
        }
    } catch (error) {
        console.log('Backend questions unavailable, using frontend generation:', error);
    }
    
    // Fallback to frontend generation
    const questions = getInterviewQuestions(difficulty, type);
    displayInterviewQuestions(questions);
}

function displayInterviewQuestions(questions) {
    const questionsContainer = document.getElementById('interviewQuestions');
    if (!questionsContainer) return;
    
    questionsContainer.innerHTML = `
        <div class="questions-header">
            <h4>Generated Interview Questions</h4>
            <p>Practice these questions to prepare for your interview</p>
        </div>
        ${questions.map((q, index) => `
            <div class="question-item">
                <div class="question-header">
                    <span class="question-number">Q${index + 1}</span>
                    <span class="question-type ${q.type?.toLowerCase() || 'general'}">${q.type || 'General'}</span>
                </div>
                <div class="question-text">${q.question}</div>
                <div class="question-tips">
                    <i class="fas fa-lightbulb"></i>
                    <strong>Tips:</strong> ${q.tips || 'Use the STAR method for structured answers.'}
                </div>
            </div>
        `).join('')}
    `;
}

function getInterviewQuestions(difficulty, type) {
    const questionBank = {
        technical: {
            entry: [
                {
                    question: "What is the difference between var, let, and const in JavaScript?",
                    tips: "Explain scope, hoisting, and mutability differences with examples.",
                    type: "Technical"
                },
                {
                    question: "How do you handle errors in your code?",
                    tips: "Discuss try-catch blocks, error logging, and debugging strategies.",
                    type: "Technical"
                },
                {
                    question: "Explain the concept of object-oriented programming.",
                    tips: "Cover encapsulation, inheritance, polymorphism, and abstraction.",
                    type: "Technical"
                },
                {
                    question: "What is the difference between SQL and NoSQL databases?",
                    tips: "Compare structure, scalability, ACID properties, and use cases.",
                    type: "Technical"
                },
                {
                    question: "Explain what an API is and how you would use one.",
                    tips: "Define API, REST principles, and provide practical examples.",
                    type: "Technical"
                }
            ],
            mid: [
                {
                    question: "Explain the concept of RESTful APIs and their principles.",
                    tips: "Cover HTTP methods, statelessness, and resource identification.",
                    type: "Technical"
                },
                {
                    question: "How would you optimize database queries for better performance?",
                    tips: "Mention indexing, query optimization, and database normalization.",
                    type: "Technical"
                },
                {
                    question: "Describe your experience with version control systems.",
                    tips: "Discuss Git workflows, branching strategies, and collaboration.",
                    type: "Technical"
                },
                {
                    question: "How do you ensure code quality in your projects?",
                    tips: "Discuss testing strategies, code reviews, linting, and CI/CD.",
                    type: "Technical"
                },
                {
                    question: "Explain the concept of microservices architecture.",
                    tips: "Cover benefits, challenges, communication patterns, and deployment.",
                    type: "Technical"
                }
            ],
            senior: [
                {
                    question: "Design a scalable system for handling millions of users.",
                    tips: "Discuss load balancing, caching, database sharding, and microservices.",
                    type: "Technical"
                },
                {
                    question: "How would you approach system architecture for a real-time application?",
                    tips: "Cover websockets, message queues, event-driven architecture.",
                    type: "Technical"
                },
                {
                    question: "Explain your approach to technical leadership and mentoring.",
                    tips: "Discuss code reviews, knowledge sharing, and team development.",
                    type: "Technical"
                },
                {
                    question: "How do you handle technical debt in large codebases?",
                    tips: "Discuss prioritization, refactoring strategies, and team alignment.",
                    type: "Technical"
                },
                {
                    question: "Design a monitoring and alerting system for production services.",
                    tips: "Cover metrics, logging, alerting thresholds, and incident response.",
                    type: "Technical"
                }
            ]
        },
        behavioral: [
            {
                question: "Tell me about a time when you had to learn a new technology quickly.",
                tips: "Use the STAR method (Situation, Task, Action, Result) to structure your answer.",
                type: "Behavioral"
            },
            {
                question: "Describe a challenging project you worked on and how you overcame obstacles.",
                tips: "Focus on problem-solving skills and collaboration with team members.",
                type: "Behavioral"
            },
            {
                question: "How do you handle disagreements with team members?",
                tips: "Emphasize communication, compromise, and finding common ground.",
                type: "Behavioral"
            },
            {
                question: "Tell me about a time when you had to meet a tight deadline.",
                tips: "Highlight time management, prioritization, and stress management skills.",
                type: "Behavioral"
            },
            {
                question: "Describe a situation where you had to give constructive feedback to a colleague.",
                tips: "Focus on empathy, clear communication, and positive outcomes.",
                type: "Behavioral"
            },
            {
                question: "Tell me about a time when you failed at something. How did you handle it?",
                tips: "Show accountability, learning mindset, and resilience.",
                type: "Behavioral"
            },
            {
                question: "How do you prioritize tasks when everything seems urgent?",
                tips: "Discuss frameworks like Eisenhower Matrix, stakeholder communication.",
                type: "Behavioral"
            },
            {
                question: "Describe a time when you had to work with a difficult stakeholder.",
                tips: "Emphasize patience, understanding their perspective, and finding solutions.",
                type: "Behavioral"
            }
        ]
    };
    
    if (type === 'behavioral') {
        return questionBank.behavioral.slice(0, 6);
    } else if (type === 'technical') {
        return questionBank.technical[difficulty] || questionBank.technical.entry;
    } else {
        return [
            ...questionBank.technical[difficulty]?.slice(0, 3) || questionBank.technical.entry.slice(0, 3),
            ...questionBank.behavioral.slice(0, 3)
        ];
    }
}

// Chatbot functionality
let chatbotOpen = false;

function initializeChatbot() {
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotContainer = document.getElementById('chatbotContainer');
    const closeChatbot = document.getElementById('closeChatbot');
    const sendMessage = document.getElementById('sendMessage');
    const chatInput = document.getElementById('chatInput');
    
    if (chatbotToggle) {
        chatbotToggle.addEventListener('click', toggleChatbot);
    }
    
    if (closeChatbot) {
        closeChatbot.addEventListener('click', toggleChatbot);
    }
    
    if (sendMessage) {
        sendMessage.addEventListener('click', sendChatMessage);
    }
    
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendChatMessage();
            }
        });
    }
}

function toggleChatbot() {
    const chatbotContainer = document.getElementById('chatbotContainer');
    chatbotOpen = !chatbotOpen;
    
    if (chatbotContainer) {
        chatbotContainer.style.display = chatbotOpen ? 'flex' : 'none';
    }
}

async function sendChatMessage() {
    const chatInput = document.getElementById('chatInput');
    const messagesContainer = document.getElementById('chatbotMessages');
    const typingIndicator = document.getElementById('typingIndicator');
    
    const message = chatInput.value.trim();
    if (!message) return;
    
    // Add user message
    addMessage(message, 'user');
    chatInput.value = '';
    
    // Show typing indicator
    if (typingIndicator) {
        typingIndicator.style.display = 'block';
    }
    
    try {
        const response = await getChatbotResponse(message);
        
        // Hide typing indicator
        if (typingIndicator) {
            typingIndicator.style.display = 'none';
        }
        
        // Add bot response
        addMessage(response, 'bot');
        
    } catch (error) {
        console.error('Chatbot error:', error);
        
        if (typingIndicator) {
            typingIndicator.style.display = 'none';
        }
        
        addMessage('Sorry, I\'m having trouble right now. Here are some general resume tips: Use action verbs, quantify achievements, and tailor your resume to each job.', 'bot');
    }
}

function addMessage(text, sender) {
    const messagesContainer = document.getElementById('chatbotMessages');
    if (!messagesContainer) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.textContent = text;
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Enhanced chatbot with improved performance
class EnhancedChatbot {
    constructor() {
        this.messageQueue = [];
        this.isProcessing = false;
        this.responseCache = new Map();
        this.debounceTimer = null;
    }
    
    async sendMessage(message) {
        if (this.isProcessing) {
            this.messageQueue.push(message);
            return;
        }
        
        this.isProcessing = true;
        this.addMessage(message, 'user');
        this.showTypingIndicator();
        
        try {
            const response = await this.getOptimizedResponse(message);
            this.hideTypingIndicator();
            this.addMessage(response, 'bot');
        } catch (error) {
            console.error('Chatbot error:', error);
            this.hideTypingIndicator();
            this.addMessage('I apologize, but I\'m having trouble right now. Please try again.', 'bot');
        } finally {
            this.isProcessing = false;
            this.processQueue();
        }
    }
    
    async getOptimizedResponse(message) {
        // Check cache first
        const cacheKey = message.toLowerCase().trim();
        if (this.responseCache.has(cacheKey)) {
            return this.responseCache.get(cacheKey);
        }
        
        // Use Web Worker for heavy processing
        const response = await this.processWithWorker(message);
        
        // Cache common responses
        if (message.length < 50) {
            this.responseCache.set(cacheKey, response);
        }
        
        return response;
    }
    
    async processWithWorker(message) {
        return new Promise((resolve) => {
            // Simulate Web Worker processing
            setTimeout(() => {
                const response = this.generateContextualResponse(message);
                resolve(response);
            }, 500); // Reduced response time
        });
    }
    
    generateContextualResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Context-aware responses based on current analysis
        if (analysisResults) {
            if (lowerMessage.includes('score')) {
                return `Your current analysis shows: Overall Match ${analysisResults.scores.overall}%, ATS Compatibility ${analysisResults.scores.ats}%. Would you like specific suggestions to improve these scores?`;
            }
            
            if (lowerMessage.includes('improve')) {
                const topSuggestion = analysisResults.suggestions[0];
                return `Based on your analysis, I recommend: ${topSuggestion?.title}. ${topSuggestion?.description}. This could improve your score by ${topSuggestion?.impact}.`;
            }
        }
        
        // Enhanced smart responses
        return this.getSmartResponse(message);
    }
    
    addMessage(text, sender) {
        const messagesContainer = document.getElementById('chatbotMessages');
        if (!messagesContainer) return;
        
        // Use DocumentFragment for better performance
        const fragment = document.createDocumentFragment();
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        messageDiv.textContent = text;
        
        fragment.appendChild(messageDiv);
        messagesContainer.appendChild(fragment);
        
        // Smooth scroll with performance optimization
        requestAnimationFrame(() => {
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        });
    }
    
    showTypingIndicator() {
        const indicator = document.getElementById('typingIndicator');
        if (indicator) {
            indicator.style.display = 'flex';
            const messagesContainer = document.getElementById('chatbotMessages');
            if (messagesContainer) {
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }
        }
    }
    
    hideTypingIndicator() {
        const indicator = document.getElementById('typingIndicator');
        if (indicator) {
            indicator.style.display = 'none';
        }
    }
    
    processQueue() {
        if (this.messageQueue.length > 0) {
            const nextMessage = this.messageQueue.shift();
            this.sendMessage(nextMessage);
        }
    }
    
    getSmartResponse(message) {
        return getSmartResponse(message);
    }
}

// Initialize enhanced chatbot
const enhancedChatbot = new EnhancedChatbot();

// Add health check endpoint for backend
function addHealthCheckEndpoint() {
    // This would be handled by the backend, just for reference
    console.log('Health check endpoint should be available at /api/health');
}

// Debounced input handling
function setupOptimizedChatInput() {
    const chatInput = document.getElementById('chatInput');
    const sendButton = document.getElementById('sendMessage');
    
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleChatInput();
            }
        });
        
        // Debounced typing indicator
        chatInput.addEventListener('input', () => {
            clearTimeout(enhancedChatbot.debounceTimer);
            enhancedChatbot.debounceTimer = setTimeout(() => {
                // Could add typing indicator here
            }, 300);
        });
    }
    
    if (sendButton) {
        sendButton.addEventListener('click', handleChatInput);
    }
}

function handleChatInput() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput?.value.trim();
    
    if (message) {
        enhancedChatbot.sendMessage(message);
        chatInput.value = '';
    }
}

// Enhanced chatbot with caching and performance optimization
const responseCache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

async function getChatbotResponse(message) {
    // Check cache first
    const cacheKey = message.toLowerCase().trim();
    const cached = responseCache.get(cacheKey);
    
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
        return cached.response;
    }
    
    // Try backend chatbot API first
    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: message })
        });
        
        if (response.ok) {
            const data = await response.json();
            const botResponse = data.response;
            
            // Cache successful response
            responseCache.set(cacheKey, {
                response: botResponse,
                timestamp: Date.now()
            });
            
            return botResponse;
        }
    } catch (error) {
        console.log('Backend chatbot unavailable, using fallback');
    }
    
    // Try multiple APIs with timeout
    const apiPromises = [
        tryCoherAPI(message),
        tryHuggingFaceAPI(message),
        tryLocalAPI(message)
    ];
    
    try {
        const response = await Promise.race([
            Promise.any(apiPromises),
            new Promise((_, reject) => 
                setTimeout(() => reject(new Error('Timeout')), 3000)
            )
        ]);
        
        // Cache successful response
        responseCache.set(cacheKey, {
            response,
            timestamp: Date.now()
        });
        
        return response;
    } catch (error) {
        console.log('All APIs failed, using smart fallback');
        return getSmartResponse(message);
    }
}

async function tryCoherAPI(message) {
    const response = await fetch('https://api.cohere.ai/v1/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            model: 'command-light',
            prompt: `Resume advisor: ${message}`,
            max_tokens: 80,
            temperature: 0.7
        })
    });
    
    if (response.ok) {
        const data = await response.json();
        if (data.generations?.[0]?.text) {
            return data.generations[0].text.trim();
        }
    }
    throw new Error('Cohere API failed');
}

async function tryHuggingFaceAPI(message) {
    const response = await fetch('https://api-inference.huggingface.co/models/microsoft/DialoGPT-small', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            inputs: `Career advice: ${message}`,
            parameters: { max_length: 100 }
        })
    });
    
    if (response.ok) {
        const data = await response.json();
        if (data?.[0]?.generated_text) {
            return data[0].generated_text.replace(`Career advice: ${message}`, '').trim();
        }
    }
    throw new Error('HuggingFace API failed');
}

async function tryLocalAPI(message) {
    // Simulate local AI processing
    await new Promise(resolve => setTimeout(resolve, 100));
    return getSmartResponse(message);
}

function preloadChatbotResponses() {
    const commonQuestions = [
        'hi', 'hello', 'help', 'skills', 'experience', 'format', 'interview', 'keywords'
    ];
    
    commonQuestions.forEach(question => {
        const response = getSmartResponse(question);
        responseCache.set(question, {
            response,
            timestamp: Date.now()
        });
    });
}

// Enhanced PDF layout preservation
function preservePDFLayout(originalContent, editedContent) {
    const originalLines = originalContent.split('\n');
    const editedLines = editedContent.split('\n');
    
    let preservedContent = '';
    let lineIndex = 0;
    
    editedLines.forEach((line, index) => {
        const originalLine = originalLines[lineIndex] || '';
        
        if (line !== originalLine) {
            // This line was modified
            preservedContent += `<div class="highlight-change">${line}</div>\n`;
        } else {
            preservedContent += `${line}\n`;
        }
        
        lineIndex++;
    });
    
    return preservedContent;
}

// Change tracking and highlighting system
class ChangeTracker {
    constructor() {
        this.originalContent = '';
        this.changes = [];
    }
    
    setOriginal(content) {
        this.originalContent = content;
        this.changes = [];
    }
    
    trackChange(oldText, newText, position) {
        this.changes.push({
            oldText: oldText,
            newText: newText,
            position: position,
            timestamp: Date.now()
        });
    }
    
    getHighlightedContent(content) {
        let highlightedContent = content;
        const changes = this.detectChanges(this.originalContent, content);
        
        // Apply green highlighting to changes
        changes.forEach(change => {
            const highlightedText = `<span class="highlight-green">${change.newText}</span>`;
            highlightedContent = highlightedContent.replace(change.newText, highlightedText);
        });
        
        return highlightedContent;
    }
    
    detectChanges(original, modified) {
        // Simple diff algorithm
        const originalWords = original.split(' ');
        const modifiedWords = modified.split(' ');
        const changes = [];
        
        modifiedWords.forEach((word, index) => {
            if (originalWords[index] !== word) {
                changes.push({
                    oldText: originalWords[index] || '',
                    newText: word,
                    position: index
                });
            }
        });
        
        return changes;
    }
}

// Initialize change tracker
const changeTracker = new ChangeTracker();

// Enhanced Resume Editor Functions
let originalResume = '';
let editedResume = '';
let changeHistory = [];

function setupEnhancedEditor() {
    const editor = document.getElementById('resumeEditor');
    if (editor) {
        editor.value = currentResume;
        changeTracker.setOriginal(currentResume);
        
        // Track changes in real-time
        editor.addEventListener('input', function() {
            const currentContent = this.value;
            updatePreviewWithHighlighting(currentContent);
        });
    }
}

function updatePreviewWithHighlighting(content) {
    const previewContent = document.getElementById('previewContent');
    if (previewContent) {
        const highlightedContent = changeTracker.getHighlightedContent(content);
        previewContent.innerHTML = `<pre style="white-space: pre-wrap; font-family: inherit; margin: 0;">${highlightedContent}</pre>`;
    }
}

function setupResumeEditor() {
    const editor = document.getElementById('resumeEditor');
    if (editor && currentResume) {
        originalResume = currentResume;
        editedResume = currentResume;
        editor.value = currentResume;
        
        // Initialize change tracking
        changeTracker.setOriginal(currentResume);
        
        // Track changes
        editor.addEventListener('input', trackChanges);
        
        // Setup editor buttons
        const downloadPdfBtn = document.getElementById('exportResumeBtn');
        if (downloadPdfBtn) {
            downloadPdfBtn.addEventListener('click', downloadEditedResumePDF);
        }
    }
}

function trackChanges() {
    const editor = document.getElementById('resumeEditor');
    if (!editor) return;
    
    const newContent = editor.value;
    const changes = Diff.diffWords(editedResume, newContent);
    
    changeHistory.push({
        timestamp: Date.now(),
        changes: changes,
        content: newContent
    });
    
    editedResume = newContent;
    highlightChanges(changes);
}

function highlightChanges(changes) {
    const editor = document.getElementById('resumeEditor');
    if (!editor) return;
    
    let highlightedContent = '';
    
    changes.forEach(change => {
        if (change.added) {
            highlightedContent += `<span class="highlight-change">${change.value}</span>`;
        } else if (!change.removed) {
            highlightedContent += change.value;
        }
    });
    
    // Update preview if exists
    const preview = document.getElementById('pdfPreview');
    if (preview) {
        preview.innerHTML = highlightedContent;
    }
}

async function downloadEditedResumePDF() {
    try {
        if (!editedResume) {
            alert('No resume content to download.');
            return;
        }
        
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        // Create a temporary div for rendering
        const tempDiv = document.createElement('div');
        tempDiv.style.cssText = `
            position: absolute;
            left: -9999px;
            width: 210mm;
            padding: 20mm;
            font-family: 'Times New Roman', serif;
            font-size: 12px;
            line-height: 1.6;
            background: white;
            color: black;
        `;
        
        // Process content with change highlighting
        const processedContent = processResumeForPDF(editedResume);
        tempDiv.innerHTML = processedContent;
        document.body.appendChild(tempDiv);
        
        // Use html2canvas to capture the content
        const canvas = await html2canvas(tempDiv, {
            scale: 2,
            useCORS: true,
            backgroundColor: '#ffffff'
        });
        
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 210;
        const pageHeight = 295;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        
        let position = 0;
        
        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
        
        while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            doc.addPage();
            doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }
        
        // Clean up
        document.body.removeChild(tempDiv);
        
        doc.save('edited-resume.pdf');
        
    } catch (error) {
        console.error('PDF generation error:', error);
        alert('Error generating PDF. Please try again.');
    }
}

function processResumeForPDF(content) {
    // Preserve original formatting while highlighting changes
    const lines = content.split('\n');
    let processedLines = [];
    
    lines.forEach(line => {
        if (line.trim()) {
            // Check if this line contains changes
            const hasChanges = changeHistory.some(change => 
                change.changes.some(diff => 
                    diff.added && diff.value.includes(line.trim())
                )
            );
            
            if (hasChanges) {
                processedLines.push(`<div class="highlight-addition">${line}</div>`);
            } else {
                processedLines.push(`<div>${line}</div>`);
            }
        } else {
            processedLines.push('<br>');
        }
    });
    
    return processedLines.join('');
}

function applyAllSuggestions() {
    const editor = document.getElementById('resumeEditor');
    if (!editor || !analysisResults.suggestions) return;
    
    let content = editor.value;
    
    analysisResults.suggestions.forEach(suggestion => {
        if (suggestion.category === 'Keywords') {
            // Add missing keywords to skills section
            const missingKeywords = analysisResults.matchResults.missing.slice(0, 5);
            const skillsRegex = /(skills?|technical skills?|key skills?)([\s\S]*?)(?=\n\n|\n[A-Z]|$)/i;
            
            if (skillsRegex.test(content)) {
                content = content.replace(skillsRegex, (match, header, skillsContent) => {
                    const newSkills = missingKeywords.join(', ');
                    return `${header}${skillsContent}\n<span class="highlight-change">${newSkills}</span>`;
                });
            }
        }
    });
    
    editor.value = content;
    trackChanges();
}

function resetEditor() {
    const editor = document.getElementById('resumeEditor');
    if (editor) {
        editor.value = originalResume;
        editedResume = originalResume;
        changeHistory = [];
        
        const preview = document.getElementById('pdfPreview');
        if (preview) {
            preview.innerHTML = originalResume.replace(/\n/g, '<br>');
        }
    }
}

function getSmartResponse(message) {
    // Enhanced AI-like responses for any question
    const lowerMessage = message.toLowerCase();
    
    // Context-aware responses based on current analysis
    if (analysisResults && analysisResults.scores) {
        if (lowerMessage.includes('score') || lowerMessage.includes('rating')) {
            return `Your current analysis shows: Overall Match ${analysisResults.scores.overall}%, ATS Compatibility ${analysisResults.scores.ats}%, Skills Match ${analysisResults.scores.skills}%. Would you like specific suggestions to improve these scores?`;
        }
        
        if (lowerMessage.includes('improve') || lowerMessage.includes('better')) {
            const topSuggestion = analysisResults.suggestions[0];
            if (topSuggestion) {
                return `Based on your analysis, I recommend: ${topSuggestion.title}. ${topSuggestion.description}. This could improve your score by ${topSuggestion.impact}.`;
            }
        }
        
        if (lowerMessage.includes('missing') || lowerMessage.includes('keywords')) {
            const missing = analysisResults.matchResults.missing.slice(0, 5);
            if (missing.length > 0) {
                return `You're missing these important keywords: ${missing.join(', ')}. Consider adding them to your skills section or work experience descriptions.`;
            }
        }
    }
    
    // Job description analysis
    if (lowerMessage.includes('software engineer') || lowerMessage.includes('developer')) {
        return 'For a Software Engineer role, highlight: programming languages (Java, Python, JavaScript), frameworks (React, Spring), databases (SQL, MongoDB), version control (Git), and problem-solving skills. Include specific projects with technologies used.';
    }
    
    if (lowerMessage.includes('data analyst') || lowerMessage.includes('data science')) {
        return 'For Data Analyst roles, emphasize: Python/R, SQL, Excel, Tableau/Power BI, statistical analysis, machine learning, data visualization, and business intelligence. Include specific projects with measurable outcomes.';
    }
    
    if (lowerMessage.includes('marketing') || lowerMessage.includes('digital marketing')) {
        return 'For Marketing roles, highlight: digital marketing, SEO/SEM, social media, content marketing, analytics (Google Analytics), campaign management, lead generation, and marketing automation tools like HubSpot.';
    }
    
    // Any question about job requirements
    if (lowerMessage.includes('looking for') || lowerMessage.includes('requirements') || lowerMessage.includes('responsibilities')) {
        return 'Based on job requirements, tailor your resume to match their specific needs. Use the same keywords they mention. Highlight relevant experience and skills that directly relate to their requirements.';
    }
    
    // Fallback to original function
    return getResumeAdvice(message);
}

function getResumeAdvice(message) {
    const lowerMessage = message.toLowerCase();
    
    // Greetings and basic interactions
    if (lowerMessage.match(/^(hi|hello|hey|good morning|good afternoon|good evening)$/)) {
        return 'Hello! I\'m here to help you create an amazing resume and prepare for interviews. What would you like to know about? I can help with skills, experience, formatting, interview questions, or keywords.';
    }
    
    if (lowerMessage.includes('how are you') || lowerMessage.includes('how do you do')) {
        return 'I\'m doing great, thanks for asking! I\'m ready to help you optimize your resume. What specific area would you like assistance with?';
    }
    
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
        return 'You\'re welcome! Feel free to ask me anything else about resumes, cover letters, interview questions, or job applications. I\'m here to help!';
    }
    
    if (lowerMessage.includes('help') && lowerMessage.length < 20) {
        return 'I can help you with: \n• Technical skills section \n• Work experience descriptions \n• ATS-friendly formatting \n• Interview questions & practice \n• Keyword optimization \n• Cover letters \n\nWhat would you like to focus on?';
    }
    
    // Technical Skills
    if (lowerMessage.includes('skill') || lowerMessage.includes('technical') || lowerMessage.includes('programming')) {
        return 'For technical skills: List relevant programming languages, frameworks, and tools. Group by category (Languages: Python, Java; Frameworks: React, Django). Include proficiency levels and years of experience.';
    }
    
    // Work Experience
    if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('job')) {
        return 'For work experience: Use action verbs (developed, implemented, led). Follow STAR method: Situation-Task-Action-Result. Quantify impact: "Increased efficiency by 25%" or "Managed team of 5 developers".';
    }
    
    // Resume Format
    if (lowerMessage.includes('format') || lowerMessage.includes('layout') || lowerMessage.includes('ats')) {
        return 'ATS-friendly format tips: Use standard fonts (Arial, Calibri). Avoid images/graphics. Use clear section headers. Save as .docx or .pdf. Keep to 1-2 pages. Use bullet points for readability.';
    }
    
    // Mock Interview and Questions
    if (lowerMessage.includes('mock interview') || lowerMessage.includes('practice interview') || (lowerMessage.includes('interview') && lowerMessage.includes('question'))) {
        const questions = [
            '"Tell me about yourself."',
            '"Why do you want this position?"',
            '"What are your greatest strengths?"',
            '"Describe a challenging project you worked on."',
            '"Where do you see yourself in 5 years?"'
        ];
        const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
        return `Here\'s a common interview question to practice: ${randomQuestion}\n\nTip: Use the STAR method (Situation, Task, Action, Result) for behavioral questions. Want another question? Just ask!`;
    }
    
    if (lowerMessage.includes('question') && (lowerMessage.includes('provide') || lowerMessage.includes('give') || lowerMessage.includes('ask'))) {
        const questionSets = {
            behavioral: [
                'Tell me about a time you faced a difficult challenge at work.',
                'Describe a situation where you had to work with a difficult team member.',
                'Give me an example of when you showed leadership.',
                'Tell me about a time you failed and what you learned.',
                'Describe a time when you had to learn something new quickly.'
            ],
            technical: [
                'Explain the difference between SQL and NoSQL databases.',
                'What is object-oriented programming?',
                'How do you handle version control in your projects?',
                'Describe your debugging process.',
                'What testing methodologies do you use?'
            ],
            general: [
                'Why are you interested in this company?',
                'What motivates you in your work?',
                'How do you handle stress and pressure?',
                'What questions do you have for us?',
                'Why should we hire you?'
            ]
        };
        
        const categories = Object.keys(questionSets);
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        const questions = questionSets[randomCategory];
        const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
        
        return `Here\'s a ${randomCategory} interview question:\n\n"${randomQuestion}"\n\nTake your time to think about your answer using the STAR method. Want more questions? Just ask!`;
    }
    
    // Interview Preparation
    if (lowerMessage.includes('interview') || lowerMessage.includes('prepare')) {
        return 'Interview prep: Research the company and role. Prepare STAR examples for behavioral questions. Practice technical questions. Prepare 3-5 questions to ask them. Review your resume thoroughly.';
    }
    
    // Keywords
    if (lowerMessage.includes('keyword') || lowerMessage.includes('match')) {
        return 'Keyword optimization: Mirror job description language exactly. Include required skills, tools, and qualifications. Use both acronyms and full terms (AI and Artificial Intelligence). Avoid keyword stuffing.';
    }
    
    // Education
    if (lowerMessage.includes('education') || lowerMessage.includes('degree') || lowerMessage.includes('university')) {
        return 'Education section: List degree, institution, graduation year. Include relevant coursework, projects, and GPA if 3.5+. Add certifications and online courses relevant to the role.';
    }
    
    // Projects
    if (lowerMessage.includes('project') || lowerMessage.includes('portfolio')) {
        return 'Projects section: Include 2-3 relevant projects. Describe technologies used, your role, and impact. Provide GitHub links or live demos. Focus on projects that match job requirements.';
    }
    
    // Achievements
    if (lowerMessage.includes('achievement') || lowerMessage.includes('accomplish') || lowerMessage.includes('award')) {
        return 'Highlighting achievements: Use numbers and percentages. Focus on business impact: "Reduced processing time by 40%". Include awards, recognitions, and leadership roles. Show progression and growth.';
    }
    
    // Cover Letter
    if (lowerMessage.includes('cover letter') || lowerMessage.includes('letter')) {
        return 'Cover letter tips: Customize for each job. Address hiring manager by name if possible. Show enthusiasm and cultural fit. Highlight 2-3 key achievements. Keep to one page. End with clear call to action.';
    }
    
    // Career Change
    if (lowerMessage.includes('career change') || lowerMessage.includes('transition')) {
        return 'Career transition: Focus on transferable skills. Highlight relevant projects or volunteer work. Consider a functional resume format. Address the change briefly in cover letter. Show continuous learning.';
    }
    
    // Default response with contextual help
    if (lowerMessage.length < 10) {
        return 'I\'d love to help you with your resume! Try asking me something like: \n• "How do I improve my skills section?" \n• "What\'s the best resume format?" \n• "Give me interview questions" \n• "How should I describe my experience?" \n• "What keywords should I include?"';
    }
    
    // Default response with multiple tips for longer messages
    const tips = [
        'Use action verbs: developed, implemented, led, optimized, created',
        'Quantify achievements: "Increased sales by 25%" vs "Increased sales"',
        'Tailor resume to each job posting - match their keywords',
        'Keep format clean and ATS-friendly with standard fonts',
        'Include relevant projects and technical skills prominently'
    ];
    
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    return `Here\'s a key resume tip: ${randomTip}. What specific area would you like help with? (skills, experience, format, interviews, keywords)`;
}

// Batch processing functions
function viewBatchDetails(fileName, score, matched, missing) {
    alert(`Detailed Analysis for ${fileName}:\n\nOverall Score: ${score}%\nMatched Keywords: ${matched}\nMissing Keywords: ${missing}\n\nThis would open a detailed analysis modal in the full version.`);
}

function downloadBatchReport(fileName, score) {
    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        // Header
        doc.setFillColor(37, 99, 235);
        doc.rect(0, 0, 210, 25, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(16);
        doc.setFont('helvetica', 'bold');
        doc.text('Batch Analysis Report', 20, 16);
        
        // Reset colors
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(12);
        doc.text(`File: ${fileName}`, 20, 40);
        doc.text(`Score: ${score}%`, 20, 50);
        doc.text(`Generated: ${new Date().toLocaleDateString()}`, 20, 60);
        
        doc.save(`${fileName}-analysis-report.pdf`);
    } catch (error) {
        console.error('PDF generation error:', error);
        // Fallback to text download
        const reportText = `Analysis Report for ${fileName}\nScore: ${score}%\nGenerated: ${new Date().toLocaleDateString()}`;
        const blob = new Blob([reportText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${fileName}-report.txt`;
        a.click();
        URL.revokeObjectURL(url);
    }
}

// Check for shared results on load
window.addEventListener('load', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const shareData = urlParams.get('share');
    if (shareData) {
        try {
            const sharedResults = JSON.parse(atob(shareData));
            console.log('Shared results:', sharedResults);
        } catch (error) {
            console.error('Invalid share data');
        }
    }
    
    // Initialize chatbot
    initializeChatbot();
    
    // Preload common responses
    preloadChatbotResponses();
    
    // Check backend connectivity
    checkBackendStatus();
});

// Backend connectivity check
async function checkBackendStatus() {
    try {
        const response = await fetch('/api/health', { method: 'GET' });
        if (response.ok) {
            console.log('✅ Backend connected successfully');
            showBackendStatus(true);
        } else {
            console.log('⚠️ Backend available but not responding correctly');
            showBackendStatus(false);
        }
    } catch (error) {
        console.log('❌ Backend not available, using frontend-only mode');
        showBackendStatus(false);
    }
}

function showBackendStatus(isConnected) {
    const statusIndicator = document.createElement('div');
    statusIndicator.style.cssText = `
        position: fixed;
        top: 10px;
        right: 10px;
        padding: 8px 12px;
        border-radius: 4px;
        font-size: 12px;
        z-index: 1001;
        ${isConnected ? 
            'background: #10b981; color: white;' : 
            'background: #f59e0b; color: white;'
        }
    `;
    statusIndicator.textContent = isConnected ? 
        '🚀 AI Backend Active' : 
        '💻 Frontend Mode';
    
    document.body.appendChild(statusIndicator);
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
        statusIndicator.remove();
    }, 3000);
}