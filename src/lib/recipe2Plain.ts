import type { Recipe } from '$lib/dao/Recipe';

interface RawIngredient  {
    state: number 
    pk: number
    name: string
}

interface RawRecipe {
    ingredients: RawIngredient[]
    [index: string]: string | unknown
}

export function recipesToPlainObj(recipes: Recipe[], ...props: string[]): unknown {
    const actual:RawRecipe[] = [];

    if (props.length === 0){
        props = ['name:name', 'recipe_id:id'];
    }

    type TransientRecipe = Recipe & { [index: string]: string } & { [index: string]: unknown };

    for (const recipe of recipes) {
        if (recipe.id === 0){
            continue;
        }
        const transientRecipe: TransientRecipe = recipe as unknown as TransientRecipe;
        const rcR: RawRecipe = { ingredients: [] };
        for (const prop of props){
            const [dest, src] = prop.split(':');
            

            if (transientRecipe[src] === 'string'){
                rcR[dest] = transientRecipe[src].trim();
            }
            else{
                rcR[dest] = transientRecipe[src];
            }
        }
        actual.push(rcR);
        for (const ingr of recipe.ingredients) {
            if ((ingr.id >= 0 && ingr.id < 1) || ingr.name.trim().length === 0){
                continue;
            }
            rcR.ingredients.push({ state: 1, pk: ingr.id, name: ingr.name.trim() });
        }
    }
    return actual;
}