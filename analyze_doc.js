import fs from 'fs';
import * as cheerio from 'cheerio';

const html = fs.readFileSync('doc.html', 'utf8');
const $ = cheerio.load(html);

// Find styles for line-through and background colors (highlights)
const styles = $('style').text();
const classStyles = {};

// Parse CSS roughly
const cssRegex = /\.([a-zA-Z0-9_-]+)\{([^}]+)\}/g;
let match;
while ((match = cssRegex.exec(styles)) !== null) {
  const className = match[1];
  const rules = match[2];
  classStyles[className] = {
    isStrikethrough: rules.includes('line-through'),
    isHighlight: rules.includes('background-color') && !rules.includes('background-color:transparent') && !rules.includes('background-color:#ffffff')
  };
}

const changes = [];

$('span').each((_, el) => {
  const elem = $(el);
  const classes = elem.attr('class') ? elem.attr('class').split(' ') : [];
  
  let hasStrikethrough = false;
  let hasHighlight = false;
  
  for (const c of classes) {
    if (classStyles[c]) {
      if (classStyles[c].isStrikethrough) hasStrikethrough = true;
      if (classStyles[c].isHighlight) hasHighlight = true;
    }
  }
  
  if (hasStrikethrough || hasHighlight) {
    // Find context (surrounding text of the parent paragraph)
    const parentText = elem.parent().text().substring(0, 150).replace(/\s+/g, ' ');
    const text = elem.text().trim();
    if (text) {
      changes.push(`Type: ${hasStrikethrough ? 'STRIKETHROUGH' : ''} ${hasHighlight ? 'HIGHLIGHT' : ''} | Text: "${text}" | Context: "${parentText}"`);
    }
  }
});

console.log(changes.join('\n'));
