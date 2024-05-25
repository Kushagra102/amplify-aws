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
export declare type AnnouncementCreateFormInputValues = {
    announcementId?: string;
    title?: string;
    content?: string;
    likeCount?: number;
    tags?: string;
};
export declare type AnnouncementCreateFormValidationValues = {
    announcementId?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
    likeCount?: ValidationFunction<number>;
    tags?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AnnouncementCreateFormOverridesProps = {
    AnnouncementCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    announcementId?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    likeCount?: PrimitiveOverrideProps<TextFieldProps>;
    tags?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AnnouncementCreateFormProps = React.PropsWithChildren<{
    overrides?: AnnouncementCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AnnouncementCreateFormInputValues) => AnnouncementCreateFormInputValues;
    onSuccess?: (fields: AnnouncementCreateFormInputValues) => void;
    onError?: (fields: AnnouncementCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AnnouncementCreateFormInputValues) => AnnouncementCreateFormInputValues;
    onValidate?: AnnouncementCreateFormValidationValues;
} & React.CSSProperties>;
export default function AnnouncementCreateForm(props: AnnouncementCreateFormProps): React.ReactElement;
