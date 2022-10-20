import { Router } from 'express';
import { User, Shablon } from '../db/models';

const router = Router();

router.get('/all', async (req, res) => {
  const allLists = await Shablon.findAll({ order: [['id', 'DESC']] });
  res.render('Layout', { allLists });
});
router.get('/my/:id', async (req, res) => {
  const myLists = await Shablon.findAll({ where: { user_id: req.params.id } }, { order: [['id', 'DESC']] });
  const initState = { myLists };
  res.render('Layout', initState);
});

export default router;
