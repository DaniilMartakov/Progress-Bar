import { Router } from 'express';
import { User, Shablon } from '../db/models';

const router = Router();

router.get('/all', async (req, res) => {
  const allLists = await Shablon.findAll({ order: [['id', 'DESC']] });
  res.render('Layout', { allLists });
});
router.get('/my/:id', async (req, res) => {
  const myLists = await Shablon.findOne({ where: { used_id: req.params.id } }, { order: [['id', 'DESC']] });
  res.render('Layout', { myLists });
});
router.get('/per', async (req, res) => {
  let a = 0;

  const all = await Shablon.findAll({
    where: { user_id: 2 },
    order: [['id', 'DESC']],
  });
  const allCats = Object.values(JSON.parse(JSON.stringify(all)));
  allCats.map((e) => {
    if (e === true) {
      a += 1;
    }
  });
  const b = ((a / 11) * 100).toFixed();
  console.log(b);
  res.json(b);
});
export default router;
