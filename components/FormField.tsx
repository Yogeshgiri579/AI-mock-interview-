import { Input } from './ui/input'
import { Controller, FieldValues, Control, Path } from 'react-hook-form';
import { FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';

interface FormFieldProps<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
    label: string;
    placeholder: string;
    type?: 'text'|'email'|'password' | 'file'
}

const FormField = <T extends FieldValues> ({control,name, label, placeholder,type ="text"}:FormFieldProps<T>) => (
    <Controller
        control={control}
        name={name}
        render={({ field }) => (
            <FormItem>
                <FormLabel className="label">{label}</FormLabel>
                <FormControl>
                    <Input className='input' placeholder={placeholder} type={type} {...field} />
                </FormControl>
               
                <FormMessage />
            </FormItem>
        )}
    />
);

export default FormField