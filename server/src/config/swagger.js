import swaggerJsdoc from 'swagger-jsdoc'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Posterfy API',
      version: '2.0.0',
      description: 'REST API for the Posterfy community poster platform'
    },
    servers: [
      { url: process.env.SERVER_URL || 'http://localhost:5000', description: 'Current server' }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      },
      schemas: {
        CreatePosterInput: {
          type: 'object',
          required: ['spotifyAlbumId', 'albumName', 'artistsName', 'posterJson'],
          properties: {
            spotifyAlbumId: { type: 'string' },
            albumName: { type: 'string', maxLength: 200 },
            artistsName: { type: 'string', maxLength: 200 },
            releaseDate: { type: 'string', maxLength: 50 },
            posterJson: { type: 'object' },
            visibility: { type: 'string', enum: ['public', 'private'], default: 'public' }
          }
        },
        PosterResponse: {
          type: 'object',
          properties: {
            poster: {
              type: 'object',
              properties: {
                _id: { type: 'string' },
                authorId: { type: 'string' },
                spotifyAlbumId: { type: 'string' },
                albumName: { type: 'string' },
                artistsName: { type: 'string' },
                releaseDate: { type: 'string' },
                visibility: { type: 'string', enum: ['public', 'private'] },
                views: { type: 'integer' },
                downloads: { type: 'integer' },
                edits: { type: 'integer' },
                favoritesCount: { type: 'integer' },
                popularityScore: { type: 'number' },
                createdAt: { type: 'string', format: 'date-time' }
              }
            }
          }
        }
      },
      responses: {
        BadRequest: {
          description: 'Validation error',
          content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
        },
        Unauthorized: {
          description: 'Authentication required',
          content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
        },
        Forbidden: {
          description: 'Insufficient permissions',
          content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
        },
        NotFound: {
          description: 'Resource not found',
          content: { 'application/json': { schema: { type: 'object', properties: { error: { type: 'string' } } } } }
        }
      }
    }
  },
  apis: ['./src/routes/*.js']
}

export const swaggerSpec = swaggerJsdoc(options)
