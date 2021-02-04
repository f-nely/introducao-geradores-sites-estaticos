import Recipe from '../../../components/Recipe/Recipe';

export default function BolinhoDeCenoura(){
    return(
        <div>
            <Recipe 
                name="Bolinho de Chuva"
                picture="https://vovopalmirinha.com.br/wp-content/uploads/2020/03/vovo-palmirinha-bolinho-de-chuva-702x336.jpg"
                time="40 min"
                servings="30 unidades"
            >
             
             <h2>Ingredientes</h2>

             <ul>
                 <li>3 xícaras de farinha de trigo</li>
                 <li>2 colheres (sopa) de açúcar</li>
                 <li>Uma pitada de sal</li>
                 <li>1 colher (sopa) de fermento químico em pó</li>
                 <li>2 colheres (sopa) de manteiga</li>
                 <li>Raspas da casca de 1 limão</li>
                 <li>1 xícara de leite</li>
                 <li>1 ovo</li>
             </ul>

             <h2>Modo de Preparo</h2>

             <ol>
                 <li>Em uma tigela grande, junte a farinha, o açúcar, o sal, o fermento, a manteiga e as raspas de limão. Misture bem.</li>
                 <li>Junte o ovo e o leite, aos poucos, mexendo sempre com uma colher de pau.</li>
                 <li>Deixe a massa descansar por 15 minutos.</li>
                 <li>Depois, pegue colheradas da massa e frite em óleo quente.</li>
                 <li>Escorra os bolinhos em papel-toalha e, em seguida, polvilhe-os com açúcar e canela.</li>
             </ol>
            </Recipe>
        </div>
    )
}