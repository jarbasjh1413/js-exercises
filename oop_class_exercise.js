class SpaceshipStation {
    constructor() {
        this.hitched = false
        this.openDors = false

    }

    hitSpaceship(name, crew) {
        this.name = name
        this.crew = crew
        this.hitched = true
        this.openDors = true
    }
}







const createSpaceship = () => {
    nameSpaceship = prompt("Qual o nome da nave?")
    crewQuantity = prompt("Qual o número de tripulantes para essa nave")

    let spaceship = new SpaceshipStation()
    spaceship.hitSpaceship(nameSpaceship, crewQuantity)

    listSpaceships.push(spaceship)

}

let listSpaceships = []


const printSpaceship = arrayListSpaceships => {

    let list = []
    arrayListSpaceships.forEach(spaceship => {
        list.push(spaceship.name + spaceship.crew)
    });

    alert('Lista de espaço naves\n' + list.join('\n'))
};





function showMenu() {

    let option = ''

    do {

        option = prompt('Insira a opção desejada:\n1-ENGATAR A NAVE\n2-IMPRIMIR AS NAVES\n3-SAIR DO PROGRAMA')

        switch (option) {
            case '1':

                createSpaceship()

                break;

            case '2':
                printSpaceship(listSpaceships)
                break;
            case '3':
                alert("Encerrando o programa")
                break;
            default:
                alert("Opção inválida, tente novamente")
                break;
        }


    } while (option != 3);


}