import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CommunityCreateFormInputValues = {
    name?: string;
    description?: string;
    banner?: File | string | null;
};
export declare type CommunityCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    banner?: ValidationFunction<File | string | null>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CommunityCreateFormOverridesProps = {
    CommunityCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    banner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CommunityCreateFormProps = React.PropsWithChildren<{
    overrides?: CommunityCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CommunityCreateFormInputValues) => CommunityCreateFormInputValues;
    onSuccess?: (fields: CommunityCreateFormInputValues) => void;
    onError?: (fields: CommunityCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CommunityCreateFormInputValues) => CommunityCreateFormInputValues;
    onValidate?: CommunityCreateFormValidationValues;
} & React.CSSProperties>;
export default function CommunityCreateForm(props: CommunityCreateFormProps): React.ReactElement;
