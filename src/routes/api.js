import { Router } from 'express';
import { hash, compare } from 'bcrypt';
import { User } from '../db/models';
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

export default router;
