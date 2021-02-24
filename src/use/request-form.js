import { useField, useForm } from "vee-validate"
import * as yup from "yup"

export default function useRequest(){
    const {isSubmitting, handleSubmit} = useForm()
    const {value: fio, errorMessage: fError, handleBlur: fBlur} = useField('fio', yup.string().trim().required('Введите фио клиента'))
    const {value: phone, errorMessage: pError, handleBlur: pBlur} = useField('phone',  yup.string().trim().required('Телефон не может быть пустым'))
    const {value: amount, errorMessage: aError, handleBlur: aBlur} = useField('amount',  yup.number().required('Введите сумму').min(0, 'Сумма не может быть меньше меньше 0'))
    const {value: status} = useField('status', )
    
    const onSubmit = handleSubmit(async() => {

    })

    return {
        status,
        isSubmitting,
        fio,
        phone,
        amount,
        fError,
        pError,
        aError,
        fBlur,
        pBlur,
        aBlur
    }
}