import fs from 'fs';
import path from 'path';

const SRC_DIR = path.join(process.cwd(), 'src');
const INDEX_HTML = path.join(process.cwd(), 'index.html');

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // We do NOT want to change domains like smartprinter.in or print.smartprinter.in
    // So we will temporarily shield them.
    const domainPattern = /smartprinter\.in/gi;
    let domains = [];
    content = content.replace(domainPattern, (match) => {
        domains.push(match);
        return `__DOMAIN_${domains.length - 1}__`;
    });

    const emailPattern = /hello@smartprinter\.in/gi;
    let emails = [];
    content = content.replace(emailPattern, (match) => {
        emails.push(match);
        return `__EMAIL_${emails.length - 1}__`;
    });

    // Replacements
    // "Smart Printer" -> "PrintGo"
    content = content.replace(/Smart Printer/g, 'PrintGo');
    // "SmartPrinter" -> "PrintGo" 
    content = content.replace(/SmartPrinter/g, 'PrintGo');
    // "smartprinter" -> "printgo" (but not if it's shielded)
    content = content.replace(/smartprinter/g, 'printgo');
    
    // Unshield domains
    content = content.replace(/__EMAIL_(\d+)__/g, (match, p1) => emails[p1]);
    content = content.replace(/__DOMAIN_(\d+)__/g, (match, p1) => domains[p1]);

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
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
                processFile(fullPath);
            }
        }
    }
}

processFile(INDEX_HTML);
walkDir(SRC_DIR);
console.log("Done");
