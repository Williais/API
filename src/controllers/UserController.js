import User from '../models/User';

class UserController {

  async store(req, res) {

    try{

      const novoUser = await User.create(req.body);
      res.json(novoUser);
    }catch(err){
    console.error('ERRO NO USERCONTROLLER:', err);
    const errorMessages = err.errors
      ? err.errors.map((e) => e.message)
      : [err.message];
    return res.status(400).json({
      errors: errorMessages,
    });
  }
    }
}


export default new UserController();
