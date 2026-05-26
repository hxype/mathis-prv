const fs = require('fs');
const logPath = 'C:\\Users\\djmbo\\.gemini\\antigravity-ide\\brain\\af16e92d-4d6f-4635-8a39-4836e373dedc\\.system_generated\\logs\\transcript.jsonl';

const content = fs.readFileSync(logPath, 'utf8');
const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  if (!lines[i]) continue;
  try {
    const data = JSON.parse(lines[i]);
    if (data.type === 'VIEW_FILE' && lines[i].includes('BentoGrid.tsx') && lines[i].includes('html:')) {
      console.log(`Match at line ${i + 1}`);
      const text = JSON.stringify(data);
      const idx = text.indexOf('html:');
      console.log(text.substring(idx - 100, idx + 2000));
      break;
    }
  } catch (e) {}
}
