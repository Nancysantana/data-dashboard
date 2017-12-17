/*
 * Funcionalidad de tu producto
 */

 // // Inicializamos variable activo
// var active;
// // Inicializamos varible contador
// var counter = [];
// var alumnas = data['AQP']['2016-2']['students'];

// // Declaramos la funcion que contara el numero de estudiantes activas en AQP 2016-2
// function activeStudents() {
// 	// Hacemos un for que itere el numero de estudiantes en esa generacion
// 	for(var i = 0; i < alumnas.length; i++) {
// 		// alojamos el valor en la posicion i, ya que estudiantes es un arreglo
// 		active = alumnas[i]['active'];
// 		// si active es igual a true entonces lo añadimos al arreglo contador
// 		if(active === true) {
// 			counter.push(active);
// 		}
// 	}
// 	// hacemos la impresion del numero de activas con .length
// 	return (counter.length);
// }

// // Puedes hacer uso de la base de datos a través de la variable `data`
// //Llamamos a la funcion
// //activeStudents();

// // Pintar grafica

// var ctx = document.getElementById("myChart").getContext("2d");
// var myChart = new Chart(ctx, {
// 	type: 'bar',
// 	data: {
// 		labels: ["AQP 2016-2"],
//         datasets: [{
//             label: '# of Students',
//             data: [
//             activeStudents(),
//             ],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// })


// Puedes hacer uso de la base de datos a través de la variable `data`
//console.log(data);
var cities = Object.keys(data);
console.log(cities);
var body = document.getElementsByTagName('div');
for(i = 0; i < cities.length; i++) {
	var button = document.createElement('button');
	button.innerHTML = cities[i];
	button.onclick = getDataByCity;
	body[0].appendChild(button);
}

function getDataByCity(event) {
  var city = event.srcElement.innerHTML;
  var gen = Object.keys(data[city]);
  console.log(gen);
}
