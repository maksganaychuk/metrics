const fs = require("fs");

function calculateMetrics(code) {
  const lines = code.split('\n');
  let totalLines = 0;
  let emptyLines = 0;
  let physicalLines = 0;
  let logicalLines = 0;
  let commentLines = 0;
  let commentLevel = 0;
  let isMultilineComment = false;

  for (const line of lines) {
    totalLines++;

    // Check for empty lines
    if (line.trim() === '') {
      emptyLines++;
      continue;
    }

    // Check for single-line 
    if (line.trim().startsWith('//')) {
      commentLines++;
      continue;
    }

    /* Check for multi-line comments */
    if (line.trim().startsWith('/*')) {
      commentLines++;
      commentLevel++;
      isMultilineComment = true;
    }

    if (isMultilineComment) {
      commentLines++;
      if (line.trim().endsWith('*/')) {
        isMultilineComment = false;
        commentLevel--;
      }
      continue;
    }

    // Check for logical lines
    logicalLines++;

    // Check for physical lines
    physicalLines += line.split(';').length;
  }

  return {
    totalLines,
    emptyLines,
    physicalLines,
    logicalLines,
    commentLines,
    commentLevel,
  };
}

function analyzeCode(filePath) {
  try {
    const code = fs.readFileSync(filePath, 'utf-8');
    return calculateMetrics(code);
  } catch (error) {
    console.error(`Error reading file: ${filePath}`);
    return null;
  }
}

// Usage example
const filePath = './test.py';
const metrics = analyzeCode(filePath);

if (metrics) {
  console.log('Total lines:', metrics.totalLines);
  console.log('Empty lines:', metrics.emptyLines);
  console.log('Physical lines:', metrics.physicalLines);
  console.log('Logical lines:', metrics.logicalLines);
  console.log('Comment lines:', metrics.commentLines);
  console.log('Comment level:', metrics.commentLevel);
}

const fs = require("fs");

function calculateMetrics(code) {
  const lines = code.split('\n');
  let totalLines = 0;
  let emptyLines = 0;
  let physicalLines = 0;
  let logicalLines = 0;
  let commentLines = 0;
  let commentLevel = 0;
  let isMultilineComment = false;

  for (const line of lines) {
    totalLines++;

    // Check for empty lines
    if (line.trim() === '') {
      emptyLines++;
      continue;
    }

    // Check for single-line 
    if (line.trim().startsWith('//')) {
      commentLines++;
      continue;
    }

    /* Check for multi-line comments */
    if (line.trim().startsWith('/*')) {
      commentLines++;
      commentLevel++;
      isMultilineComment = true;
    }

    if (isMultilineComment) {
      commentLines++;
      if (line.trim().endsWith('*/')) {
        isMultilineComment = false;
        commentLevel--;
      }
      continue;
    }

    // Check for logical lines
    logicalLines++;

    // Check for physical lines
    physicalLines += line.split(';').length;
  }

  return {
    totalLines,
    emptyLines,
    physicalLines,
    logicalLines,
    commentLines,
    commentLevel,
  };
}

function analyzeCode(filePath) {
  try {
    const code = fs.readFileSync(filePath, 'utf-8');
    return calculateMetrics(code);
  } catch (error) {
    console.error(`Error reading file: ${filePath}`);
    return null;
  }
}

// Usage example
const filePath = './test.py';
const metrics = analyzeCode(filePath);

if (metrics) {
  console.log('Total lines:', metrics.totalLines);
  console.log('Empty lines:', metrics.emptyLines);
  console.log('Physical lines:', metrics.physicalLines);
  console.log('Logical lines:', metrics.logicalLines);
  console.log('Comment lines:', metrics.commentLines);
  console.log('Comment level:', metrics.commentLevel);
}

const fs = require("fs");

function calculateMetrics(code) {
  const lines = code.split('\n');
  let totalLines = 0;
  let emptyLines = 0;
  let physicalLines = 0;
  let logicalLines = 0;
  let commentLines = 0;
  let commentLevel = 0;
  let isMultilineComment = false;

  for (const line of lines) {
    totalLines++;

    // Check for empty lines
    if (line.trim() === '') {
      emptyLines++;
      continue;
    }

    // Check for single-line 
    if (line.trim().startsWith('//')) {
      commentLines++;
      continue;
    }

    /* Check for multi-line comments */
    if (line.trim().startsWith('/*')) {
      commentLines++;
      commentLevel++;
      isMultilineComment = true;
    }

    if (isMultilineComment) {
      commentLines++;
      if (line.trim().endsWith('*/')) {
        isMultilineComment = false;
        commentLevel--;
      }
      continue;
    }

    // Check for logical lines
    logicalLines++;

    // Check for physical lines
    physicalLines += line.split(';').length;
  }

  return {
    totalLines,
    emptyLines,
    physicalLines,
    logicalLines,
    commentLines,
    commentLevel,
  };
}

function analyzeCode(filePath) {
  try {
    const code = fs.readFileSync(filePath, 'utf-8');
    return calculateMetrics(code);
  } catch (error) {
    console.error(`Error reading file: ${filePath}`);
    return null;
  }
}

// Usage example
const filePath = './test.py';
const metrics = analyzeCode(filePath);

if (metrics) {
  console.log('Total lines:', metrics.totalLines);
  console.log('Empty lines:', metrics.emptyLines);
  console.log('Physical lines:', metrics.physicalLines);
  console.log('Logical lines:', metrics.logicalLines);
  console.log('Comment lines:', metrics.commentLines);
  console.log('Comment level:', metrics.commentLevel);
}

const fs = require("fs");

function calculateMetrics(code) {
  const lines = code.split('\n');
  let totalLines = 0;
  let emptyLines = 0;
  let physicalLines = 0;
  let logicalLines = 0;
  let commentLines = 0;
  let commentLevel = 0;
  let isMultilineComment = false;

  for (const line of lines) {
    totalLines++;

    // Check for empty lines
    if (line.trim() === '') {
      emptyLines++;
      continue;
    }

    // Check for single-line 
    if (line.trim().startsWith('//')) {
      commentLines++;
      continue;
    }

    /* Check for multi-line comments */
    if (line.trim().startsWith('/*')) {
      commentLines++;
      commentLevel++;
      isMultilineComment = true;
    }

    if (isMultilineComment) {
      commentLines++;
      if (line.trim().endsWith('*/')) {
        isMultilineComment = false;
        commentLevel--;
      }
      continue;
    }

    // Check for logical lines
    logicalLines++;

    // Check for physical lines
    physicalLines += line.split(';').length;
  }

  return {
    totalLines,
    emptyLines,
    physicalLines,
    logicalLines,
    commentLines,
    commentLevel,
  };
}

