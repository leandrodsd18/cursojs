/*Nesse exercício criei um conversor de medidas que recebe um valor em metros e converte para uma das unidades de medidas cadastradas, utilizei um 'switch' para criar um menu onde o usuario escolhe para qual unidade de medida quer converter */
let medida = prompt ('Digite uma medida em metros')
let unidade = prompt('Para qual unidade deseja converter?'+
'\n1- Milímetro'+
'\n2- Centímetro'+
'\n3- Decímetro'+
'\n4- Decâmetro'+ 
'\n5- Hectômetro'+ 
'\n6- Quilômetro')

switch(unidade){
    case "1":
        document.write('em milímetros essa medida vale ' + medida*1000 +'mm')
        break
    case "2":
        document.write('em centímetros essa medida vale ' + medida*100 +'cm')
        break
    case "3":
         document.write('em decímetros essa medida vale ' + medida*10 +'dm')
        break
    case "4":
        document.write('em decâmetros essa medida vale ' + medida/10 +'dam')
        break  
    case "5":
        document.write('em hectômetros essa medida vale ' + medida/100 +'hm')
        break
    case "6":
        document.write('em quilometros essa medida vale ' + medida/1000 +'km')
        break        
    default:
        document.write('Opção invalida')
}