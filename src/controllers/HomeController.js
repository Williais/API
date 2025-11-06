import Aluno from '../models/Aluno';

class HomeController {

  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Willian',
      sobrenome: 'Padilha',
      email: 'willbach@email.com',
      idade: 24,
      peso: 80,
      altura: 1.70
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
