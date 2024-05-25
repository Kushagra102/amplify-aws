/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAnnouncement = /* GraphQL */ `
  subscription OnCreateAnnouncement(
    $filter: ModelSubscriptionAnnouncementFilterInput
    $owner: String
  ) {
    onCreateAnnouncement(filter: $filter, owner: $owner) {
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
export const onCreateCommunity = /* GraphQL */ `
  subscription OnCreateCommunity(
    $filter: ModelSubscriptionCommunityFilterInput
    $owner: String
  ) {
    onCreateCommunity(filter: $filter, owner: $owner) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onDeleteAnnouncement = /* GraphQL */ `
  subscription OnDeleteAnnouncement(
    $filter: ModelSubscriptionAnnouncementFilterInput
    $owner: String
  ) {
    onDeleteAnnouncement(filter: $filter, owner: $owner) {
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
export const onDeleteCommunity = /* GraphQL */ `
  subscription OnDeleteCommunity(
    $filter: ModelSubscriptionCommunityFilterInput
    $owner: String
  ) {
    onDeleteCommunity(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
export const onUpdateAnnouncement = /* GraphQL */ `
  subscription OnUpdateAnnouncement(
    $filter: ModelSubscriptionAnnouncementFilterInput
    $owner: String
  ) {
    onUpdateAnnouncement(filter: $filter, owner: $owner) {
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
export const onUpdateCommunity = /* GraphQL */ `
  subscription OnUpdateCommunity(
    $filter: ModelSubscriptionCommunityFilterInput
    $owner: String
  ) {
    onUpdateCommunity(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
