import { Router } from 'express';
import { User, Shablon } from '../db/models';

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

router.route('/one_shablon/:id')
  .get(async (req, res) => {
    const shablone = await Shablon.findOne({ where: { id: req.params.id }, include: User });
    const initState = { shablone: JSON.parse(JSON.stringify(shablone)) };
    res.render('Layout', initState);
  });

router.get('/users', async (req, res) => {
  const allUser = await User.findAll();
  const initState = { allUser };
  res.render('Layout', initState);
});

router.get('/new_user', (req, res) => {
  const initState = { };
  res.render('Layout', initState);
});

export default router;
