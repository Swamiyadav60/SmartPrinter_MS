import fs from 'fs';
import path from 'path';

const SRC_DIR = path.join(process.cwd(), 'src');
const INDEX_HTML = path.join(process.cwd(), 'index.html');

let found = [];

function checkFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (/smartprinter|smart-printer|smart_printer|Smart Printer/i.test(line)) {
            found.push({ file: filePath, line: i + 1, content: line.trim() });
        }
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else {
            if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css') || fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
                checkFile(fullPath);
            }
        }
    }
}

checkFile(INDEX_HTML);
walkDir(SRC_DIR);
console.log(JSON.stringify(found, null, 2));
