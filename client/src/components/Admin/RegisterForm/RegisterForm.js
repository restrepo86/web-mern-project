import React from 'react';
import { Form, Input, Button, Checkbox, notification } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import './RegisterForm.scss';
import FormItem from 'antd/lib/form/FormItem';

export default function RegisterForm() {
    return (
        <Form className='register-form'>
            <Form.Item>
                <Input 
                    prefix={ <UserOutlined style = {{ color:'rgba(0,0,0,.25)'}}/> }
                    type='email'
                    name='email'
                    placeholder='Correo electronico'
                    className='register-form__input'
                />
            </Form.Item>
            <Form.Item>
                <Input 
                    prefix={ <UserOutlined style = {{ color:'rgba(0,0,0,.25)'}}/> }
                    type='password'
                    name='password'
                    placeholder='Contraseña'
                    className='register-form__input'
                />
            </Form.Item>
            <Form.Item>
                <Input 
                    prefix={ <UserOutlined style = {{ color:'rgba(0,0,0,.25)'}}/> }
                    type='password'
                    name='repeatPassword'
                    placeholder='Repetir Contraseña'
                    className='register-form__input'
                />
            </Form.Item>
            <FormItem>
                <Checkbox
                    name='privacyPolicy'
                >
                    He leído y acepto la política de privacidad.
                </Checkbox>
            </FormItem>
            <FormItem>
                <Button htmlType='submit' className='register-form_buton'>
                    Crear Cuenta
                </Button>
            </FormItem>
        </Form>
    );
}