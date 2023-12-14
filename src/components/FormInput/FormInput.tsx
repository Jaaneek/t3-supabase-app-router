import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

export type FormInputProps = {
  label?: string;
  description?: string;
  children: React.ReactNode;
};

export const FormInput = ({ label, description, children }: FormInputProps) => (
  <FormItem>
    {label && <FormLabel>{label}</FormLabel>}
    <FormControl>{children}</FormControl>
    {description && <FormDescription>{description}</FormDescription>}

    <FormMessage />
  </FormItem>
);
