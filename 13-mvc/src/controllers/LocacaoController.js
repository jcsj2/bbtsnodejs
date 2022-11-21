// eslint-disable-next-line import/extensions
import LocacaoModel from '../models/LocacaoModel.js';

class LocacaoController {
  constructor(filmeModel) {
    this.locacaoModel = new LocacaoModel(filmeModel);
  }

  criar(req, res) {
    const { body } = req;
    this.locacaoModel.criar(body);
    res.send('Locação criada');
  }
}

export default LocacaoController;
