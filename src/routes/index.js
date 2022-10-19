import { Router } from 'express';
import { redirect } from 'react-router-dom';
import { User } from '../db/models';

const router = Router();

router.get('/', async (req, res) => {
  const initState = { name: 'Высокая гора' };
  res.render('Layout', initState);
});

router.get('/homepage', async (req, res) => {
  const initState = { name: 'Высокая гора' };
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

router.get('/all_shablons', (req, res) => {
  const initState = { };
  res.render('Layout', initState);
});

router.get('/my_shablons', (req, res) => {
  const initState = { };
  res.render('Layout', initState);
});

router.get('/users', (req, res) => {
  const initState = { };
  res.render('Layout', initState);
});

router.get('/new_user', (req, res) => {
  const initState = { };
  res.render('Layout', initState);
});

export default router;
