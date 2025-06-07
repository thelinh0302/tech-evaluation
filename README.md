# Transaction Table Viewer

A React + Next.js project that fetches transactions from an API with dynamic filtering, loading skeleton animations, and formatted timestamps.

---

## Features

- Fetches transactions from backend API with Axios.
- Dynamic filter by transaction type (Stake, Borrow, Lend) with debounce.
- Skeleton loading animation during API calls.
- Formatted date/time display.
- Accessible dropdown filter UI.
- Clean, reusable components for table header and body.

---

## Usage
- Select transaction type from the dropdown icon next to Transaction Type header.
- Table updates with filtered results after a 3-second debounce delay.
- Skeleton animation shows while loading.
- Dates are displayed in readable format.
---

## Getting Started

### Prerequisites

- Node.js (v23+ recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/thelinh0302/tech-evaluation
cd tech-evaluation
npm install
# or
yarn install

