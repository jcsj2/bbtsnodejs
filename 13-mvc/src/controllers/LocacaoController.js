import * as yup from 'yup';
// eslint-disable-next-line import/extensions
import LocacaoModel from '../models/LocacaoModel.js';

class LocacaoController {
  constructor(filmeModel) {
    this.locacaoModel = new LocacaoModel(filmeModel);
  }

  criar(req, res) {
    const { body } = req;

    const validador = yup.object().shape({
      codigosFilmes: yup.array().required(),
      dataLocacao: yup.date().required(),
    });

    if (validador.isValidSync(body)) {
      try {
        this.locacaoModel.criar(body);
        res.send('Locação criada');
      } catch (err) {
        res.status(400).send(err.message);
      }
    } else {
      res.status(400).send('Dados inválidos');
    }
  }
}

export default LocacaoController;
