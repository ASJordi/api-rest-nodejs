import { Router } from 'express'

const router = new Router()

const dataDev = {
  name: 'Jordi',
  lastname: 'Ayala',
  web: 'asjordi.dev',
  twitter: '@asjordi'
}

router.get('/', (req, res) => {
  res.redirect('/api/about')
})

router.get('/api/about', (req, res) => {
  res.json(dataDev)
})

export default router
