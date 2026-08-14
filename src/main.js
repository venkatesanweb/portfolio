import './index.css';
import './App.css';
import './components/TerminalWidget.css';
import './components/ProjectCard.css';
import './components/Timeline.css';
import './components/AwardsGallery.css';
import './components/ContactForm.css';
import emailjs from '@emailjs/browser';

// Init EmailJS
emailjs.init('hzP5KswWsGpbJTHk6');

// Project Data
const PROJECTS = [
  {
    id: 1,
    title: "College Admission Portal",
    description: "Designed and built a full-stack College Admission Management System using React, Spring Boot, and MySQL.",
    longDescription: "A comprehensive digital solution that automates the college admissions process. Students can apply, upload transcripts, track application status, and view results. Admins and approvers benefit from automated workflows, role-based dashboards, and audit logs. The system is secured using JSON Web Tokens (JWT) for authentication and authorization.",
    tech: ["React", "Spring Boot", "MySQL", "JWT", "REST API", "Git"],
    category: "react-fullstack",
    image: "certificates/admission_portal.png",
    github: "https://github.com/venkatesanweb/College-Admission-Portal",
    live: null
  },
  {
    id: 2,
    title: "Amazon Clone (Frontend)",
    description: "A responsive Amazon e-commerce storefront replica built using pure frontend technologies.",
    longDescription: "Replicates the key UI designs and user flows of the Amazon shopping portal. Features a responsive grid of products, simulated cart count calculations, slider carousels, and search bar layout. Entirely responsive across mobile, tablet, and desktop screens.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    category: "frontend-js",
    image: "certificates/amazon-2.png",
    github: "https://github.com/venkatesanweb/Amazon_copy",
    live: "https://venkatesanweb.github.io/Amazon_copy/amazon.html"
  },
  {
    id: 3,
    title: "Rock-Paper-Scissors Game",
    description: "Interactive browser-based game featuring persistent local storage and CSS animations.",
    longDescription: "A fully styled, engaging game allowing the player to compete against the computer. Keeps track of wins, losses, and ties across sessions using localStorage. Includes sound-like timing delays, hover interactions, and micro-animations.",
    tech: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
    category: "frontend-js",
    image: "certificates/image.png",
    github: "https://github.com/venkatesanweb/Play-game",
    live: "https://venkatesanweb.github.io/Play-game/game.html"
  },
  {
    id: 4,
    title: "Full Stack Blog Website",
    description: "A secure multi-user blog application built with Django backend and MySQL databases.",
    longDescription: "Allows users to register, log in, create blog posts, comment on posts, and edit/delete their own content. The backend handles secure cookie sessions, CSRF protection, file storage for post media, and relational database queries with MySQL.",
    tech: ["Python", "Django", "MySQL", "HTML5", "CSS3"],
    category: "react-fullstack",
    image: "certificates/blog_app.png",
    github: "https://github.com/venkatesanweb/blog_app",
    live: null
  },
  {
    id: 5,
    title: "Shop_Fusion (E-commerce)",
    description: "A modern, responsive online shopping interface with catalog filtration and cart drawer.",
    longDescription: "A premium UI storefront showing catalog filters (by category and pricing), animated fly-to-cart drawers, product details modal cards, and responsive form checkout processes.",
    tech: ["HTML5", "CSS3", "JavaScript", "UX Design"],
    category: "frontend-js",
    image: "certificates/Shop_fussion.png",
    github: "https://github.com/venkatesanweb/Purching_app",
    live: null
  },
  {
    id: 6,
    title: "Password Manager App",
    description: "A secure password manager application to store, manage, and retrieve credentials safely.",
    longDescription: "A full-featured password manager that allows users to securely store and manage their credentials. Features include encrypted password storage, master password authentication, category-based organization, and a clean intuitive interface for easy retrieval of saved credentials.",
    tech: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
    category: "frontend-js",
    image: "certificates/password_manager.png",
    github: "https://github.com/venkatesanweb/Password_manager",
    live: null
  },
  {
    id: 7,
    title: "Multilingual Gov. Scheme Assistant",
    description: "An AI-powered multilingual assistant that helps citizens discover government schemes in their native language using NLP and voice input.",
    longDescription: "An intelligent conversational assistant that bridges the information gap between citizens and government welfare schemes. Uses Natural Language Processing (NLP) to understand queries in multiple Indian languages (Tamil, Hindi, English) and retrieves relevant scheme details. Includes voice-input support, scheme eligibility filtering, and an intuitive chat interface built with Flask and Python.",
    tech: ["Python", "NLP", "Flask", "Machine Learning", "TensorFlow", "REST API"],
    category: "ai-ml",
    image: "certificates/gov_scheme.png",
    github: "https://github.com/venkatesanweb/Multilingual-Government-Scheme-Assistant",
    live: null
  }
];

