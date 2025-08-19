<p align="center">
  <img src="https://raw.githubusercontent.com/avictormorais/posterfy/refs/heads/main/public/ico.png" width="150" height="150" alt="Posterfy Logo">
</p>

<div align="center">
    <h1>Posterfy</h1>
  
  **Create stunning posters of your favorite albums powered by Spotify's API**
  
  [![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)
  [![Live Demo](https://img.shields.io/badge/Live-Demo-blue)](https://posterfy.space/)
  [![GitHub stars](https://img.shields.io/github/stars/avictormorais/posterfy)](https://github.com/avictormorais/posterfy/stargazers)
</div>

## 🔭 **Overview**

Posterfy is an open-source web application that allows users to create visually appealing posters for their favorite music albums. Powered by Spotify’s free API, Posterfy enables users to search for albums, gather album data, and organize the information into a custom poster using the **HTML Canvas** element.

This project is educational, non-commercial, and fully open to contributions. All rights to the images and data are owned by Spotify and the respective artists.

## 🖼️ Demo

<div align="center">
  <img src="https://raw.githubusercontent.com/avictormorais/posterfy/refs/heads/main/src/assets/albuns.png" alt="Posterfy Example Posters" width="80%">
  <p><em>Examples of posters created with Posterfy</em></p>
</div>

## 🔧 **How It Works**

1️⃣ **Search for Album**: Users enter the name of the album they want to create a poster for.

2️⃣ **Select Album**: Posterfy displays search results, and users can select their desired album.

3️⃣ **Data Gathering**: Once the album is selected, Posterfy fetches all the necessary data and images from Spotify’s API.

4️⃣ **Visual Organization**: The gathered data is then visually organized into a custom layout using the HTML Canvas element.

5️⃣ **Poster Generation**: Finally, a rendered image of the poster is generated, which the user can save or share.

---

## ❓ **FAQ**

**Q: Can I use Posterfy without a Spotify account?**  
A: Yes, you don’t need a Spotify account to create posters, but you will need to set up Spotify credentials to run the app locally.

**Q: Is it possible to create a poster with a custom album?**  
A: Currently, Posterfy only supports albums from Spotify’s database. Custom albums are not supported yet.

**Q: What file format can I export the poster in?**  
A: Posters can be exported as PNG images.

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
- All beta testers and community members providing feedbackr>
No, you don't need a Spotify account to create posters. However, developers need Spotify API credentials to run the app locally.
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

- **🔍 Smart Search**: Find any album from Spotify's vast database
- **🎨 Multiple Templates**: Choose from various poster layouts and styles
- **🎯 High-Quality Output**: Export posters in PNG format with crisp quality
- **📱 Mobile Friendly**: Responsive design that works on all devices
- **⚡ Fast Performance**: Built with React and Vite for optimal speed
- **🌐 Multilingual**: Support for multiple languages
- **🎭 Custom Styling**: Personalize colors, fonts, and layout options

---

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- Spotify Developer Account (for API credentials)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/avictormorais/posterfy.git
   cd posterfy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory and add your Spotify API credentials:
   ```env
   VITE_SPOTIFY_CLIENT_ID=your_spotify_client_id
   VITE_SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
   ```
   
   > 💡 **Getting Spotify Credentials**: Visit the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard) to create an app and get your credentials.

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` to see the application running.

### Production Build

To build the project for production:

```bash
npm run build
```

The optimized files will be generated in the `dist/` directory.

## 🤝 **Contributing**

We welcome contributions to Posterfy! If you’d like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

Please ensure that your code passes all tests and adheres to the project’s style guide.

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
- **🎵 Content Rights**: All album artwork, data, and information belong to Spotify and the respective artists
- **🛡️ No Warranty**: This software is provided "as is" without any warranty
- **📊 Analytics**: This app may collect anonymous usage data to improve user experience

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/avictormorais">Victor Morais</a></p>
  <p>⭐ Star this project if you found it helpful!</p>
</div>
