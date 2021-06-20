from flask import Flask, render_template
app = Flask(__name__)
@app.route('/')
def home():
    personagens = [{
        "nome": "Robin", "imagem": "static/imag/Robin.jpg", "hp": 15
        },{
        "nome": "Cyborg", "imagem": "static/imag/Cyborg.jpg", "hp": 25
        },{
        "nome":"Mutano", "imagem": "static/imag/Mutano.jpg", "hp": 20
        }]
    instrumentos = [{
        "nome": "Bastao", "imagem": "static/imag/Bastao.jpg", "dano": 7
        },{
        "nome": "Nunchaku", "imagem": "static/imag/Nunchaku.jpg", "dano": 6
        },{
        "nome":"Boomerang", "imagem": "static/imag/Boomerang.jpg", "dano": 5
        }]
    return render_template(
        "index.html",
        personagens = personagens,
        instrumentos = instrumentos
    )
if __name__ == "__main__":
    app.run(debug=True)