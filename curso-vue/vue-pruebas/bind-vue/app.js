const app = new Vue({
	el: '#app',
	data: {
		tareas: [
			{ titulo: 'tarea 1', completado: false },
			{ titulo: 'tarea 2', completado: false },
			{ titulo: 'tarea 3', completado: false },
			{ titulo: 'tarea 4', completado: false }
		]
	},
	methods: {
		completarTarea(tarea){
			tarea.completado = !tarea.completado;
		}
	}
});
