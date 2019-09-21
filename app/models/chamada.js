import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    nome: DS.attr(),
    idade: DS.attr(),
    faixa: DS.attr(),
    dataEntrada: DS.attr(),
    imagem: DS.attr()
});