document.addEventListener('DOMContentLoaded', () => {
  // Navigation
  const navMenu = document.querySelector('.nav-menu');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelectorAll('.nav-link');
  let mobileMenuOpen = false;

  navToggle.addEventListener('click', () => {
    mobileMenuOpen = !mobileMenuOpen;
    navMenu.classList.toggle('mobile-open', mobileMenuOpen);
    navToggle.innerHTML = `<i class="fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}"></i>`;
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuOpen = false;
      navMenu.classList.remove('mobile-open');
      navToggle.innerHTML = `<i class="fas fa-bars"></i>`;
    });
  });

  // Scroll section detector
  const sections = ['home', 'coding', 'projects', 'skills', 'experience', 'awards', 'contact'];
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 200;
    
    let currentSection = 'home';
    for (const section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentSection = section;
        }
      }
    }

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });

  // Project Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.dataset.filter;
      projectCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Project Modal
  const projectModalOverlay = document.getElementById('project-modal-overlay');
  const projectModalClose = document.querySelector('.project-modal-close');
  
  if (projectModalOverlay) {
    document.querySelectorAll('.view-details-btn, .project-card').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const card = el.closest('.project-card');
        const projectId = parseInt(card.dataset.id);
        const project = PROJECTS.find(p => p.id === projectId);
        
        if (project) {
          // Populate modal
          document.querySelector('.modal-hero-image').style.backgroundImage = `url(${project.image || 'certificates/placeholder.png'})`;
          document.querySelector('.modal-project-title').textContent = project.title;
          document.querySelector('.modal-project-desc').textContent = project.longDescription;
          
          const tagsContainer = document.querySelector('.modal-project-tags');
          tagsContainer.innerHTML = project.tech.map(t => `<span class="tech-badge">${t}</span>`).join('');
          
          const footerLinks = document.querySelector('.modal-footer-links');
          footerLinks.innerHTML = '';
          if (project.github) {
            footerLinks.innerHTML += `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn-secondary"><i class="fab fa-github"></i> View GitHub</a>`;
          }
          if (project.live) {
            footerLinks.innerHTML += `<a href="${project.live}" target="_blank" rel="noopener noreferrer" class="btn-primary"><i class="fas fa-external-link-alt"></i> Live Demo</a>`;
          }
          
          projectModalOverlay.style.display = 'flex';
        }
      });
    });

    projectModalClose.addEventListener('click', () => {
      projectModalOverlay.style.display = 'none';
    });

    projectModalOverlay.addEventListener('click', (e) => {
      if (e.target === projectModalOverlay) {
        projectModalOverlay.style.display = 'none';
      }
    });
  }

  // Terminal Logic
  const terminalInput = document.querySelector('.terminal-input');
  const terminalBody = document.querySelector('.terminal-body');
  const terminalEndRef = document.getElementById('terminal-end-ref');
  
  let terminalHistory = [
    { text: 'System initialized. Type "help" or click the buttons below to interact.', type: 'system' },
    { text: 'guest@venkatesan-kumar:~$ help', type: 'input' },
    { text: 'Available commands:', type: 'system' },
    { text: '  about      - Display personal summary and education', type: 'output' },
    { text: '  skills     - List technical stack and tools', type: 'output' },
    { text: '  awards     - Show coding awards and symposium prizes', type: 'output' },
    { text: '  contact    - Print contact numbers and social profiles', type: 'output' },
    { text: '  clear      - Clear terminal output history', type: 'output' }
  ];

  function renderTerminal() {
    // Clear everything except input line and ref
    const lines = terminalBody.querySelectorAll('.terminal-line');
    lines.forEach(l => l.remove());
    
    const inputLine = document.querySelector('.terminal-input-line');
    
    terminalHistory.forEach(line => {
      const div = document.createElement('div');
      div.className = `terminal-line ${line.type}`;
      div.textContent = line.text;
      terminalBody.insertBefore(div, inputLine);
    });
    
    terminalEndRef.scrollIntoView({ behavior: 'smooth' });
  }

  function executeCommand(cmd) {
    const trimmedCmd = cmd.trim().toLowerCase();
    if (!trimmedCmd) return;

    terminalHistory.push({ text: `guest@venkatesan-kumar:~$ ${cmd}`, type: 'input' });

    switch (trimmedCmd) {
      case 'clear':
        terminalHistory = [];
        break;
      case 'help':
        terminalHistory.push(
          { text: 'Available commands:', type: 'system' },
          { text: '  about      - Display personal summary and education', type: 'output' },
          { text: '  skills     - List technical stack and tools', type: 'output' },
          { text: '  awards     - Show coding awards and symposium prizes', type: 'output' },
          { text: '  contact    - Print contact numbers and social profiles', type: 'output' },
          { text: '  clear      - Clear terminal output history', type: 'output' }
        );
        break;
      case 'about':
        terminalHistory.push(
          { text: '--- VENKATESAN KUMAR ---', type: 'highlight' },
          { text: 'Summary: Passionate React & Frontend Developer and Competitive Coder aiming to build high-performance web applications.', type: 'output' },
          { text: 'Education: Sri Shanmugha College of Engineering and Technology', type: 'output' },
          { text: 'Degree: B.Tech in Information Technology (Expected May 2027)', type: 'output' },
          { text: 'CGPA (up to 5th sem): 8.88 / 10.0', type: 'output' },
          { text: 'High School: 12th Grade (HSC) - 74% (May 2022)', type: 'output' }
        );
        break;
      case 'skills':
        terminalHistory.push(
          { text: '--- TECHNICAL SKILLS ---', type: 'highlight' },
          { text: '• Languages: C, C++, Java, Python, JavaScript', type: 'output' },
          { text: '• Frontend: HTML, CSS, JavaScript, React', type: 'output' },
          { text: '• Backend/DB: Spring Boot, Django, MySQL', type: 'output' },
          { text: '• Version Control: Git, GitHub', type: 'output' },
          { text: '• Tools: VS Code, WordPress, Maven, JDK 24.0.1', type: 'output' },
          { text: '• Key Concepts: OOPs, Data Structures & Algorithms, System Design', type: 'output' }
        );
        break;
      case 'awards':
        terminalHistory.push(
          { text: '--- CODES & COMPETITION AWARDS ---', type: 'highlight' },
          { text: '🏆 Shaastra 2026 (IIT Madras): 45th Place in Reverse Coding X', type: 'output' },
          { text: '🏆 Infovista 25 (Sri Sai Ram College): 1st Prize in Racecraft Algo Coding', type: 'output' },
          { text: "🏆 MANAV'25 (Salem Engineering College): 1st Prize in Project Expo", type: 'output' },
          { text: '🏆 Code Trackers (Sri Sai Ranganathan College): 1st Prize in Python Coding', type: 'output' },
          { text: '🏆 Rathinam Technical Campus: 2nd Prize in Algo-Code Debugging', type: 'output' },
          { text: '🏆 R P Sarathy College: 1st Prize in Code Debugging', type: 'output' },
          { text: '🏆 Vibethon (KSR College): 4th Prize in Hackathon', type: 'output' }
        );
        break;
      case 'contact':
        terminalHistory.push(
          { text: '--- CONTACT INFORMATION ---', type: 'highlight' },
          { text: '📞 Phone: +91 6374717300', type: 'output' },
          { text: '📧 Email: venkatesan.kumarsivan@gmail.com', type: 'output' },
          { text: '🔗 LinkedIn: linkedin.com/in/venkatesan-kumar-71b8702b8', type: 'output' },
          { text: '🐙 GitHub: github.com/venkatesanweb', type: 'output' },
          { text: '🧠 LeetCode: leetcode.com/u/VENKATESAN_k', type: 'output' },
          { text: '📊 Codeforces: codeforces.com/profile/venkatesan.kumarsivan', type: 'output' }
        );
        break;
      default:
        terminalHistory.push({ text: `Command not found: "${cmd}". Type "help" for a list of commands.`, type: 'error' });
    }

    renderTerminal();
    terminalInput.value = '';
  }

  if (terminalInput) {
    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        executeCommand(terminalInput.value);
      }
    });

    document.querySelectorAll('.shortcut-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        executeCommand(btn.textContent);
      });
    });

    // Initial render
    renderTerminal();
  }

  // Timeline Tabs
  const timelineTabs = document.querySelectorAll('.timeline-tab-btn');
  const experienceList = document.getElementById('experience-list');
  const educationList = document.getElementById('education-list');

  timelineTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      timelineTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      if (tab.dataset.tab === 'experience') {
        experienceList.style.display = 'block';
        educationList.style.display = 'none';
      } else {
        experienceList.style.display = 'none';
        educationList.style.display = 'block';
      }
    });
  });

  // Awards Gallery Tabs
  const galleryTabs = document.querySelectorAll('.gallery-tab-btn');
  const awardsGrid = document.getElementById('awards-grid');
  const certsGrid = document.getElementById('certs-grid');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  galleryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      galleryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      if (tab.dataset.tab === 'awards') {
        awardsGrid.style.display = 'grid';
        certsGrid.style.display = 'none';
      } else {
        awardsGrid.style.display = 'none';
        certsGrid.style.display = 'grid';
      }
    });
  });

  document.querySelectorAll('.cert-card').forEach(card => {
    card.addEventListener('click', () => {
      const bgImage = card.querySelector('.cert-card-image').style.backgroundImage;
      const url = bgImage.slice(4, -1).replace(/"/g, "");
      lightboxImg.src = url;
      lightbox.style.display = 'flex';
    });
  });

  if (lightbox) {
    lightbox.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });
    document.querySelector('.lightbox-close').addEventListener('click', () => {
      lightbox.style.display = 'none';
    });
    document.querySelector('.lightbox-content').addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }

  // Contact Form
  const contactForm = document.getElementById('contact-form');
  const successModalOverlay = document.getElementById('success-modal-overlay');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Basic validation
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      
      let isValid = true;
      document.querySelectorAll('.error-text').forEach(el => el.remove());
      document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
      
      if (!name) {
        isValid = false;
        showError('name', 'Name is required');
      }
      if (!email || !/\S+@\S+\.\S+/.test(email)) {
        isValid = false;
        showError('email', 'Invalid email format');
      }
      if (!message) {
        isValid = false;
        showError('message', 'Message cannot be empty');
      }
      
      if (isValid) {
        const btn = document.querySelector('.form-submit-btn');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        btn.disabled = true;

        emailjs.send(
          'service_pr5hu1x',
          'template_q8ezjjp',
          {
            from_name: name,
            from_email: email,
            message: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            reply_to: email,
          }
        ).then(() => {
          btn.innerHTML = originalText;
          btn.disabled = false;
          successModalOverlay.style.display = 'flex';
          contactForm.reset();
        }).catch((error) => {
          btn.innerHTML = originalText;
          btn.disabled = false;
          alert('Failed to send message: ' + (error.text || error.message || 'Unknown error'));
          console.error('EmailJS error:', error);
        });
      }
    });
  }
  
  function showError(inputId, message) {
    const input = document.getElementById(inputId);
    input.classList.add('input-error');
    const span = document.createElement('span');
    span.className = 'error-text';
    span.textContent = message;
    input.parentElement.appendChild(span);
  }

  if (successModalOverlay) {
    successModalOverlay.addEventListener('click', () => {
      successModalOverlay.style.display = 'none';
    });
    document.querySelectorAll('.modal-close-btn, .success-modal .btn-primary').forEach(btn => {
      btn.addEventListener('click', () => {
        successModalOverlay.style.display = 'none';
      });
    });
    document.querySelector('.success-modal').addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }

  // Active label logic for inputs
  document.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('input', () => {
      const label = document.querySelector(`label[for="${input.id}"]`);
      if (label) {
        if (input.value.trim()) {
          label.classList.add('active');
        } else {
          label.classList.remove('active');
        }
      }
    });
  });

});

