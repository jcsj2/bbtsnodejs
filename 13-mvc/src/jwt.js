import jwt from 'jsonwebtoken';

const segredo = 'meu_segredo_super_secreto';

const usuarioLogado = {
  nome: 'Junior',
  email: 'junior@email.com',
};

const tokenGerado = jwt.sign(usuarioLogado, segredo, { expiresIn: '10s' });

console.log(tokenGerado);

console.log(jwt.verify(tokenGerado, segredo));

// console.log(jwt.decode(tokenGerado));
