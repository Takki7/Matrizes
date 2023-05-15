var matriz1 = new Array();
var matriz2 = new Array();

var lin1 = prompt('Digite o número de linhas da matriz: ');
var col1 = prompt('Digite o número de colunas da matriz: ');
var lin2 = prompt('Digite o número de linhas da matriz 2: ');
var col2 = prompt('Digite o número de colunas da matriz 2: ');
var e = prompt('Digite o número para multiplicar a matriz 1 (escalar): ');

//Colocar os números na matriz 1
for (var i = 0; i <= lin1; i++) {
    matriz1.push([]);
    for (var j = 0; j <= col1; j++) {
        matriz1[i][j] = (parseInt(Math.random() * 10));
    }
}

//Colocar os números na matriz 2
for (var i = 0; i <= lin2; i++) {
    matriz2.push([]);
    for (var j = 0; j <= col2; j++) {
        matriz2[i][j] = (parseInt(Math.random() * 10));
    }
}

//Escrever tabela 1
document.write("<div class='divmatriz'>");
document.write("<div class='div1'>");
document.write("<h2 id='h2js'>Matriz 1 /</h2>");
document.write("<table id='tablejs' border=1>");
for (i = 0; i < lin1; i++) {
    var linha = '<tr>';
    for (var x = 0; x < col1; x++) {
        linha = linha + "<td>" + matriz1[i][x] + "</td>";
    }
    linha = linha + "</tr>";
    document.write(linha);
}
document.write("</table>");

//Determinantes da primeira matriz
//determinante de 1
if (lin1 == 1 && col1 == 1) {
    var det = matriz1;
    document.write("<p id='pjs'>Determinante: " + parseInt(det) + "</p>");
}

//determinante de 2
if (lin1 == 2 && col1 == 2) {
    var det2 = parseInt((matriz1[0][0] * matriz1[1][1]) - (matriz1[1][0] * matriz1[0][1]));
    document.write("<p id='pjs'>Determinante: " + parseInt(det2) + "</p>");
}

//determinante de 3
if (lin1 == 3 && col1 == 3) {
    var det3 = parseInt(((matriz1[0][0] * matriz1[1][1] * matriz1[2][2]) + (matriz1[0][1] * matriz1[1][2] * matriz1[2][0])
        + (matriz1[0][2] * matriz1[1][0] * matriz1[2][1])) - ((matriz1[0][2] * matriz1[1][1] * matriz1[2][0])
            + (matriz1[0][0] * matriz1[1][2] * matriz1[2][1]) + (matriz1[0][1] * matriz1[1][0] * matriz1[2][2])));
    document.write("<p id='pjs'>Determinante: " + parseInt(det3) + "</p>");
}
document.write("</div>");
//Transposição da matriz 1
document.write("<div class='div2'>");
document.write("<h2 id='h2js'>Transposição da matriz 1</h2>");
document.write("<table id='tablejs' border=1>");
var transposta1 = [];
for (i = 0; i < col1; i++) {
    var linha = '<tr>';
    transposta1.push([]);
    for (var x = 0; x < lin1; x++) {
        transposta1[i][x] = matriz1[x][i];
        linha = linha + "<td>" + transposta1[i][x] + "</td>";
    }
    linha = linha + "</tr>";
    document.write(linha);
}
document.write("</table>");
document.write("</div>");
document.write("</div>");

//Escrever tabela 2
document.write("<div class='divmatriz'>");
document.write("<div class='div1'>");
document.write("<h2 id='h2js'>Matriz 2 /</h2>");
document.write("<table id='tablejs' border=1>");
for (i = 0; i < lin2; i++) {
    var linha = '<tr>';
    for (x = 0; x < col2; x++) {
        linha = linha + "<td>" + matriz2[i][x] + "</td>";
    }
    linha = linha + "</tr>";
    document.write(linha);
}
document.write("</table>");

//Determinantes da segunda matriz
//determinante de 1
if (lin2 == 1 && col2 == 1) {
    var det = matriz2;
    document.write("<p id='pjs'>Determinante: " + parseInt(det) + "</p>");
}

//determinante de 2
if (lin2 == 2 && col2 == 2) {
    var det2 = parseInt((matriz2[0][0] * matriz2[1][1]) - (matriz2[1][0] * matriz2[0][1]));
    document.write("<p id='pjs'>Determinante: " + parseInt(det2) + "</p>");
}

//determinante de 3
if (lin2 == 3 && col2 == 3) {
    var det3 = parseInt(((matriz2[0][0] * matriz2[1][1] * matriz2[2][2]) + (matriz2[0][1] * matriz2[1][2] * matriz2[2][0])
        + (matriz2[0][2] * matriz2[1][0] * matriz2[2][1])) - ((matriz2[0][2] * matriz2[1][1] * matriz2[2][0])
            + (matriz2[0][0] * matriz2[1][2] * matriz2[2][1]) + (matriz2[0][1] * matriz2[1][0] * matriz2[2][2])));
    document.write("<p id='pjs'>Determinante: " + parseInt(det3) + "</p>");
}
document.write("</div>");

