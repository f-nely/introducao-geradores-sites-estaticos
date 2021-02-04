import Recipe from '../../../components/Recipe/Recipe';

export default function Brigadeiro(){
    return(
        <div>
            <Recipe 
                name="Brigadeiro"
                picture="https://cdn.panelinha.com.br/receita/958014000000-Brigadeiro.jpg"
                time="5 min"
                servings="30 unidades"
            >

            <h2>Ingredientes</h2>

            <ul>
                <li>1 lata de leite condensado</li>
                <li>½ medida de lata de leite</li>
                <li>1 colher (sopa) de manteiga</li>
                <li>3 colheres (sopa) de chocolate em pó</li>
                <li>2 xícaras (chá) de chocolate granulado</li>

            </ul>

            <h2>Modo de Preparo</h2>

            <ol>
                <li>Você vai precisar de 30 forminhas de brigadeiro</li>
                <li>Com um pincel, unte um prato com um pouco de manteiga. Reserve. </li>
                <li>Separe as forminhas umas das outras com cuidado e disponha numa travessa pequena. Reserve. </li>
                <li>Numa panela, misture o leite e o chocolate em pó. Leve ao fogo baixo e mexa bem, até dissolver o chocolate. </li>
                <li>
                    Junte o leite condensado, a manteiga e, quando ferver, calcule 15 minutos cozinhando,sem parar de mexer, 
                    ou até aparecer o fundo da panela. Retire a panela do fogo e transfira o brigadeiro para o prato untado. Deixe esfriar.
                </li>
                <li>Numa tigela, coloque o chocolate granulado e deixe ao lado do prato com a massa de brigadeiro. </li>
                <li>
                    Espalhe um pouco de manteiga na palma das mãos e, com a ajuda de 1 colher de chá, faça bolinhas de 2,5 cm. 
                    Passe as bolinhas pela tigela com o chocolate granulado, envolvendo cada uma muito bem. Em seguida, coloque
                    as bolinhas nas forminhas. Sirva a seguir.
                </li>

            </ol>
            </Recipe>
        </div>
    )
}