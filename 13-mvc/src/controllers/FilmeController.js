class FilmeController {
  constructor(filmeModel) {
    this.filmeModel = filmeModel;
  }

  criar(req, res) {
    const { body } = req;
    this.filmeModel.criar(body);
    res.send('Filme criado');
  }

  listar(req, res) {
    const filmes = this.filmeModel.listar();
    res.json(filmes);
  }
}

export default FilmeController;
