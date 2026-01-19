// AgentCallValidator

import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { fileURLToPath } from 'url';


// In this part of the code, I am defining __filename and __dirname to work with ES6 modules.

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// In this part of the code, I am defining the path to the transcript file.
const transcriptPath = path.join(__dirname, 'transcripts', 'sample-call.txt');

/**
 * Parses raw transcript text into structured objects
 */

// The purpose of this part of the code is to transform the raw text of the transcript into a structured format
// to facilitate further processing. It also validates that the transcript file is not empty.

function parseTranscript(text) {
  if (!text.trim()) {
    throw new Error('Transcript file is empty.');
  }
  return text
    .split('\n')
    .map(line => line.trim())
    .filter(
      line => line.startsWith('Agent:') || line.startsWith('Customer:')
    )
    .map(line => {
      const [speaker, ...rest] = line.split(':');
      return {
        speaker,
        message: rest.join(':').trim().toLowerCase()
      };
    });
}

/**
 * Extracts only agent messages using ES6 array functions
 */

// The purpose of this part of the code is to extract only the agent's messages from the complete transcript.

function extractAgentMessages(transcript) {
  return transcript
    .filter(entry => entry.speaker === 'Agent')
    .map(entry => entry.message);
}

/**
 * Recursive function that ensures mandatory words
 * appear in the correct order across agent messages
 */

// The purpose of this part of the code is to validate whether the mandatory words appear in the correct order in the agent's messages.

function validateWordsInOrder(words, messages, wordIndex = 0, messageIndex = 0) {
  if (wordIndex === words.length) return true;
  if (messageIndex === messages.length) return false;

  if (messages[messageIndex].includes(words[wordIndex])) {
    // Found the word, move to next word BUT stay in same message
    return validateWordsInOrder(words, messages, wordIndex + 1, messageIndex);
  }

  // Word not in this message, move to next message
  return validateWordsInOrder(words, messages, wordIndex, messageIndex + 1);
}


/**
 * Checks compliance rules using strict word-order validation
 */

// The purpose of this part of the code is to verify that the agent's messages comply with the defined rules.

function checkCompliance(agentMessages) {
  const GREETING_WORDS = ['hello', 'thank', 'you', 'calling'];
  const IDENTIFICATION_WORDS = ['my', 'name', 'is'];
  const DISCLOSURE_WORDS = ['may', 'be', 'recorded', 'your', 'name', 'email'];

  return {
    greeting: {
      passed: validateWordsInOrder(GREETING_WORDS, agentMessages)
    },
    identification: {
      passed: validateWordsInOrder(IDENTIFICATION_WORDS, agentMessages)
    },
    disclosure: {
      passed: validateWordsInOrder(DISCLOSURE_WORDS, agentMessages)
    }
  };
}

/**
 * Prints a colored compliance report using chalk
 */

// The purpose of this part of the code is to generate a color-coded report indicating whether each rule has been complied with or not.

function printReport(results) {
  console.log(chalk.bold('\n--- Compliance Report ---'));

  for (const [rule, data] of Object.entries(results)) {
    const statusText = data.passed
      ? chalk.green('✅ Passed')
      : chalk.red('❌ Failed');

    console.log(`${rule}: ${statusText}`);
  }

  const overall =
    results.greeting.passed &&
    results.identification.passed &&
    results.disclosure.passed;

  console.log(
    chalk.bold(
      `\nOverall Status: ${
        overall ? chalk.green('COMPLIANT') : chalk.red('NON-COMPLIANT')
      }`
    )
  );
}

// Main execution with proper error handling

// The purpose of this part of the code is to read the transcript file, process it, and generate the compliance report.

try {
  const data = fs.readFileSync(transcriptPath, 'utf8');

  const transcript = parseTranscript(data);
  const agentMessages = extractAgentMessages(transcript);
  const complianceResults = checkCompliance(agentMessages);

  printReport(complianceResults);
} catch (error) {
  console.error(chalk.red('Application Error:'), error.message);
}
