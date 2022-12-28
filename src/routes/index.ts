import { Router } from 'express';
import * as HomeController from '../controllers/homeController';
import * as CadastroController from '../controllers/cadastroController';
import * as manutençãoController from '../controllers/manutençaoController';
import * as SobreController from '../controllers/sobreController'

const router = Router();
router.get('/', HomeController.home);
router.get('/cadastro', CadastroController.cadastro);
router.post('/novo-usuario', CadastroController.addUserAction);
router.get('/manutenção', manutençãoController.manutenção);
router.get('/sobre', SobreController.sobre);

export default router;