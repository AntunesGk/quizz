const nomes = ["AMOSTRADINHO", "KEN", "GABRIEL HENRIQUE RODRIGUES MENDES DE OLIVEIRA", "Marcelo", "Gustavo"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)