function analyzeCode(filePath) {
  try {
    const code = fs.readFileSync(filePath, 'utf-8');
    return calculateMetrics(code);
  } catch (error) {
    console.error(`Error reading file: ${filePath}`);
    return null;
  }
}

// Usage example
const filePath = './test.py';
const metrics = analyzeCode(filePath);

if (metrics) {
  console.log('Total lines:', metrics.totalLines);
  console.log('Empty lines:', metrics.emptyLines);
  console.log('Physical lines:', metrics.physicalLines);
  console.log('Logical lines:', metrics.logicalLines);
  console.log('Comment lines:', metrics.commentLines);
  console.log('Comment level:', metrics.commentLevel);
}

const fs = require("fs");

function calculateMetrics(code) {
  const lines = code.split('\n');
  let totalLines = 0;
  let emptyLines = 0;
  let physicalLines = 0;
  let logicalLines = 0;
  let commentLines = 0;
  let commentLevel = 0;
  let isMultilineComment = false;

  for (const line of lines) {
    totalLines++;

    // Check for empty lines
    if (line.trim() === '') {
      emptyLines++;
      continue;
    }

    // Check for single-line 
    if (line.trim().startsWith('//')) {
      commentLines++;
      continue;
    }

    /* Check for multi-line comments */
    if (line.trim().startsWith('/*')) {
      commentLines++;
      commentLevel++;
      isMultilineComment = true;
    }

    if (isMultilineComment) {
      commentLines++;
      if (line.trim().endsWith('*/')) {
        isMultilineComment = false;
        commentLevel--;
      }
      continue;
    }

    // Check for logical lines
    logicalLines++;

    // Check for physical lines
    physicalLines += line.split(';').length;
  }

  return {
    totalLines,
    emptyLines,
    physicalLines,
    logicalLines,
    commentLines,
    commentLevel,
  };
}

function analyzeCode(filePath) {
  try {
    const code = fs.readFileSync(filePath, 'utf-8');
    return calculateMetrics(code);
  } catch (error) {
    console.error(`Error reading file: ${filePath}`);
    return null;
  }
}

// Usage example
const filePath = './test.py';
const metrics = analyzeCode(filePath);

if (metrics) {
  console.log('Total lines:', metrics.totalLines);
  console.log('Empty lines:', metrics.emptyLines);
  console.log('Physical lines:', metrics.physicalLines);
  console.log('Logical lines:', metrics.logicalLines);
  console.log('Comment lines:', metrics.commentLines);
  console.log('Comment level:', metrics.commentLevel);
}

const fs = require("fs");

function calculateMetrics(code) {
  const lines = code.split('\n');
  let totalLines = 0;
  let emptyLines = 0;
  let physicalLines = 0;
  let logicalLines = 0;
  let commentLines = 0;
  let commentLevel = 0;
  let isMultilineComment = false;

  for (const line of lines) {
    totalLines++;

    // Check for empty lines
    if (line.trim() === '') {
      emptyLines++;
      continue;
    }

    // Check for single-line 
    if (line.trim().startsWith('//')) {
      commentLines++;
      continue;
    }

    /* Check for multi-line comments */
    if (line.trim().startsWith('/*')) {
      commentLines++;
      commentLevel++;
      isMultilineComment = true;
    }

    if (isMultilineComment) {
      commentLines++;
      if (line.trim().endsWith('*/')) {
        isMultilineComment = false;
        commentLevel--;
      }
      continue;
    }

    // Check for logical lines
    logicalLines++;

    // Check for physical lines
    physicalLines += line.split(';').length;
  }

  return {
    totalLines,
    emptyLines,
    physicalLines,
    logicalLines,
    commentLines,
    commentLevel,
  };
}

function analyzeCode(filePath) {
  try {
    const code = fs.readFileSync(filePath, 'utf-8');
    return calculateMetrics(code);
  } catch (error) {
    console.error(`Error reading file: ${filePath}`);
    return null;
  }
}

// Usage example
const filePath = './test.py';
const metrics = analyzeCode(filePath);

if (metrics) {
  console.log('Total lines:', metrics.totalLines);
  console.log('Empty lines:', metrics.emptyLines);
  console.log('Physical lines:', metrics.physicalLines);
  console.log('Logical lines:', metrics.logicalLines);
  console.log('Comment lines:', metrics.commentLines);
  console.log('Comment level:', metrics.commentLevel);
}

const fs = require("fs");

function calculateMetrics(code) {
  const lines = code.split('\n');
  let totalLines = 0;
  let emptyLines = 0;
  let physicalLines = 0;
  let logicalLines = 0;
  let commentLines = 0;
  let commentLevel = 0;
  let isMultilineComment = false;

  for (const line of lines) {
    totalLines++;

    // Check for empty lines
    if (line.trim() === '') {
      emptyLines++;
      continue;
    }

    // Check for single-line 
    if (line.trim().startsWith('//')) {
      commentLines++;
      continue;
    }

    /* Check for multi-line comments */
    if (line.trim().startsWith('/*')) {
      commentLines++;
      commentLevel++;
      isMultilineComment = true;
    }

    if (isMultilineComment) {
      commentLines++;
      if (line.trim().endsWith('*/')) {
        isMultilineComment = false;
        commentLevel--;
      }
      continue;
    }

    // Check for logical lines
    logicalLines++;

    // Check for physical lines
    physicalLines += line.split(';').length;
  }

  return {
    totalLines,
    emptyLines,
    physicalLines,
    logicalLines,
    commentLines,
    commentLevel,
  };
}

function analyzeCode(filePath) {
  try {
    const code = fs.readFileSync(filePath, 'utf-8');
    return calculateMetrics(code);
  } catch (error) {
    console.error(`Error reading file: ${filePath}`);
    return null;
  }
}

// Usage example
const filePath = './test.py';
const metrics = analyzeCode(filePath);

if (metrics) {
  console.log('Total lines:', metrics.totalLines);
  console.log('Empty lines:', metrics.emptyLines);
  console.log('Physical lines:', metrics.physicalLines);
  console.log('Logical lines:', metrics.logicalLines);
  console.log('Comment lines:', metrics.commentLines);
  console.log('Comment level:', metrics.commentLevel);
}

const fs = require("fs");

