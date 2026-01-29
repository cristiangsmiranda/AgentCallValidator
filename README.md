# Overview

AgentCallValidator is a multi-language project developed as part of the CSE 310 – Applied Programming course. The project demonstrates applied programming and data analysis concepts through the simulation of an intelligent Quality Assurance (QA) and analytics system for customer service call center operations.

The project is divided into two complementary components:

1. JavaScript (Node.js) – responsible for processing customer service call transcripts, validating agent compliance with company policies, and generating structured compliance reports.

2. Python (Pandas & Matplotlib) – responsible for analyzing a real-world call center dataset to extract statistical insights and visualize operational performance.

This combined approach demonstrates separation of concerns, data-driven analysis, and cross-language integration.

* [Software Demo Video](https://youtu.be/qNblujkzL8U)


## How the Software Works

JavaScript Workflow

1. The program reads a customer service call transcript from a .txt file.
2. Each line of the transcript is parsed to identify the speaker (Agent or Customer).
3. Only the Agent’s messages are extracted and analyzed.
4. Compliance rules are validated using mandatory keywords.
5. A recursive algorithm ensures that required statements appear in the correct logical order.
6. A color-coded compliance report is displayed in the terminal.

Python Workflow

1. A CSV dataset containing call center metrics is loaded using Pandas.
2. Data conversion is applied to percentage and time fields.
3. Aggregation and correlation functions are used to analyze performance.
4. A line graph visualizes incoming versus abandoned calls.
5. Results are printed to the terminal and optionally exported as JSON.


## Key Programming Concepts Demonstrated

JavaScript
1. File I/O using Node.js (fs)
2. String processing and text parsing
3. ES6 array functions (map, filter, every)
4. Recursion for ordered validation logic
5. Exception handling using try/catch
6. External library usage (chalk)
7. Modular and readable code structure

Python
1. Data analysis using Pandas
2. Data conversion and aggregation
3. Statistical correlation analysis
4. Data visualization with Matplotlib
5. Use of virtual environments and dependency management


# Development Environment

The project was developed using the following tools:

Visual Studio Code
Node.js (JavaScript execution)
Python 3 with Pandas and Matplotlib
Git and GitHub for version control

The project uses JavaScript for application logic and Python for statistical data analysis.


# Dataset Source

Call Center Dataset (Kaggle)


# Useful Websites

The following resources were referenced during the initial setup and development of this project:

* [JavaScript MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Node.js Documentation](https://nodejs.org/en/docs/)
* [Pandas Documentation](https://pandas.pydata.org/)
* [Matplotlib Documentation](https://matplotlib.org/)
* [Kaggle Datasets](https://www.kaggle.com/datasets)


## Final Note

This project was designed to demonstrate both software engineering principles and data-driven decision making. By combining JavaScript-based compliance validation with Python-based statistical analysis, the system provides both qualitative and quantitative insights into customer service call center performance.