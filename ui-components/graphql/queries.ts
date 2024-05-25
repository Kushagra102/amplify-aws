/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAnnouncement = /* GraphQL */ `
  query GetAnnouncement($id: ID!) {
    getAnnouncement(id: $id) {
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
export const getCommunity = /* GraphQL */ `
  query GetCommunity($id: ID!) {
    getCommunity(id: $id) {
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
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listAnnouncements = /* GraphQL */ `
  query ListAnnouncements(
    $filter: ModelAnnouncementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnnouncements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        announcementId
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
      nextToken
      __typename
    }
  }
`;
export const listCommunities = /* GraphQL */ `
  query ListCommunities(
    $filter: ModelCommunityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommunities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        banner
        createdAt
        description
        id
        name
        owner
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        email
        id
        owner
        updatedAt
        username
        __typename
      }
      nextToken
      __typename
    }
  }
`;
