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
    // console.log(allLists, '4');
    res.json(allLists);
  })
  .post(async (req, res) => { }); // создать

router.route('/one_shablon/:id')
  .get(async (req, res) => {
    const shablone = await Shablon.findOne({ where: { id: req.params.id } });
    // console.log(shablone);
    res.json(shablone);
  });

router.route('/createshablon')
  .post(async (req, res) => {
    console.log(req.body)
    const {
      name, team, coach, target, user_id
    } = req.body;
    
    const shablon = await Shablon.create({ name, team, coach, target, user_id });
    // console.log(shablon)
    res.json(shablon);
  });

router.route('/all_shablons/:id')
  .get(async (req, res) => {
    const myLists = await Shablon.findAll({ where: { user_id: req.params.id } }, { order: [['id', 'DESC']] });
    res.json(myLists);
  }) // конкретный шаблон по id
  .patch(async (req, res) => { }) // change  po id
  .delete(async (req, res) => { }); // delete po id

router.route('/users')
  .get(async (req, res) => {
    const allUser = await User.findAll();
    // console.log('db', allUser);
    res.json(allUser);
  })
  .post(async (req, res) => { }); // create new user

router.route('/users/:id')
  .patch(async (req, res) => { }) // change  user po id
  .delete(async (req, res) => { }); // delete user po id

router.post('/addUser', async (req, res) => {
  const { name, username, password } = req.body;
  if (!name || !username || !password) return res.json({ status: 400, message: 'Заполни все поля!!!' });
  const hashPassword = await hash(password, 10);
  try {
    const newUser = await User.create({ name, username, password: hashPassword });
    res.json(newUser);
  } catch (err) {
    console.error(err);
  }
});

export default router;

//  /all [decs]
//  /all/:id [decs]
