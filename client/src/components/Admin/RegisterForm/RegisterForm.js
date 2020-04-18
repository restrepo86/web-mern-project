import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { emailValidation, minLengthValidation } from '../../../utils/formValidation';

import './RegisterForm.scss';
import FormItem from 'antd/lib/form/FormItem';
import { signUpApi } from '../../../api/user';

export default function RegisterForm() {

    const [inputValuesForm, setInputValuesForm] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
        repeatPassword: '',
        privacyPolicy: false
    });

    const [formValid, setFormValid] = useState({
        email: false,
        password: false,
        repeatPassword: false,
        privacyPolicy: false
    });

    const changeForm = e => {

        if (e.target.name === 'privacyPolicy') {
            setInputValuesForm({
                ...inputValuesForm,
                [e.target.name]: e.target.checked
            });
        } else {
            setInputValuesForm({
                ...inputValuesForm,
                [e.target.name]: e.target.value
            });
        }

    };

    const formValidation = e => {
        const { type, name } = e.target;
        if (type === 'email') {
            setFormValid({
                ...formValid,
                [name]: emailValidation(e.target)
            });
        }

        if (type === 'password') {
            setFormValid({
                ...formValid,
                [name]: minLengthValidation(e.target, 6)
            });
        }

        if (type === 'checkbox') {
            setFormValid({
                ...formValid,
                [name]: e.target.checked
            });
        }
    };

    const registerForm = async() => {

        const passwordValue = inputValuesForm.password;
        const repeatPasswordValue = inputValuesForm.repeatPassword;

        if (!inputValuesForm.email || !passwordValue || !repeatPasswordValue || !inputValuesForm.privacyPolicy) {
            notification['error']({
                message: 'Todos los campos son obligatorios'
            });
        } else {
            if(passwordValue !== repeatPasswordValue) {
                notification['error']({
                    message: 'Las constraseñas tienen que ser iguales.'
                });
            } else {
                const result = await signUpApi(inputValuesForm);
                if (!result.ok) {
                    notification['error']({
                        message: result.message
                    });
                } else {
                    notification['success']({
                        message: result.message
                    });
                    resetForm();
                }
                
            }
        }
    };

    const resetForm = () => {
        const inputValues = document.getElementsByTagName('input');

        for (let index = 0; index < inputValues.length; index++) {
            inputValues[index].classList.remove('success');
            inputValues[index].classList.remove('error');
            
        }

        setInputValuesForm({
            name: '',
            lastName: '',
            email: '',
            password: '',
            repeatPassword: '',
            privacyPolicy: false
        });

        setFormValid({
            email: false,
            password: false,
            repeatPassword: false,
            privacyPolicy: false
        });
    };

    return (
        <Form className='register-form' onFinish={registerForm} onChange = { changeForm }>
            <Form.Item>
                <Input
                    prefix={<UserOutlined style={{ fontSize: '16px', color: 'rgba(0,0,0,.25)' }} />}
                    type='text'
                    name='name'
                    placeholder='Nombre'
                    className='register-form__input'
                    value={ inputValuesForm.name }
                    onChange={ formValidation }
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<UserOutlined style={{ fontSize: '16px', color: 'rgba(0,0,0,.25)' }} />}
                    type='text'
                    name='lastName'
                    placeholder='Apellidos'
                    className='register-form__input'
                    value={ inputValuesForm.lastName }
                    onChange={ formValidation }
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<UserOutlined style={{ fontSize: '16px', color: 'rgba(0,0,0,.25)' }} />}
                    type='email'
                    name='email'
                    placeholder='Correo electronico'
                    className='register-form__input'
                    value={ inputValuesForm.email }
                    onChange={ formValidation }
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<LockOutlined style={{ fontSize: '16px', color: 'rgba(0,0,0,.25)' }} />}
                    type='password'
                    name='password'
                    placeholder='Contraseña'
                    className='register-form__input'
                    value = { inputValuesForm.password }
                    onChange={ formValidation }
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<LockOutlined style={{ fontSize: '16px', color: 'rgba(0,0,0,.25)' }} />}
                    type='password'
                    name='repeatPassword'
                    placeholder='Repetir Contraseña'
                    className='register-form__input'
                    value={ inputValuesForm.repeatPassword }
                    onChange={ formValidation }
                />
            </Form.Item>
            <FormItem>
                <Checkbox
                    name='privacyPolicy'
                    checked={ inputValuesForm.privacyPolicy }
                    onChange={ formValidation }
                >
                    He leído y acepto la política de privacidad.
                </Checkbox>
            </FormItem>
            <FormItem>
                <Button htmlType='submit' className='register-form__button'>
                    Crear Cuenta
                </Button>
            </FormItem>
        </Form>
    );
}