function calculateMetrics(code) {
  const lines = code.split('\n');
  let totalLines = 0;
  let emptyLines = 0;
  let physicalLines = 0;
  let logicalLines = 0;
  let commentLines = 0;
  let commentLevel = 0;
  let isMultilineComment = false;

  for (const line of lines) {
    totalLines++;

    // Check for empty lines
    if (line.trim() === '') {
      emptyLines++;
      continue;
    }

    // Check for single-line 
    if (line.trim().startsWith('//')) {
      commentLines++;
      continue;
    }

    /* Check for multi-line comments */
    if (line.trim().startsWith('/*')) {
      commentLines++;
      commentLevel++;
      isMultilineComment = true;
    }

    if (isMultilineComment) {
      commentLines++;
      if (line.trim().endsWith('*/')) {
        isMultilineComment = false;
        commentLevel--;
      }
      continue;
    }

    // Check for logical lines
    logicalLines++;

    // Check for physical lines
    physicalLines += line.split(';').length;
  }

  return {
    totalLines,
    emptyLines,
    physicalLines,
    logicalLines,
    commentLines,
    commentLevel,
  };
}

function analyzeCode(filePath) {
  try {
    const code = fs.readFileSync(filePath, 'utf-8');
    return calculateMetrics(code);
  } catch (error) {
    console.error(`Error reading file: ${filePath}`);
    return null;
  }
}

// Usage example
const filePath = './test.py';
const metrics = analyzeCode(filePath);

if (metrics) {
  console.log('Total lines:', metrics.totalLines);
  console.log('Empty lines:', metrics.emptyLines);
  console.log('Physical lines:', metrics.physicalLines);
  console.log('Logical lines:', metrics.logicalLines);
  console.log('Comment lines:', metrics.commentLines);
  console.log('Comment level:', metrics.commentLevel);
}

const fs = require("fs");

function calculateMetrics(code) {
  const lines = code.split('\n');
  let totalLines = 0;
  let emptyLines = 0;
  let physicalLines = 0;
  let logicalLines = 0;
  let commentLines = 0;
  let commentLevel = 0;
  let isMultilineComment = false;

  for (const line of lines) {
    totalLines++;

    // Check for empty lines
    if (line.trim() === '') {
      emptyLines++;
      continue;
    }

    // Check for single-line 
    if (line.trim().startsWith('//')) {
      commentLines++;
      continue;
    }

    /* Check for multi-line comments */
    if (line.trim().startsWith('/*')) {
      commentLines++;
      commentLevel++;
      isMultilineComment = true;
    }

    if (isMultilineComment) {
      commentLines++;
      if (line.trim().endsWith('*/')) {
        isMultilineComment = false;
        commentLevel--;
      }
      continue;
    }

    // Check for logical lines
    logicalLines++;

    // Check for physical lines
    physicalLines += line.split(';').length;
  }

  return {
    totalLines,
    emptyLines,
    physicalLines,
    logicalLines,
    commentLines,
    commentLevel,
  };
}

function analyzeCode(filePath) {
  try {
    const code = fs.readFileSync(filePath, 'utf-8');
    return calculateMetrics(code);
  } catch (error) {
    console.error(`Error reading file: ${filePath}`);
    return null;
  }
}

// Usage example
const filePath = './test.py';
const metrics = analyzeCode(filePath);

if (metrics) {
  console.log('Total lines:', metrics.totalLines);
  console.log('Empty lines:', metrics.emptyLines);
  console.log('Physical lines:', metrics.physicalLines);
  console.log('Logical lines:', metrics.logicalLines);
  console.log('Comment lines:', metrics.commentLines);
  console.log('Comment level:', metrics.commentLevel);
}

const fs = require("fs");

function calculateMetrics(code) {
  const lines = code.split('\n');
  let totalLines = 0;
  let emptyLines = 0;
  let physicalLines = 0;
  let logicalLines = 0;
  let commentLines = 0;
  let commentLevel = 0;
  let isMultilineComment = false;

  for (const line of lines) {
    totalLines++;

    // Check for empty lines
    if (line.trim() === '') {
      emptyLines++;
      continue;
    }

    // Check for single-line 
    if (line.trim().startsWith('//')) {
      commentLines++;
      continue;
    }

    /* Check for multi-line comments */
    if (line.trim().startsWith('/*')) {
      commentLines++;
      commentLevel++;
      isMultilineComment = true;
    }

    if (isMultilineComment) {
      commentLines++;
      if (line.trim().endsWith('*/')) {
        isMultilineComment = false;
        commentLevel--;
      }
      continue;
    }

    // Check for logical lines
    logicalLines++;

    // Check for physical lines
    physicalLines += line.split(';').length;
  }

  return {
    totalLines,
    emptyLines,
    physicalLines,
    logicalLines,
    commentLines,
    commentLevel,
  };
}

function analyzeCode(filePath) {
  try {
    const code = fs.readFileSync(filePath, 'utf-8');
    return calculateMetrics(code);
  } catch (error) {
    console.error(`Error reading file: ${filePath}`);
    return null;
  }
}

// Usage example
const filePath = './test.py';
const metrics = analyzeCode(filePath);

if (metrics) {
  console.log('Total lines:', metrics.totalLines);
  console.log('Empty lines:', metrics.emptyLines);
  console.log('Physical lines:', metrics.physicalLines);
  console.log('Logical lines:', metrics.logicalLines);
  console.log('Comment lines:', metrics.commentLines);
  console.log('Comment level:', metrics.commentLevel);
}

const fs = require("fs");

function calculateMetrics(code) {
  const lines = code.split('\n');
  let totalLines = 0;
  let emptyLines = 0;
  let physicalLines = 0;
  let logicalLines = 0;
  let commentLines = 0;
  let commentLevel = 0;
  let isMultilineComment = false;

  for (const line of lines) {
    totalLines++;

    // Check for empty lines
    if (line.trim() === '') {
      emptyLines++;
      continue;
    }

    // Check for single-line 
    if (line.trim().startsWith('//')) {
      commentLines++;
      continue;
    }

    /* Check for multi-line comments */
    if (line.trim().startsWith('/*')) {
      commentLines++;
      commentLevel++;
      isMultilineComment = true;
    }

    if (isMultilineComment) {
      commentLines++;
      if (line.trim().endsWith('*/')) {
        isMultilineComment = false;
        commentLevel--;
      }
      continue;
    }

    // Check for logical lines
    logicalLines++;

    // Check for physical lines
    physicalLines += line.split(';').length;
  }

  return {
    totalLines,
    emptyLines,
    physicalLines,
    logicalLines,
    commentLines,
    commentLevel,
  };
}

function analyzeCode(filePath) {
  try {
    const code = fs.readFileSync(filePath, 'utf-8');
    return calculateMetrics(code);
  } catch (error) {
    console.error(`Error reading file: ${filePath}`);
    return null;
  }
}

// Usage example
const filePath = './test.py';
const metrics = analyzeCode(filePath);

