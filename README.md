# 📱 BWB — Buy With Bargaining and Auction

**BWB (Buy With Bargaining and Auction)** is a full-stack, cross-platform eCommerce application that brings the thrill of local market bargaining and competitive auctions into a modern digital experience.  

Users can negotiate prices in real-time, bid in auctions, and shop online through a seamless interface available both as a **web app** and a **mobile app** (built using Ionic + Angular and deployed via Ionic Appflow).

---

## 🚀 Features

- 📦 Product Listings with category browsing.
- 💬 Live Bargaining — directly negotiate prices with sellers.
- 🔨 Online Auctions — bid competitively in time-based auctions.
- 🔔 Real-time notifications for deals, auctions, and offers.
- 📊 Order and Payment Management.
- 📝 User Profile Management.
- 📞 Contact & Support system.

---

## 🛠️ Tech Stack

### 👩‍💻 Frontend:
- **Angular**
- **Ionic Framework** (for mobile build)
- **Ionic Appflow** (for Android APK build and deployment)

### 🖥️ Backend:
- **Spring Boot (Java)** — REST APIs with JWT authentication
- **MySQL** — relational database for products, users, orders

---

## 📱 Android App via Ionic Appflow

This project uses **Ionic Appflow** to build and manage Android APKs for deployment. Appflow allows cloud-based native builds directly from your GitHub/GitLab/Bitbucket repository without local Android Studio setup.

**Steps to build via Appflow:**
1. Push your Ionic project to a connected Git repository.
2. Configure your App ID and package information in Appflow dashboard.
3. Start a **Cloud Android Build** — choose `Debug`, `Ad-Hoc`, or `Production` build as needed.
4. Download the APK directly from Appflow.
5. Test or deploy your app to Play Store.

---

## 📦 Installation

### 📑 Backend (Spring Boot)

1. Clone the repository and navigate to the backend folder.
2. Set up `application.properties` with your MySQL credentials.
3. Run the application:

   ```bash
   mvn spring-boot:run
