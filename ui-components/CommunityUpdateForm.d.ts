import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Community } from "./graphql/types";
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
export declare type CommunityUpdateFormInputValues = {
    name?: string;
    description?: string;
    banner?: string;
};
export declare type CommunityUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    banner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CommunityUpdateFormOverridesProps = {
    CommunityUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    banner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CommunityUpdateFormProps = React.PropsWithChildren<{
    overrides?: CommunityUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    community?: Community;
    onSubmit?: (fields: CommunityUpdateFormInputValues) => CommunityUpdateFormInputValues;
    onSuccess?: (fields: CommunityUpdateFormInputValues) => void;
    onError?: (fields: CommunityUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CommunityUpdateFormInputValues) => CommunityUpdateFormInputValues;
    onValidate?: CommunityUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CommunityUpdateForm(props: CommunityUpdateFormProps): React.ReactElement;
