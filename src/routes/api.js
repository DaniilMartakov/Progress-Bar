import { Router } from 'express';
import { hash, compare } from 'bcrypt';
import { User, Shablon } from '../db/models';
// import authCheck from '../middlewares/authCheck';

const router = Router();

router.route('/signUp')
  .post(async (req, res) => {
    const { name, username, password } = req.body;

    if (!username || !password || !name) return res.json({ message: 'Invalid email, name or password', status: 400 });
    const hashPassword = await hash(password, 10);

    try {
      const newUser = await User.create({ name, username, password: hashPassword });
      req.session.user = { id: newUser.id, username: newUser.username, name: newUser.name };
      res.json({
        id: newUser.id, username: newUser.username, name: newUser.name, status: 200,
      });
    } catch (err) {
      console.error(err);
      console.log('Error in api.js, route /signUp');
      return res.json({ message: 'Such email already existas', status: 400 });
    }
  });

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
  // router.get('/', async (rec, res) => {
  //   const allCats = await Shablon.findByPk(1);
  //   res.json(allCats)
  // console.log(allCats)
  // });
export default router;

//  /all [decs]
//  /all/:id [decs]
