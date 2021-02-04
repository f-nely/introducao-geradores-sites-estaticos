import Recipe from '../../../components/Recipe/Recipe';

export default function MolhoBranco(){
    return(
        <div>
            <Recipe
                name="Molho Branco"
                picture="https://static.clubedaanamariabraga.com.br/wp-content/uploads/2019/09/molho-branco-ana-maria-braga-360x238.jpg"
                time="20 min"
                servings="5 porções"
            >
            
            <h2>Ingredientes</h2>

            <ul>
                <li>150 g de manteiga</li>
                <li>1 cebola média picadinha</li>
                <li>110 g de farinha de trigo</li>
                <li>1 litro de leite</li>
                <li>Sal e noz-moscada ralada a gosto</li>
            </ul>

            <h2>Modo de Preparo</h2>

            <ol>
                <li>Derreta a manteiga e refogue a cebola em fogo brando até murchar.</li>
                <li>Adicione a farinha e mexa por uns 2 minutos.</li>
                <li>Incorpore o leite aos poucos, mexendo sempre com um batedor de arame.</li>
                <li>Mantenha em fogo brando, mexendo, até que o molho fique espesso. Tempere com sal enoz-moscada a gosto e utilize.</li>
            </ol>
            </Recipe>
        </div>
    )
}