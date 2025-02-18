<p align="center">
  <img src="https://raw.githubusercontent.com/avictormorais/posterfy/refs/heads/main/public/ico.png" width="150" height="150" alt="Posterfy Logo">
</p>

<h1 align="center">Posterfy</h1>

<p align="center">
  <em>Create stunning posters of your favorite albums powered by Spotify's API.</em>
</p>

---

**EDITTED VERSION**

Features within this fork include:
- Option to remove watermark (including translation)
- Option to download the original cover only

## 🔭 **Overview**

Posterfy is an open-source web application that allows users to create visually appealing posters for their favorite music albums. Powered by Spotify’s free API, Posterfy enables users to search for albums, gather album data, and organize the information into a custom poster using the **HTML Canvas** element.

This project is educational, non-commercial, and fully open to contributions. All rights to the images and data are owned by Spotify and the respective artists.

---

## 📷 **Possible Results**

Here's an example of what a poster generated by Posterfy looks like:

![Posterfy Screenshot](https://raw.githubusercontent.com/avictormorais/posterfy/refs/heads/main/src/assets/albuns.png)

---

## 👾 **APIs and Tools Used**

- **[Spotify API](https://developer.spotify.com/)**: Used to search for albums and retrieve essential information such as album name, artist, and images.
  
- **[HTML Canvas](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial)**: Organizes the collected data visually by rendering it into a poster format using JavaScript on the canvas.

---

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


## ⚡ **Use It!**

You can try out Posterfy live on GitHub Pages by visiting [this link](https://avictormorais.github.io/posterfy/).

To start using the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/avictormorais/posterfy.git
   ```
2. Navigate into the project directory:
   ```bash
   cd posterfy
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Create a .env file in the root directory and add your Spotify API credentials as in .env.example:
    ```bash
    VITE_SPOTIFY_CLIENT_ID=your_spotify_client_id
    VITE_SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
    ```
5. Run the project locally:
    ```bash
    npm start
    ```

## 🤝 **Contributing**

We welcome contributions to Posterfy! If you’d like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

Please ensure that your code passes all tests and adheres to the project’s style guide.


<h3 align="left">📕 - Disclaimer</h3>

- **🛡️ Non-profit** - This project is made for educational and non-commercial purposes. All rights to images and information belong to Spotify and the respective artists.

- **🪚 Contributing** - Contributions are welcome! Feel free to submit bug reports, feature requests, translation to your language, or pull requests.