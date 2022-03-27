import { Field, Form, Formik } from "formik";
import * as yup from 'yup'
import { FlexContainer } from "../../componentsStyled/Global";
import { Button } from './../../componentsStyled/Button';
import './UserForm.scss'


const UserForm = (props) => {

	const ValidationSchema = yup.object().shape({
		name: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
		userName: yup.string().typeError('Должно быть строкой').required('Обязательное поле')
	})

	const UserValue = {
		name: props.user.name,
		userName: props.user.username,
		email: props.user.email,
		street: props.user.address.street,
		city: props.user.address.city,
		zipcode: props.user.address.zipcode,
		phone: props.user.phone,
		website: props.user.website,
		comment: '',
	}
	return (
		<Formik
			initialValues={UserValue}
			validateOnBlur
			onSubmit={(value) => { console.log(value) }}
			validationSchema={ValidationSchema}
		>
			{({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
				<Form onSubmit={handleSubmit}>
					<FlexContainer direction='column' margin='20px 10px'>
						<div className="userForm">
							<FlexContainer direction='column'>
								<label htmlFor="name" className="userForm__label">Name</label>
								{touched.name && errors.name && <span className="userForm__error">{errors.name}</span>}
								<Field
									className='userForm__input'
									name='name'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.name}
									disabled={props.editMode}
								/>

								<label htmlFor="userName" className="userForm__label">User name</label>
								{touched.userName && errors.userName && <span className="userForm__error">{errors.userName}</span>}
								<Field
									className='userForm__input'
									name='userName'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.userName}
									disabled={props.editMode}
								/>

								<label htmlFor="email" className="userForm__label">E-mail</label>
								{touched.email && errors.email && <span className="userForm__error">{errors.email}</span>}
								<Field
									className='userForm__input'
									name='email'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.email}
									disabled={props.editMode}
								/>

								<label htmlFor="street" className="userForm__label">Street</label>
								{touched.street && errors.street && <span className="userForm__error">{errors.street}</span>}
								<Field
									className='userForm__input'
									name='street'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.street}
									disabled={props.editMode}
								/>

								<label htmlFor="city" className="userForm__label">City</label>
								{touched.city && errors.city && <span className="userForm__error">{errors.city}</span>}
								<Field
									className='userForm__input'
									name='city'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.city}
									disabled={props.editMode}
								/>

								<label htmlFor="zipcode" className="userForm__label">Zipcode</label>
								{touched.zipcode && errors.zipcode && <span className="userForm__error">{errors.zipcode}</span>}
								<Field
									className='userForm__input'
									name='zipcode'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.zipcode}
									disabled={props.editMode}
								/>

								<label htmlFor="phone" className="userForm__label">Phone</label>
								{touched.phone && errors.phone && <span className="userForm__error">{errors.phone}</span>}
								<Field
									className='userForm__input'
									name='phone'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.phone}
									disabled={props.editMode}
								/>

								<label htmlFor="website" className="userForm__label">Website</label>
								{touched.website && errors.website && <span className="userForm__error">{errors.website}</span>}
								<Field
									className='userForm__input'
									name='website'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.website}
									disabled={props.editMode}
								/>

								<label htmlFor="comment" className="userForm__label">Comment</label>
								{touched.comment && errors.comment && <span className="userForm__error">{errors.comment}</span>}
								<Field
									className='userForm__input userForm__input_comment '
									as='textarea'
									rows='6'
									name='comment'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.comment}
									disabled={props.editMode}
								/>
							</FlexContainer>
							</div>
						<Button
							type="submit"
							disabled={!props.editMode ? !isValid && !dirty : props.editMode}
							self='flex-end'
							large
							green
							margin='10px 0'
							>Отправить</Button>
					</FlexContainer>
				</Form>
			)}
		</Formik>
	);
}

export default UserForm;