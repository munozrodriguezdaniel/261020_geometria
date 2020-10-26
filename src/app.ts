import { menu } from '../view/menu'
import { leerTeclado } from '../view/lecturaTeclado'
const main = async () => {
    let n: number
    do {
        n = await menu()
        switch(n){
            case 1:
                console.log('Calcular perímetro y área de un triángulo')
                let base, altura, lado1, lado2: number
                base =  parseInt( await leerTeclado('Introduzca la base del triángulo'))
                altura =  parseInt( await leerTeclado('Introduzca la altura del triángulo'))
                lado1 =  parseInt( await leerTeclado('Introduzca otro lado del triángulo'))
                lado2 =  parseInt( await leerTeclado('Introduzca el último lado del triángulo'))
                let perimetroT=perimetroTriangulo(base,lado1,lado2)
                let areaT=areaTriangulo(base,altura)
                console.log("Perímetro del triángulo="+perimetroT)
                console.log("Área del triángulo="+areaT)
                break
            case 2:
                console.log('Calcular perímetro y área de un rombo')
                let lado, dmayor, dmenor:number
                lado = parseInt(await leerTeclado('Introduzca el lado del rombo '))
                dmayor = parseInt(await leerTeclado('Introduzca la diagonal mayor del rombo '))
                dmenor = parseInt(await leerTeclado('Introduzca la diagonal menor del rombo '))
                let periRombo = pRombo(lado)
                let areaRombo = aRombo(dmayor,dmenor);
                console.log("Perímetro del rombo="+periRombo)
                console.log("Área del rombo="+areaRombo)
                break
            case 3:
                console.log('Calculando perímetro y área de un rectángulo')
                let baser, alturar:number
                baser = parseInt(await leerTeclado('Introduzca la base del rectángulo'))
                alturar = parseInt(await leerTeclado('Introduzca la altura del rectángulo'))
                let periRectangulo=pRectangulo(baser,alturar)
                let areaRectangulo=aRectangulo(baser,alturar)
                console.log("Perímetro del rectángulo="+periRectangulo)
                console.log("Área del rectángulo="+areaRectangulo)
                break
            case 4:
                console.log('Calculando perímetro y área de un círculo')
                let radio:number
                radio = parseInt(await leerTeclado('Introduzca el radio del círculo'))
                let periCirculo=pCirculo(radio)
                let areaCirculo=aCirculo(radio)
                console.log("Perímetro del círculo="+periCirculo)
                console.log("Área del círculo="+areaCirculo)
                break
            case 5:
                console.log('Calculando perímetro y área de un parelelogramo')
                let basep, alturap, ladop:number
                basep = parseInt(await leerTeclado('Introduzca la base del parelelogramo'))
                alturap = parseInt(await leerTeclado('Introduzca la altura del parelelogramo'))
                ladop = parseInt(await leerTeclado('Introduzca el lado del parelelogramo'))
                let periParalelogramo=pParalelogramo(basep,ladop)
                let areaParalelogramo=aParalelogramo(basep,alturap)
                console.log("Perímetro del parelelogramo="+periParalelogramo)
                console.log("Área del parelelogramo="+areaParalelogramo)
                break
                break
            case 0:
                console.log('\nAdios')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    }while (n != 0)
}
const perimetroTriangulo = (l1:number, l2:number, l3:number) => {
    let res=0;
    res=l1+l2+l3
    return res
}

const areaTriangulo = (base:number, altura:number) => {
    let res=0
    res=(base*altura)/2
    return res
}

const pRombo = (lado:number) => {
    let res=0
    res=lado*4
    return res
}

const aRombo = (dmayor:number, dmenor:number) => {
    let res=0
    res=dmayor*dmenor/2
    return res
}

const pCirculo = (radio:number) => {
    let res=0
    res=2*radio*Math.PI
    return res
}

const aCirculo = (radio:number) => {
    let res=0
    res=(radio*radio)*Math.PI
    return res
}

const pRectangulo = (b:number, a:number) => {
    let res=0
    res=(b*2+a*2)
    return res
}

const aRectangulo = (b:number, a:number) => {
    let res=0
    res=a*b
    return res
}

const pParalelogramo = (basep:number, ladop:number) => {
    let res=0
    res=2*(basep+ladop)
    return res
}

const aParalelogramo = (basep:number, alturap:number) => {
    let res=0
    res=basep * alturap
    return res
}
main()