const root = ReactDOM.createRoot(document.getElementById('root'))

function CardgimmeHead() {
    return <h2>Hlavička</h2>
}

function CardText() {
    return <p>Mam rad kocicky :)</p>
}

function CardImage() {
    return <img src="https://placekitten.com/g/230/130" alt="pussy" />


}function CardButt() {
    return <button>Tlačítečko</button>
}

function Card() {
    return <div class="my-card">
        <CardImage />
        <CardgimmeHead />
        <CardText />
        <CardButt />
    </div>
}

root.render(<Card />)

