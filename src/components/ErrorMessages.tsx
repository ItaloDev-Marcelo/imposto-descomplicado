import type { FieldError } from 'react-hook-form'

type ErrorMessagesProps = {
    error?: FieldError
}

const ErrorMessages = ({error}:ErrorMessagesProps) => {
    if(!error) return null
    return <span>{error.message}</span>
}

export default ErrorMessages