if (metrics) {
  console.log('Total lines:', metrics.totalLines);
  console.log('Empty lines:', metrics.emptyLines);
  console.log('Physical lines:', metrics.physicalLines);
  console.log('Logical lines:', metrics.logicalLines);
  console.log('Comment lines:', metrics.commentLines);
  console.log('Comment level:', metrics.commentLevel);
}
const fs = require("fs");

function calculateMetrics(code) {
  const lines = code.split('\n');
  let totalLines = 0;
  let emptyLines = 0;
  let physicalLines = 0;
  let logicalLines = 0;
  let commentLines = 0;
  let commentLevel = 0;
  let isMultilineComment = false;

  for (const line of lines) {
    totalLines++;

    // Check for empty lines
    if (line.trim() === '') {
      emptyLines++;
      continue;
    }

    // Check for single-line 
    if (line.trim().startsWith('//')) {
      commentLines++;
      continue;
    }

    /* Check for multi-line comments */
    if (line.trim().startsWith('/*')) {
      commentLines++;
      commentLevel++;
      isMultilineComment = true;
    }

    if (isMultilineComment) {
      commentLines++;
      if (line.trim().endsWith('*/')) {
        isMultilineComment = false;
        commentLevel--;
      }
      continue;
    }

    // Check for logical lines
    logicalLines++;

    // Check for physical lines
    physicalLines += line.split(';').length;
  }

  return {
    totalLines,
    emptyLines,
    physicalLines,
    logicalLines,
    commentLines,
    commentLevel,
  };
}

function analyzeCode(filePath) {
  try {
    const code = fs.readFileSync(filePath, 'utf-8');
    return calculateMetrics(code);
  } catch (error) {
    console.error(`Error reading file: ${filePath}`);
    return null;
  }
}

// Usage example
const filePath = './test.py';
const metrics = analyzeCode(filePath);

if (metrics) {
  console.log('Total lines:', metrics.totalLines);
  console.log('Empty lines:', metrics.emptyLines);
  console.log('Physical lines:', metrics.physicalLines);
  console.log('Logical lines:', metrics.logicalLines);
  console.log('Comment lines:', metrics.commentLines);
  console.log('Comment level:', metrics.commentLevel);
}
const fs = require("fs");

function calculateMetrics(code) {
  const lines = code.split('\n');
  let totalLines = 0;
  let emptyLines = 0;
  let physicalLines = 0;
  let logicalLines = 0;
  let commentLines = 0;
  let commentLevel = 0;
  let isMultilineComment = false;

  for (const line of lines) {
    totalLines++;

    // Check for empty lines
    if (line.trim() === '') {
      emptyLines++;
      continue;
    }

    // Check for single-line 
    if (line.trim().startsWith('//')) {
      commentLines++;
      continue;
    }

    /* Check for multi-line comments */
    if (line.trim().startsWith('/*')) {
      commentLines++;
      commentLevel++;
      isMultilineComment = true;
    }

    if (isMultilineComment) {
      commentLines++;
      if (line.trim().endsWith('*/')) {
        isMultilineComment = false;
        commentLevel--;
      }
      continue;
    }

    // Check for logical lines
    logicalLines++;

    // Check for physical lines
    physicalLines += line.split(';').length;
  }

  return {
    totalLines,
    emptyLines,
    physicalLines,
    logicalLines,
    commentLines,
    commentLevel,
  };
}

function analyzeCode(filePath) {
  try {
    const code = fs.readFileSync(filePath, 'utf-8');
    return calculateMetrics(code);
  } catch (error) {
    console.error(`Error reading file: ${filePath}`);
    return null;
  }
}

// Usage example
const filePath = './test.py';
const metrics = analyzeCode(filePath);

if (metrics) {
  console.log('Total lines:', metrics.totalLines);
  console.log('Empty lines:', metrics.emptyLines);
  console.log('Physical lines:', metrics.physicalLines);
  console.log('Logical lines:', metrics.logicalLines);
  console.log('Comment lines:', metrics.commentLines);
  console.log('Comment level:', metrics.commentLevel);
}
const fs = require("fs");

function calculateMetrics(code) {
  const lines = code.split('\n');
  let totalLines = 0;
  let emptyLines = 0;
  let physicalLines = 0;
  let logicalLines = 0;
  let commentLines = 0;
  let commentLevel = 0;
  let isMultilineComment = false;

  for (const line of lines) {
    totalLines++;

    // Check for empty lines
    if (line.trim() === '') {
      emptyLines++;
      continue;
    }

    // Check for single-line 
    if (line.trim().startsWith('//')) {
      commentLines++;
      continue;
    }

    /* Check for multi-line comments */
    if (line.trim().startsWith('/*')) {
      commentLines++;
      commentLevel++;
      isMultilineComment = true;
    }

    if (isMultilineComment) {
      commentLines++;
      if (line.trim().endsWith('*/')) {
        isMultilineComment = false;
        commentLevel--;
      }
      continue;
    }

    // Check for logical lines
    logicalLines++;

    // Check for physical lines
    physicalLines += line.split(';').length;
  }

  return {
    totalLines,
    emptyLines,
    physicalLines,
    logicalLines,
    commentLines,
    commentLevel,
  };
}

function analyzeCode(filePath) {
  try {
    const code = fs.readFileSync(filePath, 'utf-8');
    return calculateMetrics(code);
  } catch (error) {
    console.error(`Error reading file: ${filePath}`);
    return null;
  }
}

// Usage example
const filePath = './test.py';
const metrics = analyzeCode(filePath);

if (metrics) {
  console.log('Total lines:', metrics.totalLines);
  console.log('Empty lines:', metrics.emptyLines);
  console.log('Physical lines:', metrics.physicalLines);
  console.log('Logical lines:', metrics.logicalLines);
  console.log('Comment lines:', metrics.commentLines);
  console.log('Comment level:', metrics.commentLevel);
}
const fs = require("fs");

function calculateMetrics(code) {
  const lines = code.split('\n');
  let totalLines = 0;
  let emptyLines = 0;
  let physicalLines = 0;
  let logicalLines = 0;
  let commentLines = 0;
  let commentLevel = 0;
  let isMultilineComment = false;

  for (const line of lines) {
    totalLines++;

    // Check for empty lines
    if (line.trim() === '') {
      emptyLines++;
      continue;
    }

    // Check for single-line 
    if (line.trim().startsWith('//')) {
      commentLines++;
      continue;
    }

    /* Check for multi-line comments */
    if (line.trim().startsWith('/*')) {
      commentLines++;
      commentLevel++;
      isMultilineComment = true;
    }

    if (isMultilineComment) {
      commentLines++;
      if (line.trim().endsWith('*/')) {
        isMultilineComment = false;
        commentLevel--;
      }
      continue;
    }

    // Check for logical lines
    logicalLines++;

    // Check for physical lines
    physicalLines += line.split(';').length;
  }

  return {
    totalLines,
    emptyLines,
    physicalLines,
    logicalLines,
    commentLines,
    commentLevel,
  };
}

