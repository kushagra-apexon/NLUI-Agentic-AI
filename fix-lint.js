const fs = require('fs');
const path = require('path');

// Function to recursively find all TypeScript files
function findTsFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      findTsFiles(fullPath, files);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to fix common linting issues
function fixLintIssues(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Remove unused imports
  const importRegex = /import\s+{([^}]+)}\s+from\s+['"][^'"]+['"];?/g;
  const matches = content.match(importRegex);
  
  if (matches) {
    matches.forEach(match => {
      const importContent = match.match(/import\s+{([^}]+)}\s+from\s+['"]([^'"]+)['"];?/);
      if (importContent) {
        const imports = importContent[1].split(',').map(imp => imp.trim());
        const source = importContent[2];
        
        // Check which imports are actually used
        const usedImports = imports.filter(imp => {
          const importName = imp.split(' as ')[0].trim();
          return content.includes(importName) && !content.match(new RegExp(`import.*${importName}`));
        });
        
        if (usedImports.length !== imports.length) {
          const newImport = `import { ${usedImports.join(', ')} } from '${source}';`;
          content = content.replace(match, newImport);
          modified = true;
        }
      }
    });
  }

  // Remove unused variables in function parameters
  content = content.replace(/export default function \w+\(\s*{\s*params\s*}\s*:\s*{\s*\w+:\s*string\s*}\s*\)/g, 
    (match) => match.replace(/\s*{\s*params\s*}\s*:\s*{\s*\w+:\s*string\s*}/, ''));

  // Remove unused variables
  content = content.replace(/const\s+(\w+)\s*=\s*[^;]+;\s*(?:\/\/.*)?$/gm, (match, varName) => {
    if (!content.includes(varName) || content.match(new RegExp(`const\\s+${varName}\\s*=`))) {
      return '';
    }
    return match;
  });

  // Replace 'any' types with proper types
  content = content.replace(/:\s*any\b/g, ': unknown');
  content = content.replace(/:\s*any\[\]/g, ': unknown[]');

  // Remove unused React import if only JSX is used
  if (content.includes('import React') && !content.includes('React.')) {
    content = content.replace(/import React[^;]+;?\n?/g, '');
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  }
}

// Main execution
const srcDir = path.join(__dirname, 'src');
const tsFiles = findTsFiles(srcDir);

console.log(`Found ${tsFiles.length} TypeScript files to process...`);

tsFiles.forEach(file => {
  try {
    fixLintIssues(file);
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log('Lint fixes completed!'); 