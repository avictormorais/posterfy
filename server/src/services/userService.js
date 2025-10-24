import User from '../models/user.js'

class UserService {
  async generateUsername(name) {
    const base = name.toLowerCase().replace(/[^a-z0-9]/g, '').substring(0, 20)
    let username = base
    let counter = 1
    
    while (await User.findOne({ username })) {
      username = base + counter
      counter++
    }
    
    return username
  }

  async findByGoogleId(googleId) {
    return await User.findOne({ googleId })
  }

  async findBySpotifyId(spotifyId) {
    return await User.findOne({ spotifyId })
  }

  async findByEmail(email) {
    return await User.findOne({ email })
  }

  async handleGoogleLogin(profile) {
    const { id: googleId, emails, displayName, photos } = profile
    const email = emails[0].value
    const avatar = photos[0]?.value

    let user = await this.findByGoogleId(googleId)
    if (user) return user

    user = await this.findByEmail(email)
    if (user) {
      user.googleId = googleId
      if (!user.avatar && avatar) user.avatar = avatar
      await user.save()
      return user
    }

    const username = await this.generateUsername(displayName)
    user = new User({
      name: displayName,
      username,
      email,
      avatar,
      googleId
    })

    await user.save()
    return user
  }

  async handleSpotifyLogin(profile) {
    const { id: spotifyId, emails, displayName, photos } = profile
    const email = emails[0]?.value
    const avatar = photos[0]?.value

    let user = await this.findBySpotifyId(spotifyId)
    if (user) return user

    if (email) {
      user = await this.findByEmail(email)
      if (user) {
        user.spotifyId = spotifyId
        if (!user.avatar && avatar) user.avatar = avatar
        await user.save()
        return user
      }
    }

    const username = await this.generateUsername(displayName)
    user = new User({
      name: displayName,
      username,
      email: email || `${username}@spotify.temp`,
      avatar,
      spotifyId
    })

    await user.save()
    return user
  }

  async findById(id) {
    return await User.findById(id)
  }
}

export default new UserService()