import { GridUrlIdPipe } from './grid-url-id.pipe';

describe('Suíte de testes de formatação do link para receber o id.', ()=>{
    let gridUrlIdPipe : GridUrlIdPipe;
    beforeEach(()=>{
        gridUrlIdPipe = new GridUrlIdPipe();
    });
    it('Deve retornar valor formatado o id numérico.',()=>{
        expect(gridUrlIdPipe.transform('https://swapi.co/api/films/1/')).toEqual('1');
    });
});