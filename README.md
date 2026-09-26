# CareCommerce Solutions

Modern Next.js site for CareCommerce Solutions — medical billing and revenue cycle management — with 3D backgrounds and a MySQL + JSON data layer.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Data layer

Pages and forms try MySQL first. If MySQL is down or not configured, reads and writes fall back to JSON files in `data/`.

Copy `.env.example` to `.env.local` and set:

```
MYSQL_HOST=127.0.0.1
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=
MYSQL_DATABASE=carecommerce
```

The app creates the database and tables on first successful connection, then seeds them from JSON. Contact and appointment submissions are stored in MySQL when available, otherwise appended to `data/messages.json` and `data/appointments.json`.

Health check: [http://localhost:3000/api/health](http://localhost:3000/api/health)
