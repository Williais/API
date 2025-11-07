import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store);

export default router;




/*
index ---> lista todos os usuarios
store/create ---> cria um novo usuario
delete ---> apaga um usuario
show ---> mostra um usuario
update ---> atualiza um usuario
*/
