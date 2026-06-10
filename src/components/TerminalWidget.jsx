import React, { useState, useEffect, useRef } from 'react';
import './TerminalWidget.css';

export default function TerminalWidget() {
  const [history, setHistory] = useState([
    { text: 'System initialized. Type "help" or click the buttons below to interact.', type: 'system' },
    { text: 'guest@venkatesan-kumar:~$ help', type: 'input' },
    { text: 'Available commands:', type: 'system' },
    { text: '  about      - Display personal summary and education', type: 'output' },
    { text: '  skills     - List technical stack and tools', type: 'output' },
    { text: '  awards     - Show coding awards and symposium prizes', type: 'output' },
    { text: '  contact    - Print contact numbers and social profiles', type: 'output' },
    { text: '  clear      - Clear terminal output history', type: 'output' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const terminalEndRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    if (!trimmedCmd) return;

    let newHistory = [...history, { text: `guest@venkatesan-kumar:~$ ${cmd}`, type: 'input' }];

    switch (trimmedCmd) {
      case 'clear':
        newHistory = [];
        break;
      case 'help':
        newHistory.push(
          { text: 'Available commands:', type: 'system' },
          { text: '  about      - Display personal summary and education', type: 'output' },
          { text: '  skills     - List technical stack and tools', type: 'output' },
          { text: '  awards     - Show coding awards and symposium prizes', type: 'output' },
          { text: '  contact    - Print contact numbers and social profiles', type: 'output' },
          { text: '  clear      - Clear terminal output history', type: 'output' }
        );
        break;
      case 'about':
        newHistory.push(
          { text: '--- VENKATESAN KUMAR ---', type: 'highlight' },
          { text: 'Summary: Passionate React & Frontend Developer and Competitive Coder aiming to build high-performance web applications.', type: 'output' },
          { text: 'Education: Sri Shanmugha College of Engineering and Technology', type: 'output' },
          { text: 'Degree: B.Tech in Information Technology (Expected May 2027)', type: 'output' },
          { text: 'CGPA (up to 5th sem): 8.88 / 10.0', type: 'output' },
          { text: 'High School: 12th Grade (HSC) - 74% (May 2022)', type: 'output' }
        );
        break;
      case 'skills':
        newHistory.push(
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
        newHistory.push(
          { text: '--- CODES & COMPETITION AWARDS ---', type: 'highlight' },
          { text: '🏆 Shaastra 2026 (IIT Madras): 45th Place in Reverse Coding X', type: 'output' },
          { text: '🏆 Infovista 25 (Sri Sai Ram College): 1st Prize in Racecraft Algo Coding', type: 'output' },
          { text: '🏆 MANAV\'25 (Salem Engineering College): 1st Prize in Project Expo', type: 'output' },
          { text: '🏆 Code Trackers (Sri Sai Ranganathan College): 1st Prize in Python Coding', type: 'output' },
          { text: '🏆 Rathinam Technical Campus: 2nd Prize in Algo-Code Debugging', type: 'output' },
          { text: '🏆 R P Sarathy College: 1st Prize in Code Debugging', type: 'output' },
          { text: '🏆 Vibethon (KSR College): 4th Prize in Hackathon', type: 'output' }
        );
        break;
      case 'contact':
        newHistory.push(
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
        newHistory.push({ text: `Command not found: "${cmd}". Type "help" for a list of commands.`, type: 'error' });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    }
  };

  return (
    <div className="terminal-widget glass-panel">
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="terminal-title">bash - guest@venkatesan-kumar</div>
      </div>
      <div className="terminal-body">
        {history.map((line, idx) => (
          <div key={idx} className={`terminal-line ${line.type}`}>
            {line.text}
          </div>
        ))}
        <div className="terminal-input-line">
          <span className="prompt">guest@venkatesan-kumar:~$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyPress}
            className="terminal-input"
            placeholder="Type a command..."
            autoFocus
          />
        </div>
        <div ref={terminalEndRef} />
      </div>
      <div className="terminal-shortcuts">
        <button onClick={() => executeCommand('about')} className="shortcut-btn">about</button>
        <button onClick={() => executeCommand('skills')} className="shortcut-btn">skills</button>
        <button onClick={() => executeCommand('awards')} className="shortcut-btn">awards</button>
        <button onClick={() => executeCommand('contact')} className="shortcut-btn">contact</button>
        <button onClick={() => executeCommand('clear')} className="shortcut-btn">clear</button>
      </div>
    </div>
  );
}
