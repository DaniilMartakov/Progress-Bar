import { Router } from 'express';
import { hash, compare } from 'bcrypt';
import { User, Shablon } from '../db/models';
// import authCheck from '../middlewares/authCheck';

const router = Router();

router.route('/logIn')
  .post(async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) return res.json({ message: 'Invalid email, name or password', status: 400 });
    try {
      const userDB = await User.findOne({ where: { username } });
      if (!userDB) return res.json({ message: 'Such user doesn\'t exist', status: 400 });

      const isValid = await compare(password, userDB.password);
      if (!isValid) return res.json({ message: 'Invalid email or password', status: 400 });

      req.session.user = { id: userDB.id, username: userDB.username, name: userDB.name };
      res.json({
        id: userDB.id, username: userDB.username, name: userDB.name, status: 200,
      });
    } catch (err) {
      console.error(err);
      console.log('Error in api.js, route /logIn');
      return res.json({ message: 'Such email already existas', status: 400 });
    }
  });

router.route('/logOut')
  .get(async (req, res) => {
    res.clearCookie('user_sid'); // Удалить куку
    req.session.destroy(); // Завершить сессию
    res.sendStatus(200);
  });

router.route('/all_shablons')
  .get(async (req, res) => {
    const allLists = await Shablon.findAll({ order: [['id', 'DESC']] });
    res.json(allLists);
  });

router.route('/one_shablon/:id')
  .get(async (req, res) => {
    const shablone = await Shablon.findOne({ where: { id: req.params.id }, include: User });
    // console.log(shablone);
    res.json(shablone);
  })
  .put(async (req, res) => {
    const a = req.body.name;
    const t = await Shablon.update({ [a]: req.body.info[a] }, { where: { id: Number(req.params.id) } });
    res.json(t[1]);
  });

router.route('/createshablon')
  .post(async (req, res) => {
    console.log(req.body);
    const {
      name, team, coach, target, user_id,
    } = req.body;

    const shablon = await Shablon.create({
      name, team, coach, target, user_id,
    });
    // console.log(shablon)
    res.json(shablon);
  });

router.route('/all_shablons/:id')
  .get(async (req, res) => {
    const myLists = await Shablon.findAll({ where: { user_id: req.params.id } }, { order: [['id', 'DESC']] });
    res.json(myLists);
  }); // конкретный шаблон по id

router.route('/users')
  .get(async (req, res) => {
    const allUser = await User.findAll();
    res.json(allUser);
  });

router.post('/addUser', async (req, res) => {
  const {
    name, username, password, status,
  } = req.body;
  // console.log(status);
  if (!name || !username || !password || !status) return res.json({ status: 400, message: 'Заполните все поля!' });
  const hashPassword = await hash(password, 10);
  try {
    const newUser = await User.create({
      name, username, password: hashPassword, status: !!Number(status),
    });
    res.json({ newUser, status: 200 });
  } catch (err) {
    console.error(err);
  }
});
router.patch('/password', async (req, res) => {
  // console.log(req.body);
  const user = await User.findByPk(req.body.id);
  user.password = await hash(req.body.password, 10);
  // console.log(user);
  user.save();
  res.sendStatus(200);
});

router.patch('/role', async (req, res) => {
  // console.log(req.body);
  const { status } = req.body;
  console.log(status);
  const user = await User.findByPk(req.body.id);
  user.status = !!Number(status);
  // console.log(user);
  user.save();
  // res.sendStatus(200);
  // console.log(user);
  res.json(user);
});

export default router;
