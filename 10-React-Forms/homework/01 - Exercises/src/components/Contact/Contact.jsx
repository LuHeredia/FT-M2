import React from 'react';
import './Contact.modules.css';

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const regexPhone = /^[0-9]+/;

export const validate = (inputs) => {
	const errors = {};
	if (!inputs.name) {
		errors.name = 'Se requiere un nombre';
	}
	if (!regexEmail.test(inputs.email)) {
		errors.email = 'Debe ser un correo electrónico';
	}
	if (!regexPhone.test(inputs.phone)) {
		errors.phone = 'Sólo números positivos';
	}
	if (!inputs.subject) {
		errors.subject = 'Se requiere un asunto';
	}
	if (!inputs.message) {
		errors.message = 'Se requiere un mensaje';
	}
	return errors;
};

export default function Contact() {
	const [inputs, setInputs] = React.useState({
		name: '',
		email: '',
		phone: 0,
		subject: '',
		message: '',
	});

	const [errors, setErrors] = React.useState({
		name: '',
		email: '',
		phone: '',
		subject: '',
		message: '',
	});

	const handleChange = (e) => {
		setInputs({
			...inputs,
			[e.target.name]: e.target.value,
		});

		setErrors(
			validate({
				...inputs,
				[e.target.name]: e.target.value,
			})
		);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let valores = Object.values(errors);
		console.log(valores);

		if (valores.length === 0) {
			window.alert('Datos completos');
		} else {
			window.alert('Debes corregir los errores');
			//En el readme dice "Debe llenar todos los campos" eso es diferente a lo que se espera en el test :)
		}
	};

	return (
		<div>
			Crear Formulario
			<form onSubmit={handleSubmit}>
				<label>Nombre:</label>
				<input
					className={errors.name && 'warning'}
					name="name"
					placeholder="Escribe tu nombre..."
					type="text"
					value={inputs.name}
					onChange={handleChange}
				/>
				<p className="danger">{errors.name}</p>
				<br />
				<label>Correo Electrónico:</label>
				<input
					className={errors.email && 'warning'}
					name="email"
					placeholder="Escribe tu email..."
					type="text"
					value={inputs.email}
					onChange={handleChange}
				/>
				<p className="danger">{errors.email}</p>
				<br />
				<label>Teléfono:</label>
				<input
					className={errors.phone && 'warning'}
					name="phone"
					placeholder="Escribe un teléfono..."
					type="number"
					value={inputs.phone}
					onChange={handleChange}
				/>
				<p className="danger">{errors.phone}</p>
				<br />

				<label>Asunto:</label>
				<input
					className={errors.subject && 'warning'}
					name="subject"
					placeholder="Escribe el asunto..."
					type="text"
					value={inputs.subject}
					onChange={handleChange}
				/>
				<p className="danger">{errors.subject}</p>
				<br />

				<label>Mensaje:</label>
				<textarea
					className={errors.message && 'warning'}
					name="message"
					placeholder="Escribe tu mensaje..."
					type="text"
					value={inputs.message}
					onChange={handleChange}
				/>
				<p className="danger">{errors.message}</p>
				<br />

				<button type="submit" value="submit">
					Enviar
				</button>
			</form>
		</div>
	);
}