// ─── Tech Grid & Node Network Animation ─────────────────────────────────────

(function initMouseAnimation() {
  const canvas = document.getElementById('mouse-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W = canvas.width  = window.innerWidth;
  let H = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    initGrid();
  });

  // ── Config ──────────────────────────────────────────────────────────────
  const CYAN   = '0,212,255';
  const BLUE   = '59,123,248';
  const VIOLET = '168,85,247';

  let mouseX = W / 2, mouseY = H / 2;
  let targetX = mouseX, targetY = mouseY;

  window.addEventListener('mousemove', e => {
    targetX = e.clientX;
    targetY = e.clientY;
    addTrail(e.clientX, e.clientY);
  });

  // ── 1. GRID LINES ───────────────────────────────────────────────────────
  const GRID = 60;
  function drawGrid() {
    ctx.save();
    for (let x = 0; x <= W; x += GRID) {
      const dx = x - mouseX, dy = 0 - mouseY;
      const dist = Math.sqrt(dx*dx + dy*dy);
      const glow = Math.max(0, 1 - dist / 500) * 0.08;
      ctx.strokeStyle = `rgba(${CYAN},${(0.04 + glow).toFixed(3)})`;
      ctx.lineWidth = 0.5;
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let y = 0; y <= H; y += GRID) {
      const dx = mouseX - 0, dy = y - mouseY;
      const dist = Math.sqrt(dx*dx + dy*dy);
      const glow = Math.max(0, 1 - dist / 500) * 0.08;
      ctx.strokeStyle = `rgba(${CYAN},${(0.04 + glow).toFixed(3)})`;
      ctx.lineWidth = 0.5;
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }
    ctx.restore();
  }

  // ── 2. FLOATING NODES ───────────────────────────────────────────────────
  const NODE_COUNT = 55;
  const nodes = [];

  function initGrid() {
    nodes.length = 0;
    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.5,
        color: [CYAN, BLUE, VIOLET][Math.floor(Math.random() * 3)],
        pulse: Math.random() * Math.PI * 2,
      });
    }
  }
  initGrid();

  function drawNodes() {
    nodes.forEach(n => {
      n.x += n.vx; n.y += n.vy;
      n.pulse += 0.02;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;

      const glow = 0.5 + 0.5 * Math.sin(n.pulse);
      const dx = n.x - mouseX, dy = n.y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const proximity = Math.max(0, 1 - dist / 200);

      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r + proximity * 2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${n.color},${(0.4 + glow * 0.5 + proximity * 0.5).toFixed(2)})`;
      ctx.shadowBlur  = 10 + proximity * 20;
      ctx.shadowColor = `rgba(${n.color},0.9)`;
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    // Connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          const alpha = (1 - dist / 130) * 0.2;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(${CYAN},${alpha.toFixed(3)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
  }

  // ── 3. MOUSE GLOW ───────────────────────────────────────────────────────
  function drawMouseGlow() {
    mouseX += (targetX - mouseX) * 0.07;
    mouseY += (targetY - mouseY) * 0.07;

    const g = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 220);
    g.addColorStop(0,   `rgba(${CYAN},0.12)`);
    g.addColorStop(0.4, `rgba(${BLUE},0.05)`);
    g.addColorStop(1,   'rgba(0,0,0,0)');
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 220, 0, Math.PI * 2);
    ctx.fillStyle = g;
    ctx.fill();

    // Inner bright core
    const g2 = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 40);
    g2.addColorStop(0, `rgba(${CYAN},0.18)`);
    g2.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 40, 0, Math.PI * 2);
    ctx.fillStyle = g2;
    ctx.fill();
  }

  // ── 4. CURSOR TRAIL ─────────────────────────────────────────────────────
  const trail = [];
  function addTrail(x, y) {
    trail.push({ x, y, life: 1.0, size: Math.random() * 3 + 1 });
    if (trail.length > 40) trail.shift();
  }

  function drawTrail() {
    for (let i = trail.length - 1; i >= 0; i--) {
      const t = trail[i];
      t.life -= 0.04;
      if (t.life <= 0) { trail.splice(i, 1); continue; }
      ctx.beginPath();
      ctx.arc(t.x, t.y, t.size * t.life, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${CYAN},${(t.life * 0.7).toFixed(2)})`;
      ctx.shadowBlur  = 6;
      ctx.shadowColor = `rgba(${CYAN},0.8)`;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  // ── 5. SCAN LINE ────────────────────────────────────────────────────────
  let scanY = 0;
  function drawScanLine() {
    scanY = (scanY + 0.8) % H;
    const g = ctx.createLinearGradient(0, scanY - 40, 0, scanY + 40);
    g.addColorStop(0, 'rgba(0,212,255,0)');
    g.addColorStop(0.5, 'rgba(0,212,255,0.03)');
    g.addColorStop(1, 'rgba(0,212,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, scanY - 40, W, 80);
  }

  // ── Main Loop ────────────────────────────────────────────────────────────
  function animate() {
    ctx.clearRect(0, 0, W, H);
    drawGrid();
    drawScanLine();
    drawMouseGlow();
    drawNodes();
    drawTrail();
    requestAnimationFrame(animate);
  }
  animate();

  // ── Custom Cursor ────────────────────────────────────────────────────────
  const cursorDot  = document.getElementById('cursor-dot');
  const cursorRing = document.getElementById('cursor-ring');

  if (cursorDot && cursorRing) {
    let ringX = 0, ringY = 0;
    let dotX = 0, dotY = 0;
    let visible = false;
    let isHovering = false;

    document.addEventListener('mousemove', e => {
      if (!visible) {
        cursorDot.style.opacity  = '1';
        cursorRing.style.opacity = '1';
        visible = true;
      }
      dotX = e.clientX; dotY = e.clientY;
      cursorDot.style.left = dotX + 'px';
      cursorDot.style.top  = dotY + 'px';

      const el = document.elementFromPoint(e.clientX, e.clientY);
      isHovering = el && (el.tagName === 'A' || el.tagName === 'BUTTON' || el.closest('a, button'));
      if (isHovering) {
        cursorRing.style.width  = '50px';
        cursorRing.style.height = '50px';
        cursorRing.style.borderColor = `rgba(168,85,247,0.8)`;
        cursorRing.style.boxShadow   = `0 0 20px rgba(168,85,247,0.4)`;
      } else {
        cursorRing.style.width  = '32px';
        cursorRing.style.height = '32px';
        cursorRing.style.borderColor = `rgba(0,212,255,0.6)`;
        cursorRing.style.boxShadow   = `0 0 10px rgba(0,212,255,0.25)`;
      }
    });

    function animRing() {
      ringX += (dotX - ringX) * 0.11;
      ringY += (dotY - ringY) * 0.11;
      cursorRing.style.left = ringX + 'px';
      cursorRing.style.top  = ringY + 'px';
      requestAnimationFrame(animRing);
    }
    animRing();

    document.addEventListener('mouseleave', () => {
      cursorDot.style.opacity  = '0';
      cursorRing.style.opacity = '0';
      visible = false;
    });

    document.addEventListener('mousedown', () => {
      cursorDot.style.transform  = 'translate(-50%,-50%) scale(2)';
      cursorDot.style.background = 'rgba(0,212,255,0.5)';
      cursorRing.style.transform = 'translate(-50%,-50%) scale(0.6)';
    });
    document.addEventListener('mouseup', () => {
      cursorDot.style.transform  = 'translate(-50%,-50%) scale(1)';
      cursorDot.style.background = 'var(--neon-cyan, #00D4FF)';
      cursorRing.style.transform = 'translate(-50%,-50%) scale(1)';
    });
  }
})();
