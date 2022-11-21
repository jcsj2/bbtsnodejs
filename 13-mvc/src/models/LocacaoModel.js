class LocacaoModel {
  constructor(filmeModel) {
    this.locacoes = [];
    this.filmeModel = filmeModel;
  }

  criar(dadosLocacao) {
    const { codigosFilmes } = dadosLocacao;

    const filmesCadastrados = this.filmeModel.listar();

    const codigosFilmesCadastrados = filmesCadastrados
      .map((filmeCadastrado) => filmeCadastrado.codigo);

    const filmesExistem = codigosFilmes
      .every((codigoFilme) => codigosFilmesCadastrados.includes(codigoFilme));

    if (!filmesExistem) {
      throw new Error('Existem filmes inválidos');
    }

    this.locacoes.push(dadosLocacao);
  }
}

export default LocacaoModel;
