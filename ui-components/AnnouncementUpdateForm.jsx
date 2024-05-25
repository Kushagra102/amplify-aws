/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getAnnouncement } from "./graphql/queries";
import { updateAnnouncement } from "./graphql/mutations";
const client = generateClient();
export default function AnnouncementUpdateForm(props) {
  const {
    id: idProp,
    announcement: announcementModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    announcementId: "",
    title: "",
    content: "",
    likeCount: "",
    tags: "",
  };
  const [announcementId, setAnnouncementId] = React.useState(
    initialValues.announcementId
  );
  const [title, setTitle] = React.useState(initialValues.title);
  const [content, setContent] = React.useState(initialValues.content);
  const [likeCount, setLikeCount] = React.useState(initialValues.likeCount);
  const [tags, setTags] = React.useState(initialValues.tags);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = announcementRecord
      ? { ...initialValues, ...announcementRecord }
      : initialValues;
    setAnnouncementId(cleanValues.announcementId);
    setTitle(cleanValues.title);
    setContent(cleanValues.content);
    setLikeCount(cleanValues.likeCount);
    setTags(cleanValues.tags);
    setErrors({});
  };
  const [announcementRecord, setAnnouncementRecord] = React.useState(
    announcementModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getAnnouncement.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getAnnouncement
        : announcementModelProp;
      setAnnouncementRecord(record);
    };
    queryData();
  }, [idProp, announcementModelProp]);
  React.useEffect(resetStateValues, [announcementRecord]);
  const validations = {
    announcementId: [],
    title: [],
    content: [],
    likeCount: [],
    tags: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          announcementId: announcementId ?? null,
          title: title ?? null,
          content: content ?? null,
          likeCount: likeCount ?? null,
          tags: tags ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateAnnouncement.replaceAll("__typename", ""),
            variables: {
              input: {
                id: announcementRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "AnnouncementUpdateForm")}
      {...rest}
    >
      <TextField
        label="Announcement id"
        isRequired={false}
        isReadOnly={false}
        value={announcementId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              announcementId: value,
              title,
              content,
              likeCount,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.announcementId ?? value;
          }
          if (errors.announcementId?.hasError) {
            runValidationTasks("announcementId", value);
          }
          setAnnouncementId(value);
        }}
        onBlur={() => runValidationTasks("announcementId", announcementId)}
        errorMessage={errors.announcementId?.errorMessage}
        hasError={errors.announcementId?.hasError}
        {...getOverrideProps(overrides, "announcementId")}
      ></TextField>
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              announcementId,
              title: value,
              content,
              likeCount,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Content"
        isRequired={false}
        isReadOnly={false}
        value={content}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              announcementId,
              title,
              content: value,
              likeCount,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.content ?? value;
          }
          if (errors.content?.hasError) {
            runValidationTasks("content", value);
          }
          setContent(value);
        }}
        onBlur={() => runValidationTasks("content", content)}
        errorMessage={errors.content?.errorMessage}
        hasError={errors.content?.hasError}
        {...getOverrideProps(overrides, "content")}
      ></TextField>
      <TextField
        label="Like count"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={likeCount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              announcementId,
              title,
              content,
              likeCount: value,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.likeCount ?? value;
          }
          if (errors.likeCount?.hasError) {
            runValidationTasks("likeCount", value);
          }
          setLikeCount(value);
        }}
        onBlur={() => runValidationTasks("likeCount", likeCount)}
        errorMessage={errors.likeCount?.errorMessage}
        hasError={errors.likeCount?.hasError}
        {...getOverrideProps(overrides, "likeCount")}
      ></TextField>
      <TextField
        label="Tags"
        isRequired={false}
        isReadOnly={false}
        value={tags}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              announcementId,
              title,
              content,
              likeCount,
              tags: value,
            };
            const result = onChange(modelFields);
            value = result?.tags ?? value;
          }
          if (errors.tags?.hasError) {
            runValidationTasks("tags", value);
          }
          setTags(value);
        }}
        onBlur={() => runValidationTasks("tags", tags)}
        errorMessage={errors.tags?.errorMessage}
        hasError={errors.tags?.hasError}
        {...getOverrideProps(overrides, "tags")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || announcementModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || announcementModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
