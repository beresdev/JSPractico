//square

function perimeterSquare (side) {
    return(side * 4);
}

function areaSquare(side) {
    return(side * side);
}

function calculateSquarePerimeter() {
    const input = document.getElementById("inputSideSquare");
    const value = parseInt(input.value);
    const perimeter = perimeterSquare(value);
    alert("El perimetro del cuadrado es: " + perimeter);

}

function calculateSquareArea () {
    const input = document.getElementById("inputSideSquare");
    const value = parseInt(input.value);
    const area = areaSquare(value);
    alert("El área del cuadrado es: " + area);
}



//triangle isoceles
function perimeterTriangle(Sides, base)
{
    return((Sides*2) + base);
} 


function areaTriangle (base, height) {
    return((base * height)/2);
}


function calculateTrianglePerimeter () {
    const inputS = document.getElementById("inputSideTriangle");
    const sideS = parseInt(inputS.value);
    const inputB = document.getElementById("inputBaseTriangle");
    const sideB = parseInt(inputB.value);
    const perimeter = perimeterTriangle(sideS, sideB);
    alert("El perimetro del triangulo es: " + perimeter);
}

function calculateTriangleArea () {
    const inputB = document.getElementById("inputBaseTriangle");
    const sideB = parseInt(inputB.value);
    const inputH = document.getElementById("inputHeightTriangle");
    const height = parseInt(inputH.value);
    const area = areaTriangle(sideB, height);
    alert("EL área del triángulo es: " + area);
}

function heightIsTriangle (side, base){
    return (Math.sqrt((side*side) - ((base * base)/4)));
}

function calculateTriangleHeight() {
    const inputA = document.getElementById("inputSideATriangle");
    const sideA = parseInt(inputA.value);
    console.log("sideA inicializada, el valor es: " + sideA);

    const inputB = document.getElementById("inputBasTriangle");
    const sideB = parseInt(inputB.value);
    console.log("sideB inicializada, el valor es: " + sideB);

    const inputC = document.getElementById("inputSideCTriangle");
    const sideC = parseInt(inputC.value);
    console.log("sideC inicializada, el valor es: " + sideC);

    if (sideA == sideB) {
        console.log("condicion A =B")
        if (sideB == sideC) {
            console.log("condicion A=B=C");
            let height = heightIsTriangle(sideA, sideB);
            alert("Este es un triángulo isóceles-equilatero y su altura es: " + height);
        }
        else {
            console.log("condicion A = B != C");
            let height = heightIsTriangle(sideB, sideC);
            alert("TRIANGULO ISÓCELES con altura de: " + height + "unidades");
        }
    }
    else 
        if (sideB == sideC) {
            console.log("condicion A != B = C");
            const height = heightIsTriangle(sideB, sideA);
            alert("TRIANGULO ISÓCELES con altura de: " + height + "unidades");
        }
       else 
            if (sideC == sideA) {
                console.log("condicion A != B pero A = C");
                let height = heightIsTriangle(sideA, sideB);
                console.log(sideB);
                alert("TRIANGULO ISÓCELES con altura de: " + height + "unidades");
            }
            else {
                console.log("condicion A != B y C=! A")
                alert("NO PUEDO CALCULAR LA ALTURA. Este es un triangulo escaleno, todos sus lados son diferentes")
            }
}

//circle

const pi = Math.PI;

function diameterCircle (ratio) {
    return(2*ratio);
}

function perimeterCircle(ratio) {
    diameter = diameterCircle(ratio)
    return(diameter * pi);
} 

function areaCircule(ratio) {
    return((ratio * ratio) * pi);
}


function calculateCirclePerimeter () {
    const inputR = document.getElementById("inputRatio");
    const ratio = parseInt(inputR.value);
    const perimeter = perimeterCircle(ratio);
    alert("La circunferencia del circulo mide: "+ perimeter);
}

function calculateCircleArea() {
    const inputR = document.getElementById("inputRatio");
    const ratio = parseInt(inputR.value);
    const area = areaCircule(ratio);
    alert("El area del circulo mide: "+ area);
}