# Overview

AgentCallValidator is a JavaScript-based project developed as part of the CSE 310 – Applied Programming course. The purpose of this project is to demonstrate applied programming concepts through the simulation of an intelligent Quality Assurance (QA) compliance validation tool for customer service call center interactions.

In its current version, the software processes pre-transcribed customer service calls stored in text files. The application reads the transcript, identifies the roles of the speakers (Agent and Customer), and analyzes only the agent’s speech to verify compliance with predefined company policies such as:

Proper greeting

Agent identification

Mandatory disclosure

The system generates a structured compliance report that clearly indicates whether each requirement was met and whether the interaction is overall COMPLIANT or NON-COMPLIANT.

This project focuses on core JavaScript and Node.js concepts including file handling, string processing, ES6 array functions, recursion, modular design, external library usage, and robust error handling.

* [Software Demo Video](https://youtu.be/lc2Uoo5aDqs)


## How the Software Works

1. The program reads a customer service call transcript from a .txt file.
2. Each line of the transcript is parsed to identify the speaker (Agent or Customer).
3. Only the Agent’s messages are extracted and analyzed.
4. Compliance rules are validated using explicit mandatory keywords for each requirement.
5. A recursive algorithm ensures that all required words appear in the correct logical order, preventing partial or incomplete disclosures from being incorrectly marked as compliant.
6. A color-coded compliance report is displayed directly in the terminal using a third-party JavaScript library.


## Key Programming Concepts Demonstrated

1. File I/O using Node.js (fs)
2. String processing and text parsing
3. ES6 array functions (map, filter, every)
4. Recursion to validate ordered compliance requirements
5. Exception handling using throw and try/catch
6. External library usage (chalk) for enhanced terminal output
7. Modular and readable code structure with function-level documentation

# Development Environment

The software was developed using the following tools:

Visual Studio Code as the code editor
Node.js for JavaScript execution
Git for version control
GitHub for source code hosting

The programming language used in this project is **JavaScript**, executed in a Node.js environment.


# Useful Websites

The following resources were referenced during the initial setup and development of this project:

* [JavaScript MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Node.js Documentation](https://nodejs.org/en/docs/)
* [GitHub Documentation](https://docs.github.com/)

The following resources were explored as part of early research for future expansions of this project. These tools are not yet implemented in the current version of the software:

* [Whisper Speech-to-Text (JavaScript library)](https://github.com/nitaiaharoni1/whisper-speech-to-text)
* [Soniox Speech-to-Text Web SDK (npm)](https://www.npmjs.com/package/%40soniox/speech-to-text-web?activeTab=readme)
* [Web Speech API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
* [JavaScript Speech Recognition Tutorial (YouTube)](https://www.youtube.com/watch?v=3XxDQUX-dEM)


## Final Note

This project was intentionally designed to prioritize correctness, clarity, and strict validation logic, ensuring that compliance requirements are only marked as passed when all mandatory elements are fully satisfied.