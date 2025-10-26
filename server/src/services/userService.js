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

  async updateProfile(userId, profileData) {
    const { name, username } = profileData

    const user = await User.findById(userId)
    if (!user) {
      throw new Error('User not found')
    }

    if (name && name.trim()) {
      user.name = name.trim()
    }

    if (username && username.trim() && username.trim().toLowerCase() !== user.username) {
      const trimmedUsername = username.trim().toLowerCase()

      if (!/^[a-z0-9]+$/.test(trimmedUsername)) {
        throw new Error('Username can only contain letters and numbers')
      }

      if (trimmedUsername.length < 3) {
        throw new Error('Username must be at least 3 characters')
      }

      const existingUser = await User.findOne({ 
        username: trimmedUsername,
        _id: { $ne: userId }
      })

      if (existingUser) {
        const error = new Error('Username already taken')
        error.statusCode = 409
        throw error
      }

      user.username = trimmedUsername
    }

    await user.save()
    return user
  }

  async changeUsername(userId, newUsername) {
    // Validate username format
    if (!newUsername || typeof newUsername !== 'string') {
      throw new Error('Username is required')
    }

    const trimmedUsername = newUsername.trim().toLowerCase()

    // Check format (only letters and numbers)
    if (!/^[a-z0-9]+$/.test(trimmedUsername)) {
      throw new Error('Username can only contain letters and numbers')
    }

    // Check length
    if (trimmedUsername.length < 3) {
      throw new Error('Username must be at least 3 characters')
    }

    // Check if username is already taken by another user
    const existingUser = await User.findOne({ 
      username: trimmedUsername,
      _id: { $ne: userId } // Exclude current user
    })

    if (existingUser) {
      const error = new Error('Username already taken')
      error.statusCode = 409
      throw error
    }

    // Update the username
    const user = await User.findByIdAndUpdate(
      userId,
      { username: trimmedUsername },
      { new: true }
    )

    if (!user) {
      throw new Error('User not found')
    }

    return user
  }
}

export default new UserService()