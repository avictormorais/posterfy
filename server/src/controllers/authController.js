class AuthController {
  googleCallback(req, res) {
    res.redirect(`${process.env.CLIENT_URL}/dashboard?login=success`)
  }

  spotifyCallback(req, res) {
    res.redirect(`${process.env.CLIENT_URL}/dashboard?login=success`)
  }

  logout(req, res) {
    req.logout((err) => {
      if (err) {
        return res.status(500).json({ error: 'Logout failed' })
      }
      res.json({ message: 'Logout successful' })
    })
  }

  getUser(req, res) {
    if (req.user) {
      res.json({
        user: {
          id: req.user._id,
          name: req.user.name,
          username: req.user.username,
          email: req.user.email,
          avatar: req.user.avatar
        }
      })
    } else {
      res.status(401).json({ error: 'User not authenticated' })
    }
  }
}

export default new AuthController()