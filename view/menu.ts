import { leerTeclado } from '../view/lecturaTeclado'

export const menu = async () => {
    let n: number
    console.log('\n')
    console.log('1.- TRIÁNGULO')
    console.log('2.- CUADRADO')
    console.log('3.- CÍRCULO')
    console.log('4.- RECTÁNGULO')
    console.log('0.- SALIR')
    n = parseInt( await leerTeclado('opción: ') )
    return n
}