//Transposição da matriz 2
document.write("<div class='div2'>");
document.write("<h2 id='h2js'>Transposição da matriz 2</h2>");
document.write("<table id='tablejs' border=1>");
var transposta2 = [];
for (i = 0; i < col2; i++) {
    var linha = '<tr>';
    transposta2.push([]);
    for (var x = 0; x < lin2; x++) {
        transposta2[i][x] = matriz2[x][i];
        linha = linha + "<td>" + transposta2[i][x] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");
document.write("</div>");
document.write("</div>");

//Subtração das matrizes
var sub = new Array();
document.write("<div class='divmatriz'>");
document.write("<div class='div1'>");
document.write("<h2 id='h2js'>Subtração /</h2>");
if (lin1 <= lin2 && col1 <= col2) {
    for (var i = 0; i <= lin2; i++) {
        sub.push([]);
        for (var j = 0; j <= col2; j++) {
            sub[i][j] = matriz1[i][j] - matriz2[i][j];
        }
    }
    document.write("<table id='tablejs'>");
    for (i = 0; i < col1; i++) {
        var linha = '<tr>';
        for (x = 0; x < lin1; x++) {
            linha = linha + "<td>" + sub[i][x] + "</td>";
        }
        linha = linha + "</tr>"
        document.write(linha);
    }
    document.write("</table>");
} else {
    document.write("<p id='pjs'>A ordem das duas matrizes<br> não é igual :(</p>");
}
document.write("</div>");
//Adição das matrizes
var adicao = new Array();
document.write("<div class='div2'>");
document.write("<h2 id='h2js'>Adição</h2>");

if (lin1 <= lin2 && col1 <= col2) {
    /*for (var i=0; i<lin1; i++) {
      adicao.push([]);
      for (var j=0; j<col1; j++) {
        adicao[i][j] = matriz1[i][j]+matriz2[i][j];
      }
    }*/
    for (var i = 0; i <= lin1; i++) {
        adicao.push([]);
        for (var j = 0; j <= col1; j++) {
            adicao[i][j] = matriz1[i][j] + matriz2[i][j];
        }
    }

    document.write("<table id='tablejs' border=1>");
    for (var x = 0; x < lin1; x++) {
        var linha = '<tr>';
        for (var y = 0; y < col1; y++) {
            linha = linha + "<td>" + adicao[x][y] + "</td>";
        }
        linha = linha + "</tr>";
        document.write(linha);
    }
    document.write("</table>");
} else {
    document.write("<p id='pjs'>A ordem das duas matrizes<br> não é igual :(</p>")
}
document.write("</div>");
document.write("</div>");
document.write("<br>");
//Multiplicação de matrizes
document.write("<div class='divmatriz'>");
document.write("<div class='div1'>");
document.write("<h2 id='h2js'>Multiplicação /</h2>");
var multi = [];

if (col1 == lin2) {
    for (var x = 0; x < lin1; x++) {
        multi.push([]);
        for (var i = 0; i < col2; i++) {
            multi[x][i] = 0;
            for (var j = 0; j < col1; j++) {
                multi[x][i] = multi[x][i] + (matriz1[x][j] * matriz2[j][i]);
            }
        }
    }
    document.write("</table>");
    document.write("<table id='tablejs' border=1>");
    for (var x = 0; x < lin1; x++) {
        var linha = '<tr>';
        for (var y = 0; y < col2; y++) {
            linha = linha + "<td>" + multi[x][y] + "</td>";
        }
        linha = linha + "</tr>";
        document.write(linha);
    }
    document.write("</table>");
} else {
    document.write("<p id='pjs'>A ordem das duas é imcompatível :(</p>");
}
document.write("</div>");

//Multiplicação de matrizes por um escalar
document.write("<div class='div2'>");
document.write("<h2 id='h2js'>Multiplicação da matriz 1 por " + e + "</h2 > ");
multie = new Array();
for (var i = 0; i <= lin1; i++) {
    multie.push([]);
    for (var j = 0; j <= col1; j++) {
        multie[i][j] = matriz1[i][j] * e;
    }
}

document.write("<table id='tablejs' border=1>");
for (var x = 0; x < lin1; x++) {
    var linha = '<tr>';
    for (var y = 0; y < col1; y++) {
        linha = linha + "<td>" + multie[x][y] + "</td>";
    }
    linha = linha + "</tr>";
    document.write(linha);
}
document.write("</table>");
document.write("</div>");
document.write("</div>");