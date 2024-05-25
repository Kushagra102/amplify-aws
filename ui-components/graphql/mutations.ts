/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAnnouncement = /* GraphQL */ `
  mutation CreateAnnouncement(
    $condition: ModelAnnouncementConditionInput
    $input: CreateAnnouncementInput!
  ) {
    createAnnouncement(condition: $condition, input: $input) {
      announcementId
      community {
        banner
        createdAt
        description
        id
        name
        owner
        updatedAt
        __typename
      }
      communityId
      content
      createdAt
      id
      likeCount
      owner
      tags
      title
      updatedAt
      __typename
    }
  }
`;
export const createCommunity = /* GraphQL */ `
  mutation CreateCommunity(
    $condition: ModelCommunityConditionInput
    $input: CreateCommunityInput!
  ) {
    createCommunity(condition: $condition, input: $input) {
      announcements {
        nextToken
        __typename
      }
      banner
      createdAt
      description
      id
      name
      owner
      updatedAt
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $condition: ModelUserConditionInput
    $input: CreateUserInput!
  ) {
    createUser(condition: $condition, input: $input) {
      createdAt
      email
      id
      owner
      updatedAt
      username
      __typename
    }
  }
`;
export const deleteAnnouncement = /* GraphQL */ `
  mutation DeleteAnnouncement(
    $condition: ModelAnnouncementConditionInput
    $input: DeleteAnnouncementInput!
  ) {
    deleteAnnouncement(condition: $condition, input: $input) {
      announcementId
      community {
        banner
        createdAt
        description
        id
        name
        owner
        updatedAt
        __typename
      }
      communityId
      content
      createdAt
      id
      likeCount
      owner
      tags
      title
      updatedAt
      __typename
    }
  }
`;
export const deleteCommunity = /* GraphQL */ `
  mutation DeleteCommunity(
    $condition: ModelCommunityConditionInput
    $input: DeleteCommunityInput!
  ) {
    deleteCommunity(condition: $condition, input: $input) {
      announcements {
        nextToken
        __typename
      }
      banner
      createdAt
      description
      id
      name
      owner
      updatedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $condition: ModelUserConditionInput
    $input: DeleteUserInput!
  ) {
    deleteUser(condition: $condition, input: $input) {
      createdAt
      email
      id
      owner
      updatedAt
      username
      __typename
    }
  }
`;
export const updateAnnouncement = /* GraphQL */ `
  mutation UpdateAnnouncement(
    $condition: ModelAnnouncementConditionInput
    $input: UpdateAnnouncementInput!
  ) {
    updateAnnouncement(condition: $condition, input: $input) {
      announcementId
      community {
        banner
        createdAt
        description
        id
        name
        owner
        updatedAt
        __typename
      }
      communityId
      content
      createdAt
      id
      likeCount
      owner
      tags
      title
      updatedAt
      __typename
    }
  }
`;
export const updateCommunity = /* GraphQL */ `
  mutation UpdateCommunity(
    $condition: ModelCommunityConditionInput
    $input: UpdateCommunityInput!
  ) {
    updateCommunity(condition: $condition, input: $input) {
      announcements {
        nextToken
        __typename
      }
      banner
      createdAt
      description
      id
      name
      owner
      updatedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $condition: ModelUserConditionInput
    $input: UpdateUserInput!
  ) {
    updateUser(condition: $condition, input: $input) {
      createdAt
      email
      id
      owner
      updatedAt
      username
      __typename
    }
  }
`;