function analyzeCode(filePath) {
  try {
    const code = fs.readFileSync(filePath, 'utf-8');
    return calculateMetrics(code);
  } catch (error) {
    console.error(`Error reading file: ${filePath}`);
    return null;
  }
}

// Usage example
const filePath = './test.py';
const metrics = analyzeCode(filePath);

if (metrics) {
  console.log('Total lines:', metrics.totalLines);
  console.log('Empty lines:', metrics.emptyLines);
  console.log('Physical lines:', metrics.physicalLines);
  console.log('Logical lines:', metrics.logicalLines);
  console.log('Comment lines:', metrics.commentLines);
  console.log('Comment level:', metrics.commentLevel);
}
const fs = require("fs");

function calculateMetrics(code) {
  const lines = code.split('\n');
  let totalLines = 0;
  let emptyLines = 0;
  let physicalLines = 0;
  let logicalLines = 0;
  let commentLines = 0;
  let commentLevel = 0;
  let isMultilineComment = false;

  for (const line of lines) {
    totalLines++;

    // Check for empty lines
    if (line.trim() === '') {
      emptyLines++;
      continue;
    }

    // Check for single-line 
    if (line.trim().startsWith('//')) {
      commentLines++;
      continue;
    }

    /* Check for multi-line comments */
    if (line.trim().startsWith('/*')) {
      commentLines++;
      commentLevel++;
      isMultilineComment = true;
    }

    if (isMultilineComment) {
      commentLines++;
      if (line.trim().endsWith('*/')) {
        isMultilineComment = false;
        commentLevel--;
      }
      continue;
    }

    // Check for logical lines
    logicalLines++;

    // Check for physical lines
    physicalLines += line.split(';').length;
  }

  return {
    totalLines,
    emptyLines,
    physicalLines,
    logicalLines,
    commentLines,
    commentLevel,
  };
}

function analyzeCode(filePath) {
  try {
    const code = fs.readFileSync(filePath, 'utf-8');
    return calculateMetrics(code);
  } catch (error) {
    console.error(`Error reading file: ${filePath}`);
    return null;
  }
}

// Usage example
const filePath = './test.py';
const metrics = analyzeCode(filePath);

if (metrics) {
  console.log('Total lines:', metrics.totalLines);
  console.log('Empty lines:', metrics.emptyLines);
  console.log('Physical lines:', metrics.physicalLines);
  console.log('Logical lines:', metrics.logicalLines);
  console.log('Comment lines:', metrics.commentLines);
  console.log('Comment level:', metrics.commentLevel);
}
const fs = require("fs");

function calculateMetrics(code) {
  const lines = code.split('\n');
  let totalLines = 0;
  let emptyLines = 0;
  let physicalLines = 0;
  let logicalLines = 0;
  let commentLines = 0;
  let commentLevel = 0;
  let isMultilineComment = false;

  for (const line of lines) {
    totalLines++;

    // Check for empty lines
    if (line.trim() === '') {
      emptyLines++;
      continue;
    }

    // Check for single-line 
    if (line.trim().startsWith('//')) {
      commentLines++;
      continue;
    }

    /* Check for multi-line comments */
    if (line.trim().startsWith('/*')) {
      commentLines++;
      commentLevel++;
      isMultilineComment = true;
    }

    if (isMultilineComment) {
      commentLines++;
      if (line.trim().endsWith('*/')) {
        isMultilineComment = false;
        commentLevel--;
      }
      continue;
    }

    // Check for logical lines
    logicalLines++;

    // Check for physical lines
    physicalLines += line.split(';').length;
  }

  return {
    totalLines,
    emptyLines,
    physicalLines,
    logicalLines,
    commentLines,
    commentLevel,
  };
}

function analyzeCode(filePath) {
  try {
    const code = fs.readFileSync(filePath, 'utf-8');
    return calculateMetrics(code);
  } catch (error) {
    console.error(`Error reading file: ${filePath}`);
    return null;
  }
}

// Usage example
const filePath = './test.py';
const metrics = analyzeCode(filePath);

if (metrics) {
  console.log('Total lines:', metrics.totalLines);
  console.log('Empty lines:', metrics.emptyLines);
  console.log('Physical lines:', metrics.physicalLines);
  console.log('Logical lines:', metrics.logicalLines);
  console.log('Comment lines:', metrics.commentLines);
  console.log('Comment level:', metrics.commentLevel);
}
const fs = require("fs");

function calculateMetrics(code) {
  const lines = code.split('\n');
  let totalLines = 0;
  let emptyLines = 0;
  let physicalLines = 0;
  let logicalLines = 0;
  let commentLines = 0;
  let commentLevel = 0;
  let isMultilineComment = false;

  for (const line of lines) {
    totalLines++;

    // Check for empty lines
    if (line.trim() === '') {
      emptyLines++;
      continue;
    }

    // Check for single-line 
    if (line.trim().startsWith('//')) {
      commentLines++;
      continue;
    }

    /* Check for multi-line comments */
    if (line.trim().startsWith('/*')) {
      commentLines++;
      commentLevel++;
      isMultilineComment = true;
    }

    if (isMultilineComment) {
      commentLines++;
      if (line.trim().endsWith('*/')) {
        isMultilineComment = false;
        commentLevel--;
      }
      continue;
    }

    // Check for logical lines
    logicalLines++;

    // Check for physical lines
    physicalLines += line.split(';').length;
  }

  return {
    totalLines,
    emptyLines,
    physicalLines,
    logicalLines,
    commentLines,
    commentLevel,
  };
}

function analyzeCode(filePath) {
  try {
    const code = fs.readFileSync(filePath, 'utf-8');
    return calculateMetrics(code);
  } catch (error) {
    console.error(`Error reading file: ${filePath}`);
    return null;
  }
}

// Usage example
const filePath = './test.py';
const metrics = analyzeCode(filePath);

if (metrics) {
  console.log('Total lines:', metrics.totalLines);
  console.log('Empty lines:', metrics.emptyLines);
  console.log('Physical lines:', metrics.physicalLines);
  console.log('Logical lines:', metrics.logicalLines);
  console.log('Comment lines:', metrics.commentLines);
  console.log('Comment level:', metrics.commentLevel);
}
const fs = require("fs");

