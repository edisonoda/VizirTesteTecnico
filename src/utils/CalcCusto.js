module.exports = function calcularCusto(time, plan, tax){
    if(time < 0) time = 0;
    
    const custoSemP = tax.custo * time;
    const oldTime = time;

    switch (plan){
      case 'FaleMais 30':
        time -= 30;
        break;

      case 'FaleMais 60':
        time -= 60;
        break;

      case 'FaleMais 120':
        time -= 120;
        break;
    }

    if(time < 0) time = 0;

    const custoComP = tax.custo * time * 1.1;

    return {
      origem: tax.origem,
      destino: tax.destino,
      tempo: oldTime,
      plano: plan,
      custoComP: custoComP,
      custoSemP: custoSemP,
    }
}