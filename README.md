# Notes App

A simple open-source Notes/Todo application built using Node.js and Express.js. This project serves as a hands-on exploration of cloud-native application development, containerization, and CI/CD practices on Microsoft Azure.

## 🎯 Project Goals

This project was created to gain practical experience with:

* Docker containerization
* Azure App Service deployments
* Azure Static Web Apps
* Azure DevOps CI/CD pipelines
* Azure Database for MySQL Flexible Server
* End-to-end cloud application deployment

## ✨ Features

* Create notes/todos
* View all notes
* Update existing notes
* Delete notes
* RESTful API endpoints
* Responsive frontend
* Persistent data storage using MySQL

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js

### Frontend

* HTML, CSS, JavaScript

### Database

* Azure Database for MySQL Flexible Server

### Cloud & DevOps

* Docker
* Azure DevOps
* Azure App Service
* Azure Static Web Apps

## 🏗️ Architecture

```text
Frontend (Azure Static Web Apps)
                |
                v
Backend API (Azure App Service)
                |
                v
Azure Database for MySQL Flexible Server
```

## 🔄 CI/CD Process

The project uses Azure DevOps pipelines to automate the application lifecycle.

### Continuous Integration (CI)

On every commit or pull request:

1. Source code is fetched from GitHub.
2. Dependencies are installed.
3. Application build is executed.
4. Automated checks/tests are run.
5. Docker image is built and validated.

### Continuous Deployment (CD)

After a successful build:

1. Backend container is deployed to Azure App Service.
2. Frontend is deployed to Azure Static Web Apps.
3. Deployment artifacts are published automatically.

## 🚀 Getting Started

### Prerequisites

* Node.js (v18+ recommended)
* Docker
* Git

### Clone the Repository

```bash
git clone https://github.com/<your-username>/<repository-name>.git
cd <repository-name>
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the project root.

```env
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=
PORT=3000
```

### Run Locally

```bash
npm start
```

Application will be available at:

```text
http://localhost:3000
```

## 🐳 Running with Docker

Build the Docker image:

```bash
docker build -t notes-app .
```

Run the container:

```bash
docker run -p 3000:3000 notes-app
```

## 🤝 Contributing

Contributions are welcome.

If you'd like to improve the project:

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Open a Pull Request.

## 🌟 Open Source

This project is open source and intended for learning, experimentation, and community contributions. Feel free to clone, modify, and extend it for your own use cases.

## 📌 Future Enhancements

* User authentication and authorization
* JWT-based security
* Search functionality
* Tags and categories
* Unit and integration tests
* Monitoring and logging
* Kubernetes deployment

## License

This project is licensed under the MIT License.