function calculateMetrics(code) {
  const lines = code.split('\n');
  let totalLines = 0;
  let emptyLines = 0;
  let physicalLines = 0;
  let logicalLines = 0;
  let commentLines = 0;
  let commentLevel = 0;
  let isMultilineComment = false;

  for (const line of lines) {
    totalLines++;

    // Check for empty lines
    if (line.trim() === '') {
      emptyLines++;
      continue;
    }

    // Check for single-line 
    if (line.trim().startsWith('//')) {
      commentLines++;
      continue;
    }

    /* Check for multi-line comments */
    if (line.trim().startsWith('/*')) {
      commentLines++;
      commentLevel++;
      isMultilineComment = true;
    }

    if (isMultilineComment) {
      commentLines++;
      if (line.trim().endsWith('*/')) {
        isMultilineComment = false;
        commentLevel--;
      }
      continue;
    }

    // Check for logical lines
    logicalLines++;

    // Check for physical lines
    physicalLines += line.split(';').length;
  }

  return {
    totalLines,
    emptyLines,
    physicalLines,
    logicalLines,
    commentLines,
    commentLevel,
  };
}

function analyzeCode(filePath) {
  try {
    const code = fs.readFileSync(filePath, 'utf-8');
    return calculateMetrics(code);
  } catch (error) {
    console.error(`Error reading file: ${filePath}`);
    return null;
  }
}

// Usage example
const filePath = './test.py';
const metrics = analyzeCode(filePath);

if (metrics) {
  console.log('Total lines:', metrics.totalLines);
  console.log('Empty lines:', metrics.emptyLines);
  console.log('Physical lines:', metrics.physicalLines);
  console.log('Logical lines:', metrics.logicalLines);
  console.log('Comment lines:', metrics.commentLines);
  console.log('Comment level:', metrics.commentLevel);
}
v
v
const fs = require("fs");

function calculateMetrics(code) {
  const lines = code.split('\n');
  let totalLines = 0;
  let emptyLines = 0;
  let physicalLines = 0;
  let logicalLines = 0;
  let commentLines = 0;
  let commentLevel = 0;
  let isMultilineComment = false;

  for (const line of lines) {
    totalLines++;

    // Check for empty lines
    if (line.trim() === '') {
      emptyLines++;
      continue;
    }

    // Check for single-line 
    if (line.trim().startsWith('//')) {
      commentLines++;
      continue;
    }

    /* Check for multi-line comments */
    if (line.trim().startsWith('/*')) {
      commentLines++;
      commentLevel++;
      isMultilineComment = true;
    }

    if (isMultilineComment) {
      commentLines++;
      if (line.trim().endsWith('*/')) {
        isMultilineComment = false;
        commentLevel--;
      }
      continue;
    }

    // Check for logical lines
    logicalLines++;

    // Check for physical lines
    physicalLines += line.split(';').length;
  }

  return {
    totalLines,
    emptyLines,
    physicalLines,
    logicalLines,
    commentLines,
    commentLevel,
  };
}

function analyzeCode(filePath) {
  try {
    const code = fs.readFileSync(filePath, 'utf-8');
    return calculateMetrics(code);
  } catch (error) {
    console.error(`Error reading file: ${filePath}`);
    return null;
  }
}

// Usage example
const filePath = './test.py';
const metrics = analyzeCode(filePath);

if (metrics) {
  console.log('Total lines:', metrics.totalLines);
  console.log('Empty lines:', metrics.emptyLines);
  console.log('Physical lines:', metrics.physicalLines);
  console.log('Logical lines:', metrics.logicalLines);
  console.log('Comment lines:', metrics.commentLines);
  console.log('Comment level:', metrics.commentLevel);
}
const fs = require("fs");

function calculateMetrics(code) {
  const lines = code.split('\n');
  let totalLines = 0;
  let emptyLines = 0;
  let physicalLines = 0;
  let logicalLines = 0;
  let commentLines = 0;
  let commentLevel = 0;
  let isMultilineComment = false;

  for (const line of lines) {
    totalLines++;

    // Check for empty lines
    if (line.trim() === '') {
      emptyLines++;
      continue;
    }

    // Check for single-line 
    if (line.trim().startsWith('//')) {
      commentLines++;
      continue;
    }

    /* Check for multi-line comments */
    if (line.trim().startsWith('/*')) {
      commentLines++;
      commentLevel++;
      isMultilineComment = true;
    }

    if (isMultilineComment) {
      commentLines++;
      if (line.trim().endsWith('*/')) {
        isMultilineComment = false;
        commentLevel--;
      }
      continue;
    }

    // Check for logical lines
    logicalLines++;

    // Check for physical lines
    physicalLines += line.split(';').length;
  }

  return {
    totalLines,
    emptyLines,
    physicalLines,
    logicalLines,
    commentLines,
    commentLevel,
  };
}

function analyzeCode(filePath) {
  try {
    const code = fs.readFileSync(filePath, 'utf-8');
    return calculateMetrics(code);
  } catch (error) {
    console.error(`Error reading file: ${filePath}`);
    return null;
  }
}

// Usage example
const filePath = './test.py';
const metrics = analyzeCode(filePath);

if (metrics) {
  console.log('Total lines:', metrics.totalLines);
  console.log('Empty lines:', metrics.emptyLines);
  console.log('Physical lines:', metrics.physicalLines);
  console.log('Logical lines:', metrics.logicalLines);
  console.log('Comment lines:', metrics.commentLines);
  console.log('Comment level:', metrics.commentLevel);
}
const fs = require("fs");

function calculateMetrics(code) {
  const lines = code.split('\n');
  let totalLines = 0;
  let emptyLines = 0;
  let physicalLines = 0;
  let logicalLines = 0;
  let commentLines = 0;
  let commentLevel = 0;
  let isMultilineComment = false;

  for (const line of lines) {
    totalLines++;

    // Check for empty lines
    if (line.trim() === '') {
      emptyLines++;
      continue;
    }

    // Check for single-line 
    if (line.trim().startsWith('//')) {
      commentLines++;
      continue;
    }

    /* Check for multi-line comments */
    if (line.trim().startsWith('/*')) {
      commentLines++;
      commentLevel++;
      isMultilineComment = true;
    }

    if (isMultilineComment) {
      commentLines++;
      if (line.trim().endsWith('*/')) {
        isMultilineComment = false;
        commentLevel--;
      }
      continue;
    }

    // Check for logical lines
    logicalLines++;

    // Check for physical lines
    physicalLines += line.split(';').length;
  }

  return {
    totalLines,
    emptyLines,
    physicalLines,
    logicalLines,
    commentLines,
    commentLevel,
  };
}

function analyzeCode(filePath) {
  try {
    const code = fs.readFileSync(filePath, 'utf-8');
    return calculateMetrics(code);
  } catch (error) {
    console.error(`Error reading file: ${filePath}`);
    return null;
  }
}

