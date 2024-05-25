import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Announcement } from "./graphql/types";
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
export declare type AnnouncementUpdateFormInputValues = {
    announcementId?: string;
    title?: string;
    content?: string;
    likeCount?: number;
    tags?: string;
};
export declare type AnnouncementUpdateFormValidationValues = {
    announcementId?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
    likeCount?: ValidationFunction<number>;
    tags?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AnnouncementUpdateFormOverridesProps = {
    AnnouncementUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    announcementId?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    likeCount?: PrimitiveOverrideProps<TextFieldProps>;
    tags?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AnnouncementUpdateFormProps = React.PropsWithChildren<{
    overrides?: AnnouncementUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    announcement?: Announcement;
    onSubmit?: (fields: AnnouncementUpdateFormInputValues) => AnnouncementUpdateFormInputValues;
    onSuccess?: (fields: AnnouncementUpdateFormInputValues) => void;
    onError?: (fields: AnnouncementUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AnnouncementUpdateFormInputValues) => AnnouncementUpdateFormInputValues;
    onValidate?: AnnouncementUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AnnouncementUpdateForm(props: AnnouncementUpdateFormProps): React.ReactElement;
