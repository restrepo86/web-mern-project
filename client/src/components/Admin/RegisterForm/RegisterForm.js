import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './RegisterForm.scss';
import FormItem from 'antd/lib/form/FormItem';

export default function RegisterForm() {

    const [inputValuesForm, setInputValuesForm] = useState({
        email: '',
        password: '',
        repeatPassword: '',
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

    const registerForm = () => {
        console.log(inputValuesForm);
    };

    return (
        <Form className='register-form' onFinish={registerForm} onChange = { changeForm }>
            <Form.Item>
                <Input
                    prefix={<UserOutlined style={{ fontSize: '16px', color: 'rgba(0,0,0,.25)' }} />}
                    type='email'
                    name='email'
                    placeholder='Correo electronico'
                    className='register-form__input'
                    value={ inputValuesForm.email }
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
                />
            </Form.Item>
            <FormItem>
                <Checkbox
                    name='privacyPolicy'
                    checked={ inputValuesForm.privacyPolicy }
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