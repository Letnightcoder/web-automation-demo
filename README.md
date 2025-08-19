# Web Automation Demo

This project demonstrates web automation using Puppeteer to interact with web forms and dropdowns.

## Features

- Automated login form interaction on W3Schools demo page
- Dropdown selection automation
- Iframe handling
- Headless browser automation

## Prerequisites

- Node.js
- npm

## Installation

1. Clone this repository
2. Install dependencies:
```bash
npm install
```

## Usage

Run the script using:
```bash
node index.js
```

The script will:
1. Open W3Schools login form demo
2. Fill in username and password
3. Submit the form
4. Navigate to a dropdown demo page
5. Select "Saab" from the dropdown menu

## Dependencies

- Puppeteer - For browser automation

## Note

The browser runs in non-headless mode (`headless: false`) so you can see the automation in action.
