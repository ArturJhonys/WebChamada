export default function () {
  this.namespace = '/api'

  this.get('/chamada', function () {
    return {
      data: [{
        id: 0,
        nome: 'Seya',
        idade: 17,
        faixa: 'branca',
        dataEntrada: '06/05/2019',
        imagem: 'https://upload.wikimedia.org/wikipedia/pt/e/eb/Pegasus_Seiya.jpg'
      },
      {
        id: 1,
        nome: 'shiryu',
        idade: 18,
        faixa: 'branca',
        dataEntrada: '09/02/2019',
        imagem: 'http://www.nikkeypedia.org.br/images/4/47/Shiryu_de_Dragao1.jpg'
      },
      {
        id: 2,
        nome: 'Shun',
        idade: 17,
        faixa: 'branca',
        dataEntrada: '30/06/2019',
        imagem: 'https://vignette.wikia.nocookie.net/saintseya/images/a/ac/SHUN_DE_ANDR%C3%94MEDA.png/revision/latest?cb=20170526213118&path-prefix=pt'
      },
      {
        id: 3,
        nome: 'Hyoga',
        idade: 16,
        faixa: 'branca',
        dataEntrada: '02/08/2019',
        imagem: 'https://vignette.wikia.nocookie.net/saintseya/images/9/9d/Hyoga_3_cloth.png/revision/latest?cb=20130331042305&path-prefix=pt'
      },
      {
        id: 4,
        nome: 'Ikki',
        idade: 19,
        faixa: 'azul',
        dataEntrada: '02/08/2012',
        imagem: 'https://vignette.wikia.nocookie.net/saintseya/images/7/71/Ikki_3_cloth.png/revision/latest?cb=20120325024118&path-prefix=pt'
      },
      {
        id: 5,
        nome: 'Aiolia',
        idade: 20,
        faixa: 'marrom',
        dataEntrada: '01/01/2005',
        imagem: 'https://vignette.wikia.nocookie.net/saintseya/images/f/f5/Aiolia_de_Le%C3%A3o.png/revision/latest?cb=20160108161043&path-prefix=pt'
      },
      {
        id: 6,
        nome: 'Aldebaran',
        idade: 20,
        faixa: 'marrom',
        dataEntrada: '01/01/2003',
        imagem: 'https://vignette.wikia.nocookie.net/saintseya/images/0/0f/Primeira_apari%C3%A7%C3%A3o_do_Cavaleiro_de_Touro.png/revision/latest?cb=20170725165124&path-prefix=pt'
      },
      {
        id: 7,
        nome: 'Saga',
        idade: 28,
        faixa: 'Preta',
        dataEntrada: '06/05/1999',
        imagem: 'https://vignette.wikia.nocookie.net/saintseya/images/2/2d/Saga_de_G%C3%AAmeos_%28Ouro%29.png/revision/latest?cb=20160321190429&path-prefix=pt'
      },
      {
        id: 8,
        nome: 'Shaka',
        idade: 20,
        faixa: 'Preta',
        dataEntrada: '06/01/1999',
        imagem: 'https://vignette.wikia.nocookie.net/saintseya/images/1/11/Shaka_de_Virgem.png/revision/latest?cb=20160225181250&path-prefix=pt'
      },
      {
        id: 9,
        nome: 'Muh',
        idade: 20,
        faixa: 'Preta',
        dataEntrada: '06/01/1999',
        imagem: 'https://vignette.wikia.nocookie.net/saintseya/images/f/f7/Mu_de_%C3%81ries.png/revision/latest?cb=20170205190021&path-prefix=pt'
      },
      {
        id: 10,
        nome: 'Dohko',
        idade: 261,
        faixa: 'vermelha',
        dataEntrada: '06/01/1758',
        imagem: 'https://vignette.wikia.nocookie.net/saintseya/images/e/e0/Dohko_perfil.png/revision/latest?cb=20180206210824&path-prefix=pt'
      }
      ]
    }
  });
}