// Usage example
const filePath = './test.py';
const metrics = analyzeCode(filePath);

if (metrics) {
  console.log('Total lines:', metrics.totalLines);
  console.log('Empty lines:', metrics.emptyLines);
  console.log('Physical lines:', metrics.physicalLines);
  console.log('Logical lines:', metrics.logicalLines);
  console.log('Comment lines:', metrics.commentLines);
  console.log('Comment level:', metrics.commentLevel);
}
const fs = require("fs");

function calculateMetrics(code) {
  const lines = code.split('\n');
  let totalLines = 0;
  let emptyLines = 0;
  let physicalLines = 0;
  let logicalLines = 0;
  let commentLines = 0;
  let commentLevel = 0;
  let isMultilineComment = false;

  for (const line of lines) {
    totalLines++;

    // Check for empty lines
    if (line.trim() === '') {
      emptyLines++;
      continue;
    }

    // Check for single-line 
    if (line.trim().startsWith('//')) {
      commentLines++;
      continue;
    }

    /* Check for multi-line comments */
    if (line.trim().startsWith('/*')) {
      commentLines++;
      commentLevel++;
      isMultilineComment = true;
    }

    if (isMultilineComment) {
      commentLines++;
      if (line.trim().endsWith('*/')) {
        isMultilineComment = false;
        commentLevel--;
      }
      continue;
    }

    // Check for logical lines
    logicalLines++;

    // Check for physical lines
    physicalLines += line.split(';').length;
  }

  return {
    totalLines,
    emptyLines,
    physicalLines,
    logicalLines,
    commentLines,
    commentLevel,
  };
}

function analyzeCode(filePath) {
  try {
    const code = fs.readFileSync(filePath, 'utf-8');
    return calculateMetrics(code);
  } catch (error) {
    console.error(`Error reading file: ${filePath}`);
    return null;
  }
}

// Usage example
const filePath = './test.py';
const metrics = analyzeCode(filePath);

if (metrics) {
  console.log('Total lines:', metrics.totalLines);
  console.log('Empty lines:', metrics.emptyLines);
  console.log('Physical lines:', metrics.physicalLines);
  console.log('Logical lines:', metrics.logicalLines);
  console.log('Comment lines:', metrics.commentLines);
  console.log('Comment level:', metrics.commentLevel);
}
const fs = require("fs");

function calculateMetrics(code) {
  const lines = code.split('\n');
  let totalLines = 0;
  let emptyLines = 0;
  let physicalLines = 0;
  let logicalLines = 0;
  let commentLines = 0;
  let commentLevel = 0;
  let isMultilineComment = false;

  for (const line of lines) {
    totalLines++;

    // Check for empty lines
    if (line.trim() === '') {
      emptyLines++;
      continue;
    }

    // Check for single-line 
    if (line.trim().startsWith('//')) {
      commentLines++;
      continue;
    }

    /* Check for multi-line comments */
    if (line.trim().startsWith('/*')) {
      commentLines++;
      commentLevel++;
      isMultilineComment = true;
    }

    if (isMultilineComment) {
      commentLines++;
      if (line.trim().endsWith('*/')) {
        isMultilineComment = false;
        commentLevel--;
      }
      continue;
    }

    // Check for logical lines
    logicalLines++;

    // Check for physical lines
    physicalLines += line.split(';').length;
  }

  return {
    totalLines,
    emptyLines,
    physicalLines,
    logicalLines,
    commentLines,
    commentLevel,
  };
}

function analyzeCode(filePath) {
  try {
    const code = fs.readFileSync(filePath, 'utf-8');
    return calculateMetrics(code);
  } catch (error) {
    console.error(`Error reading file: ${filePath}`);
    return null;
  }
}

// Usage example
const filePath = './test.py';
const metrics = analyzeCode(filePath);

if (metrics) {
  console.log('Total lines:', metrics.totalLines);
  console.log('Empty lines:', metrics.emptyLines);
  console.log('Physical lines:', metrics.physicalLines);
  console.log('Logical lines:', metrics.logicalLines);
  console.log('Comment lines:', metrics.commentLines);
  console.log('Comment level:', metrics.commentLevel);
}
const fs = require("fs");

function calculateMetrics(code) {
  const lines = code.split('\n');
  let totalLines = 0;
  let emptyLines = 0;
  let physicalLines = 0;
  let logicalLines = 0;
  let commentLines = 0;
  let commentLevel = 0;
  let isMultilineComment = false;

  for (const line of lines) {
    totalLines++;

    // Check for empty lines
    if (line.trim() === '') {
      emptyLines++;
      continue;
    }

    // Check for single-line 
    if (line.trim().startsWith('//')) {
      commentLines++;
      continue;
    }

    /* Check for multi-line comments */
    if (line.trim().startsWith('/*')) {
      commentLines++;
      commentLevel++;
      isMultilineComment = true;
    }

    if (isMultilineComment) {
      commentLines++;
      if (line.trim().endsWith('*/')) {
        isMultilineComment = false;
        commentLevel--;
      }
      continue;
    }

    // Check for logical lines
    logicalLines++;

    // Check for physical lines
    physicalLines += line.split(';').length;
  }

  return {
    totalLines,
    emptyLines,
    physicalLines,
    logicalLines,
    commentLines,
    commentLevel,
  };
}

function analyzeCode(filePath) {
  try {
    const code = fs.readFileSync(filePath, 'utf-8');
    return calculateMetrics(code);
  } catch (error) {
    console.error(`Error reading file: ${filePath}`);
    return null;
  }
}

// Usage example
const filePath = './test.py';
const metrics = analyzeCode(filePath);

if (metrics) {
  console.log('Total lines:', metrics.totalLines);
  console.log('Empty lines:', metrics.emptyLines);
  console.log('Physical lines:', metrics.physicalLines);
  console.log('Logical lines:', metrics.logicalLines);
  console.log('Comment lines:', metrics.commentLines);
  console.log('Comment level:', metrics.commentLevel);
}
const fs = require("fs");

function calculateMetrics(code) {
  const lines = code.split('\n');
  let totalLines = 0;
  let emptyLines = 0;
  let physicalLines = 0;
  let logicalLines = 0;
  let commentLines = 0;
  let commentLevel = 0;
  let isMultilineComment = false;

  for (const line of lines) {
    totalLines++;

    // Check for empty lines
    if (line.trim() === '') {
      emptyLines++;
      continue;
    }

    // Check for single-line 
    if (line.trim().startsWith('//')) {
      commentLines++;
      continue;
    }

    /* Check for multi-line comments */
    if (line.trim().startsWith('/*')) {
      commentLines++;
      commentLevel++;
      isMultilineComment = true;
    }

    if (isMultilineComment) {
      commentLines++;
      if (line.trim().endsWith('*/')) {
        isMultilineComment = false;
        commentLevel--;
      }
      continue;
    }

    // Check for logical lines
    logicalLines++;

    // Check for physical lines
    physicalLines += line.split(';').length;
  }

  return {
    totalLines,
    emptyLines,
    physicalLines,
    logicalLines,
    commentLines,
    commentLevel,
  };
}

