import { Router } from 'express';
import { redirect } from 'react-router-dom';
import { User } from '../db/models';

const router = Router();

router.get('/', async (req, res) => {
  const initState = { logo: 'logo', name: 'Высокая гора', message: 'Привет! Это корпоративный портал ООО “Высокая Гора”. Чтобы получить доступ к сайту - обратись в департамент HR.' };
  res.render('Layout', initState);
});

router.get('/logIn', async (req, res) => {
  const entries = await Entry.findAll({ order: [['id', 'DESC']] });
  const initState = { entries };
  res.render('Layout', initState);
});

router.get('/signUp', async (req, res) => {
  const entries = await Entry.findAll({ order: [['id', 'DESC']] });
  const initState = { entries };
  res.render('Layout', initState);
});

router.get('/homepage', async (req, res) => {
  const initState = { logo: 'logo', name: 'Высокая гора', message: 'Привет! Это корпоративный портал ООО “Высокая Гора”. Чтобы получить доступ к сайту - обратись в департамент HR.' };
  res.render('Layout', initState);
});

router.get('/new', (req, res) => {
  const initState = { };
  res.render('Layout', initState);
});
router.get('/shablone', (req, res) => {
  const initState = { };
  res.render('Layout', initState);
});
export default router;
