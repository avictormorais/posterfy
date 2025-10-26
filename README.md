<p align="center">
  <img src="https://raw.githubusercontent.com/avictormorais/posterfy/main/client/public/ico.png" width="150" height="150" alt="Posterfy Logo">
</p>

<div align="center">
    <h1>Posterfy</h1>
  
  **Create stunning posters of your favorite albums powered by Spotify's API**
  
  **Full-stack web application with user authentication, profile management, and poster creation**
  
  [![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)
  [![Live Demo](https://img.shields.io/badge/Live-Demo-blue)](https://posterfy.space/)
  [![GitHub stars](https://img.shields.io/github/stars/avictormorais/posterfy)](https://github.com/avictormorais/posterfy/stargazers)
</div>

## 🔭 **Overview**

Posterfy is a full-stack web application that allows users to create visually appealing posters for their favorite music albums. Built with a modern architecture featuring:

- **Frontend**: React-based SPA with responsive design and multilingual support
- **Backend**: Node.js/Express API with OAuth authentication (Google & Spotify)
- **Database**: MongoDB for user management and data persistence
- **Integration**: Spotify Web API for album data and artwork

Powered by Spotify's free API, Posterfy enables users to search for albums, gather album data, and organize the information into custom posters using the **HTML Canvas** element.

This project is educational, non-commercial, and fully open to contributions. All rights to the images and data are owned by Spotify and the respective artists.

## 🏗️ **Architecture**

```
Posterfy
├── client/          # React frontend (Vite)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── contexts/
│   │   └── services/
│   └── public/
├── server/          # Node.js backend (Express)
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── middlewares/
│   └── package.json
└── README.md
```

## 🖼️ Demo

<div align="center">
  <img src="https://raw.githubusercontent.com/avictormorais/posterfy/main/client/src/assets/albuns.png" alt="Posterfy Example Posters" width="80%">
  <p><em>Examples of posters created with Posterfy</em></p>
</div>

## 🔧 **How It Works**

### User Journey
1️⃣ **Authentication**: Users sign in with Google or Spotify OAuth for secure access.

2️⃣ **Profile Management**: Create and manage user profiles with unique usernames.

3️⃣ **Album Search**: Users enter the name of the album they want to create a poster for.

4️⃣ **Album Selection**: Posterfy displays search results from Spotify's database, and users select their desired album.

5️⃣ **Data Gathering**: Once the album is selected, Posterfy fetches all the necessary data and images from Spotify's Web API.

6️⃣ **Poster Customization**: Users can customize poster layouts, colors, fonts, and styling options.

7️⃣ **Visual Organization**: The gathered data is then visually organized into a custom layout using the HTML Canvas element.

8️⃣ **Poster Generation**: Finally, a rendered image of the poster is generated, which the user can save or share.

---

## ❓ **FAQ**

**Q: Do I need to create an account to use Posterfy?**  
No, you don't need a Spotify account to create posters. However, developers need Spotify API credentials to run the app locally.

**Q: Can I use Posterfy without a Spotify account?**  
A: You can sign in with Google, but you'll need Spotify API credentials to run the app locally for development.

**Q: Is it possible to create a poster with a custom album?**  
A: Currently, Posterfy only supports albums from Spotify's database. Custom albums are not supported yet.

**Q: What file format can I export the poster in?**  
A: Posters can be exported as PNG images.

**Q: Can I change my username after creating my account?**  
A: Yes, you can update your profile information including your username from the dashboard.

### Ways to Contribute

- 🐛 **Bug Reports**: Found a bug? [Open an issue](https://github.com/avictormorais/posterfy/issues)
- 💡 **Feature Requests**: Have an idea? We'd love to hear it!
- 🌐 **Translations**: Help make Posterfy available in more languages
- 📖 **Documentation**: Improve our docs and examples
- 🎨 **Design**: Contribute new poster templates and styles

### Code Guidelines

- Follow the existing code style and conventions
- Write clear, descriptive commit messages
- Add tests for new features when applicable
- Update documentation as needed

## 🎉 Acknowledgments

Special thanks to all contributors who have helped make Posterfy better:

- [**debug420**](https://github.com/debug420) - For valuable improvements and feature contributions
- All beta testers and community members providing feedbacks
</details>

<details>
<summary><strong>Can I create posters for custom/local albums?</strong></summary>
<br>
Currently, Posterfy only supports albums available in Spotify's database. Support for custom albums may be added in future versions.
</details>

<details>
<summary><strong>What image formats are supported for export?</strong></summary>
<br>
Posters can be exported as high-quality PNG images. Additional formats may be supported in future updates.
</details>

<details>
<summary><strong>Is there a mobile app available?</strong></summary>
<br>
Posterfy is a web application that works perfectly on mobile browsers. There's no dedicated mobile app at this time.
</details>

<details>
<summary><strong>Can I use these posters commercially?</strong></summary>
<br>
No, this project is for educational and non-commercial use only. All album artwork and data belong to Spotify and the respective artists.
</details>

## ✨ Features

### Frontend Features
- **🔍 Smart Search**: Find any album from Spotify's vast database
- **🎨 Multiple Templates**: Choose from various poster layouts and styles
- **🎯 High-Quality Output**: Export posters in PNG format with crisp quality
- **📱 Mobile Friendly**: Responsive design that works on all devices
- **⚡ Fast Performance**: Built with React and Vite for optimal speed
- **🌐 Multilingual**: Support for multiple languages (English, Portuguese, Spanish, Chinese)
- **🎭 Custom Styling**: Personalize colors, fonts, and layout options

### Backend Features
- **🔐 OAuth Authentication**: Secure login with Google and Spotify
- **� JWT Tokens**: Token-based authentication (serverless-compatible)
- **�👤 User Management**: Profile creation and management with unique usernames
- **🔗 Account Linking**: Link multiple OAuth providers to the same account
- **🛡️ Session Management**: Secure JWT-based authentication
- **📊 User Dashboard**: View and manage user profiles and account connections

---

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- MongoDB (local installation or cloud service like MongoDB Atlas)
- Spotify Developer Account (for API credentials)
- Google OAuth credentials (optional, for Google authentication)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/avictormorais/posterfy.git
   cd posterfy
   ```

2. **Set up the backend**
   ```bash
   cd server
   npm install
   ```

3. **Configure backend environment variables**
   
   Create a `.env` file in the `server/` directory:
   ```env
   # Database
   MONGO_URI=mongodb://localhost:27017/posterfy
   
   # JWT Authentication (recommended for serverless deployments)
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   JWT_EXPIRES_IN=30d
   
   # Session (legacy - not used with JWT)
   SESSION_SECRET=your-session-secret-key
   
   # OAuth - Google (optional)
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   
   # OAuth - Spotify
   SPOTIFY_CLIENT_ID=your_spotify_client_id
   SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
   
   # Server
   PORT=5000
   NODE_ENV=development
   CLIENT_URL=http://localhost:5173
   ```

4. **Set up the frontend**
   ```bash
   cd ../client
   npm install
   ```

5. **Configure frontend environment variables**
   
   Create a `.env` file in the `client/` directory:
   ```env
   VITE_API_BASE_URL=http://localhost:5000
   VITE_SPOTIFY_CLIENT_ID=your_spotify_client_id
   ```

6. **Start the backend server**
   ```bash
   cd ../server
   npm start
   ```
   The backend will run on `http://localhost:5000`

7. **Start the frontend development server**
   ```bash
   cd ../client
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

8. **Open your browser**
   
   Navigate to `http://localhost:5173` to see the application running.

### Production Build

To build both frontend and backend for production:

**Frontend:**
```bash
cd client
npm run build
```

**Backend:**
```bash
cd server
npm run build  # if using a build script
```

The optimized frontend files will be generated in the `client/dist/` directory.

### OAuth Configuration

#### Spotify OAuth Setup
1. Visit the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Create a new app
3. Add `http://localhost:5000/auth/spotify/callback` to the Redirect URIs
4. Copy the Client ID and Client Secret to your `.env` file

#### Google OAuth Setup (Optional)
1. Visit the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Create OAuth 2.0 credentials
5. Add `http://localhost:5000/auth/google/callback` to the authorized redirect URIs
6. Copy the Client ID and Client Secret to your `.env` file

## 🤝 **Contributing**

We welcome contributions to Posterfy! This is a full-stack project with opportunities in both frontend and backend development.

### Development Areas
- **🎨 Frontend**: React components, UI/UX improvements, new features
- **⚙️ Backend**: API development, authentication, database optimization
- **🔧 DevOps**: Docker, CI/CD, deployment configurations
- **📱 Mobile**: Progressive Web App improvements
- **🌐 i18n**: New language support and translations

### Ways to Contribute

- 🐛 **Bug Reports**: Found a bug? [Open an issue](https://github.com/avictormorais/posterfy/issues)
- 💡 **Feature Requests**: Have an idea? We'd love to hear it!
- 🌐 **Translations**: Help make Posterfy available in more languages
- 📖 **Documentation**: Improve our docs and examples
- 🎨 **Design**: Contribute new poster templates and styles
- 🔐 **Security**: Help improve authentication and data security

### Code Guidelines

- Follow the existing code style and conventions
- Write clear, descriptive commit messages
- Add tests for new features when applicable
- Update documentation as needed
- Test both frontend and backend changes

### Getting Started with Development

1. Follow the installation steps above
2. Create a new branch for your feature: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Test thoroughly (both frontend and backend)
5. Submit a pull request

Please ensure that your code passes all tests and adheres to the project's style guide.

## 🎉 Community Contributions
A huge thank you to [debug420](https://github.com/debug420) for contributing improvements to Posterfy! This fork introduced some great new features, your contributions help make Posterfy even better. 🚀

## 📄 License

This project is licensed under the **Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)** license.

### License Summary

| Permission | Allowed |
|------------|---------|
| ✅ **Share** | Copy and redistribute the material in any medium or format |
| ❌ **Commercial Use** | Cannot use for commercial purposes |
| ❌ **Modify** | Cannot remix, transform, or build upon the material |
| ⚠️ **Attribution** | Must give appropriate credit and link to license |

For complete license terms, see the [LICENSE](./LICENSE) file or visit [creativecommons.org](https://creativecommons.org/licenses/by-nc-nd/4.0/).

## ⚠️ Disclaimer

- **🎓 Educational Purpose**: This project is created for educational and non-commercial purposes only
- **🔐 User Data**: User accounts and profile information are stored securely. We do not share personal data with third parties
- **🎵 Content Rights**: All album artwork, data, and information belong to Spotify and the respective artists
- **🛡️ No Warranty**: This software is provided "as is" without any warranty
- **📊 Analytics**: This app may collect anonymous usage data to improve user experience
- **🔒 Privacy**: OAuth tokens are handled securely and never stored in plain text

---

## 🛠️ **Tech Stack**

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Styled Components** - CSS-in-JS styling
- **React Router** - Client-side routing
- **React i18next** - Internationalization
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Passport.js** - Authentication middleware
- **Express Session** - Session management

### Integrations
- **Spotify Web API** - Music data and album artwork
- **Google OAuth 2.0** - Authentication provider
- **Spotify OAuth 2.0** - Authentication provider


<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/avictormorais">Victor Morais</a></p>
  <p>🚀 Full-stack music poster creation platform</p>
</div>