function analyzeCode(filePath) {
  try {
    const code = fs.readFileSync(filePath, 'utf-8');
    return calculateMetrics(code);
  } catch (error) {
    console.error(`Error reading file: ${filePath}`);
    return null;
  }
}

// Usage example
const filePath = './test.py';
const metrics = analyzeCode(filePath);

if (metrics) {
  console.log('Total lines:', metrics.totalLines);
  console.log('Empty lines:', metrics.emptyLines);
  console.log('Physical lines:', metrics.physicalLines);
  console.log('Logical lines:', metrics.logicalLines);
  console.log('Comment lines:', metrics.commentLines);
  console.log('Comment level:', metrics.commentLevel);
}
const fs = require("fs");

function calculateMetrics(code) {
  const lines = code.split('\n');
  let totalLines = 0;
  let emptyLines = 0;
  let physicalLines = 0;
  let logicalLines = 0;
  let commentLines = 0;
  let commentLevel = 0;
  let isMultilineComment = false;

  for (const line of lines) {
    totalLines++;

    // Check for empty lines
    if (line.trim() === '') {
      emptyLines++;
      continue;
    }

    // Check for single-line 
    if (line.trim().startsWith('//')) {
      commentLines++;
      continue;
    }

    /* Check for multi-line comments */
    if (line.trim().startsWith('/*')) {
      commentLines++;
      commentLevel++;
      isMultilineComment = true;
    }

    if (isMultilineComment) {
      commentLines++;
      if (line.trim().endsWith('*/')) {
        isMultilineComment = false;
        commentLevel--;
      }
      continue;
    }

    // Check for logical lines
    logicalLines++;

    // Check for physical lines
    physicalLines += line.split(';').length;
  }

  return {
    totalLines,
    emptyLines,
    physicalLines,
    logicalLines,
    commentLines,
    commentLevel,
  };
}

function analyzeCode(filePath) {
  try {
    const code = fs.readFileSync(filePath, 'utf-8');
    return calculateMetrics(code);
  } catch (error) {
    console.error(`Error reading file: ${filePath}`);
    return null;
  }
}

// Usage example
const filePath = './test.py';
const metrics = analyzeCode(filePath);

if (metrics) {
  console.log('Total lines:', metrics.totalLines);
  console.log('Empty lines:', metrics.emptyLines);
  console.log('Physical lines:', metrics.physicalLines);
  console.log('Logical lines:', metrics.logicalLines);
  console.log('Comment lines:', metrics.commentLines);
  console.log('Comment level:', metrics.commentLevel);
}
const fs = require("fs");

function calculateMetrics(code) {
  const lines = code.split('\n');
  let totalLines = 0;
  let emptyLines = 0;
  let physicalLines = 0;
  let logicalLines = 0;
  let commentLines = 0;
  let commentLevel = 0;
  let isMultilineComment = false;

  for (const line of lines) {
    totalLines++;

    // Check for empty lines
    if (line.trim() === '') {
      emptyLines++;
      continue;
    }

    // Check for single-line 
    if (line.trim().startsWith('//')) {
      commentLines++;
      continue;
    }

    /* Check for multi-line comments */
    if (line.trim().startsWith('/*')) {
      commentLines++;
      commentLevel++;
      isMultilineComment = true;
    }

    if (isMultilineComment) {
      commentLines++;
      if (line.trim().endsWith('*/')) {
        isMultilineComment = false;
        commentLevel--;
      }
      continue;
    }

    // Check for logical lines
    logicalLines++;

    // Check for physical lines
    physicalLines += line.split(';').length;
  }

  return {
    totalLines,
    emptyLines,
    physicalLines,
    logicalLines,
    commentLines,
    commentLevel,
  };
}

function analyzeCode(filePath) {
  try {
    const code = fs.readFileSync(filePath, 'utf-8');
    return calculateMetrics(code);
  } catch (error) {
    console.error(`Error reading file: ${filePath}`);
    return null;
  }
}

// Usage example
const filePath = './test.py';
const metrics = analyzeCode(filePath);

if (metrics) {
  console.log('Total lines:', metrics.totalLines);
  console.log('Empty lines:', metrics.emptyLines);
  console.log('Physical lines:', metrics.physicalLines);
  console.log('Logical lines:', metrics.logicalLines);
  console.log('Comment lines:', metrics.commentLines);
  console.log('Comment level:', metrics.commentLevel);
}
const fs = require("fs");

function calculateMetrics(code) {
  const lines = code.split('\n');
  let totalLines = 0;
  let emptyLines = 0;
  let physicalLines = 0;
  let logicalLines = 0;
  let commentLines = 0;
  let commentLevel = 0;
  let isMultilineComment = false;

  for (const line of lines) {
    totalLines++;

    // Check for empty lines
    if (line.trim() === '') {
      emptyLines++;
      continue;
    }

    // Check for single-line 
    if (line.trim().startsWith('//')) {
      commentLines++;
      continue;
    }

    /* Check for multi-line comments */
    if (line.trim().startsWith('/*')) {
      commentLines++;
      commentLevel++;
      isMultilineComment = true;
    }

    if (isMultilineComment) {
      commentLines++;
      if (line.trim().endsWith('*/')) {
        isMultilineComment = false;
        commentLevel--;
      }
      continue;
    }

    // Check for logical lines
    logicalLines++;

    // Check for physical lines
    physicalLines += line.split(';').length;
  }

  return {
    totalLines,
    emptyLines,
    physicalLines,
    logicalLines,
    commentLines,
    commentLevel,
  };
}

function analyzeCode(filePath) {
  try {
    const code = fs.readFileSync(filePath, 'utf-8');
    return calculateMetrics(code);
  } catch (error) {
    console.error(`Error reading file: ${filePath}`);
    return null;
  }
}

// Usage example
const filePath = './test.py';
const metrics = analyzeCode(filePath);

if (metrics) {
  console.log('Total lines:', metrics.totalLines);
  console.log('Empty lines:', metrics.emptyLines);
  console.log('Physical lines:', metrics.physicalLines);
  console.log('Logical lines:', metrics.logicalLines);
  console.log('Comment lines:', metrics.commentLines);
  console.log('Comment level:', metrics.commentLevel);
}