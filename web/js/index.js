jQuery(document).ready(function($) {
	$('.getlessen').on('click', function(event) {
		$('.fade-in-content').show();
		setTimeout(function() {
			$('.fade-in-content').html('<table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp"> <thead> <tr> <th class="mdl-data-table__cell--non-numeric">Lespakket</th> <th>Prijs</th> </tr></thead> <tbody> <tr> <td class="mdl-data-table__cell--non-numeric">10 lessen + 2 examens (bijzondere verrichtingen en verkeersdeelneming)</td><td> € 699</td></tr><tr> <td class="mdl-data-table__cell--non-numeric">15 lessen + 2 examens (bijzondere verrichtingen en verkeersdeelneming)</td><td> € 899</td></tr><tr> <td class="mdl-data-table__cell--non-numeric">Examen bijzondere verrichtingen</td><td> € 85</td></tr><tr> <td class="mdl-data-table__cell--non-numeric">Examen verkeersdeelneming</td><td> € 235</td></tr><tr> <td class="mdl-data-table__cell--non-numeric">Losse lessen</td><td> € 47,50</td></tr><tr> <td class="mdl-data-table__cell--non-numeric">Theoriecursus (excl. examen)</td><td> € 45</td></tr><tr> <td class="mdl-data-table__cell--non-numeric">Theoriecursus (incl. examen)</td><td> € 75</td></tr></tbody></table>')
		}, 3000);
		event.preventDefault();
	});
});



// <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
//     <thead>
//         <tr>
//             <th class="mdl-data-table__cell--non-numeric">Lespakket</th>
//             <th>Prijs</th>
//         </tr>
//     </thead>
//     <tbody>
//         <tr>
//             <td class="mdl-data-table__cell--non-numeric">10 lessen + 2 examens (bijzondere verrichtingen en verkeersdeelneming)</td>
//             <td> € 699</td>
//         </tr>
//         <tr>
//             <td class="mdl-data-table__cell--non-numeric">15 lessen + 2 examens (bijzondere verrichtingen en verkeersdeelneming)</td>
//             <td> € 899</td>
//         </tr>
//         <tr>
//             <td class="mdl-data-table__cell--non-numeric">Examen bijzondere verrichtingen</td>
//             <td> € 85</td>
//         </tr>
//         <tr>
//             <td class="mdl-data-table__cell--non-numeric">Examen verkeersdeelneming</td>
//             <td> € 235</td>
//         </tr>
//         <tr>
//             <td class="mdl-data-table__cell--non-numeric">Losse lessen</td>
//             <td> € 47,50</td>
//         </tr>
//         <tr>
//             <td class="mdl-data-table__cell--non-numeric">Theoriecursus (excl. examen)</td>
//             <td> € 45</td>
//         </tr>
//         <tr>
//             <td class="mdl-data-table__cell--non-numeric">Theoriecursus (incl. examen)</td>
//             <td> € 75</td>
//         </tr>
//     </tbody>
// </table>