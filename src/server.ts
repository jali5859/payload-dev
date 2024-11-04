import express from 'express'
   import payload from 'payload'
   require('dotenv').config()

   const app = express()

   const start = async () => {
     console.log('Starting Payload CMS....')      
     await payload.init({
       secret: process.env.PAYLOAD_SECRET,
       express: app,
       onInit: async () => {
         console.log(`Payload Admin URL: ${payload.getAdminURL()}`)
       },
     })
     app.get('/', (_, res) => {
      console.log('Redirecting to /admin')
      res.redirect('/admin')
    })
    
     app.listen(3000, () => {
       console.log('Server started on port 3000')
     })
   }

   start().catch((err) => {
     console.error('Failed to start Payload CMS:', err)
   })